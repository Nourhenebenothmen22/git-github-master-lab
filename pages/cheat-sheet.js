import { useMemo, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { toast } from "react-toastify";
import SEO from "../components/SEO";
import { GitLogo, GithubLogo, Icon } from "../components/Icons";

const filters = [
  "Toutes",
  "Configuration",
  "Dépôt local",
  "Staging",
  "Commit",
  "Branches",
  "Merge",
  "Remote GitHub",
  "Pull / Push",
  "Annulation",
  "Stash",
  "Tags",
  "Nettoyage",
  "Informations"
];

const commands = [
  { command: "git config --global user.name \"Ada\"", category: "Configuration", level: "Essentiel", description: "Définit le nom d'auteur utilisé dans vos commits.", example: "git config --global user.name \"Ada Lovelace\"", accent: "blue" },
  { command: "git config --global user.email", category: "Configuration", level: "Essentiel", description: "Associe une adresse e-mail à votre identité Git.", example: "git config --global user.email \"ada@example.com\"", accent: "blue" },
  { command: "git init", category: "Dépôt local", level: "Essentiel", description: "Initialise un nouveau dépôt Git dans le dossier courant.", example: "git init", accent: "green" },
  { command: "git clone <url>", category: "Dépôt local", level: "Essentiel", description: "Copie un dépôt distant et son historique complet.", example: "git clone https://github.com/user/projet.git", accent: "green" },
  { command: "git status", category: "Informations", level: "Essentiel", description: "Affiche l'état des fichiers et de la zone de staging.", example: "git status --short", accent: "blue" },
  { command: "git add <fichier>", category: "Staging", level: "Essentiel", description: "Prépare un fichier pour le prochain commit.", example: "git add index.html", accent: "orange" },
  { command: "git add .", category: "Staging", level: "Important", description: "Ajoute toutes les modifications du dossier courant.", example: "git add .", accent: "orange" },
  { command: "git restore --staged", category: "Staging", level: "Important", description: "Retire un fichier du staging sans supprimer son contenu.", example: "git restore --staged index.html", accent: "orange" },
  { command: "git commit -m \"message\"", category: "Commit", level: "Essentiel", description: "Enregistre les changements préparés dans l'historique Git.", example: "git commit -m \"Add homepage\"", accent: "green" },
  { command: "git commit --amend", category: "Commit", level: "Important", description: "Modifie le dernier commit local avant de le partager.", example: "git commit --amend -m \"Fix homepage title\"", accent: "green" },
  { command: "git branch", category: "Branches", level: "Essentiel", description: "Liste, crée ou supprime des branches locales.", example: "git branch feature/navbar", accent: "blue" },
  { command: "git switch -c <branche>", category: "Branches", level: "Essentiel", description: "Crée une branche et bascule dessus immédiatement.", example: "git switch -c feature/design", accent: "blue" },
  { command: "git checkout", category: "Branches", level: "Important", description: "Ancienne commande polyvalente pour changer de branche ou restaurer.", example: "git checkout main", accent: "blue" },
  { command: "git merge <branche>", category: "Merge", level: "Essentiel", description: "Intègre une branche dans la branche courante.", example: "git merge feature/design", accent: "green" },
  { command: "git merge --abort", category: "Merge", level: "Important", description: "Annule un merge en cours lorsqu'un conflit devient trop risqué.", example: "git merge --abort", accent: "green" },
  { command: "git remote -v", category: "Remote GitHub", level: "Essentiel", description: "Affiche les dépôts distants liés au projet.", example: "git remote -v", accent: "blue" },
  { command: "git remote add origin", category: "Remote GitHub", level: "Essentiel", description: "Connecte le dépôt local à un dépôt GitHub.", example: "git remote add origin https://github.com/user/projet.git", accent: "blue" },
  { command: "git fetch", category: "Pull / Push", level: "Important", description: "Télécharge les références distantes sans les fusionner.", example: "git fetch --prune origin", accent: "orange" },
  { command: "git pull --rebase", category: "Pull / Push", level: "Essentiel", description: "Récupère les changements distants avec un historique linéaire.", example: "git pull --rebase origin main", accent: "orange" },
  { command: "git push -u origin main", category: "Pull / Push", level: "Essentiel", description: "Publie une branche et configure son suivi distant.", example: "git push -u origin main", accent: "orange" },
  { command: "git diff", category: "Informations", level: "Essentiel", description: "Compare les modifications non encore validées.", example: "git diff --staged", accent: "blue" },
  { command: "git log --oneline", category: "Informations", level: "Essentiel", description: "Affiche l'historique de façon compacte.", example: "git log --oneline --graph --all", accent: "blue" },
  { command: "git show HEAD", category: "Informations", level: "Important", description: "Affiche le détail du dernier commit.", example: "git show HEAD", accent: "blue" },
  { command: "git blame <fichier>", category: "Informations", level: "Avancé", description: "Indique quel commit a modifié chaque ligne.", example: "git blame src/app.js", accent: "blue" },
  { command: "git restore <fichier>", category: "Annulation", level: "Important", description: "Annule les modifications locales d'un fichier.", example: "git restore index.html", accent: "orange" },
  { command: "git reset --soft HEAD~1", category: "Annulation", level: "Avancé", description: "Défait le dernier commit tout en gardant les changements stagés.", example: "git reset --soft HEAD~1", accent: "orange" },
  { command: "git revert <sha>", category: "Annulation", level: "Important", description: "Crée un commit inverse sans réécrire l'historique partagé.", example: "git revert a1b2c3d", accent: "orange" },
  { command: "git stash push -m \"WIP\"", category: "Stash", level: "Important", description: "Met temporairement de côté un travail non terminé.", example: "git stash push -m \"WIP formulaire\"", accent: "green" },
  { command: "git stash pop", category: "Stash", level: "Important", description: "Réapplique le dernier stash et le retire de la pile.", example: "git stash pop", accent: "green" },
  { command: "git tag -a v1.0.0", category: "Tags", level: "Important", description: "Crée un tag annoté pour marquer une version stable.", example: "git tag -a v1.0.0 -m \"Release 1.0.0\"", accent: "blue" },
  { command: "git push origin v1.0.0", category: "Tags", level: "Important", description: "Publie un tag vers GitHub.", example: "git push origin v1.0.0", accent: "blue" },
  { command: "git clean -fd", category: "Nettoyage", level: "Avancé", description: "Supprime les fichiers non suivis du dépôt local.", example: "git clean -fd", accent: "orange" },
  { command: "git gc", category: "Nettoyage", level: "Avancé", description: "Optimise la base d'objets Git du dépôt.", example: "git gc --prune=now", accent: "orange" },
  { command: "git cherry-pick <sha>", category: "Branches", level: "Avancé", description: "Applique un commit précis sur la branche courante.", example: "git cherry-pick a1b2c3d", accent: "blue" }
];

const normalize = (value) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const cardVariants = {
  hidden: { opacity: 0, y: 34, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 18, scale: 0.96 }
};

function CheatCommandCard({ item, index, copiedId, onCopy }) {
  const copied = copiedId === `${item.command}-${index}`;

  return (
    <motion.article
      className={`cheat-lab-card accent-${item.accent}`}
      variants={cardVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      layout
      whileHover={{ y: -9, scale: 1.025, rotateX: 1.6, rotateY: -1.6 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.34, delay: Math.min(index * 0.045, 0.72), ease: "easeOut" }}
    >
      <div className="cheat-lab-card-glow" />
      <div className="cheat-lab-card-head">
        <span className="cheat-lab-icon"><Icon name="terminal" size={19} /></span>
        <div>
          <span className="cheat-lab-category">{item.category}</span>
          <h2>{item.command}</h2>
        </div>
        <span className={`cheat-lab-level level-${item.level.toLowerCase()}`}>{item.level}</span>
      </div>
      <p>{item.description}</p>
      <div className="cheat-lab-example">
        <span>Exemple</span>
        <code>{item.example}</code>
      </div>
      <motion.button
        className={copied ? "cheat-lab-copy copied" : "cheat-lab-copy"}
        onClick={() => onCopy(item, index)}
        whileTap={{ scale: 0.94 }}
      >
        <motion.span animate={copied ? { rotate: [0, -12, 0], scale: [1, 1.22, 1] } : {}}>
          <Icon name={copied ? "check" : "copy"} size={16} />
        </motion.span>
        {copied ? "Copié !" : "Copier"}
      </motion.button>
    </motion.article>
  );
}

export default function CheatSheet() {
  const [active, setActive] = useState("Toutes");
  const [query, setQuery] = useState("");
  const [copiedId, setCopiedId] = useState("");
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 55, damping: 24 });
  const springY = useSpring(pointerY, { stiffness: 55, damping: 24 });
  const bgX = useTransform(springX, [-1, 1], [-18, 18]);
  const bgY = useTransform(springY, [-1, 1], [-14, 14]);

  const filtered = useMemo(() => {
    const needle = normalize(query.trim());
    return commands.filter((item) => {
      const inCategory = active === "Toutes" || item.category === active;
      const haystack = normalize(`${item.command} ${item.category} ${item.description} ${item.example}`);
      return inCategory && (!needle || haystack.includes(needle));
    });
  }, [active, query]);

  const onPointerMove = (event) => {
    if (reduceMotion || window.innerWidth < 820) return;
    pointerX.set((event.clientX / window.innerWidth - 0.5) * 2);
    pointerY.set((event.clientY / window.innerHeight - 0.5) * 2);
  };

  const copyCommand = async (item, index) => {
    await navigator.clipboard.writeText(item.example);
    setCopiedId(`${item.command}-${index}`);
    toast.success("Commande copiée avec succès !");
    setTimeout(() => setCopiedId(""), 1700);
  };

  return (
    <>
      <SEO title="Cheat Sheet Git animée" description="Aide-mémoire Git interactif avec recherche, filtres, animations et copie rapide des commandes." path="/cheat-sheet" />
      <section className="cheat-lab-page" onPointerMove={onPointerMove}>
        <motion.div className="cheat-lab-bg" style={{ x: reduceMotion ? 0 : bgX, y: reduceMotion ? 0 : bgY }} aria-hidden="true">
          <span className="node node-a" />
          <span className="node node-b" />
          <span className="node node-c" />
          <span className="node node-d" />
          <span className="line line-a" />
          <span className="line line-b" />
          <span className="float-logo git"><GitLogo size={92} /></span>
          <span className="float-logo github"><GithubLogo size={86} /></span>
        </motion.div>

        <div className="container cheat-lab-shell">
          <motion.header
            className="cheat-lab-hero"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div>
              <span className="kicker">AIDE-MÉMOIRE INTERACTIF</span>
              <h1>Git Cheat Sheet</h1>
              <p>Une fiche rapide, filtrable et animée pour retrouver la bonne commande Git au bon moment.</p>
            </div>
            <div className="cheat-lab-stats">
              <span><strong>{commands.length}</strong> commandes</span>
              <span><strong>{filters.length - 1}</strong> catégories</span>
              <button className="button secondary print-button" onClick={() => window.print()}>Imprimer</button>
            </div>
          </motion.header>

          <motion.div
            className="cheat-lab-toolbar"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.38 }}
          >
            <label className="cheat-lab-search">
              <motion.span animate={{ rotate: query ? [0, -8, 8, 0] : 0 }} transition={{ duration: 0.45 }}>
                <Icon name="search" size={18} />
              </motion.span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Rechercher une commande Git…"
                aria-label="Rechercher une commande Git"
              />
            </label>

            <div className="cheat-lab-filters" aria-label="Filtres de catégories">
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  className={active === filter ? "active" : ""}
                  onClick={() => setActive(filter)}
                  whileTap={{ scale: 0.94 }}
                >
                  {active === filter && <motion.span className="active-filter" layoutId="cheatActiveFilter" />}
                  <span>{filter}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="cheat-lab-meta">
            <span>{filtered.length} commande{filtered.length > 1 ? "s" : ""} affichée{filtered.length > 1 ? "s" : ""}</span>
            <span>{active === "Toutes" ? "Toutes les catégories" : active}</span>
          </div>

          <motion.div className="cheat-lab-grid" layout>
            <AnimatePresence>
              {filtered.map((item, index) => (
                <CheatCommandCard
                  key={`${item.category}-${item.command}`}
                  item={item}
                  index={index}
                  copiedId={copiedId}
                  onCopy={copyCommand}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {!filtered.length && (
              <motion.div
                className="cheat-lab-empty"
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
              >
                <Icon name="search" size={34} />
                <h2>Aucune commande trouvée.</h2>
                <p>Essayez un autre mot-clé.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
