export const theorySections = [
  {
    id: "git",
    eyebrow: "FONDATION 01",
    title: "Qu'est-ce que Git ?",
    lead: "Git est un système de contrôle de version distribué. Il mémorise l'évolution d'un projet sous forme d'instantanés appelés commits.",
    points: [
      ["Le problème résolu", "Sans Git, les versions se multiplient dans des dossiers ou des archives ZIP. Git remplace ces copies fragiles par un historique daté, signé et consultable."],
      ["Snapshot, pas simple sauvegarde", "Une sauvegarde conserve une copie. Un commit décrit un état cohérent du projet, son auteur, sa date, son intention et son lien avec les versions précédentes."],
      ["Un système distribué", "Chaque clone possède les fichiers et l'historique complet. On peut consulter, créer des commits et revenir en arrière hors ligne."],
      ["Impact réel", "Git facilite les changements parallèles, l'audit, la revue, les tests automatisés et le retour rapide à une version stable."]
    ],
    model: "Fichiers de travail → Staging → Commit local → Dépôt distant"
  },
  {
    id: "github",
    eyebrow: "FONDATION 02",
    title: "Qu'est-ce que GitHub ?",
    lead: "GitHub héberge des dépôts Git et ajoute les outils nécessaires pour collaborer, relire, automatiser et publier.",
    points: [
      ["Git n'est pas GitHub", "Git est le moteur local de versioning. GitHub est une plateforme en ligne construite autour des dépôts Git."],
      ["Collaborer", "Les branches, Pull Requests, reviews, Issues, Discussions et Projects organisent le travail d'une équipe."],
      ["Documenter et livrer", "README, Wiki, Releases et GitHub Pages transforment un dépôt en projet compréhensible et publiable."],
      ["Automatiser et protéger", "GitHub Actions exécute tests et déploiements. Les permissions, secrets et règles de branches protègent le code."]
    ],
    model: "Branche → Push → Pull Request → Review → Tests → Merge → Release"
  },
  {
    id: "why",
    eyebrow: "FONDATION 03",
    title: "Pourquoi les apprendre ?",
    lead: "Git et GitHub sont une langue commune entre développement, data, design, QA, gestion de projet et DevOps.",
    points: [
      ["Pour un étudiant", "Construire un portfolio crédible, montrer sa progression et apprendre à travailler comme dans une équipe."],
      ["Pour un développeur", "Isoler les fonctionnalités, relire les changements, corriger proprement et livrer avec confiance."],
      ["Pour les métiers IT", "Relier code, documentation, tickets, tests et décisions dans une source de vérité partagée."],
      ["Pour un freelance", "Sécuriser les livraisons, justifier les changements et collaborer proprement avec un client ou un partenaire."]
    ],
    model: "Organisation + Traçabilité + Collaboration + Automatisation = Qualité"
  },
  {
    id: "without",
    eyebrow: "AVANT / APRÈS",
    title: "Sans Git, puis avec Git",
    lead: "Le bénéfice de Git apparaît surtout quand le projet change, que plusieurs personnes interviennent ou qu'une erreur arrive.",
    points: [
      ["Sans Git", "projet-final-v2-corrigé.zip, fichiers écrasés, origine d'un bug inconnue, retours arrière risqués et conflits résolus à la main."],
      ["Avec Git", "Historique lisible, branches isolées, auteur de chaque changement identifiable et restauration contrôlée."],
      ["Sans workflow", "Des changements arrivent directement en production sans discussion ni validation."],
      ["Avec GitHub", "Une Pull Request relie le besoin, le code, la review, les tests et la décision de fusion."]
    ],
    model: "Chaos de copies → Historique fiable → Workflow d'équipe"
  }
];

