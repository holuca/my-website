import { useEffect, useMemo, useRef, useState } from "react";
import Menu from "../Menu/Menu";
import "./Header.css";
import { useTheme } from "../../hooks/useTheme";

export default function Header() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const {theme, toggleTheme} = useTheme();

  const canHover = useMemo(() => {
    return (
      window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches ?? false
    );
  }, []);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (rootRef.current && !rootRef.current.contains(target)) {
        setOpen(false);
      }
    }
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <header className="header">
      <div
        className="header-left"
        ref={rootRef}
        style={{ position: "relative" }}
        onMouseEnter={canHover ? () => setOpen(true) : undefined}
        onMouseLeave={canHover ? () => setOpen(false) : undefined}
      >
        <button
          className="icon-btn"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menuIcon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <Menu open={open} onClose={() => setOpen(false)} />
      </div>

      <div className="header-right">
        <button className="icon-btn" aria-label="Toggle theme" onClick={toggleTheme}>
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

      </div>
    </header>
  );
}
