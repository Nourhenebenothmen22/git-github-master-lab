import Link from "next/link";
import SEO from "../components/SEO";
import CodeBlock from "../components/CodeBlock";
import Dropdown from "../components/Dropdown";
import {
  commonErrors,
  domains,
  githubProfessional,
  miniProjects,
  nextCourses,
  scenarios,
  theorySections
} from "../utils/advancedData";

const audit = [
  ["Déjà solide", "Identité visuelle cohérente, progression claire, cours de 20 chapitres, terminaux simulés, labs corrigés et projet final pertinent."],
  ["À renforcer", "Les explications restent parfois trop courtes pour construire un modèle mental ou diagnostiquer seul une situation réelle."],
  ["Priorité pédagogique", "Relier chaque notion à un contexte, un impact, une erreur fréquente, une décision et une pratique observable."],
  ["Nouvelle direction", "Un parcours continu : fondations → commandes → scénarios → GitHub Pro → projets → spécialisation IT."]
];

const nav = [
  ["#audit", "Audit"],
  ["#fondations", "Fondations"],
  ["#scenarios", "Scénarios"],
  ["#domaines", "Domaines IT"],
  ["#github-pro", "GitHub Pro"],
  ["#projets", "Mini-projets"],
  ["#erreurs", "Erreurs"],
  ["#apres", "Après le cours"]
];

