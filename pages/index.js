import Link from "next/link";
import SEO from "../components/SEO";
import CodeBlock from "../components/CodeBlock";
import { Icon } from "../components/Icons";

const learn = [
  ["terminal", "Les fondamentaux", "Comprendre les trois états de Git, les commits et l'historique."],
  ["book", "Un workflow propre", "Travailler avec des branches courtes et des commits utiles."],
  ["github", "La collaboration", "Synchroniser GitHub, ouvrir des Pull Requests et faire des reviews."],
  ["flask", "La pratique", "Résoudre 10 labs guidés avant un projet final en autonomie."]
];

const path = [
  ["01", "Comprendre", "20 chapitres progressifs avec schémas et exemples concrets."],
  ["02", "Mémoriser", "Une bibliothèque filtrable des commandes indispensables."],
  ["03", "Pratiquer", "Des labs avec terminal simulé et feedback immédiat."],
  ["04", "Maîtriser", "Un projet final complet proche d'un vrai workflow d'équipe."]
];

export default function Home() {
  return (
    <>
      <SEO title="Apprendre Git et GitHub par la pratique" description="Une plateforme interactive en français pour maîtriser Git, GitHub, les branches, les conflits et les Pull Requests." />

      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-content container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Parcours interactif · Gratuit</div>
            <h1>Maîtrisez Git.<br /><span>Collaborez sans limite.</span></h1>
            <p>De votre premier commit à votre première Pull Request, progressez avec un parcours clair, des commandes expliquées et des labs proches du terrain.</p>
            <div className="hero-actions">
              <Link href="/cours" className="button primary">Commencer le cours <Icon name="arrow" size={17} /></Link>
              <Link href="/commandes" className="button secondary"><Icon name="terminal" size={17} /> Voir les commandes</Link>
              <Link href="/labs" className="text-link">Accéder aux labs <span>→</span></Link>
            </div>
            <div className="hero-stats">
              <div><strong>20</strong><span>chapitres</span></div>
              <div><strong>25+</strong><span>commandes</span></div>
              <div><strong>10</strong><span>labs corrigés</span></div>
            </div>
          </div>
          <div className="hero-terminal">
            <div className="floating-label label-one">✓ Branche créée</div>
            <CodeBlock
              label="portfolio — zsh"
              code={"$ git init\nInitialized empty Git repository\n\n$ git switch -c feature/hero\nSwitched to a new branch\n\n$ git add .\n$ git commit -m \"feat: add hero section\"\n[feature/hero a84d2f1] feat: add hero section\n 3 files changed, 82 insertions(+)\n\n$ git push -u origin feature/hero\n✓ Branch published successfully"}
            />
            <div className="floating-label label-two"><span>●</span> Prêt pour la PR</div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="kicker">COMPÉTENCES</span>
          <h2>Ce que vous allez apprendre</h2>
          <p>Pas seulement des commandes à retenir : une méthode de travail fiable que vous pourrez utiliser sur tous vos projets.</p>
        </div>
        <div className="feature-grid">
          {learn.map(([icon, title, text], index) => (
            <article className="feature-card" key={title}>
              <div className={`feature-icon color-${index}`}><Icon name={icon} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="card-number">0{index + 1}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section path-section">
        <div className="container">
          <div className="section-heading left">
            <span className="kicker">PARCOURS PÉDAGOGIQUE</span>
            <h2>Une progression pensée pour durer</h2>
          </div>
          <div className="learning-path">
            {path.map(([number, title, text], index) => (
              <article key={title}>
                <div className="path-number">{number}</div>
                <div>
                  <span className="path-time">{["~ 3 heures", "À tout moment", "~ 2 heures", "Projet complet"][index]}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section container">
        <div>
          <span className="kicker">PRÊT À COMMENCER ?</span>
          <h2>Votre prochain commit commence ici.</h2>
          <p>Aucune connaissance préalable nécessaire. Ouvrez le premier chapitre et avancez à votre rythme.</p>
        </div>
        <Link href="/cours" className="button primary">Lancer le parcours <Icon name="arrow" size={17} /></Link>
      </section>
    </>
  );
}
