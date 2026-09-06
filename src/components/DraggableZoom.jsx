import { useCallback, useRef } from "react";

/**
 * Press-and-hold + drag to pan a zoomed-in view of the children; release and it
 * springs back to the original size/position. Built on Pointer Events (one code
 * path for mouse/touch/pen) and direct ref.style.transform writes during the
 * drag (no React re-render per pointermove) so it stays smooth across browsers.
 * The CSS transition (only enabled outside the drag) supplies the spring-back.
 */
export default function DraggableZoom({ children, zoom = 1.45, maxPan = 110 }) {
  const wrapRef = useRef(null);
  const panRef = useRef(null);
  const scaleRef = useRef(null);
  const dragging = useRef(false);
  const start = useRef({ x: 0, y: 0 });

  const applyTransform = useCallback((tx, ty, s) => {
    if (panRef.current) panRef.current.style.transform = `translate(${tx}px, ${ty}px)`;
    if (scaleRef.current) scaleRef.current.style.transform = `scale(${s})`;
  }, []);

  const onPointerDown = useCallback(
    (e) => {
      dragging.current = true;
      start.current = { x: e.clientX, y: e.clientY };
      wrapRef.current?.setPointerCapture(e.pointerId);
      wrapRef.current?.classList.add("dz-dragging");
      applyTransform(0, 0, zoom);
    },
    [applyTransform, zoom]
  );

  const onPointerMove = useCallback(
    (e) => {
      if (!dragging.current) return;
      const dx = Math.max(-maxPan, Math.min(maxPan, e.clientX - start.current.x));
      const dy = Math.max(-maxPan, Math.min(maxPan, e.clientY - start.current.y));
      applyTransform(dx, dy, zoom);
    },
    [applyTransform, zoom, maxPan]
  );

  const endDrag = useCallback(
    (e) => {
      if (!dragging.current) return;
      dragging.current = false;
      wrapRef.current?.classList.remove("dz-dragging");
      try {
        wrapRef.current?.releasePointerCapture(e.pointerId);
      } catch {
        /* pointer already released */
      }
      applyTransform(0, 0, 1);
    },
    [applyTransform]
  );

  return (
    <div
      ref={wrapRef}
      className="dz-wrap"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
    >
      <div ref={panRef} className="dz-pan">
        <div ref={scaleRef} className="dz-scale">
          {children}
        </div>
      </div>
    </div>
  );
}
