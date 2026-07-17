/* ===================================================================
   Rawnak Tahmid — Portfolio
   docs-data.js

   Single source of truth for every "Moonshot Lab" documentation page
   (docs.html?id=<id>). One object per project — docs.js reads the
   matching record and renders the whole page from it.

   ------------------------------------------------------------------
   HOW TO ADD A NEW PROJECT DOCS PAGE
   ------------------------------------------------------------------
   1. Copy the "template-project" entry below top to bottom.
   2. Give it a new key (this becomes the id in docs.html?id=<key>).
   3. Fill in every field with real copy.
   4. Point the `media` fields at real files once you have them —
      see the notes above each `media` block for exactly what to drop
      in and where. Until then, docs.html shows a dashed placeholder
      box automatically, so nothing looks broken.
   5. Link to it from index.html:
        <a href="docs.html?id=<key>" class="btn btn--solid promo__cta">Let's Connect</a>
=================================================================== */

const DOCS_PROJECTS = {

  /* ---------------------------------------------------------------
     TomēLab
  --------------------------------------------------------------- */
"tomelab": {
  id: "tomelab",
  name: "TomēLab",
  badge: "Moonshot Lab",
  tagline: "A next-generation surgical simulation platform.",

  description:
    "TomēLab is my most ambitious project—a next-generation surgical simulation platform designed to recreate the precision, decision-making, and complexity of real surgical procedures. Rather than simplifying surgery into a game, the goal is to build an immersive environment where anatomy, instruments, tissue behavior, and procedural workflows come together to create a realistic training experience. It's an idea far beyond what one person can realistically finish quickly, but that's exactly why it exists: to explore difficult engineering problems, push technical boundaries, and build something that could one day become genuinely valuable for surgical education.",

  heroCtas: {
    primaryLabel: "Explore TomēLab",
    primaryHref: "#features",
    secondaryLabel: "Back to Portfolio",
    secondaryHref: "index.html#tomelab",
  },

  overviewCards: [
    {
      icon: "&#129504;",
      title: "Vision",
      desc: "The long-term goal behind building a realistic surgical simulator.",
      href: "#whatis",
    },
    {
      icon: "&#9889;",
      title: "Core Systems",
      desc: "The technologies powering anatomy, tools, and interactions.",
      href: "#features",
    },
    {
      icon: "&#128300;",
      title: "Simulation",
      desc: "How procedures are recreated with realism and precision.",
      href: "#features",
    },
    {
      icon: "&#128737;",
      title: "Training",
      desc: "Designed to encourage accuracy, consistency, and safe practice.",
      href: "#features",
    },
    {
      icon: "&#128640;",
      title: "Roadmap",
      desc: "The journey toward a complete surgical simulation platform.",
      href: "#cta",
    },
  ],

  whatIs: {
    eyebrow: "WHAT IS TOMĒLAB?",
    headingLines: [
      "Building the future",
      "of surgical simulation."
    ],

    headingHighlight: "Where precision meets technology.",

    description:
      "TomēLab is an experimental surgical simulation platform focused on recreating real operating room procedures with exceptional realism. From anatomical structures and surgical instruments to procedural workflows and performance analysis, every system is designed to mirror how surgery is performed—not to replace medical education, but to complement it with an interactive environment for learning, experimentation, and skill development.",

    checklist: [
      "Layered anatomical simulation",
      "Realistic surgical instrument interaction",
      "Procedure-focused training scenarios",
      "Built for continuous research and expansion",
    ],

    videoLabel: "TomēLab Prototype",
    videoCaption: "Help me create desktop visual animations and advanced effects for surgical simulation.",
    videoDuration: "Coming Soon",
  },

  features: [
    {
      icon: "&#129504;",
      title: "Anatomical Simulation",
      desc: "Multi-layer anatomical structures designed for realistic interaction and procedural accuracy.",
    },
    {
      icon: "&#128298;",
      title: "Surgical Instruments",
      desc: "Precision tools with behavior inspired by their real-world counterparts.",
    },
    {
      icon: "&#129514;",
      title: "Procedure Engine",
      desc: "Step-by-step surgical workflows that recreate complete operations from preparation to closure.",
    },
    {
      icon: "&#128167;",
      title: "Tissue & Response",
      desc: "Experimental systems exploring tissue interaction, deformation, and procedural outcomes.",
    },
    {
      icon: "&#128200;",
      title: "Performance Analytics",
      desc: "Evaluate precision, efficiency, and technique throughout every procedure.",
    },
    {
      icon: "&#127919;",
      title: "Adaptive Training",
      desc: "Progressive scenarios ranging from fundamental skills to advanced surgical procedures.",
    },
    {
      icon: "&#128421;",
      title: "Immersive Visualization",
      desc: "High-fidelity rendering focused on anatomical clarity and professional presentation.",
    },
    {
      icon: "&#128640;",
      title: "Research Platform",
      desc: "A modular architecture designed to grow with new procedures, technologies, and simulation systems.",
    },
  ],
},

  /* ---------------------------------------------------------------
     Kidchemist
  --------------------------------------------------------------- */
  "kidchemist": {
  id: "kidchemist",
  name: "KidChemist",
  badge: "Logic Lab",
  tagline: "Think. Guess. Learn.",
  description:
    "KidChemist is an interactive educational game that teaches the periodic table through logic instead of memorization. Powered by an Akinator-style deduction engine, players learn chemistry by asking questions, eliminating possibilities, and discovering scientific patterns through play.",

  heroCtas: {
    primaryLabel: "Explore Features",
    primaryHref: "#features",
    secondaryLabel: "Back to Portfolio",
    secondaryHref: "index.html#kidchemist",
  },

  overviewCards: [
    {
      icon: "&#129504;",
      title: "Core Idea",
      desc: "How KidChemist teaches chemistry through logical deduction.",
      href: "#whatis",
    },
    {
      icon: "&#127918;",
      title: "Gameplay",
      desc: "Two unique ways to play, think, and learn.",
      href: "#features",
    },
    {
      icon: "&#9889;",
      title: "Technology",
      desc: "The deduction engine powering every guess.",
      href: "#features",
    },
    {
      icon: "&#129514;",
      title: "Learning",
      desc: "Understanding elements through exploration instead of memorization.",
      href: "#features",
    },
    {
      icon: "&#128640;",
      title: "Future Plans",
      desc: "What's coming next for KidChemist.",
      href: "#cta",
    },
  ],

  whatIs: {
    eyebrow: "WHAT IS KIDCHEMIST?",
    headingLines: [
      "Chemistry through",
      "logic and curiosity.",
    ],
    headingHighlight: "Learning becomes a game.",
    description:
      "KidChemist transforms the periodic table into an interactive deduction game. Inspired by Akinator, it asks structured yes/no questions, eliminates possibilities, and intelligently identifies elements. Rather than relying on memorization, players develop intuition for atomic properties, groups, and periods by actively reasoning through each challenge.",
    checklist: [
      "Akinator-style deduction engine",
      "Interactive periodic table learning",
      "Develops logical reasoning skills",
      "Designed to make chemistry genuinely fun",
    ],
    videoLabel: "KidChemist Demo",
    videoCaption: "Help me create desktop visual animations",
    videoDuration: "0:00",
  },

  features: [
    {
      icon: "&#129504;",
      title: "Smart Guessing Engine",
      desc: "Blob identifies elements through structured yes/no questions and logical elimination.",
    },
    {
      icon: "&#127918;",
      title: "Dual Gameplay Modes",
      desc: "Either let Blob guess your element or become Blob and solve the mystery yourself.",
    },
    {
      icon: "&#129514;",
      title: "Concept-Based Learning",
      desc: "Understand groups, periods, and atomic properties naturally through gameplay.",
    },
    {
      icon: "&#129300;",
      title: "Critical Thinking",
      desc: "Every question matters, encouraging reasoning rather than simple memorization.",
    },
    {
      icon: "&#128161;",
      title: "Interactive Discovery",
      desc: "Explore chemistry by making observations, forming hypotheses, and narrowing possibilities.",
    },
    {
      icon: "&#127919;",
      title: "Progressive Challenge",
      desc: "Build confidence from basic concepts to more advanced chemical reasoning.",
    },
    {
      icon: "&#128172;",
      title: "Meaningful Questions",
      desc: "Learn how scientists classify elements by asking the right questions.",
    },
    {
      icon: "&#128640;",
      title: "Future Expansion",
      desc: "Planned additions include multiplayer, difficulty levels, visual periodic tables, and progress tracking.",
    },
  ],
  },

  /* ---------------------------------------------------------------
     Template — Cosmos
  --------------------------------------------------------------- */
  "cosmos": {
  id: "Cosmos",
  name: "Cosmos",
  badge: "Moonshot Lab",
  tagline: "A living AI companion that stays beside you, not inside a browser.",
  description: "Cosmos is my vision of what artificial intelligence should become — a lovable desktop companion that lives on your screen instead of inside a chat window. It combines advanced AI with personality, humor, animations, and contextual awareness to create an assistant that feels genuinely alive. Rather than being another productivity tool, Cosmos is designed to become a trusted companion that helps, reacts, learns, and grows alongside its user.",

  heroCtas: {
    primaryLabel: "Explore Features",
    primaryHref: "#features",
    secondaryLabel: "Back to Portfolio",
    secondaryHref: "index.html#cosmos",
  },

  overviewCards: [
    {
      icon: "&#128161;",
      title: "Core Vision",
      desc: "The philosophy of transforming AI into a living desktop companion.",
      href: "#whatis"
    },
    {
      icon: "&#129504;",
      title: "Features",
      desc: "Explore Emmy's intelligent, interactive, and animated capabilities.",
      href: "#features"
    },
    {
      icon: "&#10022;",
      title: "Personality",
      desc: "Discover how Emmy feels alive through emotions and behaviors.",
      href: "#features"
    },
    {
      icon: "&#128737;",
      title: "Privacy",
      desc: "Permission-first design with transparent and secure interactions.",
      href: "#features"
    },
    {
      icon: "&#128640;",
      title: "Future Vision",
      desc: "See how Emmy will continue evolving over time.",
      href: "#cta"
    },
  ],

  whatIs: {
    eyebrow: "WHAT IS EMMY?",
    headingLines: [
      "More than an AI.",
      "More than software."
    ],
    headingHighlight: "Emmy is a companion.",
    description: "Emmy is designed to live directly on your desktop as an intelligent animated companion. Instead of switching tabs to interact with AI, users simply talk to Emmy naturally while working, creating, studying, or gaming. It combines advanced intelligence, expressive animations, contextual awareness, and personality to make AI feel like a genuine digital partner.",
    checklist: [
      "Always visible on your desktop",
      "Expressive personality with thousands of idle activities",
      "Context-aware assistance across your workflow",
      "Built with privacy and user control first"
    ],
    videoLabel: "Emmy in Action",
    videoCaption: "Help me create desktop visual animations",
    videoDuration: "2:18",
  },

  features: [
    {
      icon: "&#128054;",
      title: "Living Desktop Companion",
      desc: "A lovable animated companion that stays on your desktop, reacts naturally, and is inspired by Rocky from Project Hail Mary with expressive, personality-driven interactions."
    },
    {
      icon: "&#129504;",
      title: "Advanced Human Interaction",
      desc: "Stay in the flow with instant voice conversations. Inspired by the intelligence and iconic humor of TARS and CASE from Interstellar"
    },
    {
      icon: "&#128187;",
      title: "Screen-Aware Assistant",
      desc: "With permission, Emmy understands your screen, explains code, identifies problems, and provides contextual help."
    },
    {
      icon: "&#127918;",
      title: "Dynamic Personality",
      desc: "Sleeps, plays games, reacts unpredictably to your work and gameplay, and performs thousands of unique animations inspired by Diana from Pragmata, making Emmy feel truly alive."
    },
  ],
},

};