export const scenarios = [
  {
    title: "J'ai oublié de faire git init",
    context: "Lina crée un portfolio, ajoute des fichiers puis lance git status.",
    problem: "Git répond « fatal: not a git repository » car aucun dossier .git n'existe.",
    commands: "git init · git status · git add . · git commit",
    steps: ["Se placer à la racine du projet.", "Lancer git init.", "Vérifier avec git status.", "Créer le premier commit."],
    terminal: "$ git status\nfatal: not a git repository\n$ git init\nInitialized empty Git repository",
    lesson: "Initialiser une seule fois, à la bonne racine.",
    animation: "Le dossier .git apparaît puis active une timeline vide.",
    mistake: "Lancer git init dans src/ et créer un dépôt imbriqué.",
    correction: "Supprimer uniquement le .git imbriqué, revenir à la racine et initialiser."
  },
  {
    title: "Nothing added to commit",
    context: "Sami modifie la page d'accueil et tente immédiatement un commit.",
    problem: "Les fichiers sont modifiés mais rien n'a été placé dans le staging.",
    commands: "git status · git diff · git add · git commit",
    steps: ["Lire git status.", "Inspecter git diff.", "Ajouter les fichiers voulus.", "Contrôler git diff --staged puis commiter."],
    terminal: "$ git commit -m \"feat: hero\"\nno changes added to commit\n$ git add index.html\n$ git commit -m \"feat: add hero\"",
    lesson: "Le staging permet de choisir précisément le contenu d'un commit.",
    animation: "Un fichier glisse de Working Directory vers Staging puis Repository.",
    mistake: "Utiliser git add . sans vérifier.",
    correction: "Ajouter par fichier ou par bloc logique, puis relire le staging."
  },
  {
    title: "src refspec main does not match any",
    context: "Nour crée un dépôt GitHub vide et veut pousser son projet local.",
    problem: "La branche main n'existe pas encore ou ne contient aucun commit.",
    commands: "git status · git branch --show-current · git add . · git commit · git branch -M main · git push",
    steps: ["Créer au moins un commit.", "Vérifier le nom de branche.", "Renommer en main si nécessaire.", "Pousser avec -u."],
    terminal: "$ git push -u origin main\nerror: src refspec main does not match any\n$ git commit -m \"chore: initial commit\"\n$ git branch -M main\n$ git push -u origin main",
    lesson: "Git pousse des commits associés à une branche existante.",
    animation: "Le bouton Push reste bloqué jusqu'à l'apparition du premier commit.",
    mistake: "Répéter git push sans diagnostiquer.",
    correction: "Contrôler commit et branche avant de modifier le remote."
  },
  {
    title: "J'ai poussé node_modules",
    context: "Une application React publie des milliers de fichiers de dépendances.",
    problem: ".gitignore était absent et node_modules est déjà suivi.",
    commands: "git rm -r --cached node_modules · git add .gitignore · git commit · git push",
    steps: ["Ajouter node_modules/ à .gitignore.", "Retirer le dossier de l'index.", "Commiter le nettoyage.", "Pousser."],
    terminal: "$ echo node_modules/ >> .gitignore\n$ git rm -r --cached node_modules\n$ git commit -m \"chore: stop tracking dependencies\"",
    lesson: "Les dépendances se réinstallent depuis package-lock.json.",
    animation: "Des milliers de fichiers disparaissent de l'index, sans quitter le disque.",
    mistake: "Supprimer node_modules manuellement sans le retirer de l'index.",
    correction: "Utiliser --cached pour conserver les fichiers localement."
  },
  {
    title: "J'ai publié mon fichier .env",
    context: "Une clé d'API apparaît dans l'historique public.",
    problem: "Retirer le fichier du dernier commit ne rend pas le secret sûr : il a déjà été exposé.",
    commands: "git rm --cached .env · git commit · git push",
    steps: ["Révoquer immédiatement les secrets.", "Ajouter .env à .gitignore.", "Retirer le fichier de l'index.", "Nettoyer l'historique si nécessaire."],
    terminal: "$ git rm --cached .env\n$ echo .env >> .gitignore\n$ git commit -m \"security: stop tracking env file\"",
    lesson: "Un secret publié doit être considéré comme compromis.",
    animation: "Une alerte rouge déclenche rotation, nettoyage et protection.",
    mistake: "Faire seulement un nouveau commit qui supprime .env.",
    correction: "Révoquer, remplacer, retirer et auditer l'historique avec l'équipe."
  },
  {
    title: "Conflit de merge",
    context: "Deux développeurs modifient le même titre dans index.html.",
    problem: "Git ne peut pas choisir automatiquement entre les deux versions.",
    commands: "git status · git diff · git add · git commit · git merge --abort",
    steps: ["Identifier les fichiers en conflit.", "Discuter de l'intention correcte.", "Supprimer les marqueurs.", "Tester, ajouter et commiter."],
    terminal: "<<<<<<< HEAD\n<h1>Accueil</h1>\n=======\n<h1>Bienvenue</h1>\n>>>>>>> feature/hero",
    lesson: "Un conflit est une décision de contenu, pas seulement une erreur technique.",
    animation: "Deux lignes convergent vers un éditeur à trois panneaux.",
    mistake: "Supprimer les marqueurs sans comprendre les deux changements.",
    correction: "Comparer, communiquer, composer la bonne version puis tester."
  },
  {
    title: "Je veux annuler mon dernier commit",
    context: "Un commit local contient le mauvais fichier ou un bug déjà partagé.",
    problem: "restore, reset et revert n'agissent ni au même endroit ni avec le même niveau de risque.",
    commands: "git restore · git reset --soft HEAD~1 · git revert HEAD",
    steps: ["Déterminer si le changement est commité.", "Vérifier s'il est déjà poussé.", "Utiliser reset en local ou revert si partagé.", "Contrôler l'état final."],
    terminal: "$ git reset --soft HEAD~1  # commit local\n$ git revert HEAD          # commit partagé",
    lesson: "Préserver l'historique partagé est prioritaire.",
    animation: "Un sélecteur montre fichiers, staging et historique avant l'action.",
    mistake: "Utiliser reset --hard sur un commit partagé.",
    correction: "Préférer revert sur une branche collaborative."
  },
  {
    title: "Je suis sur la mauvaise branche",
    context: "Une fonctionnalité a été commencée directement sur main.",
    problem: "Le travail non commité ou le commit doit être déplacé vers une branche feature.",
    commands: "git switch -c feature/login · git switch main · git reset --hard origin/main",
    steps: ["Créer une branche depuis l'état actuel.", "Commiter le travail sur cette branche.", "Revenir sur main.", "Réaligner main uniquement après vérification."],
    terminal: "$ git switch -c feature/login\n$ git add .\n$ git commit -m \"feat: add login form\"\n$ git switch main",
    lesson: "Créer la branche dès le début réduit le risque.",
    animation: "Le commit change de voie sur une carte de branches.",
    mistake: "Nettoyer main avant d'avoir sécurisé le travail.",
    correction: "Créer d'abord la branche de sauvegarde."
  },
  {
    title: "Mon push est refusé",
    context: "Un collègue a poussé sur la branche distante avant vous.",
    problem: "Votre historique local n'inclut pas les nouveaux commits distants.",
    commands: "git fetch · git log · git pull --rebase · git push",
    steps: ["Télécharger avec fetch.", "Comparer les historiques.", "Rejouer ses commits avec pull --rebase.", "Résoudre si besoin puis pousser."],
    terminal: "$ git push\n! [rejected] main -> main (non-fast-forward)\n$ git pull --rebase origin main\n$ git push",
    lesson: "Synchroniser avant de publier évite les surprises.",
    animation: "La branche distante avance, puis les commits locaux se replacent au-dessus.",
    mistake: "Forcer avec git push --force sur main.",
    correction: "Intégrer les changements et réserver --force-with-lease aux branches maîtrisées."
  },
  {
    title: "Je veux récupérer un commit perdu",
    context: "Après un reset, un commit utile ne figure plus dans git log.",
    problem: "Le commit est détaché de la branche mais reste souvent référencé dans le reflog.",
    commands: "git reflog · git branch rescue <sha> · git cherry-pick <sha>",
    steps: ["Consulter git reflog.", "Identifier le SHA.", "Créer une branche de secours.", "Comparer puis réintégrer."],
    terminal: "$ git reflog\n7ac21ef HEAD@{2}: commit: feat: add dashboard\n$ git branch rescue-dashboard 7ac21ef",
    lesson: "Le reflog est le journal de secours local de HEAD.",
    animation: "Un commit effacé de la timeline réapparaît depuis une zone d'archives.",
    mistake: "Créer de nombreux nouveaux changements avant la récupération.",
    correction: "Arrêter, inspecter le reflog et sécuriser le SHA sur une branche."
  },
  {
    title: "Je veux mettre mon travail de côté",
    context: "Un bug urgent arrive pendant une fonctionnalité inachevée.",
    problem: "La branche ne peut pas être changée proprement sans conserver les modifications.",
    commands: "git stash push -u -m · git stash list · git stash pop",
    steps: ["Vérifier git status.", "Créer un stash nommé.", "Corriger le bug.", "Revenir puis réappliquer le stash."],
    terminal: "$ git stash push -u -m \"WIP checkout\"\n$ git switch hotfix/payment\n$ git stash pop",
    lesson: "Le stash est temporaire ; un travail durable mérite une branche et un commit.",
    animation: "Les fichiers entrent dans un tiroir nommé puis reviennent.",
    mistake: "Accumuler des stashes anonymes.",
    correction: "Nommer, lister et supprimer régulièrement."
  },
  {
    title: "Je veux publier une version stable",
    context: "L'équipe valide la première version publique du site.",
    problem: "Un commit ordinaire ne communique pas clairement une version livrée.",
    commands: "git tag -a v1.0.0 · git push origin v1.0.0 · gh release create",
    steps: ["Valider tests et documentation.", "Créer un tag annoté.", "Pousser le tag.", "Créer une GitHub Release avec notes."],
    terminal: "$ git tag -a v1.0.0 -m \"First stable release\"\n$ git push origin v1.0.0",
    lesson: "Un tag est immuable et une Release explique ce qui est livré.",
    animation: "Un badge v1.0.0 se fixe sur un commit puis déclenche une boîte de livraison.",
    mistake: "Taguer avant les tests ou déplacer un tag publié.",
    correction: "Automatiser les contrôles et créer un nouveau correctif v1.0.1."
  }
];

