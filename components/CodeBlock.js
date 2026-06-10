import { useState } from "react";
import { toast } from "react-toastify";
import { Icon } from "./Icons";

export default function CodeBlock({ code, label = "Terminal" }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Commande copiée dans le presse-papiers");
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="code-block">
      <div className="code-topbar">
        <div className="terminal-dots"><i /><i /><i /></div>
        <span>{label}</span>
        <button onClick={copy} aria-label="Copier le code">
          <Icon name={copied ? "check" : "copy"} size={16} />
          {copied ? "Copié" : "Copier"}
        </button>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  );
}
