import CodeBlock from "./CodeBlock";
import { commandDetails } from "../utils/advancedData";

export default function CommandCard({ item }) {
  const key = Object.keys(commandDetails).find((name) => item.command.startsWith(name));
  const details = key ? commandDetails[key] : null;

  return (
    <article className="command-card">
      <div className="command-name">{item.command}</div>
      <p>{item.description}</p>
      <CodeBlock code={item.example} label="Exemple" />
      {details && (
        <dl className="command-details">
          <div><dt>Rôle</dt><dd>{details[0]}</dd></div>
          <div><dt>Quand</dt><dd>{details[1]}</dd></div>
          <div><dt>Impact</dt><dd>{details[2]}</dd></div>
          <div><dt>Erreur fréquente</dt><dd>{details[3]}</dd></div>
          <div><dt>Bonne pratique</dt><dd>{details[4]}</dd></div>
        </dl>
      )}
    </article>
  );
}