export const domains = [
  ["Frontend", "Versionner composants, styles et configuration.", "React, Next.js, portfolio ou site vitrine.", "feature → PR → preview → review → merge", "status, switch, add, commit, push"],
  ["Backend", "Suivre API, migrations, tests et documentation.", "Node.js, Laravel, Spring Boot ou Django.", "issue → branche → tests → PR → release", "diff, log, rebase, tag, revert"],
  ["Full Stack", "Coordonner frontend, backend et contrats d'API.", "Application complète en monorepo.", "branches courtes → CI globale → déploiement", "fetch, switch, merge, stash, tag"],
  ["DevOps", "Versionner l'infrastructure et les pipelines.", "GitHub Actions, Docker et déploiement automatique.", "PR obligatoire → plan → validation → apply", "show, diff, revert, tag, blame"],
  ["Data Science", "Tracer notebooks, scripts, environnements et expériences.", "Projet Python avec petits jeux de données.", "branche expérience → métriques → review → merge", "add, commit, diff, tag, lfs"],
  ["Intelligence artificielle", "Versionner code d'entraînement, prompts et configurations.", "Pipeline ML reproductible.", "config versionnée → run → évaluation → release", "branch, tag, log, show, lfs"],
  ["Cybersécurité", "Auditer scripts, règles et rapports sans exposer de secrets.", "Scripts d'audit et documentation d'incident.", "branche privée → review restreinte → journal", "blame, log, revert, clean, diff"],
  ["QA / Testing", "Relier scénarios de test, bugs et corrections.", "Tests E2E ajoutés à chaque Pull Request.", "bug → branche reproduction → test → fix → PR", "bisect, cherry-pick, diff, log, revert"],
  ["UI/UX Design", "Documenter le design system et synchroniser son implémentation.", "Tokens, composants et décisions de design.", "issue design → branche composant → preview → review", "switch, diff, show, blame, checkout"],
  ["Gestion de projet IT", "Connecter besoins, jalons et livraisons.", "Issues, labels, milestones et GitHub Projects.", "roadmap → issue → PR liée → release", "log, tag, show, branch"],
  ["Mobile", "Versionner code, assets légers et configurations par environnement.", "Application Flutter, Android ou iOS.", "feature → build CI → test device → release", "stash, rebase, tag, clean, push"],
  ["Cloud Computing", "Gérer l'infrastructure as code avec revue.", "Terraform et scripts de déploiement.", "plan en PR → approbation → apply protégé", "diff, show, revert, tag, blame"],
  ["Open Source", "Contribuer sans accès direct au dépôt principal.", "Fork, Issue, branche, Pull Request et review publique.", "fork → clone → branche → PR → échanges", "remote, fetch, rebase, push, cherry-pick"]
];

