import { useEffect, useMemo, useState } from "react";
import SEO from "../components/SEO";
import Dropdown from "../components/Dropdown";
import CodeBlock from "../components/CodeBlock";
import ProgressBar from "../components/ProgressBar";
import { chapters } from "../utils/gitData";

export default function Cours() {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    setCompleted(JSON.parse(localStorage.getItem("completed-chapters") || "[]"));
  }, []);

  const toggle = (id) => {
    const next = completed.includes(id) ? completed.filter((item) => item !== id) : [...completed, id];
    setCompleted(next);
    localStorage.setItem("completed-chapters", JSON.stringify(next));
  };

  const progress = useMemo(() => (completed.length / chapters.length) * 100, [completed]);

  return (
    <>
      <SEO title="Cours Git complet" description="20 chapitres détaillés pour comprendre Git et GitHub, du premier dépôt au workflow professionnel." path="/cours" />
      <div className="page-hero compact">
        <div className="container">
          <span className="kicker">PARCOURS COMPLET</span>
          <h1>Le cours Git & GitHub</h1>
          <p>20 chapitres progressifs, des schémas visuels et des commandes prêtes à tester.</p>
        </div>
      </div>
      <div className="content-layout container">
        <aside className="sidebar">
          <div className="sidebar-sticky">
            <h3>Votre progression</h3>
            <ProgressBar value={progress} label={`${completed.length} / ${chapters.length} chapitres`} />
            <nav>
              {chapters.map((chapter) => (
                <a href={`#chapter-${chapter.id}`} key={chapter.id} className={completed.includes(chapter.id) ? "done" : ""}>
                  <span>{completed.includes(chapter.id) ? "✓" : chapter.id}</span>{chapter.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>
        <section className="content-main">
          <div className="content-intro">
            <div><h2>Chapitres</h2><p>Ouvrez un chapitre, pratiquez les commandes puis marquez-le comme terminé.</p></div>
            <span className="count-pill">{chapters.length} modules</span>
          </div>
          <div className="dropdown-list">
            {chapters.map((chapter) => (
              <Dropdown
                key={chapter.id}
                id={`chapter-${chapter.id}`}
                title={chapter.title}
                meta={String(chapter.id).padStart(2, "0")}
                badge={chapter.level}
                defaultOpen={chapter.id === 1}
              >
                <p className="chapter-summary">{chapter.summary}</p>
                <p>{chapter.details}</p>
                <div className="diagram-block">
                  <span>MODÈLE MENTAL</span>
                  <pre>{chapter.diagram}</pre>
                </div>
                <CodeBlock code={chapter.commands.map((item) => `$ ${item}`).join("\n")} />
                <div className="chapter-footer">
                  <span>Temps estimé : {chapter.duration}</span>
                  <button className={completed.includes(chapter.id) ? "complete-button completed" : "complete-button"} onClick={() => toggle(chapter.id)}>
                    {completed.includes(chapter.id) ? "✓ Chapitre terminé" : "Marquer comme terminé"}
                  </button>
                </div>
              </Dropdown>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
