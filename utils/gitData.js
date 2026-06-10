export const chapters = [
  {
    id: 1,
    title: "Introduction à Git",
    level: "Débutant",
    duration: "8 min",
    summary: "Comprendre le contrôle de version distribué et pourquoi Git est devenu un standard.",
    details: "Git enregistre des instantanés successifs de votre projet. Chaque développeur possède l'historique complet, peut travailler hors ligne et revenir à un état stable sans dupliquer manuellement les dossiers.",
    diagram: "Fichiers → Instantané (commit) → Historique fiable",
    commands: ["git --version", "git help"]
  },
  {
    id: 2,
    title: "Différence Git / GitHub",
    level: "Débutant",
    duration: "7 min",
    summary: "Distinguer l'outil local Git de la plateforme collaborative GitHub.",
    details: "Git est le moteur de versioning installé sur votre machine. GitHub héberge des dépôts Git et ajoute collaboration, Pull Requests, Issues, Actions et gestion des accès.",
    diagram: "Votre machine [Git] ⇄ Internet ⇄ [GitHub : dépôt + équipe]",
    commands: ["git remote -v", "git push"]
  },
  {
    id: 3,
    title: "Installation Git",
    level: "Débutant",
    duration: "10 min",
    summary: "Installer Git sur Windows, macOS ou Linux et vérifier l'installation.",
    details: "Utilisez Git for Windows, Homebrew sur macOS ou le gestionnaire de paquets de votre distribution Linux. Vérifiez ensuite que le terminal reconnaît la commande.",
    diagram: "Télécharger → Installer → Ouvrir le terminal → Vérifier",
    commands: ["git --version", "brew install git", "sudo apt install git"]
  },
  {
    id: 4,
    title: "Configuration Git",
    level: "Débutant",
    duration: "10 min",
    summary: "Configurer son identité, l'éditeur et la branche par défaut.",
    details: "Le nom et l'e-mail sont inscrits dans chaque commit. La portée --global applique les réglages à tous vos dépôts, tandis que la configuration locale ne concerne que le projet courant.",
    diagram: "Configuration globale → tous les dépôts\nConfiguration locale → dépôt courant",
    commands: ["git config --global user.name \"Votre Nom\"", "git config --global user.email \"vous@example.com\"", "git config --global init.defaultBranch main"]
  },
  {
    id: 5,
    title: "Dépôt local",
    level: "Débutant",
    duration: "10 min",
    summary: "Créer un dépôt et inspecter son état.",
    details: "git init crée le dossier caché .git qui contient l'historique et la configuration du dépôt. git status devient ensuite votre tableau de bord quotidien.",
    diagram: "mon-projet/ + git init → mon-projet/.git/",
    commands: ["mkdir mon-projet", "cd mon-projet", "git init", "git status"]
  },
  {
    id: 6,
    title: "Les trois états Git",
    level: "Débutant",
    duration: "12 min",
    summary: "Maîtriser Working Directory, Staging Area et Repository.",
    details: "Vous modifiez les fichiers dans le répertoire de travail, sélectionnez la prochaine version dans la zone de staging, puis créez un commit durable dans le repository.",
    diagram: "Working Directory --git add→ Staging --git commit→ Repository",
    commands: ["git status", "git add index.html", "git commit -m \"feat: add homepage\""]
  },
  {
    id: 7,
    title: "Suivre les fichiers",
    level: "Débutant",
    duration: "12 min",
    summary: "Ajouter précisément les changements et écrire de bons commits.",
    details: "Préférez des commits petits et cohérents. Vérifiez toujours le staging avant de valider et utilisez un message à l'impératif qui décrit l'intention du changement.",
    diagram: "Untracked → Tracked → Staged → Committed",
    commands: ["git add fichier.txt", "git add .", "git commit -m \"docs: add setup guide\""]
  },
  {
    id: 8,
    title: "Historique des commits",
    level: "Débutant",
    duration: "10 min",
    summary: "Explorer, filtrer et visualiser l'historique.",
    details: "git log affiche les auteurs, dates, messages et identifiants SHA. Les options compactes et graphiques facilitent la lecture d'un projet avec plusieurs branches.",
    diagram: "C1 ← C2 ← C3 (HEAD → main)",
    commands: ["git log", "git log --oneline --graph --all", "git show HEAD"]
  },
  {
    id: 9,
    title: "Modifier ou annuler",
    level: "Intermédiaire",
    duration: "15 min",
    summary: "Comparer, restaurer et corriger le dernier commit.",
    details: "git diff inspecte les changements, git restore annule un fichier non commité et --amend remplace le dernier commit. N'amendez pas un commit déjà partagé sans coordination.",
    diagram: "Inspecter (diff) → Décider → Restaurer ou amender",
    commands: ["git diff", "git diff --staged", "git restore fichier.txt", "git commit --amend"]
  },
  {
    id: 10,
    title: "Branches",
    level: "Intermédiaire",
    duration: "18 min",
    summary: "Isoler une fonctionnalité sans perturber la branche principale.",
    details: "Une branche est un pointeur léger vers un commit. Créez une branche par sujet, donnez-lui un nom explicite puis revenez sur main avant l'intégration.",
    diagram: "main: A──B────E\n          └──C──D feature",
    commands: ["git branch", "git switch -c feature/login", "git switch main", "git branch -d feature/login"]
  },
  {
    id: 11,
    title: "Merge",
    level: "Intermédiaire",
    duration: "14 min",
    summary: "Intégrer une branche avec fast-forward ou commit de merge.",
    details: "Placez-vous sur la branche de destination avant git merge. Git avance simplement le pointeur si possible, sinon il crée un commit qui réunit les deux historiques.",
    diagram: "git switch main → git merge feature/login",
    commands: ["git switch main", "git merge feature/login", "git merge --no-ff feature/login"]
  },
  {
    id: 12,
    title: "Résolution de conflits",
    level: "Intermédiaire",
    duration: "20 min",
    summary: "Comprendre les marqueurs et résoudre un conflit proprement.",
    details: "Un conflit apparaît lorsque Git ne peut pas choisir entre deux modifications. Ouvrez les fichiers signalés, gardez la version correcte, supprimez les marqueurs puis validez la résolution.",
    diagram: "<<<<<<< HEAD\nvotre version\n=======\nautre version\n>>>>>>> feature",
    commands: ["git status", "git add fichier-resolu.txt", "git commit", "git merge --abort"]
  },
  {
    id: 13,
    title: "Dépôt distant GitHub",
    level: "Intermédiaire",
    duration: "15 min",
    summary: "Relier un dépôt local à GitHub et publier sa branche.",
    details: "Un remote est un alias vers une URL distante. origin est une convention. Le premier push avec -u mémorise la branche distante suivie.",
    diagram: "local main --push→ origin/main sur GitHub",
    commands: ["git remote add origin https://github.com/user/projet.git", "git remote -v", "git push -u origin main"]
  },
  {
    id: 14,
    title: "Clone, Fetch, Pull, Push",
    level: "Intermédiaire",
    duration: "18 min",
    summary: "Synchroniser efficacement les dépôts locaux et distants.",
    details: "clone crée une copie complète, fetch télécharge sans intégrer, pull télécharge puis fusionne, push publie vos commits. Fetch est idéal pour inspecter avant d'intégrer.",
    diagram: "GitHub --fetch→ origin/main --merge→ main --push→ GitHub",
    commands: ["git clone URL", "git fetch origin", "git pull --rebase", "git push"]
  },
  {
    id: 15,
    title: "Pull Request",
    level: "Intermédiaire",
    duration: "18 min",
    summary: "Proposer, discuter et relire une modification sur GitHub.",
    details: "Poussez une branche, ouvrez une Pull Request vers main, décrivez le contexte, demandez une review puis intégrez après validation et réussite des tests.",
    diagram: "Branche → Push → Pull Request → Review → Merge",
    commands: ["git push -u origin feature/header", "gh pr create", "gh pr checkout 42"]
  },
  {
    id: 16,
    title: "Gitignore",
    level: "Débutant",
    duration: "10 min",
    summary: "Exclure dépendances, secrets et fichiers générés.",
    details: ".gitignore agit sur les fichiers non suivis. Un fichier déjà commité doit d'abord être retiré de l'index. Ne versionnez jamais de secrets.",
    diagram: "node_modules/ + .env → ignorés | src/ → suivi",
    commands: ["echo node_modules/ >> .gitignore", "git rm --cached .env", "git check-ignore -v .env"]
  },
  {
    id: 17,
    title: "Tags",
    level: "Intermédiaire",
    duration: "10 min",
    summary: "Marquer une version stable et publier une release.",
    details: "Les tags annotés contiennent auteur, date et message. Utilisez le versioning sémantique MAJEUR.MINEUR.CORRECTIF pour communiquer clairement les changements.",
    diagram: "C1──C2──C3 [v1.0.0]──C4",
    commands: ["git tag -a v1.0.0 -m \"Release 1.0.0\"", "git push origin v1.0.0", "git tag"]
  },
  {
    id: 18,
    title: "Stash",
    level: "Intermédiaire",
    duration: "12 min",
    summary: "Mettre temporairement de côté un travail non terminé.",
    details: "Le stash nettoie le répertoire sans créer de commit. Nommez vos stashes, listez-les puis appliquez ou supprimez précisément celui dont vous avez besoin.",
    diagram: "Travail en cours → stash → branche propre → stash pop",
    commands: ["git stash push -m \"WIP formulaire\"", "git stash list", "git stash pop"]
  },
  {
    id: 19,
    title: "Reset et Revert",
    level: "Avancé",
    duration: "20 min",
    summary: "Choisir entre réécriture locale et annulation publique.",
    details: "reset déplace un pointeur et peut supprimer des changements locaux. revert crée un nouveau commit inverse, ce qui le rend sûr pour un historique déjà partagé.",
    diagram: "reset: déplacer HEAD | revert: ajouter un commit inverse",
    commands: ["git reset --soft HEAD~1", "git reset HEAD fichier.txt", "git revert <sha>"]
  },
  {
    id: 20,
    title: "Workflow professionnel",
    level: "Avancé",
    duration: "25 min",
    summary: "Combiner branches, conventions, revue et intégration continue.",
    details: "Synchronisez main, créez une branche courte, commitez par intention, poussez régulièrement et ouvrez une Pull Request ciblée. Une CI protège la qualité avant le merge.",
    diagram: "Issue → Branche → Commits → Tests → PR → Review → Merge → Deploy",
    commands: ["git switch main", "git pull --rebase", "git switch -c feat/issue-42", "git push -u origin feat/issue-42"]
  }
];