export const githubProfessional = [
  ["Organisation et accès", "Regroupez équipes et dépôts dans une organisation. Appliquez le moindre privilège avec les rôles Read, Triage, Write, Maintain et Admin."],
  ["Public ou privé", "Un dépôt public favorise visibilité et contribution. Un dépôt privé protège le code métier, mais exige tout autant README, règles et traçabilité."],
  ["README professionnel", "Présentez problème, solution, installation, scripts, architecture, contribution, licence et statut du projet."],
  ["Issues, labels et milestones", "Une Issue décrit un besoin observable. Les labels classent nature et priorité ; les milestones regroupent les objectifs d'une version."],
  ["Pull Requests et review", "Une PR doit être ciblée, testable, liée à une Issue et accompagnée d'un contexte. La review juge le code et partage la connaissance."],
  ["Protection de branches", "Protégez main : PR obligatoire, checks réussis, review approuvée, conversations résolues et interdiction du force push."],
  ["Actions et secrets", "Placez les secrets dans GitHub Secrets, limitez leurs permissions et évitez de les afficher dans les logs."],
  ["Pages et Releases", "GitHub Pages publie documentation et sites statiques. Releases associe notes, artefacts et tag de version."],
  ["Fork, Discussions et Wiki", "Fork sert à contribuer sans droit d'écriture. Discussions accueille les échanges ouverts ; Wiki centralise une documentation longue."],
  ["Projects", "Reliez roadmap, Issues et Pull Requests dans des vues table, board ou planning, avec champs de priorité et statut."],
  ["Profil professionnel", "Épinglez des projets aboutis, soignez README et descriptions, montrez tests, documentation, contributions et historique régulier."]
];

export const miniProjects = [
  ["Portfolio personnel versionné", "Créer, versionner et publier un portfolio.", "init, add, commit, switch, merge, remote, push, tag", "Dépôt public, README, Pages et tag v1.0.0", "Historique lisible, responsive, lien public fonctionnel"],
  ["Site vitrine collaboratif", "Travailler à deux avec branches, Pull Requests et conflit volontaire.", "clone, switch, fetch, rebase, merge, push", "Deux PR relues et journal de résolution du conflit", "Aucun travail direct sur main et reviews argumentées"],
  ["API backend versionnée", "Gérer routes, tests, documentation et releases.", "branch, stash, rebase, tag, revert", "API testée, README d'installation et release", "Tests CI réussis et secrets absents du dépôt"],
  ["Open source simulé", "Pratiquer fork, Issues, contribution et review.", "remote, fetch, rebase, push, cherry-pick", "Fork, Issue, PR et guide CONTRIBUTING", "PR petite, reproductible et correctement documentée"],
  ["Déploiement automatique", "Introduire le CI/CD avec GitHub Actions.", "add, commit, push, tag, revert", "Workflow YAML, tests et déploiement Pages", "Échec bloquant, secrets protégés et rollback documenté"]
];

