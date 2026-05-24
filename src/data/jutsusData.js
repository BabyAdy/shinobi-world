export const jutsusData = [
  {
    id: "sharingan",
    name: "Sharingan",
    category: ["Dojutsu"],
    classification: ["Kekkei Genkai", "Dojutsu"],
    rank: "",
    nature: "",
    class: "Supplementary",
    clans: ["Uchiha", "Otsutsuki"],
    range: "",
    image: "https://i.imgur.com/eKb4Lb2.png", // Placeholder image
    parentAbilities: [], // Sharingan nu are un parent direct in contextul dat
    derivedAbilities: ["mangekyo-sharingan", "izanagi", "izanami"],
    specificAbilities: ["genjutsu-sharingan", "copy-technique"], // Exemple de abilități specifice Sharinganului
    relatedAbilities: [],
    description: "Un dōjutsu și kekkei genkai al clanului Uchiha, care oferă utilizatorului abilități vizuale puternice, inclusiv copierea tehnicilor și genjutsu.",
    users: [
      { id: "indra-otsutsuki", styleImage: "https://i.imgur.com/S3bPCZ2.png" },
      { id: "hagoromo-otsutsuki", styleImage: "https://i.imgur.com/Ngf5B8Y.png" },
      { id: "kakashi-hatake", styleImage: "https://i.imgur.com/nlkc0My.png" },
      { id: "sasuke-uchiha", styleImage: "https://i.imgur.com/rdXfdaU.png" },
      { id: "itachi-uchiha", styleImage: "https://i.imgur.com/X8HCtZi.png" },
      { id: "sarada-uchiha", styleImage: "https://i.imgur.com/JvSkbTe.png" },
      { id: "shisui-uchiha", styleImage: "https://i.imgur.com/GN4K1Yk.png" },
      { id: "danzō-shimura", styleImage: "https://i.imgur.com/YZThzZw.png" },
      { id: "baru-uchiha", styleImage: "https://i.imgur.com/r9Mf9j7.png" },
      { id: "fugaku-uchiha", styleImage: "https://i.imgur.com/r9Mf9j7.png" },
      { id: "hikaku-uchiha", styleImage: "https://i.imgur.com/r9Mf9j7.png" },
      { id: "inabi-uchiha", styleImage: "https://i.imgur.com/DmtcA7g.png" },
      { id: "izumi-uchiha", styleImage: "https://i.imgur.com/bym95j0.png" },
      { id: "izuna-uchiha", styleImage: "https://i.imgur.com/r9Mf9j7.png" },
      { id: "kagami-uchiha", styleImage: "https://i.imgur.com/r9Mf9j7.png" },
      { id: "madara-uchiha", styleImage: "https://i.imgur.com/ODV3SvH.png" },
      { id: "naka-uchiha", styleImage: "https://i.imgur.com/r9Mf9j7.png" },
      { id: "naori-uchiha", styleImage: "https://i.imgur.com/r9Mf9j7.png" },
      { id: "obito-uchiha", styleImage: "https://i.imgur.com/6rlFBF2.png" },
      { id: "rai-uchiha", styleImage: "https://i.imgur.com/r9Mf9j7.png" },
      { id: "setsuna-uchiha", styleImage: "https://i.imgur.com/r9Mf9j7.png" },
      { id: "shin-uchiha", styleImage: "https://i.imgur.com/ee5YKcC.png" },
      { id: "tajima-uchiha", styleImage: "https://i.imgur.com/r9Mf9j7.png" },
      { id: "tekka-uchiha", styleImage: "https://i.imgur.com/r9Mf9j7.png" },
      { id: "yashiro-uchiha", styleImage: "https://i.imgur.com/r9Mf9j7.png" },
      { id: "zetsu-black", styleImage: "https://i.imgur.com/tQ9qJNI.png" },
    ]
  },
  {
    id: "mangekyo-sharingan",
    name: "Mangekyō Sharingan",
    category: ["Dojutsu"],
    classification: ["Kekkei Genkai", "Dojutsu"],
    rank: "",
    nature: "",
    class: "Supplementary",
    clans: ["Uchiha"],
    range: "All ranges",
    image: "https://i.imgur.com/HaRCKR4.png", // Placeholder image
    parentAbilities: ["sharingan"],
    derivedAbilities: ["eternal-mangekyo-sharingan", "amaterasu", "susanoo", "tsukuyomi", "kamui"],
    specificAbilities: ["amaterasu", "tsukuyomi", "susanoo", "kamui"], // Abilități specifice Mangekyō Sharinganului
    relatedAbilities: [],
    description: "O formă avansată a Sharinganului, activată prin experimentarea unei traume semnificative, oferind abilități unice fiecărui utilizator.",
    users: [
      { id: "sasuke-uchiha", styleImage: "https://i.imgur.com/sasuke-mangekyo.png" },
      { id: "itachi-uchiha", styleImage: "https://i.imgur.com/itachi-mangekyo.png" },
      { id: "kakashi-hatake", styleImage: "https://i.imgur.com/kakashi-mangekyo.png" }
    ]
  },
  {
    id: "eternal-mangekyo-sharingan",
    name: "Eternal Mangekyō Sharingan",
    category: ["Dojutsu"],
    classification: ["Kekkei Genkai", "Dojutsu"],
    rank: "",
    nature: "",
    class: "Supplementary",
    clans: ["Uchiha", "Otsutsuki"],
    range: "",
    image: "https://i.imgur.com/Ci2KQFg.png",
    parentAbilities: ["mangekyo-sharingan"],
    specificAbilities: [],
    derivedAbilities: [],
    relatedAbilities: [],
    description: "",
    users: [],
  },
  {
    id: "rinnegan",
    name: "Rinnegan",
    category: ["Dojutsu"],
    classification: ["Kekkei Genkai", "Dojutsu"],
    rank: "",
    nature: "",
    class: "Supplementary",
    clans: ["Uchiha", "Otsutsuki"],
    range: "All ranges",
    image: "https://i.imgur.com/kY8Qz9q.png", // Placeholder image
    parentAbilities: [], // Rinnegan nu are un parent direct in contextul dat
    specificAbilities: [],
    derivedAbilities: ["Six Paths Technique"],
    relatedAbilities: ["Sharingan", "Byakugan"],
    description: "Considerat cel mai puternic dintre cele Trei Mari Dōjutsu, oferă utilizatorului o gamă largă de abilități divine.",
    users: [
      { id: "sasuke-uchiha", styleImage: "https://i.imgur.com/sasuke-rinnegan.png" }
    ]
  },
  {
    id: "rinne-sharingan",
    name: "Rinne Sharingan",
    category: ["Dojutsu"],
    classification: ["Kekkei Genkai", "Dojutsu"],
    image: "",
    specificAbilities: [],
    description: "",
    users: [],
  },  
  {
    id: "byakugan",
    name: "Byakugan",
    category: ["Dojutsu"],
    classification: ["Kekkei Genkai", "Dojutsu"],
    rank: "",
    nature: "",
    class: "Supplementary",
    clans: ["Hyuga"],
    range: "All ranges",
    specificAbilities: ["gentle-fist", "eight-trigrams-sixty-four-palms"], // Exemple
    image: "https://i.imgur.com/3G1rYT0.png", // Placeholder image
    description: "Un dōjutsu al clanului Hyūga, care oferă o vedere de 360 de grade și capacitatea de a vedea sistemul de circulație a chakrei.",
    users: [
      { id: "hinata-hyuga", styleImage: "https://i.imgur.com/hinata-byakugan.png" },
      { id: "himawari-uzumaki", styleImage: "https://i.imgur.com/himawari-byakugan.png" }
    ]
  },
  {
    id: "jogan",
    name: "Jōgan",
    category: ["Dojutsu"],
    classification: ["Kekkei Genkai", "Dojutsu"],
    rank: "",
    nature: "",
    class: "Supplementary",
    clans: ["Uzumaki", "Otsutsuki"],
    range: "All ranges",
    specificAbilities: [],
    image: "https://i.imgur.com/vhViTiq.png", // Placeholder image
    description: "Un dōjutsu misterios, unic pentru Boruto Uzumaki, cu abilități legate de spațiu-timp și detectarea chakrei negative.",
    users: [
      { id: "boruto-uzumaki", styleImage: "https://i.imgur.com/boruto-jogan.png" }
    ]
  },
  {
    id: "kokugan",
    name: "Kokugan",
    category: ["Dojutsu"],
    classification: ["Kekkei Genkai", "Dojutsu"],
    class: "Supplementary",
    clans: ["Otsutsuki"],
    specificAbilities: [],
    range: "All ranges",
    image: "https://i.imgur.com/38cshGT.png", // Placeholder image
    description: "Un dōjutsu unic, manifestat de Kawaki, care îi permite să absoarbă chakra și să utilizeze tehnici spațiu-timp.",
    users: [
      { id: "kawaki", styleImage: "https://i.imgur.com/kawaki-kokugan.png" }
    ]
  },
  {
    id: "ketsuryūgan",
    name: "Ketsuryūgan",
    category: ["Dojutsu"],
    classification: ["Kekkei Genkai", "Dojutsu"],
    clans: ["Chinoike"],
    specificAbilities: [],
    image: "https://i.imgur.com/LYLSwZt.png",
    description: "",
    users: [],
  },
  {
    id: "ranmaru",
    name: "Ranmaru",
    category: ["Dojutsu"],
    classification: ["Kekkei Genkai", "Dojutsu"],
    image: "https://i.imgur.com/zYgRo1O.png",
    specificAbilities: [],
    description: "",
    users: [],
  },
  {
    id: "rasengan",
    name: "Rasengan",
    category: ["Ninjutsu"],
    classification: [],
    rank: "A-Rank",
    nature: "Wind (Affinity)",
    class: "Offensive",
    clans: ["Uzumaki", "Namikaze"],
    range: "Short range (0-5m)",
    specificAbilities: [],
    image: "https://i.imgur.com/p1PPxfX.png", // Placeholder image
    description: "O sferă de chakra rotativă formată în palma utilizatorului. Nu necesită sigilii ale mâinilor.",
    users: [
      { id: "boruto-uzumaki", styleImage: "https://i.imgur.com/r15Z5EV.png" },
      { id: "jiraiya", styleImage: "https://i.imgur.com/cuoJUwn.png" },
      { id: "kakashi-hatake", styleImage: "https://i.imgur.com/UzBMZ7F.png" },
      { id: "koji-kashin", styleImage: "" },
      { id: "konohamaru-sarutobi", styleImage: ""},
      { id: "minato-namikaze", styleImage: "https://i.imgur.com/rasengan-jutsu.png" },
      { id: "naruto-uzumaki", styleImage: "https://i.imgur.com/rasengan-jutsu.png" },
      { id: "momoshiki-otsutsuki", styleImage: "" },
      { id: "hiruko", styleImage: "" }
    ]
  },
  {
    id: "chidori",
    name: "Chidori",
    category: ["Ninjutsu"],
    classification: [],
    rank: "A-Rank",
    nature: "Lightning Release",
    class: "Offensive",
    clans: ["Uchiha"],
    range: "Short range (0-5m)",
    specificAbilities: [],
    image: "https://i.imgur.com/0YcTk8z.png", // Placeholder image
    description: "O tehnică care concentrează o cantitate mare de chakra electrică în mâna utilizatorului.",
    users: [
      { id: "hidari", styleImage: "" },
      { id: "kakashi-hatake", styleImage: "" },
      { id: "kakashi-hatake", styleImage: "https://i.imgur.com/chidori-jutsu.png" }
    ]
  },
  {
    id: "baryon-mode",
    name: "Baryon Mode",
    category: ["Ninjutsu"],
    classification: ["Ninjutsu"],
    class: ["Offensive", "Defensive", "Supplementary"],
    specificAbilities: [],
    image: "https://i.imgur.com/fIpzsjn.png",
    description: "",
    users: [],
  },
  {
    id: "multiple-shadow-clone-technique",
    name: "Multiple Shadow Clone Technique",
    category: ["Kinjutsu"],
    classification: ["Kinjutsu", "Ninjutsu", "Clone Techniques", ],
    rank: "A-Rank",
    class: "Offensive",
    range: "Short to Mid range (0-10m)",
    specificAbilities: [],
    image: "",
    description: "",
    users: [
      { id: "naruto-uzumaki", styleImage: "" }
    ], 
  },
  {
    id: "amaterasu",
    name: "Amaterasu",
    category: ["Ninjutsu"],
    classification: ["Kekkei Genkai", "Ninjutsu"],
    rank: "",
    nature: "Fire Release",
    class: "Offensive",
    clans: [],
    range: "Short range (0-5m)",
    specificAbilities: [],
    image: "https://i.imgur.com/zVHpHYI.png",
    parentAbilities: ["mangekyo-sharingan"],
    derivedAbilities: [],
    relatedAbilities: ["Fire Release"],
    description: "",
    users: [],
  },
  {
    id: "genjutsu-sharingan",
    name: "Genjutsu: Sharingan",
    category: ["Genjutsu"],
    classification: ["Kekkei Genkai", "Dojutsu"],
    rank: "C-Rank",
    nature: "",
    class: "Supplementary",
    clans: ["Uchiha"],
    range: "Short range (0-5m)",
    image: "https://i.imgur.com/genjutsu-sharingan.png", // Placeholder
    parentAbilities: ["sharingan"],
    specificAbilities: [],
    derivedAbilities: [],
    relatedAbilities: [],
    description: "O tehnică genjutsu care folosește Sharinganul pentru a hipnotiza și controla adversarul.",
    users: [
      { id: "sasuke-uchiha", styleImage: "" },
      { id: "itachi-uchiha", styleImage: "" }
    ]
  },
  {
    id: "copy-technique",
    name: "Copy Technique",
    category: ["Ninjutsu"],
    classification: ["Dojutsu"],
    rank: "N/A",
    nature: "",
    class: "Supplementary",
    clans: ["Uchiha"],
    range: "Short range (0-5m)",
    image: "https://i.imgur.com/copy-technique.png", // Placeholder
    parentAbilities: ["sharingan"],
    specificAbilities: [],
    derivedAbilities: [],
    relatedAbilities: [],
    description: "Abilitatea Sharinganului de a copia tehnicile văzute de la alți shinobi.",
    users: [
      { id: "kakashi-hatake", styleImage: "" },
      { id: "sasuke-uchiha", styleImage: "" }
    ]
  },
  {
    id: "susanoo",
    name: "Susanoo",
    category: ["Ninjutsu"],
    classification: ["Kekkei Genkai", "Dojutsu"],
    rank: "S-Rank",
    nature: "",
    class: "Offensive",
    clans: ["Uchiha"],
    range: "All ranges",
    image: "https://i.imgur.com/MuCOLrp.png", // Placeholder
    parentAbilities: ["mangekyo-sharingan"],
    specificAbilities: [],
    derivedAbilities: ["perfect-susanoo"],
    relatedAbilities: [],
    description: "O tehnică puternică care creează un gigant umanoid de chakra în jurul utilizatorului.",
    users: [
      { id: "sasuke-uchiha", styleImage: "" },
      { id: "itachi-uchiha", styleImage: "" },
      { id: "madara-uchiha", styleImage: "" }
    ]
  },
  {
    id: "tsukuyomi",
    name: "Tsukuyomi",
    category: ["Genjutsu"],
    classification: ["Kekkei Genkai", "Dojutsu"],
    rank: "S-Rank",
    nature: "",
    class: "Offensive",
    clans: ["Uchiha"],
    range: "Short range (0-5m)",
    image: "https://i.imgur.com/tsukuyomi.png", // Placeholder
    parentAbilities: ["mangekyo-sharingan"],
    specificAbilities: [],
    derivedAbilities: [],
    relatedAbilities: [],
    description: "Un genjutsu extrem de puternic care distorsionează percepția timpului a victimei.",
    users: [
      { id: "itachi-uchiha", styleImage: "" }
    ]
  },
  {
    id: "kamui",
    name: "Kamui",
    category: ["Ninjutsu"],
    classification: ["Kekkei Genkai", "Dojutsu"],
    rank: "S-Rank",
    nature: "",
    class: "Supplementary",
    clans: ["Uchiha"],
    range: "All ranges",
    image: "https://i.imgur.com/kamui.png", // Placeholder
    parentAbilities: ["mangekyo-sharingan"],
    specificAbilities: [],
    derivedAbilities: [],
    relatedAbilities: [],
    description: "O tehnică spațiu-timp care permite utilizatorului să se teleporteze pe sine sau pe alții într-o dimensiune separată.",
    users: [
      { id: "obito-uchiha", styleImage: "" },
      { id: "kakashi-hatake", styleImage: "" }
    ]
  },
  {
    id: "izanagi",
    name: "Izanagi",
    category: ["Genjutsu"],
    classification: ["Kinjutsu", "Dojutsu"],
    rank: "S-Rank",
    nature: "",
    class: "Supplementary",
    clans: ["Uchiha"],
    range: "Short range (0-5m)",
    image: "https://i.imgur.com/izanagi.png", // Placeholder
    parentAbilities: ["sharingan"],
    specificAbilities: [],
    derivedAbilities: [],
    relatedAbilities: [],
    description: "Un genjutsu care permite utilizatorului să transforme realitatea în iluzie și invers, la costul pierderii vederii Sharinganului.",
    users: [
      { id: "danzō-shimura", styleImage: "" },
      { id: "obito-uchiha", styleImage: "" }
    ]
  },
  {
    id: "izanami",
    name: "Izanami",
    category: ["Genjutsu"],
    classification: ["Kinjutsu", "Dojutsu"],
    rank: "S-Rank",
    nature: "",
    class: "Supplementary",
    clans: ["Uchiha"],
    range: "Short range (0-5m)",
    image: "https://i.imgur.com/izanami.png", // Placeholder
    parentAbilities: ["sharingan"],
    specificAbilities: [],
    derivedAbilities: [],
    relatedAbilities: [],
    description: "Un genjutsu care prinde victima într-o buclă temporală, forțând-o să-și accepte destinul.",
    users: [
      { id: "itachi-uchiha", styleImage: "" }
    ]
  },
  {
    id: "gentle-fist",
    name: "Gentle Fist",
    category: ["Taijutsu"],
    classification: ["Kekkei Genkai"],
    rank: "N/A",
    nature: "",
    class: "Offensive",
    clans: ["Hyuga"],
    range: "Short range (0-5m)",
    image: "https://i.imgur.com/gentle-fist.png", // Placeholder
    parentAbilities: ["byakugan"],
    specificAbilities: [],
    derivedAbilities: ["eight-trigrams-sixty-four-palms"],
    relatedAbilities: [],
    description: "Un stil de taijutsu care atacă sistemul de circulație a chakrei adversarului.",
    users: [
      { id: "hinata-hyuga", styleImage: "" },
      { id: "neji-hyuga", styleImage: "" }
    ]
  },
  {
    id: "eight-trigrams-sixty-four-palms",
    name: "Eight Trigrams Sixty-Four Palms",
    category: ["Taijutsu"],
    classification: ["Kekkei Genkai"],
    rank: "A-Rank",
    nature: "",
    class: "Offensive",
    clans: ["Hyuga"],
    range: "Short range (0-5m)",
    image: "https://i.imgur.com/eight-trigrams.png", // Placeholder
    parentAbilities: ["gentle-fist"],
    specificAbilities: [],
    derivedAbilities: [],
    relatedAbilities: [],
    description: "O tehnică avansată a Gentle Fist care lovește 64 de puncte de chakra ale adversarului.",
    users: [
      { id: "neji-hyuga", styleImage: "" }
    ]
  }
];