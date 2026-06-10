import CodeBlock from "./CodeBlock";

export default function CommandCard({ item }) {
  return (
    <article className="command-card">
      <div className="command-name">{item.command}</div>
      <p>{item.description}</p>
      <CodeBlock code={item.example} label="Exemple" />
    </article>
  );
}
