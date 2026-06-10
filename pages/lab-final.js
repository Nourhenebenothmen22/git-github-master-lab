import SEO from "../components/SEO";
import { Icon } from "../components/Icons";
import { finalLabSteps } from "../utils/gitData";

export default function LabFinal() {
  return (
    <>
      <SEO title="Lab final Git et GitHub" description="Réalisez un portfolio avec un workflow Git et GitHub complet, des branches au tag de release." path="/lab-final" />
      <div className="final-hero">
        <div className="container final-hero-grid">
          <div>
            <div className="eyebrow orange">PROJET DE VALIDATION · SANS CORRECTION</div>
            <h1>Construisez. Versionnez.<br /><span>Publiez.</span></h1>
            <p>Votre mission : créer un mini portfolio et piloter tout son cycle de développement avec un workflow Git & GitHub professionnel.</p>
            <div className="final-meta">
              <span><strong>13</strong> étapes</span>
              <span><strong>~2h</strong> estimées</span>
              <span><strong>Avancé</strong> niveau</span>
            </div>
          </div>
          <div className="mission-card">
            <span className="mission-label">MISSION</span>
            <div className="mission-icon"><Icon name="trophy" size={32} /></div>
            <h2>Portfolio v1.0.0</h2>
            <p>Un projet web publié sur GitHub, développé avec plusieurs branches et un historique propre.</p>
            <div className="mission-stack"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Git</span></div>
          </div>
        </div>
      </div>

      <div className="container final-page">
        <aside className="brief-card">
          <span className="kicker">BRIEF</span>
          <h2>Votre cahier des charges</h2>
          <p>Le portfolio doit présenter votre profil, vos compétences, trois projets et un moyen de contact. Le design doit être responsive et inclure une petite interaction JavaScript.</p>
          <div className="warning-box"><strong>Aucune correction fournie</strong><p>Ce lab valide votre autonomie. Appuyez-vous sur les cours et la Cheat Sheet, comme dans un vrai projet.</p></div>
          <h3>Critères de réussite</h3>
          <ul className="check-list">
            <li>Historique lisible et commits atomiques</li>
            <li>Branches correctement fusionnées</li>
            <li>README clair et projet documenté</li>
            <li>Dépôt GitHub public et tag v1.0.0</li>
            <li>Conflit résolu sans perte de contenu</li>
          </ul>
        </aside>
        <section className="steps-section">
          <div className="content-intro"><div><span className="kicker">FEUILLE DE ROUTE</span><h2>Les 13 étapes</h2></div></div>
          <div className="steps-list">
            {finalLabSteps.map(([title, description], index) => (
              <article key={title}>
                <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
                <div><h3>{title}</h3><p>{description}</p></div>
                <span className="step-check" aria-hidden="true" />
              </article>
            ))}
          </div>
          <div className="finish-card">
            <Icon name="trophy" size={34} />
            <div><span>OBJECTIF FINAL</span><h2>Un dépôt dont vous êtes fier.</h2><p>Quand les 13 étapes sont terminées, relisez l'historique et partagez l'URL de votre projet.</p></div>
          </div>
        </section>
      </div>
    </>
  );
}
