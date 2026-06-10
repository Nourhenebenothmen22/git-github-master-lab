import { useMemo, useState } from "react";
import SEO from "../components/SEO";
import CommandCard from "../components/CommandCard";
import { Icon } from "../components/Icons";
import { commandCategories } from "../utils/gitData";

export default function Commandes() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("Toutes");

  const filtered = useMemo(() => commandCategories.map((category) => ({
    ...category,
    commands: category.commands.filter((item) => {
      const matchesQuery = `${item.command} ${item.description}`.toLowerCase().includes(query.toLowerCase());
      return matchesQuery && (active === "Toutes" || active === category.name);
    })
  })).filter((category) => category.commands.length), [query, active]);

  const count = filtered.reduce((sum, category) => sum + category.commands.length, 0);

  return (
    <>
      <SEO title="Commandes Git essentielles" description="Recherchez les commandes Git importantes avec explications, exemples et copie en un clic." path="/commandes" />
      <div className="page-hero compact command-hero">
        <div className="container">
          <span className="kicker">BOÎTE À OUTILS</span>
          <h1>Commandes Git</h1>
          <p>La référence claire et rapide pour vos projets quotidiens.</p>
          <div className="search-box">
            <Icon name="search" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher une commande ou une action..." aria-label="Rechercher une commande" />
            <kbd>⌘ K</kbd>
          </div>
        </div>
      </div>
      <div className="container commands-page">
        <div className="filter-row">
          {["Toutes", ...commandCategories.map((item) => item.name)].map((name) => (
            <button key={name} className={active === name ? "active" : ""} onClick={() => setActive(name)}>{name}</button>
          ))}
        </div>
        <div className="results-count">{count} commande{count !== 1 ? "s" : ""} trouvée{count !== 1 ? "s" : ""}</div>
        {filtered.length ? filtered.map((category) => (
          <section className="command-category" key={category.name}>
            <div className="category-heading"><span>{category.icon}</span><h2>{category.name}</h2></div>
            <div className="command-grid">
              {category.commands.map((item) => <CommandCard key={item.command} item={item} />)}
            </div>
          </section>
        )) : <div className="empty-state"><Icon name="search" size={34} /><h2>Aucune commande trouvée</h2><p>Essayez un terme comme « branche », « commit » ou « remote ».</p></div>}
      </div>
    </>
  );
}
