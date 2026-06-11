import Link from "next/link";
import { GithubLogo } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark"><GithubLogo size={22} /></span>
            Git & GitHub Master Lab
          </div>
          <p>Apprenez Git en comprenant ce que vous faites, puis pratiquez jusqu'à ce que le workflow devienne naturel.</p>
        </div>
        <div>
          <h3>Explorer</h3>
          <Link href="/cours">Les 20 chapitres</Link>
          <Link href="/commandes">Commandes Git</Link>
          <Link href="/guide-avance">Guide avancé</Link>
          <Link href="/labs">Labs corrigés</Link>
        </div>
        <div>
          <h3>Pratiquer</h3>
          <Link href="/lab-final">Projet final</Link>
          <Link href="/cheat-sheet">Cheat Sheet</Link>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Git & GitHub Master Lab</span>
          <span>Conçu pour apprendre, pratiquer, maîtriser.</span>
        </div>
        <p className="footer-signature">
          Coding: <strong>Nourhen Ben Othmen</strong>
          <span aria-hidden="true"> — </span>
          In collaboration with <strong>Maram Ncib Design</strong>
        </p>
      </div>
    </footer>
  );
}