export const nextCourses = [
  ["HTML / CSS / JavaScript avancé", "Construire des interfaces plus solides.", "Bases du Web", "Un site responsive accessible", "Chaque fonctionnalité passe par une branche et une PR."],
  ["React ou Next.js", "Créer des applications modernes par composants.", "JavaScript ES6", "Un dashboard ou portfolio dynamique", "Git organise composants, versions et previews."],
  ["Node.js / Express", "Construire des API backend.", "JavaScript", "Une API REST documentée", "Git suit routes, tests et migrations."],
  ["SQL / MongoDB", "Modéliser et interroger les données.", "Backend débutant", "Une application avec persistance", "Les migrations sont versionnées avec le code."],
  ["DevOps débutant", "Relier développement, qualité et livraison.", "Git/GitHub", "Un pipeline de livraison", "Le dépôt devient la source du déploiement."],
  ["GitHub Actions", "Automatiser tests, build et publication.", "GitHub et YAML", "Une CI avec déploiement Pages", "Chaque push ou PR déclenche un workflow."],
  ["Docker", "Standardiser l'environnement.", "Terminal et application simple", "Une application conteneurisée", "Dockerfile et compose sont versionnés."],
  ["CI/CD", "Livrer vite avec des contrôles fiables.", "Tests et GitHub Actions", "Pipeline staging puis production", "Tags et branches pilotent les releases."],
  ["Contribution Open Source", "Apprendre à contribuer à de vrais projets.", "Git intermédiaire", "Une contribution publique acceptée", "Fork, rebase, PR et review deviennent quotidiens."],
  ["Agile / Scrum", "Comprendre l'organisation d'une équipe.", "Aucun prérequis technique", "Un sprint simulé dans GitHub Projects", "Issues, PR et milestones matérialisent le travail."]
];

export const commonErrors = [
  ["fatal: not a git repository", "La commande est lancée hors d'un dépôt.", "Revenir à la racine ou lancer git init.", "Vérifier le chemin avant d'initialiser pour éviter un dépôt imbriqué."],
  ["nothing added to commit", "Aucun changement n'est dans le staging.", "git add <fichier> puis git commit.", "Inspecter git diff et git diff --staged avant le commit."],
  ["src refspec main does not match any", "main n'existe pas ou ne contient aucun commit.", "Créer un commit puis git branch -M main.", "Vérifier git branch --show-current avant le push."],
  ["remote origin already exists", "Un remote nommé origin existe déjà.", "git remote -v puis git remote set-url origin <url>.", "Ne pas ajouter un second origin sans inspecter le premier."],
  ["failed to push some refs", "Le distant a avancé ou la branche est protégée.", "git fetch puis intégrer les changements.", "Lire le détail du rejet ; ne pas forcer par réflexe."],
  ["CONFLICT (content): Merge conflict", "Deux historiques modifient la même zone.", "Résoudre les marqueurs, tester, git add puis commit.", "Synchroniser souvent et garder des branches courtes."],
  ["untracked files would be overwritten", "Des fichiers locaux non suivis seraient remplacés.", "Déplacer, supprimer ou commiter ces fichiers.", "Toujours lire leur liste avant toute suppression."],
  ["You are in 'detached HEAD' state", "HEAD pointe sur un commit, pas une branche.", "git switch -c rescue-work.", "Créer une branche avant de commiter un travail à conserver."],
  ["Permission denied (publickey)", "GitHub ne reconnaît pas la clé SSH.", "Tester ssh -T git@github.com et configurer la bonne clé.", "Utiliser un agent SSH et une clé associée au bon compte."],
  ["Authentication failed", "Identifiants HTTPS ou jeton invalides.", "Se reconnecter avec Git Credential Manager.", "Ne jamais utiliser le mot de passe du compte comme jeton Git."],
  ["rejected non-fast-forward", "La branche distante contient des commits absents localement.", "git pull --rebase puis git push.", "Faire fetch et inspecter avant l'intégration."],
  ["cannot pull with rebase: You have unstaged changes", "Le répertoire n'est pas propre.", "Committer ou stasher avant pull --rebase.", "Éviter de synchroniser au milieu de changements non sécurisés."],
  ["LF will be replaced by CRLF", "Git adapte les fins de ligne au système.", "Configurer core.autocrlf et ajouter .gitattributes.", "Versionner une politique de fins de ligne dans le dépôt."],
  [".env poussé par erreur", "Un secret a été suivi et publié.", "Révoquer le secret puis git rm --cached .env.", "Ajouter .env au .gitignore dès la création du projet."],
  ["node_modules poussé par erreur", "Les dépendances générées sont suivies.", "git rm -r --cached node_modules.", "Versionner package.json et le lockfile, jamais node_modules."]
];

