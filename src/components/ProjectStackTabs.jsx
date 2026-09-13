import { useEffect, useState } from "react";

const SHRINK_WINDOW = 900;
const MIN_SCALE = 0.86;

function fallbackActive() {
  return (
    window.matchMedia("(max-height: 700px)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

// .stack-head is itself sticky at `top: 58px` (pinned below the nav), while the
// cards' own `top` is measured from the real viewport edge — so the point the
// cards must stick at is the head's own sticky offset PLUS its rendered height,
// not just its height. Missing the offset made cards settle ~58px too high,
// overlapping into the tab bar instead of sitting flush beneath it.
function headStickTop(head) {
  return (parseFloat(getComputedStyle(head).top) || 0) + head.offsetHeight;
}

export function scrollToStackCard(index = 0) {
  const stage = document.querySelector(".project-stack-stage");
  const head = stage?.querySelector(".stack-head");
  const grid = stage?.querySelector(".proj-grid");
  const cards = stage?.querySelectorAll(".proj-grid > .proj-card-link, .proj-grid > .proj-card");
  const card = cards?.[index];
  if (!card || !head || !grid) return false;
  const stackTop = headStickTop(head);
  let cumulative = 0;
  for (let j = 0; j < index; j += 1) {
    cumulative += cards[j].offsetHeight + (parseFloat(getComputedStyle(cards[j]).marginBottom) || 0);
  }
  const gridDocTop = grid.getBoundingClientRect().top + window.scrollY;
  const y = gridDocTop + cumulative - stackTop;
  window.scrollTo({ top: y, behavior: "smooth" });
  return true;
}

export default function ProjectStackTabs({ stageRef, names }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;
    const head = stage.querySelector(".stack-head");
    const grid = stage.querySelector(".proj-grid");
    const cards = Array.from(stage.querySelectorAll(".proj-grid > .proj-card-link, .proj-grid > .proj-card"));
    if (!head || !grid || !cards.length) return undefined;

    const syncStackTop = () => {
      grid.style.setProperty("--stack-top", `${headStickTop(head)}px`);
    };

    let ticking = false;
    const update = () => {
      ticking = false;
      if (fallbackActive()) {
        cards.forEach((card) => { card.style.transform = ""; });
        return;
      }
      const stackTop = headStickTop(head);
      const peek = parseFloat(getComputedStyle(grid).getPropertyValue("--stack-peek")) || 0;
      const gridDocTop = grid.getBoundingClientRect().top + window.scrollY;

      let cumulative = 0;
      let next = 0;
      cards.forEach((card, i) => {
        const naturalDocTop = gridDocTop + cumulative;
        const arrivalScrollY = naturalDocTop - stackTop;
        const overshoot = Math.max(0, window.scrollY - arrivalScrollY);
        const scale = Math.max(MIN_SCALE, 1 - (overshoot / SHRINK_WINDOW) * (1 - MIN_SCALE));
        card.style.transform = `translateY(${i * peek}px) scale(${scale})`;
        if (overshoot > 0 || window.scrollY >= arrivalScrollY) next = i;
        cumulative += card.offsetHeight + (parseFloat(getComputedStyle(card).marginBottom) || 0);
      });
      setActive(next);
    };
    const onFrame = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    syncStackTop();
    update();

    const ro = new ResizeObserver(() => {
      syncStackTop();
      update();
    });
    ro.observe(head);
    window.addEventListener("scroll", onFrame, { passive: true });
    window.addEventListener("resize", onFrame);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onFrame);
      window.removeEventListener("resize", onFrame);
    };
  }, [stageRef]);

  return (
    <div className={`proj-tabs${active === names.length - 1 ? " is-final" : ""}`}>
      {names.map((name, i) => (
        <button
          key={name}
          type="button"
          className={`proj-tab${i === active ? " is-active" : ""}`}
          onClick={() => scrollToStackCard(i)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