export const commandCategories = [
  {
    name: "Démarrage",
    icon: "01",
    commands: [
      { command: "git init", description: "Initialise un dépôt dans le dossier courant.", example: "git init" },
      { command: "git clone <url>", description: "Copie un dépôt distant et son historique.", example: "git clone https://github.com/user/projet.git" },
      { command: "git config", description: "Configure l'identité et le comportement de Git.", example: "git config --global user.name \"Ada Lovelace\"" }
    ]
  },
  {
    name: "Changements",
    icon: "02",
    commands: [
      { command: "git status", description: "Affiche l'état du répertoire et du staging.", example: "git status --short" },
      { command: "git add", description: "Ajoute des changements à la zone de staging.", example: "git add src/index.js" },
      { command: "git commit", description: "Enregistre un instantané dans l'historique.", example: "git commit -m \"feat: add navigation\"" },
      { command: "git diff", description: "Compare les changements non validés.", example: "git diff --staged" },
      { command: "git restore", description: "Restaure un fichier ou retire du staging.", example: "git restore --staged index.html" }
    ]
  },
  {
    name: "Historique",
    icon: "03",
    commands: [
      { command: "git log", description: "Parcourt l'historique des commits.", example: "git log --oneline --graph --all" },
      { command: "git show", description: "Affiche le détail d'un objet Git.", example: "git show HEAD" },
      { command: "git blame", description: "Indique l'origine de chaque ligne.", example: "git blame src/app.js" },
      { command: "git reflog", description: "Retrouve les déplacements locaux de HEAD.", example: "git reflog" }
    ]
  },
  {
    name: "Branches & intégration",
    icon: "04",
    commands: [
      { command: "git branch", description: "Liste, crée ou supprime les branches.", example: "git branch -d feature/login" },
      { command: "git switch", description: "Change de branche ou en crée une.", example: "git switch -c feature/login" },
      { command: "git merge", description: "Intègre une branche dans la branche courante.", example: "git merge feature/login" },
      { command: "git rebase", description: "Rejoue des commits sur une nouvelle base.", example: "git rebase main" }
    ]
  },
  {
    name: "Dépôts distants",
    icon: "05",
    commands: [
      { command: "git remote", description: "Gère les connexions aux dépôts distants.", example: "git remote add origin <url>" },
      { command: "git fetch", description: "Télécharge les références sans les intégrer.", example: "git fetch --prune origin" },
      { command: "git pull", description: "Télécharge puis intègre les changements.", example: "git pull --rebase origin main" },
      { command: "git push", description: "Publie les commits vers un dépôt distant.", example: "git push -u origin main" }
    ]
  },
  {
    name: "Outils avancés",
    icon: "06",
    commands: [
      { command: "git stash", description: "Met de côté des changements temporaires.", example: "git stash push -m \"WIP\"" },
      { command: "git tag", description: "Marque un commit comme une version.", example: "git tag -a v1.0.0 -m \"Release\"" },
      { command: "git revert", description: "Crée un commit qui annule un commit existant.", example: "git revert a1b2c3d" },
      { command: "git reset", description: "Déplace HEAD ou modifie le staging.", example: "git reset --soft HEAD~1" },
      { command: "git cherry-pick", description: "Applique un commit précis sur la branche courante.", example: "git cherry-pick a1b2c3d" }
    ]
  }
];