export const commandDetails = {
  "git init": ["Créer un dépôt local.", "Au démarrage d'un projet existant.", "Ajoute le dossier caché .git sans modifier vos fichiers.", "Initialiser dans le mauvais sous-dossier.", "Vérifier la racine avec pwd puis git status."],
  "git clone <url>": ["Copier un dépôt et son historique.", "Pour rejoindre un projet distant.", "Crée le dossier, le dépôt local et le remote origin.", "Cloner dans un dossier déjà rempli.", "Cloner puis lire README et branches avant de modifier."],
  "git config": ["Définir identité et comportement.", "À l'installation ou par projet.", "Influence l'auteur des commits et les préférences Git.", "Configurer un e-mail différent de GitHub.", "Contrôler avec git config --list --show-origin."],
  "git status": ["Comprendre l'état courant.", "Avant et après chaque action importante.", "Ne modifie rien ; indique branche, staging et fichiers.", "Ignorer les messages et agir à l'aveugle.", "En faire le tableau de bord du workflow."],
  "git add": ["Préparer le prochain commit.", "Après avoir relu une modification.", "Copie la version choisie dans le staging.", "Ajouter tous les fichiers sans inspection.", "Préférer git add <fichier> ou git add -p."],
  "git commit": ["Enregistrer un snapshot.", "Quand un changement cohérent est prêt.", "Crée un objet durable dans l'historique local.", "Mélanger plusieurs intentions.", "Écrire un message précis et garder le commit atomique."],
  "git diff": ["Comparer des versions.", "Avant add, commit, merge ou review.", "Lecture seule ; montre les lignes ajoutées et retirées.", "Oublier --staged après git add.", "Lire les deux vues : git diff et git diff --staged."],
  "git restore": ["Restaurer un fichier ou retirer du staging.", "Pour annuler un changement non commité.", "Peut écraser le contenu local ciblé.", "Restaurer sans sauvegarder un travail utile.", "Vérifier git diff avant toute restauration."],
  "git log": ["Explorer l'historique.", "Pour enquêter ou préparer une release.", "Lecture seule.", "Lire uniquement les messages sans graphe.", "Utiliser --oneline --graph --decorate --all."],
  "git show": ["Inspecter un commit ou tag.", "Pour comprendre une modification précise.", "Lecture seule.", "Confondre SHA et nom de fichier.", "Commencer par git show --stat <sha>."],
  "git blame": ["Identifier l'origine de chaque ligne.", "Pour retrouver le contexte d'une décision.", "Lecture seule.", "Chercher un responsable plutôt qu'une explication.", "Ouvrir ensuite le commit et la PR associés."],
  "git reflog": ["Retrouver les mouvements locaux de HEAD.", "Après reset, rebase ou commit perdu.", "Lecture seule et locale.", "Attendre trop longtemps avant la récupération.", "Créer immédiatement une branche sur le SHA retrouvé."],
  "git branch": ["Lister ou gérer les branches.", "Pour inspecter, créer ou supprimer.", "Déplace ou crée des pointeurs, pas les commits.", "Supprimer une branche non fusionnée.", "Vérifier avec --merged avant -d."],
  "git switch": ["Changer de branche.", "Pour isoler une tâche.", "Déplace HEAD et adapte les fichiers.", "Changer avec des modifications incompatibles.", "Créer avec git switch -c feature/nom."],
  "git merge": ["Intégrer une branche.", "Quand une fonctionnalité validée rejoint sa cible.", "Combine les historiques et peut créer un commit.", "Fusionner depuis la mauvaise branche.", "Lire la branche courante avant le merge."],
  "git rebase": ["Rejouer des commits sur une nouvelle base.", "Pour actualiser une branche locale.", "Réécrit les SHA des commits rejoués.", "Rebaser une branche partagée sans coordination.", "Réserver le rebase aux commits locaux maîtrisés."],
  "git remote": ["Gérer les dépôts distants.", "Pour connecter ou inspecter GitHub.", "Modifie la configuration locale, pas le serveur.", "Écraser une URL sans la vérifier.", "Utiliser git remote -v avant set-url."],
  "git fetch": ["Télécharger les références distantes.", "Avant de comparer ou intégrer.", "Met à jour origin/* sans toucher à la branche courante.", "Croire que les fichiers locaux sont fusionnés.", "Fetch d'abord, inspecter ensuite."],
  "git pull": ["Télécharger puis intégrer.", "Quand on accepte l'intégration immédiate.", "Équivaut à fetch puis merge/rebase.", "Pull avec un répertoire sale.", "Préférer pull --rebase sur une branche personnelle propre."],
  "git push": ["Publier les commits.", "Après tests et commits locaux.", "Met à jour une branche distante si les règles l'autorisent.", "Forcer sur une branche partagée.", "Configurer l'upstream avec -u au premier push."],
  "git stash": ["Mettre temporairement de côté.", "Pour interrompre un travail court.", "Stocke des changements hors de la branche.", "Utiliser le stash comme stockage durable.", "Nommer avec push -m et inclure -u si nécessaire."],
  "git tag": ["Marquer une version.", "Après validation d'une release.", "Crée une référence stable sur un commit.", "Déplacer un tag déjà publié.", "Utiliser un tag annoté et SemVer."],
  "git revert": ["Annuler par un nouveau commit.", "Pour un changement déjà partagé.", "Préserve l'historique et ajoute l'inverse.", "S'attendre à effacer le commit original.", "Préférer revert sur main."],
  "git reset": ["Déplacer HEAD ou modifier le staging.", "Pour corriger un historique local.", "Selon le mode, conserve ou détruit les changements.", "Utiliser --hard sans sauvegarde.", "Commencer par --soft et vérifier le reflog."],
  "git cherry-pick": ["Appliquer un commit précis.", "Pour transférer un correctif ciblé.", "Crée un nouveau commit avec un nouveau SHA.", "Copier une longue série de commits liés.", "Préférer merge/rebase quand toute la branche est utile."],
  "git clean": ["Supprimer les fichiers non suivis.", "Pour nettoyer des fichiers générés.", "Suppression irréversible par Git.", "Lancer -fd sans aperçu.", "Toujours commencer par git clean -nd."],
  "git rm": ["Supprimer et préparer la suppression.", "Quand un fichier suivi doit disparaître.", "Supprime du disque et du staging, sauf --cached.", "Utiliser rm seul puis oublier le staging.", "Employer --cached pour conserver localement."],
  "git mv": ["Déplacer ou renommer un fichier suivi.", "Pour une réorganisation.", "Prépare déplacement et suppression en une action.", "Croire que Git stocke explicitement le renommage.", "Vérifier le diff et les imports après déplacement."],
  "git checkout": ["Ancienne commande polyvalente.", "Pour maintenir des scripts historiques.", "Peut changer de branche ou restaurer selon les arguments.", "Confondre les deux usages.", "Préférer switch et restore pour être explicite."],
  "git --version": ["Vérifier l'installation.", "Avant toute configuration.", "Lecture seule.", "Confondre Git et GitHub CLI.", "Mettre Git à jour avec le gestionnaire du système."]
};

