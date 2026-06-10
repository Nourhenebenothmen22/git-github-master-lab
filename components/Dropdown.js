import { useState } from "react";
import { Icon } from "./Icons";

export default function Dropdown({ title, meta, badge, defaultOpen = false, children, id }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article className={open ? "dropdown open" : "dropdown"} id={id}>
      <button className="dropdown-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="dropdown-index">{meta}</span>
        <span className="dropdown-title">
          <strong>{title}</strong>
          {badge && <span className={`badge ${badge.toLowerCase()}`}>{badge}</span>}
        </span>
        <span className="dropdown-chevron"><Icon name="arrow" /></span>
      </button>
      {open && <div className="dropdown-content">{children}</div>}
    </article>
  );
}
