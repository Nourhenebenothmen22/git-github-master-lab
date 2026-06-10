import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SEO from "../components/SEO";
import Dropdown from "../components/Dropdown";
import CodeBlock from "../components/CodeBlock";
import ProgressBar from "../components/ProgressBar";
import { labs } from "../utils/gitData";

function LabContent({ lab, isDone, onComplete }) {
  const [selected, setSelected] = useState("");
  const [solution, setSolution] = useState(false);

  const verify = () => {
    if (!selected) return toast.error("Choisissez une réponse avant de vérifier.");
    if (selected === lab.answer) {
      toast.success("Correct ! Lab validé.");
      onComplete(lab.id);
    } else {
      toast.error("Ce n'est pas encore ça. Relisez l'objectif et réessayez.");
    }
  };

  return (
    <div className="lab-content">
      <div className="objective"><strong>Objectif</strong><p>{lab.objective}</p></div>
      <CodeBlock code={lab.terminal} label={`lab-${String(lab.id).padStart(2, "0")} — terminal`} />
      <div className="quiz-box">
        <h3>{lab.prompt}</h3>
        <div className="quiz-options">
          {lab.options.map((option) => (
            <label key={option} className={selected === option ? "selected" : ""}>
              <input type="radio" name={`lab-${lab.id}`} value={option} checked={selected === option} onChange={() => setSelected(option)} />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="quiz-actions">
          <button className="button primary small" onClick={verify}>{isDone ? "✓ Validé" : "Vérifier ma réponse"}</button>
          <button className="button ghost small" onClick={() => setSolution(!solution)}>{solution ? "Masquer la solution" : "Voir la solution"}</button>
        </div>
      </div>
      {solution && <div className="solution-box"><strong>Correction</strong><p>{lab.solution}</p></div>}
    </div>
  );
}

export default function Labs() {
  const [completed, setCompleted] = useState([]);

  useEffect(() => setCompleted(JSON.parse(localStorage.getItem("completed-labs") || "[]")), []);

  const complete = (id) => {
    if (completed.includes(id)) return;
    const next = [...completed, id];
    setCompleted(next);
    localStorage.setItem("completed-labs", JSON.stringify(next));
  };

  return (
    <>
      <SEO title="Labs Git interactifs corrigés" description="10 exercices Git et GitHub avec terminal simulé, quiz, validation immédiate et solutions détaillées." path="/labs" />
      <div className="page-hero compact labs-hero">
        <div className="container two-column-title">
          <div><span className="kicker">APPRENDRE EN FAISANT</span><h1>Labs interactifs</h1><p>Testez vos réflexes dans un environnement guidé, sans risque pour vos projets.</p></div>
          <ProgressBar value={(completed.length / labs.length) * 100} label={`${completed.length} / ${labs.length} validés`} />
        </div>
      </div>
      <div className="container labs-page">
        <div className="content-intro">
          <div><h2>10 missions pratiques</h2><p>Chaque lab combine un scénario terminal et une question de compréhension.</p></div>
          <span className="count-pill">Feedback instantané</span>
        </div>
        <div className="dropdown-list">
          {labs.map((lab) => (
            <Dropdown key={lab.id} title={lab.title} meta={completed.includes(lab.id) ? "✓" : String(lab.id).padStart(2, "0")} badge={lab.level} defaultOpen={lab.id === 1}>
              <LabContent lab={lab} isDone={completed.includes(lab.id)} onComplete={complete} />
            </Dropdown>
          ))}
        </div>
      </div>
    </>
  );
}
