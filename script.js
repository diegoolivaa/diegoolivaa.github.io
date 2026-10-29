const translations = {
    en: {
        "[data-i18n='nav-about']": "About",
        "[data-i18n='nav-projects']": "Projects",
        "[data-i18n='nav-contact']": "Contact",
        "#pill": "Junior developer",
        ".bio h1": "Systems & Web Developer",
        ".bio p": "I am an Information Technology student focused on building efficient low-level software and modern web applications. I bridge the gap between memory-safe systems programming and high-performance, clean web interfaces.",
        ".projects .section-title": "My Projects",
        ".project-card:nth-child(1) p": "My first GitHub Repo! It is a simple website that displays the current time.",
        ".project-card:nth-child(2) p": "A Python app that lets you download the video or the audio of a YouTube video.",
        ".project-card:nth-child(3) p": "My first low-level project! As the name says, this is a Chip8 Emulator made in C with SDL2.",
        ".project-card:nth-child(4) p": "Grip is a blazing fast CLI disk usage analyzer written in Rust.",
        ".project-card:nth-child(5) p": "Sortit is an automatic file organizer written in Rust.",
        ".project-card:nth-child(6) p": "Sysfetch is a neofetch-style system info tool for Windows (and Linux), written in Rust.",
        ".project-card:nth-child(7) h3": "Webjack (my latest project!)",
        ".project-card:nth-child(7) p": "Webjack is a simple web implementation of the famous casino game Blackjack.",
        ".project-card:nth-child(8) h3": "Collab on mariowOS",
        ".project-card:nth-child(8) p": "I am currently working on with my friend.",
        ".project-card:nth-child(9) p": "Simple OS that I am working on! No utility yet, by the way.",
        ".project-links a[href*='github.io']": "Check It Out!",
        ".contact .section-title": "Contact",
        ".contact-intro": "Want to work together or just say hi? Reach me here.",
        ".contact-links a:first-child": "Email"
    },
    it: {
        "[data-i18n='nav-about']": "Chi sono",
        "[data-i18n='nav-projects']": "Progetti",
        "[data-i18n='nav-contact']": "Contatti",
        "#pill": "Sviluppatore junior",
        ".bio h1": "Sviluppatore di Sistemi e Web",
        ".bio p": "Sono uno studente di Informatica e mi concentro sulla creazione di software a basso livello efficiente e di applicazioni web moderne. Collego la programmazione di sistema sicura per la memoria con interfacce web pulite e ad alte prestazioni.",
        ".projects .section-title": "I Miei Progetti",
        ".project-card:nth-child(1) p": "Il mio primo repository GitHub! È un semplice sito che mostra l'ora attuale.",
        ".project-card:nth-child(2) p": "Un'app Python che permette di scaricare il video o l'audio di un video di YouTube.",
        ".project-card:nth-child(3) p": "Il mio primo progetto a basso livello! Come dice il nome, è un emulatore Chip8 fatto in C con SDL2.",
        ".project-card:nth-child(4) p": "Grip è un analizzatore da riga di comando dell'uso del disco, velocissimo, scritto in Rust.",
        ".project-card:nth-child(5) p": "Sortit è un organizzatore automatico di file scritto in Rust.",
        ".project-card:nth-child(6) p": "Sysfetch è uno strumento in stile neofetch per le informazioni di sistema su Windows (e Linux), scritto in Rust.",
        ".project-card:nth-child(7) h3": "Webjack (il mio ultimo progetto!)",
        ".project-card:nth-child(7) p": "Webjack è una semplice versione web del famoso gioco da casinò Blackjack.",
        ".project-card:nth-child(8) h3": "Collaborazione su mariowOS",
        ".project-card:nth-child(8) p": "Ci sto lavorando in questo momento con un mio amico.",
        ".project-card:nth-child(9) p": "Un semplice sistema operativo a cui sto lavorando! Per ora nessuna utilità, comunque.",
        ".project-links a[href*='github.io']": "Provalo!",
        ".contact .section-title": "Contatti",
        ".contact-intro": "Vuoi collaborare o semplicemente salutare? Scrivimi qui.",
        ".contact-links a:first-child": "Email"
    },
    fr: {
        "[data-i18n='nav-about']": "À propos",
        "[data-i18n='nav-projects']": "Projets",
        "[data-i18n='nav-contact']": "Contact",
        "#pill": "Développeur junior",
        ".bio h1": "Développeur Systèmes et Web",
        ".bio p": "Je suis étudiant en informatique et je me concentre sur la création de logiciels bas niveau efficaces et d'applications web modernes. Je fais le lien entre la programmation système sûre en mémoire et des interfaces web propres et performantes.",
        ".projects .section-title": "Mes Projets",
        ".project-card:nth-child(1) p": "Mon premier dépôt GitHub ! C'est un simple site qui affiche l'heure actuelle.",
        ".project-card:nth-child(2) p": "Une application Python qui permet de télécharger la vidéo ou l'audio d'une vidéo YouTube.",
        ".project-card:nth-child(3) p": "Mon premier projet bas niveau ! Comme son nom l'indique, c'est un émulateur Chip8 écrit en C avec SDL2.",
        ".project-card:nth-child(4) p": "Grip est un analyseur d'utilisation du disque en ligne de commande, ultra rapide, écrit en Rust.",
        ".project-card:nth-child(5) p": "Sortit est un organisateur de fichiers automatique écrit en Rust.",
        ".project-card:nth-child(6) p": "Sysfetch est un outil d'informations système façon neofetch pour Windows (et Linux), écrit en Rust.",
        ".project-card:nth-child(7) h3": "Webjack (mon dernier projet !)",
        ".project-card:nth-child(7) p": "Webjack est une simple version web du célèbre jeu de casino Blackjack.",
        ".project-card:nth-child(8) h3": "Collaboration sur mariowOS",
        ".project-card:nth-child(8) p": "Je travaille dessus en ce moment avec un ami.",
        ".project-card:nth-child(9) p": "Un système d'exploitation simple sur lequel je travaille ! Pas encore d'utilité, d'ailleurs.",
        ".project-links a[href*='github.io']": "Découvrir !",
        ".contact .section-title": "Contact",
        ".contact-intro": "Envie de collaborer ou juste de dire bonjour ? Écris-moi ici.",
        ".contact-links a:first-child": "Email"
    }
};

const languageSelect = document.getElementById("language-button");

function setLanguage(lang) {
    const dictionary = translations[lang];
    if (!dictionary) return;

    for (const selector in dictionary) {
        const element = document.querySelector(selector);
        if (element) element.textContent = dictionary[selector];
    }

    document.documentElement.lang = lang;
    languageSelect.value = lang;
    localStorage.setItem("language", lang);
}

languageSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value);
});

setLanguage(localStorage.getItem("language") || "en");

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-element").forEach((element) => {
    fadeObserver.observe(element);
});