export default function GuideAvance() {
  return (
    <>
      <SEO
        title="Guide avancé Git & GitHub"
        description="Théorie détaillée, scénarios réels, GitHub en entreprise, erreurs fréquentes, domaines IT et projets pratiques."
        path="/guide-avance"
      />

      <div className="page-hero advanced-hero">
        <div className="container">
          <span className="kicker">COMPRENDRE · DIAGNOSTIQUER · COLLABORER</span>
          <h1>Le guide avancé Git & GitHub</h1>
          <p>Des modèles mentaux simples, des situations de terrain et des pratiques professionnelles pour passer de la commande comprise au workflow maîtrisé.</p>
          <div className="advanced-hero-meta">
            <span><strong>12</strong> scénarios réels</span>
            <span><strong>13</strong> domaines IT</span>
            <span><strong>15</strong> erreurs expliquées</span>
            <span><strong>5</strong> mini-projets</span>
          </div>
        </div>
      </div>

      <nav className="advanced-nav" aria-label="Sommaire du guide">
        <div className="container">
          {nav.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
        </div>
      </nav>

      <div className="container advanced-page">
        <section id="audit" className="advanced-section">
          <div className="advanced-heading">
            <span className="kicker">AUDIT GLOBAL</span>
            <h2>Une excellente base, à approfondir</h2>
            <p>Le parcours existant est clair et attractif. La prochaine étape consiste à transformer les résumés en apprentissages transférables vers de vrais projets.</p>
          </div>
          <div className="audit-grid">
            {audit.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="recommendation-strip">
            <strong>Recommandation centrale</strong>
            <p>Avant chaque commande, répondre à quatre questions : dans quelle zone agit-elle, que modifie-t-elle, peut-on revenir en arrière et que verra l'équipe ?</p>
          </div>
        </section>

        <section id="fondations" className="advanced-section">
          <div className="advanced-heading">
            <span className="kicker">THÉORIE ESSENTIELLE</span>
            <h2>Construire le bon modèle mental</h2>
            <p>Un débutant progresse plus vite lorsqu'il comprend les objets et les flux avant de mémoriser la syntaxe.</p>
          </div>
          <div className="theory-grid">
            {theorySections.map((section) => (
              <article className="theory-card" key={section.id}>
                <span>{section.eyebrow}</span>
                <h3>{section.title}</h3>
                <p className="theory-lead">{section.lead}</p>
                <div className="theory-points">
                  {section.points.map(([title, text]) => (
                    <div key={title}><strong>{title}</strong><p>{text}</p></div>
                  ))}
                </div>
                <code>{section.model}</code>
              </article>
            ))}
          </div>
        </section>

        <section id="scenarios" className="advanced-section">
          <div className="advanced-heading">
            <span className="kicker">APPRENDRE PAR LE DIAGNOSTIC</span>
            <h2>12 scénarios réels et animables</h2>
            <p>Chaque histoire part d'un symptôme, explique sa cause et conduit vers une correction reproductible.</p>
          </div>
          <div className="dropdown-list advanced-dropdowns">
            {scenarios.map((scenario, index) => (
              <Dropdown
                key={scenario.title}
                title={scenario.title}
                meta={String(index + 1).padStart(2, "0")}
                badge={index < 5 ? "Débutant" : index < 9 ? "Intermédiaire" : "Avancé"}
              >
                <div className="scenario-grid">
                  <div><strong>Contexte réel</strong><p>{scenario.context}</p></div>
                  <div><strong>Pourquoi cela arrive</strong><p>{scenario.problem}</p></div>
                  <div><strong>Commandes</strong><p>{scenario.commands}</p></div>
                  <div><strong>Leçon</strong><p>{scenario.lesson}</p></div>
                </div>
                <ol className="resolution-steps">
                  {scenario.steps.map((step) => <li key={step}>{step}</li>)}
                </ol>
                <CodeBlock code={scenario.terminal} label="Terminal simulé" />
                <div className="scenario-footer">
                  <div><strong>Erreur fréquente</strong><p>{scenario.mistake}</p></div>
                  <div><strong>Correction professionnelle</strong><p>{scenario.correction}</p></div>
                  <div><strong>Idée d'animation</strong><p>{scenario.animation}</p></div>
                </div>
              </Dropdown>
            ))}
          </div>
        </section>

        <section id="domaines" className="advanced-section">
          <div className="advanced-heading">
            <span className="kicker">GIT DANS LES MÉTIERS IT</span>
            <h2>Un même outil, des workflows différents</h2>
            <p>Git reste le socle de traçabilité ; GitHub adapte la collaboration, l'automatisation et la livraison à chaque domaine.</p>
          </div>
          <div className="domain-grid">
            {domains.map(([name, role, example, workflow, commands]) => (
              <article key={name}>
                <h3>{name}</h3>
                <p>{role}</p>
                <dl>
                  <div><dt>Exemple</dt><dd>{example}</dd></div>
                  <div><dt>Workflow</dt><dd>{workflow}</dd></div>
                  <div><dt>Commandes</dt><dd>{commands}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section id="github-pro" className="advanced-section">
          <div className="advanced-heading">
            <span className="kicker">GITHUB EN ENTREPRISE</span>
            <h2>Du dépôt partagé à la gouvernance</h2>
            <p>Le workflow professionnel protège la branche principale, rend les décisions visibles et automatise les contrôles répétitifs.</p>
          </div>
          <div className="professional-list">
            {githubProfessional.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <div className="workflow-banner">
            <span>Workflow recommandé</span>
            <strong>Issue → branche courte → commits atomiques → Pull Request → CI → review → merge protégé → release</strong>
          </div>
        </section>

        <section id="projets" className="advanced-section">
          <div className="advanced-heading">
            <span className="kicker">MISE EN PRATIQUE</span>
            <h2>5 mini-projets progressifs</h2>
            <p>Chaque projet produit une preuve observable : dépôt, historique, Pull Request, release ou déploiement.</p>
          </div>
          <div className="project-grid">
            {miniProjects.map(([title, objective, commands, deliverables, success], index) => (
              <article key={title}>
                <span>PROJET {index + 1}</span>
                <h3>{title}</h3>
                <p>{objective}</p>
                <div><strong>Commandes</strong><p>{commands}</p></div>
                <div><strong>Livrables</strong><p>{deliverables}</p></div>
                <div><strong>Réussite</strong><p>{success}</p></div>
              </article>
            ))}
          </div>
          <div className="advanced-cta">
            <div><span className="kicker">VALIDER LE PARCOURS</span><h3>Prêt à construire le portfolio v1.0.0 ?</h3></div>
            <Link href="/lab-final" className="button primary">Ouvrir le projet final</Link>
          </div>
        </section>

        <section id="erreurs" className="advanced-section">
          <div className="advanced-heading">
            <span className="kicker">DÉPANNAGE</span>
            <h2>Les erreurs Git les plus fréquentes</h2>
            <p>Lire le message exact, protéger le travail local puis corriger la cause plutôt que masquer le symptôme.</p>
          </div>
          <div className="error-table">
            <div className="error-row error-head"><span>Message</span><span>Cause</span><span>Solution</span><span>Prévention pro</span></div>
            {commonErrors.map(([message, cause, solution, prevention]) => (
              <div className="error-row" key={message}>
                <code>{message}</code><p>{cause}</p><p>{solution}</p><p>{prevention}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="apres" className="advanced-section">
          <div className="advanced-heading">
            <span className="kicker">ET APRÈS GIT & GITHUB ?</span>
            <h2>Transformer l'outil en trajectoire IT</h2>
            <p>La suite logique dépend du type de projet que vous voulez construire, automatiser ou livrer.</p>
          </div>
          <div className="roadmap-list">
            {nextCourses.map(([title, why, prerequisites, project, link], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{why}</p>
                  <small>Prérequis : {prerequisites}</small>
                </div>
                <div>
                  <strong>Projet final</strong>
                  <p>{project}</p>
                  <small>{link}</small>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