const makeLab = (id, title, level, objective, terminal, answer, options, solution, steps, error, result) => ({
  id,
  title,
  level,
  objective,
  context: "Vous travaillez sur un projet web réaliste et devez produire un historique propre et vérifiable.",
  prompt: "Quelle action répond correctement à la mission ?",
  terminal,
  answer,
  options,
  solution,
  steps,
  commonError: error,
  expected: result
});

export const advancedLabs = [
  makeLab(11, "Créer un dépôt propre", "Débutant", "Initialiser un projet avec README et .gitignore.", "$ mkdir site-vitrine\n$ cd site-vitrine\n$ ___", "git init", ["git init", "git start", "git remote"], "`git init` crée le dépôt. Ajoutez ensuite README.md et .gitignore avant le premier commit.", ["Créer le dossier.", "Initialiser Git.", "Ajouter README et .gitignore.", "Vérifier avec git status."], "Initialiser dans un sous-dossier.", "Un dépôt à la bonne racine avec deux fichiers préparés."),
  makeLab(12, "Configurer son identité Git", "Débutant", "Associer un nom et un e-mail fiables aux commits.", "$ git config --global user.name \"Nour\"\n$ ___", "git config --global user.email \"nour@example.com\"", ["git config --global user.email \"nour@example.com\"", "git email nour@example.com", "git user --email"], "Configurez l'e-mail puis contrôlez avec `git config --list --show-origin`.", ["Définir le nom.", "Définir l'e-mail.", "Lire la source des valeurs.", "Adapter localement si nécessaire."], "Utiliser un e-mail non lié au compte GitHub.", "Les prochains commits portent la bonne identité."),
  makeLab(13, "Faire un premier commit", "Débutant", "Créer un premier snapshot cohérent.", "$ git add README.md .gitignore\n$ ___", "git commit -m \"chore: initialize project\"", ["git commit -m \"chore: initialize project\"", "git save", "git push"], "Le commit enregistre exactement le contenu préparé dans le staging.", ["Lire git status.", "Ajouter les fichiers.", "Lire git diff --staged.", "Créer le commit."], "Commiter sans vérifier le staging.", "Un commit initial lisible dans git log --oneline."),
  makeLab(14, "Corriger un commit oublié", "Intermédiaire", "Ajouter un fichier oublié au dernier commit local.", "$ git add favicon.svg\n$ ___", "git commit --amend --no-edit", ["git commit --amend --no-edit", "git reset --hard", "git merge favicon.svg"], "Après avoir ajouté le fichier, `--amend --no-edit` remplace le dernier commit sans changer son message.", ["Vérifier que le commit n'est pas partagé.", "Ajouter le fichier oublié.", "Amender.", "Contrôler avec git show."], "Amender un commit déjà poussé sur une branche partagée.", "Le dernier commit contient aussi favicon.svg."),
  makeLab(15, "Créer une branche feature", "Débutant", "Isoler le développement d'une navigation.", "$ git switch main\n$ ___", "git switch -c feature/navigation", ["git switch -c feature/navigation", "git merge navigation", "git push main"], "La commande crée la branche depuis main et la rend active.", ["Synchroniser main.", "Créer la branche.", "Vérifier la branche courante.", "Commiter la fonctionnalité."], "Créer la branche depuis une base obsolète.", "La fonctionnalité possède sa branche dédiée."),
  makeLab(16, "Fusionner une branche", "Intermédiaire", "Intégrer une feature validée dans main.", "$ git switch main\n$ ___", "git merge feature/navigation", ["git merge feature/navigation", "git add feature/navigation", "git clone feature/navigation"], "On fusionne dans la branche courante : main doit donc être active.", ["Tester la feature.", "Revenir sur main.", "Mettre main à jour.", "Fusionner et retester."], "Lancer merge depuis la branche feature.", "main contient les commits de navigation."),
  makeLab(17, "Résoudre un conflit", "Intermédiaire", "Réconcilier deux titres concurrents.", "$ # marqueurs supprimés et contenu testé\n$ ___", "git add index.html", ["git add index.html", "git init index.html", "git clean index.html"], "Ajouter le fichier signale à Git que le conflit est résolu ; terminez ensuite le merge.", ["Lire git status.", "Comparer les deux intentions.", "Modifier le fichier.", "Ajouter, tester et commiter."], "Conserver accidentellement les marqueurs.", "Le merge est terminé et le HTML reste valide."),
  makeLab(18, "Ajouter un .gitignore", "Débutant", "Exclure dépendances, secrets et builds.", "$ printf \"node_modules/\\n.env\\nout/\\n\" > .gitignore\n$ ___", "git add .gitignore", ["git add .gitignore", "git add .env", "git push node_modules"], "Versionnez le fichier .gitignore, jamais les secrets qu'il protège.", ["Identifier les fichiers générés.", "Créer .gitignore.", "Tester avec git check-ignore.", "Commiter la règle."], "Croire qu'il retire les fichiers déjà suivis.", "Les fichiers sensibles ou générés restent hors du staging."),
  makeLab(19, "Retirer node_modules déjà poussé", "Intermédiaire", "Nettoyer l'index sans supprimer les dépendances locales.", "$ echo node_modules/ >> .gitignore\n$ ___", "git rm -r --cached node_modules", ["git rm -r --cached node_modules", "git clean -fd node_modules", "git revert node_modules"], "`--cached` retire le dossier de l'index tout en le conservant sur le disque.", ["Ajouter la règle d'ignore.", "Retirer de l'index.", "Commiter.", "Pousser le nettoyage."], "Supprimer seulement le dossier local.", "Le dépôt distant ne contient plus node_modules."),
  makeLab(20, "Connecter un dépôt local à GitHub", "Intermédiaire", "Ajouter origin et publier main.", "$ git remote add origin https://github.com/user/site.git\n$ ___", "git push -u origin main", ["git push -u origin main", "git clone origin main", "git add origin"], "Le premier push avec `-u` configure le suivi entre main et origin/main.", ["Créer le dépôt GitHub vide.", "Ajouter origin.", "Vérifier l'URL.", "Pousser main."], "Créer deux historiques initiaux différents.", "main est visible sur GitHub et suit origin/main."),
  makeLab(21, "Corriger src refspec main", "Intermédiaire", "Diagnostiquer un premier push impossible.", "$ git add .\n$ git commit -m \"chore: initial commit\"\n$ ___", "git branch -M main", ["git branch -M main", "git reset --hard main", "git clean main"], "Créez d'abord un commit puis assurez le nom main avant le push.", ["Vérifier l'existence d'un commit.", "Lire la branche courante.", "Renommer si nécessaire.", "Pousser avec -u."], "Modifier le remote alors que le problème est local.", "Le push de main réussit."),
  makeLab(22, "Créer une Pull Request", "Intermédiaire", "Proposer une branche documentée vers main.", "$ git push -u origin feature/contact\n$ ___", "gh pr create", ["gh pr create", "git pr add", "git merge --remote"], "Une PR explique le contexte, la solution, les tests et le résultat attendu.", ["Pousser la branche.", "Ouvrir la PR.", "Lier l'Issue.", "Demander une review."], "Créer une PR trop large ou sans description.", "Une PR ciblée et testable est ouverte."),
  makeLab(23, "Faire une code review", "Avancé", "Relire le comportement sans personnaliser la critique.", "$ gh pr checkout 42\n$ npm test\n$ ___", "gh pr review 42 --approve", ["gh pr review 42 --approve", "git approve 42", "git push --force"], "Approuvez seulement après lecture, exécution des tests et vérification des critères.", ["Comprendre le besoin.", "Lire le diff.", "Tester.", "Commenter puis approuver ou demander des changements."], "Valider le style sans vérifier le comportement.", "Une review argumentée et traçable."),
  makeLab(24, "Créer un tag v1.0.0", "Intermédiaire", "Marquer et publier une version stable.", "$ git tag -a v1.0.0 -m \"First stable release\"\n$ ___", "git push origin v1.0.0", ["git push origin v1.0.0", "git commit v1.0.0", "git branch v1.0.0"], "Un tag local doit être poussé explicitement pour apparaître sur GitHub.", ["Tester main.", "Créer le tag annoté.", "Pousser le tag.", "Créer les notes de release."], "Taguer un commit non validé.", "Le tag v1.0.0 est visible dans les Releases."),
  makeLab(25, "Déployer avec GitHub Pages", "Avancé", "Publier un site statique depuis le dépôt.", "$ npm run build\n$ npm run deploy\n$ ___", "Vérifier l'URL GitHub Pages", ["Vérifier l'URL GitHub Pages", "Committer node_modules", "Supprimer la branche main"], "Après le workflow ou le script de déploiement, contrôlez l'URL, les assets et la basePath.", ["Configurer Pages.", "Construire le site.", "Déployer.", "Tester navigation et responsive."], "Oublier le basePath d'un site de projet.", "Le site est public et toutes les routes fonctionnent.")
];
