import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LocaleProvider } from "../i18n/LocaleContext.jsx";

const COLORS = [
  [79, 216, 196],
  [180, 140, 242],
  [255, 138, 61],
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { alpha: true });
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let running = false;
    let idleFrames = 0;
    let lastTime = performance.now();
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let visible = !document.hidden;
    let particles = [];
    let obstacles = [];
    let obstacleRefreshFrame = 0;

    const OBSTACLE_SELECTOR = [
      "h1", "h2", "h3", "p", "img", "video", "svg", ".btn",
      ".proj-card", ".case-meta-grid", ".timeline", ".secondary-list",
      ".skill-marquee-group", ".contact-grid", ".agent-flow",
      ".compare-grid", ".shots-wrap", ".demo-video-frame",
    ].join(",");

    const refreshObstacles = () => {
      obstacles = Array.from(document.querySelectorAll(".portfolio-content " + OBSTACLE_SELECTOR))
        .map((element) => {
          const rect = element.getBoundingClientRect();
          const padding = element.matches("p, h1, h2, h3") ? 16 : 22;
          return {
            left: rect.left - padding,
            right: rect.right + padding,
            top: rect.top + window.scrollY - padding,
            bottom: rect.bottom + window.scrollY + padding,
          };
        })
        .filter((rect) => rect.right > 0 && rect.left < width && rect.bottom > rect.top);
    };

    const scheduleObstacleRefresh = () => {
      cancelAnimationFrame(obstacleRefreshFrame);
      obstacleRefreshFrame = requestAnimationFrame(() => {
        refreshObstacles();
        start();
      });
    };

    const contentClearance = (x, y) => {
      let nearest = 72;
      const documentY = y + window.scrollY;
      for (const obstacle of obstacles) {
        if (documentY < obstacle.top - 72 || documentY > obstacle.bottom + 72 || x < obstacle.left - 72 || x > obstacle.right + 72) continue;
        const dx = Math.max(obstacle.left - x, 0, x - obstacle.right);
        const dy = Math.max(obstacle.top - documentY, 0, documentY - obstacle.bottom);
        if (dx === 0 && dy === 0) return 0;
        nearest = Math.min(nearest, Math.hypot(dx, dy));
      }
      return Math.min(1, nearest / 72);
    };

    const pointer = {
      x: window.innerWidth * 0.68,
      y: window.innerHeight * 0.3,
      tx: window.innerWidth * 0.68,
      ty: window.innerHeight * 0.3,
      active: false,
      energy: 0,
    };

    const makeParticle = (index) => {
      const side = index % 2 === 0 ? -1 : 1;
      const halfWidth = width / 2;
      const contentHalfWidth = Math.min(480, halfWidth);
      const wingWidth = Math.max(0, halfWidth - contentHalfWidth);
      let anchorX = 0;
      let anchorY = 0;
      for (let attempt = 0; attempt < 8; attempt += 1) {
        const useWing = wingWidth >= 48 && Math.random() < 0.8;
        if (useWing) {
          const wingOffset = Math.random() * wingWidth;
          anchorX = side < 0 ? wingOffset : width - wingOffset;
        } else {
          const inwardOffset = Math.pow(Math.random(), 3) * contentHalfWidth;
          anchorX = side < 0
            ? wingWidth + inwardOffset
            : width - wingWidth - inwardOffset;
        }
        anchorY = Math.random() * height;
        if (Math.random() < contentClearance(anchorX, anchorY)) break;
      }

      return {
        x: anchorX,
        anchorX,
        y: anchorY,
        vx: 0,
        vy: 0,
        radius: 0.35 + Math.pow(Math.random(), 2.2) * 1.25,
        color: COLORS[index % COLORS.length],
        depth: 0.35 + Math.random() * 0.85,
      };
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, width < 720 ? 1.15 : 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      refreshObstacles();
      const count = width < 720 ? 38 : Math.min(82, Math.round(width / 20));
      particles = Array.from({ length: count }, (_, index) => makeParticle(index));
    };

    const glow = (x, y, radius, color, alpha) => {
      const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, `rgba(${color.join(",")},${alpha})`);
      gradient.addColorStop(0.3, `rgba(${color.join(",")},${alpha * 0.35})`);
      gradient.addColorStop(1, `rgba(${color.join(",")},0)`);
      context.fillStyle = gradient;
      context.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    };

    const render = (time) => {
      frame = 0;
      const dt = Math.min(32, time - lastTime || 16.7);
      lastTime = time;
      context.clearRect(0, 0, width, height);
      pointer.x += (pointer.tx - pointer.x) * 0.065;
      pointer.y += (pointer.ty - pointer.y) * 0.065;
      scrollVelocity *= 0.82;
      pointer.energy *= 0.8;

      context.globalCompositeOperation = "lighter";
      glow(
        width * 0.1,
        height * 0.72,
        Math.min(width, height) * 0.42,
        COLORS[1],
        0.035
      );
      glow(
        width * 0.9,
        height * 0.2,
        Math.min(width, height) * 0.36,
        COLORS[2],
        0.032
      );

      for (const particle of particles) {
        const dx = pointer.x - particle.x;
        const dy = pointer.y - particle.y;
        const distance = Math.hypot(dx, dy) || 1;
        const influence = pointer.active
          ? Math.max(0, 1 - distance / 280) * pointer.energy
          : 0;

        particle.vx += (dx / distance) * influence * 0.00065 * dt;
        particle.vy += (dy / distance) * influence * 0.0005 * dt;
        particle.vx += (particle.anchorX - particle.x) * 0.000025 * dt;
        const clearance = contentClearance(particle.x, particle.y);
        if (clearance < 0.8) {
          const sample = 12;
          const gradientX = contentClearance(particle.x + sample, particle.y) - contentClearance(particle.x - sample, particle.y);
          const gradientY = contentClearance(particle.x, particle.y + sample) - contentClearance(particle.x, particle.y - sample);
          particle.vx += gradientX * (1 - clearance) * 0.003 * dt;
          particle.vy += gradientY * (1 - clearance) * 0.003 * dt;
        }
        particle.vx *= 0.88;
        particle.vy *= 0.88;
        particle.x += particle.vx * dt * particle.depth;
        particle.y += (particle.vy + scrollVelocity * particle.depth) * dt;

        const margin = 30;
        if (particle.x < -margin) {
          particle.x = -margin;
          particle.vx = Math.abs(particle.vx) * 0.45;
        }
        if (particle.x > width + margin) {
          particle.x = width + margin;
          particle.vx = -Math.abs(particle.vx) * 0.45;
        }
        if (particle.y < -margin) particle.y = height + margin;
        if (particle.y > height + margin) particle.y = -margin;

        const edgeStrength = 0.35 + Math.min(1, Math.abs(particle.x - width / 2) / Math.max(1, width * 0.44)) * 0.65;
        const contentVisibility = clearance;
        if (contentVisibility < 0.04) continue;
        context.beginPath();
        context.fillStyle = "rgba(" + particle.color.join(",") + "," + ((0.48 + edgeStrength * 0.3) * contentVisibility) + ")";
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }

      context.globalCompositeOperation = "source-over";
      const stillMoving = Math.abs(scrollVelocity) > 0.01 || pointer.energy > 0.005 ||
        Math.abs(pointer.tx - pointer.x) + Math.abs(pointer.ty - pointer.y) > 0.3 ||
        particles.some((particle) => Math.abs(particle.vx) + Math.abs(particle.vy) > 0.001);
      idleFrames = stillMoving ? 0 : idleFrames + 1;
      if (visible && !reducedMotion.matches && (stillMoving || idleFrames < 2)) {
        frame = requestAnimationFrame(render);
      } else {
        running = false;
      }
    };

    const start = () => {
      if (running || !visible || reducedMotion.matches) return;
      running = true;
      idleFrames = 0;
      lastTime = performance.now();
      frame = requestAnimationFrame(render);
    };

    const onPointerMove = (event) => {
      pointer.tx = event.clientX;
      pointer.ty = event.clientY;
      pointer.active = true;
      pointer.energy = Math.min(1, Math.hypot(event.movementX, event.movementY) / 28);
      start();
    };
    const onPointerLeave = () => {
      pointer.active = false;
      pointer.energy = 0;
      pointer.tx = width * 0.68;
      pointer.ty = height * 0.3;
      start();
    };
    const onScroll = () => {
      const delta = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      scrollVelocity = Math.max(-5, Math.min(5, scrollVelocity + delta * 0.006));
      start();
    };
    const onResize = () => {
      resize();
      start();
    };
    const contentObserver = new MutationObserver(scheduleObstacleRefresh);
    const onContentLoad = () => scheduleObstacleRefresh();
    const onVisibility = () => {
      visible = !document.hidden;
      if (visible && !reducedMotion.matches) start();
      else {
        cancelAnimationFrame(frame);
        frame = 0;
        running = false;
      }
    };
    const onMotionChange = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      running = false;
      if (reducedMotion.matches) render(performance.now());
      else if (visible) start();
    };

    resize();
    const contentRoot = document.querySelector(".portfolio-content");
    if (contentRoot) contentObserver.observe(contentRoot, { childList: true, subtree: true });
    document.addEventListener("load", onContentLoad, true);
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    reducedMotion.addEventListener("change", onMotionChange);

    if (reducedMotion.matches) render(performance.now());
    else start();

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(obstacleRefreshFrame);
      contentObserver.disconnect();
      document.removeEventListener("load", onContentLoad, true);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="ambient-canvas" aria-hidden="true" />;
}

export default function PortfolioLayout() {
  return (
    <LocaleProvider>
      <div className="portfolio-root">
        <ScrollToTop />
        <InteractiveBackground />
        <div className="portfolio-content">
          <Outlet />
        </div>
      </div>
    </LocaleProvider>
  );
}