export const labs = [
  {
    id: 1,
    title: "Initialiser un dépôt",
    level: "Débutant",
    objective: "Transformer un dossier existant en dépôt Git.",
    prompt: "Quelle commande initialise Git dans le dossier courant ?",
    options: ["git start", "git init", "git create"],
    answer: "git init",
    terminal: "$ mkdir mon-projet\n$ cd mon-projet\n$ ___",
    solution: "Exécutez `git init`, puis `git status` pour confirmer que le dépôt est prêt."
  },
  {
    id: 2,
    title: "Créer le premier commit",
    level: "Débutant",
    objective: "Ajouter un README au staging puis créer un commit.",
    prompt: "Quelle séquence est correcte ?",
    options: ["git commit puis git add", "git add README.md puis git commit", "git push puis git init"],
    answer: "git add README.md puis git commit",
    terminal: "$ echo '# Projet' > README.md\n$ git add README.md\n$ ___",
    solution: "`git commit -m \"docs: add README\"` enregistre le fichier préparé."
  },
  {
    id: 3,
    title: "Inspecter une modification",
    level: "Débutant",
    objective: "Voir les lignes modifiées avant de les ajouter.",
    prompt: "Quelle commande affiche les changements non stagés ?",
    options: ["git status -v", "git diff", "git log"],
    answer: "git diff",
    terminal: "$ echo 'nouvelle ligne' >> notes.txt\n$ ___",
    solution: "`git diff` affiche le contenu modifié. Après `git add`, utilisez `git diff --staged`."
  },
  {
    id: 4,
    title: "Travailler avec une branche",
    level: "Intermédiaire",
    objective: "Créer une branche et s'y déplacer en une commande.",
    prompt: "Quelle commande moderne crée et active feature/nav ?",
    options: ["git branch feature/nav", "git switch -c feature/nav", "git merge feature/nav"],
    answer: "git switch -c feature/nav",
    terminal: "$ git status\nOn branch main\n$ ___",
    solution: "`git switch -c feature/nav` crée la branche depuis HEAD et la rend active."
  },
  {
    id: 5,
    title: "Fusionner une fonctionnalité",
    level: "Intermédiaire",
    objective: "Intégrer feature/nav dans main.",
    prompt: "Depuis quelle branche faut-il lancer git merge feature/nav ?",
    options: ["feature/nav", "main", "origin/main"],
    answer: "main",
    terminal: "$ git switch main\n$ ___ feature/nav",
    solution: "Depuis `main`, exécutez `git merge feature/nav`. La branche courante reçoit les commits."
  },
  {
    id: 6,
    title: "Résoudre un conflit",
    level: "Intermédiaire",
    objective: "Finaliser un fichier après suppression des marqueurs de conflit.",
    prompt: "Après modification du fichier en conflit, quelle est la prochaine étape ?",
    options: ["git add fichier.txt", "git init", "git clone"],
    answer: "git add fichier.txt",
    terminal: "$ git status\nboth modified: fichier.txt\n$ # fichier corrigé\n$ ___",
    solution: "Ajoutez le fichier résolu avec `git add fichier.txt`, puis terminez avec `git commit`."
  },
  {
    id: 7,
    title: "Connecter un remote",
    level: "Intermédiaire",
    objective: "Associer le dépôt local à un dépôt GitHub.",
    prompt: "Quelle commande ajoute un remote nommé origin ?",
    options: ["git remote add origin <url>", "git origin <url>", "git push add <url>"],
    answer: "git remote add origin <url>",
    terminal: "$ git remote -v\n$ ___",
    solution: "`git remote add origin <url>` crée l'alias. Vérifiez ensuite avec `git remote -v`."
  },
  {
    id: 8,
    title: "Cloner un projet",
    level: "Débutant",
    objective: "Récupérer un dépôt GitHub complet localement.",
    prompt: "Que récupère git clone ?",
    options: ["Uniquement le dernier fichier", "Le projet et son historique", "Uniquement les branches distantes"],
    answer: "Le projet et son historique",
    terminal: "$ cd ~/projets\n$ git clone https://github.com/equipe/app.git",
    solution: "`git clone` crée le dossier, télécharge les fichiers et l'historique, puis configure origin."
  },
  {
    id: 9,
    title: "Mettre le travail de côté",
    level: "Intermédiaire",
    objective: "Changer de branche sans commiter un travail incomplet.",
    prompt: "Quelle commande range temporairement les modifications ?",
    options: ["git stash", "git reset --hard", "git delete"],
    answer: "git stash",
    terminal: "$ git status --short\n M app.js\n$ ___",
    solution: "`git stash push -m \"WIP\"` sauvegarde le travail. `git stash pop` le réapplique."
  },
  {
    id: 10,
    title: "Préparer une Pull Request",
    level: "Avancé",
    objective: "Publier une branche avant d'ouvrir une Pull Request.",
    prompt: "Quelle commande publie et lie la branche feature/docs ?",
    options: ["git push -u origin feature/docs", "git pull feature/docs", "git merge origin"],
    answer: "git push -u origin feature/docs",
    terminal: "$ git switch feature/docs\n$ git log --oneline -1\n$ ___",
    solution: "Poussez avec `git push -u origin feature/docs`, puis ouvrez la Pull Request sur GitHub."
  }
];

