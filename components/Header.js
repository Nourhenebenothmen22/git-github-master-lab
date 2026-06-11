import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GithubLogo, Icon } from "./Icons";
import { useTheme } from "./ThemeProvider";

const links = [
  ["/", "Accueil"],
  ["/cours", "Cours"],
  ["/commandes", "Commandes Git"],
  ["/guide-avance", "Guide avancé"],
  ["/labs", "Labs corrigés"],
  ["/lab-final", "Lab final"],
  ["/cheat-sheet", "Cheat Sheet"]
];

export default function Header() {
  const router = useRouter();
  const { theme, toggleTheme, mounted } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><GithubLogo size={24} /></span>
          <span className="brand-name">Git & GitHub <strong>Master Lab</strong></span>
        </Link>

        <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Navigation principale">
          {links.map(([href, label]) => (
            <Link
              href={href}
              key={href}
              className={router.pathname === href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"}
            title={theme === "dark" ? "Thème clair" : "Thème sombre"}
          >
            {mounted && <Icon name={theme === "dark" ? "sun" : "moon"} />}
          </button>
          <button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu">
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