export const finalLabSteps = [
  ["Créer le projet local", "Créez un dossier portfolio-git et placez-vous dedans."],
  ["Initialiser Git", "Transformez le dossier en dépôt Git et vérifiez son état."],
  ["Créer les fichiers", "Ajoutez index.html, style.css, script.js et README.md avec un contenu initial."],
  ["Premier commit", "Préparez tous les fichiers et créez un commit initial clair."],
  ["Créer deux branches", "Créez feature-design et feature-script à partir de main."],
  ["Commits par branche", "Ajoutez le style sur feature-design et l'interactivité sur feature-script."],
  ["Fusionner les branches", "Revenez sur main et intégrez les deux fonctionnalités."],
  ["Connecter GitHub", "Créez un dépôt vide sur GitHub et ajoutez-le comme remote origin."],
  ["Pousser le projet", "Publiez main et configurez son upstream."],
  ["Créer une Pull Request", "Ajoutez une amélioration via une nouvelle branche et proposez-la en PR."],
  ["Ajouter .gitignore", "Ignorez les dépendances, fichiers système et variables d'environnement."],
  ["Créer le tag v1.0.0", "Marquez la première version stable avec un tag annoté et publiez-le."],
  ["Résoudre un conflit", "Créez deux modifications incompatibles, fusionnez puis résolvez proprement le conflit."]
];
