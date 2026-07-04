/* ===================================================================
   Rawnak Tahmid — Portfolio
   projects-data.js

   Single source of truth for every pinned project. index.html reads
   just enough to link each card to project.html?id=<id>. project.html
   reads the full record to render the detail landing page.

   To add a new project: drop a new object into PROJECTS below and
   give its pinned card (in index.html) a matching data-project-id.
=================================================================== */

const PROJECTS = {

  "backdot": {
    id: "backdot",
    icon: "&#10070;",
    title: "Backdot",
    tagline: "Your Intelligent Periodic Table Assistant",
    description: "Backdot is a command-line chemistry companion that turns the periodic table into something you can actually query. Instead of flipping through a static chart, you ask Backdot about an element and it hands back atomic data, trends, and relationships instantly.",
    category: "Chemistry Tool",
    date: "January 2024",
    status: "Alpha State",
    projectType: "CLI Application",
    sourceUrl: "https://github.com/rawmid/backdot",
    liveUrl: null,
    // TODO: Replace with the real source files for this project.
    // Add/remove entries freely — the source-code modal on project.html
    // supports any number of files and builds its file list from this array.
    sourceCode: {
      files: [
        {
          name: "main.c",
          language: "c",
          content:
`#include <stdio.h>

// TODO: replace with your actual main.c content
int main(void) {
    printf("Hello from Backdot!\\n");
    return 0;
}
`
        },
        {
          name: "elements.h",
          language: "c",
          content:
`#ifndef ELEMENTS_H
#define ELEMENTS_H

// TODO: replace with your actual elements.h content
typedef struct {
    const char *symbol;
    const char *name;
    int atomic_number;
} Element;

#endif
`
        }
      ]
    },
    stack: [
      { name: "c", colorClass: "accent--blue" }
    ],
    techStack: [
      { name: "C", subtitle: "Core logic", color: "#00599c" }
    ],
    keyFeatures: [
      "Interactive yes/no decision tree that guesses the selected chemical element",
      "Identifies elements using period, group, atomic mass, and chemical properties",
      "Console-based gameplay built entirely in C with simple user interaction",
      "Demonstrates conditional logic, branching, and algorithmic decision making without external libraries"
    ],
    pseudocode: [
      "BEGIN",
      "  Display introduction",
      "  User selects an element mentally",
      "",
      "  WHILE element is not identified",
      "    Ask a binary (Yes/No) question",
      "    Validate user input",
      "    Traverse the decision tree",
      "    Eliminate impossible elements",
      "  END WHILE",
      "",
      "  Display predicted element",
      "END"
    ],
    howItWorks: [
  {
    title: "Think of an Element",
    desc: "The user secretly chooses a chemical element."
  },
  {
    title: "Answer Questions",
    desc: "The program asks a series of Yes/No questions."
  },
  {
    title: "Decision Tree",
    desc: "Each answer narrows the possibilities using nested conditions."
  },
  {
    title: "Reveal Result",
    desc: "The predicted element is displayed in the terminal."
  }
],
behindTitle: "Behind the Logic",
behindDesc: "The game uses a decision-tree algorithm built with nested if-else statements. Each Yes/No answer eliminates possibilities until only one chemical element remains.",
behindNotes: [
  "Ask Yes/No question",
  "Validate user input",
  "Follow matching branch",
  "Narrow possible elements",
  "Display prediction"
]
  },

"missile-simulator": {
  id: "missile-simulator",
  icon: "&#10070;",
  title: "Missile Simulator",
  tagline: "A terminal-based C program that calculates projectile range and visualizes the launch with an ASCII animation.",
  description: "Missile Simulator is a physics-based console application written in C that calculates the horizontal distance travelled by a projectile using force, mass, launch distance, and firing angle. Instead of relying on a predefined velocity, the program derives the initial velocity from the work-energy principle before computing the projectile's range. It also renders a simple frame-by-frame ASCII animation that visually represents the projectile's flight path inside the terminal.",
  category: "Physics Simulation",
  date: "March 2024",
  status: "Completed",
  projectType: "Console Application",
  sourceUrl: "https://github.com/rawmid/Projectile_Simulation",
  liveUrl: null,
  // TODO: Replace with the real source files for this project.
  sourceCode: {
    files: [
      {
        name: "simulator.c",
        language: "c",
        content:
`#include <stdio.h>
#include <math.h>

// TODO: replace with your actual simulator.c content
double calculateRange(double velocity, double angleRad) {
    return (velocity * velocity * sin(2 * angleRad)) / 9.81;
}

int main(void) {
    printf("Missile Simulator placeholder\\n");
    return 0;
}
`
      },
      {
        name: "animation.c",
        language: "c",
        content:
`#include <stdio.h>
#include <windows.h>

// TODO: replace with your actual animation.c content
void playLaunchAnimation(int frames) {
    for (int i = 0; i < frames; i++) {
        printf(".");
        Sleep(100);
    }
}
`
      }
    ]
  },

  stack: [
    { name: "C", colorClass: "accent--blue" }
  ],

  techStack: [
    { name: "C", subtitle: "Core Programming", color: "#00599c" },
    { name: "Math.h", subtitle: "Physics Calculations", color: "#4caf50" },
    { name: "Windows API", subtitle: "Animation & Delays", color: "#0078d4" },
    { name: "Console I/O", subtitle: "Interactive Interface", color: "#9e9e9e" }
  ],

  keyFeatures: [
    "Interactive terminal interface",
    "Input validation for all user values",
    "Automatic velocity calculation using work-energy theorem",
    "Projectile range calculation using kinematic equations",
    "Real-time ASCII launch animation",
    "Character-by-character animated text output",
    "Repeat simulation without restarting"
  ],

  pseudocode: [
    "BEGIN",
    "  DISPLAY welcome message",
    "  REPEAT until user exits",
    "    READ mass, force, force distance, angle",
    "    VALIDATE every input",
    "    CALCULATE initial velocity",
    "    CONVERT angle to radians",
    "    COMPUTE projectile range",
    "    GENERATE ASCII launch animation",
    "    DISPLAY travelled distance",
    "    ASK user to continue",
    "  END REPEAT",
    "END"
  ],

  howItWorks: [
    {
      title: "Input Collection",
      desc: "The program asks the user for the object's mass, applied force, distance over which the force acts, and launch angle while validating every input."
    },
    {
      title: "Velocity Calculation",
      desc: "Instead of requiring velocity directly, the simulator calculates it using the work-energy equation v² = (2 × Force × Distance) / Mass."
    },
    {
      title: "Projectile Physics",
      desc: "After converting the launch angle to radians, the projectile range is calculated using classical projectile motion equations."
    },
    {
      title: "ASCII Animation",
      desc: "The projectile's flight is visualized using sine-based terminal animation, creating a simple yet engaging representation of the launch."
    }
  ],

  behindTitle: "Physics & Algorithms",

  behindDesc: "The simulator combines the Work-Energy Theorem with classical projectile motion equations. Initial velocity is derived from applied force rather than being entered directly, making the calculation more physically accurate.",

  behindNotes: [
    "Work = Force × Distance",
    "½mv² = Work",
    "v = √((2 × F × d) / m)",
    "",
    "Projectile Range:",
    "R = (v² × sin(2θ)) / g",
    "",
    "Animation:",
    "y = sin(tan(θ) × x) × 100"
  ]
},

  "study-anchor": {
  id: "study-anchor",
  icon: "&#10070;",
  title: "Study Anchor",
  tagline: "A browser extension that keeps you focused by automatically blocking distracting websites during study sessions.",
  description: "Study Anchor is a productivity-focused browser extension that helps eliminate distractions while studying. Once Study Mode is activated, the extension continuously monitors newly opened tabs. If the user attempts to visit a restricted website, the tab is immediately closed and the browser is redirected back to the designated study page, ensuring uninterrupted focus throughout the session.",
  category: "Productivity Tool",
  date: "November 2023",
  status: "Completed",
  projectType: "Browser Extension",
  sourceUrl: "https://github.com/rawmid/Study_Anchor",
  liveUrl: null,
  // TODO: Replace with the real source files for this project.
  sourceCode: {
    files: [
      {
        name: "manifest.json",
        language: "json",
        content:
`{
  "manifest_version": 3,
  "name": "Study Anchor",
  "version": "1.0.0",
  "description": "TODO: replace with your actual manifest.json content",
  "background": { "service_worker": "background.js" }
}
`
      },
      {
        name: "background.js",
        language: "javascript",
        content:
`// TODO: replace with your actual background.js content
let studyMode = false;
const restrictedSites = ["example.com"];

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (!studyMode || !changeInfo.url) return;
  if (restrictedSites.some((site) => changeInfo.url.includes(site))) {
    chrome.tabs.remove(tabId);
  }
});
`
      },
      {
        name: "popup.js",
        language: "javascript",
        content:
`// TODO: replace with your actual popup.js content
document.getElementById("toggle").addEventListener("click", () => {
  console.log("Study mode toggled");
});
`
      }
    ]
  },

  stack: [
    { name: "HTML", colorClass: "accent--white" },
    { name: "JavaScript", colorClass: "accent--orange" }
  ],

  techStack: [
    { name: "HTML", subtitle: "Extension UI", color: "#e34f26" },
    { name: "CSS", subtitle: "Popup Styling", color: "#1572b6" },
    { name: "JavaScript", subtitle: "Extension Logic", color: "#f7df1e" },
    { name: "Chrome Extension API", subtitle: "Tab Management", color: "#4285f4" }
  ],

  keyFeatures: [
    "One-click Study Mode",
    "Automatic detection of restricted websites",
    "Instant closure of distracting tabs",
    "Redirects users back to their study website",
    "Runs quietly in the background",
    "Lightweight with minimal resource usage",
    "Fully local processing without external servers"
  ],

  pseudocode: [
    "BEGIN",
    "  LOAD restricted website list",
    "  WAIT for Study Mode",
    "",
    "  ON Study Mode ENABLE:",
    "    study_mode = true",
    "",
    "  ON tab_update:",
    "    IF study_mode IS true THEN",
    "      IF url=restricted_list, ",
    "        CLOSE current tab",
    "        OPEN study website",
    "      END IF",
    "",
    "  ON Study Mode DISABLE:",
    "    study_mode = false",
    "END"
  ],

  howItWorks: [
    {
      title: "Study Mode",
      desc: "The user activates Study Mode from the extension popup before beginning a study session."
    },
    {
      title: "Website Monitoring",
      desc: "The background script continuously listens for newly opened or updated browser tabs."
    },
    {
      title: "Automatic Blocking",
      desc: "Whenever a restricted website is detected, its tab is immediately closed without interrupting other browser activity."
    },
    {
      title: "Focus Recovery",
      desc: "After closing the distracting website, the extension automatically redirects the user back to their designated study webpage."
    }
  ],

  behindTitle: "Behind the Extension",

  behindDesc: "Study Anchor leverages the Chrome Extension APIs to monitor browser activity in real time. Instead of using external services, all website checking occurs locally, allowing the extension to react instantly while preserving user privacy.",

  behindNotes: [
    "chrome.tabs.onUpdated.addListener(...)",
    "",
    "IF studyMode == true",
    "  IF url IN restrictedSites",
    "    chrome.tabs.remove(tabId)",
    "    chrome.tabs.create({",
    "      url: studyWebsite",
    "    })",
    "END"
  ]
},

  "web-terminal": {
  id: "web-terminal",
  icon: "&#10070;",
  title: "Web Terminal",
  tagline: "A fake hacking terminal that simulates a cinematic data transfer sequence in the browser.",
  description: "Web Terminal is a browser-based simulation that recreates the atmosphere of a hacker console through procedurally generated terminal logs, randomized system events, and an animated data transfer sequence. Every session generates different output using random IP addresses, hexadecimal strings, ports, and humorous status messages before finishing with a fake encrypted transfer and session shutdown.",
  category: "Fun Project",
  date: "August 2023",
  status: "Completed",
  projectType: "Web Application",
  sourceUrl: "https://github.com/rawmid/Web_Terminal",
  liveUrl: "https://rawmid.github.io/Web_Terminal/",
  // TODO: Replace with the real source files for this project.
  sourceCode: {
    files: [
      {
        name: "index.html",
        language: "html",
        content:
`<!-- TODO: replace with your actual index.html content -->
<!DOCTYPE html>
<html lang="en">
<head><title>Web Terminal</title></head>
<body>
  <div id="terminal"></div>
  <script src="terminal.js"></script>
</body>
</html>
`
      },
      {
        name: "terminal.js",
        language: "javascript",
        content:
`// TODO: replace with your actual terminal.js content
function generateLines(count) {
  return Array.from({ length: count }, (_, i) => \`[LOG] event \${i}\`);
}

function typeLine(line) {
  console.log(line);
}
`
      },
      {
        name: "style.css",
        language: "css",
        content:
`/* TODO: replace with your actual style.css content */
#terminal {
  font-family: monospace;
  color: #0f0;
  background: #000;
  padding: 20px;
}
`
      }
    ]
  },

  stack: [
    { name: "html", colorClass: "accent--orange" },
    { name: "css", colorClass: "accent--blue" },
    { name: "js", colorClass: "accent--yellow" }
  ],

  techStack: [
    { name: "HTML", subtitle: "Structure", color: "#e34f26" },
    { name: "CSS", subtitle: "Terminal UI", color: "#1572b6" },
    { name: "JavaScript", subtitle: "Simulation Engine", color: "#f7df1e" }
  ],

  keyFeatures: [
    "Randomized fake terminal logs",
    "Dynamic IP, port, and hexadecimal generation",
    "Variable typing speed for realistic output",
    "Animated encrypted transfer progress bar",
    "Automatic session ending sequence",
    "Retro green-on-black hacker aesthetic",
    "Entirely client-side with no backend"
  ],

  pseudocode: [
    "BEGIN",
    "  GENERATE random system logs",
    "  DISPLAY each log with random delay",
    "",
    "  WHEN all logs finish:",
    "    SHOW loading screen",
    "    INCREMENT progress bar to 100%",
    "",
    "  DISPLAY transfer complete",
    "  SHOW final message",
    "  ATTEMPT browser tab close",
    "END"
  ],

  howItWorks: [
    {
      title: "Random Log Generation",
      desc: "System prefixes, actions, IP addresses, hashes, and ports are randomly combined to generate unique terminal output every time the page loads."
    },
    {
      title: "Terminal Animation",
      desc: "Each line appears after a randomized delay, creating the illusion of a live system performing operations."
    },
    {
      title: "Transfer Sequence",
      desc: "After the terminal output finishes, an animated loading screen simulates an encrypted data transfer with a dynamic progress bar."
    },
    {
      title: "Session Completion",
      desc: "The simulation concludes with a completion message, humorous warning, and an attempt to automatically close the browser tab."
    }
  ],

  behindTitle: "Behind the Simulation",

  behindDesc: "Everything displayed is procedurally generated on the client using JavaScript. Random delays, generated IP addresses, hexadecimal strings, and staged progress animations work together to create a convincing hacker-terminal illusion without performing any real networking or system operations.",

  behindNotes: [
    "generateLines()",
    "↓",
    "typeLine()",
    "↓",
    "showLoadingScreen()",
    "↓",
    "startProgress()",
    "↓",
    "finish()",
    "↓",
    "window.close()"
  ]
},

"discord-custom-rpc": {
  id: "discord-custom-rpc",
  icon: "&#10070;",
  title: "Discord Custom RPC",
  tagline: "Create and manage custom Discord Rich Presence with ease.",
  description: "Discord Custom RPC is a lightweight desktop application that lets you create, manage, and launch personalized Discord Rich Presence profiles without writing code. Customize text, images, buttons, and timestamps through a clean interface, then start or stop your RPC with a single click.",
  category: "Desktop Utility",
  date: "July 2026",
  status: "Public Release",
  projectType: "Desktop Application",
  sourceUrl: "https://github.com/rawmid/discord-custom-rpc",
  liveUrl: null,
  // TODO: Replace with the real source files for this project.
  sourceCode: {
    files: [
      {
        name: "main.js",
        language: "javascript",
        content:
`// TODO: replace with your actual main.js content
const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({ width: 900, height: 600 });
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
`
      },
      {
        name: "rpc.js",
        language: "javascript",
        content:
`// TODO: replace with your actual rpc.js content
const RPC = require("discord-rpc");
const client = new RPC.Client({ transport: "ipc" });

function setActivity(details) {
  client.setActivity({ details, startTimestamp: Date.now() });
}

module.exports = { setActivity };
`
      },
      {
        name: "index.html",
        language: "html",
        content:
`<!-- TODO: replace with your actual index.html content -->
<!DOCTYPE html>
<html lang="en">
<head><title>Discord Custom RPC</title></head>
<body>
  <h1>Discord Custom RPC</h1>
</body>
</html>
`
      }
    ]
  },
  stack: [
    { name: "c", colorClass: "accent--blue" }
    
  ],
  techStack: [
    { name: "HTML", subtitle: "Structure", color: "#e34f26" },
    { name: "CSS", subtitle: "Terminal UI", color: "#1572b6" },
    { name: "JavaScript", subtitle: "Simulation Engine", color: "#f7df1e" },
    { name: "Electron Framework", subtitle: "Desktop Application", color: "#00ffa677" },
  ],
  keyFeatures: [
    "Create custom Discord Rich Presence profiles without coding",
    "Customize activity text, images, buttons, and timestamps",
    "Modern desktop interface with one-click Start and Stop controls",
    "Lightweight, fast, and easy to use"
  ],
  pseudocode: [
    "BEGIN",
    "  Launch application",
    "  Load RPC configuration",
    "  Wait for user action",
    "",
    "  IF Start button clicked",
    "    Initialize Discord RPC",
    "    Send Rich Presence data",
    "  END IF",
    "",
    "  IF Stop button clicked",
    "    Clear Rich Presence",
    "    Shutdown RPC",
    "  END IF",
    "",
    "END"
  ],
  howItWorks: [
    {
      title: "Launch the App",
      desc: "Open the application while Discord is running."
    },
    {
      title: "Configure RPC",
      desc: "Customize your activity text, images, buttons, and timestamps."
    },
    {
      title: "Start Rich Presence",
      desc: "Click the Start button to publish your custom activity to Discord."
    },
    {
      title: "Stop Anytime",
      desc: "Use the Stop button to instantly clear your Rich Presence."
    }
  ],
  behindTitle: "Behind the Scenes",
  behindDesc: "The application communicates with Discord through the Rich Presence API. The UI collects user-defined activity data and updates Discord in real time while providing simple controls for starting and stopping the RPC.",
  behindNotes: [
    "Load user configuration",
    "Initialize Discord RPC",
    "Update Rich Presence",
    "Listen for UI actions",
    "Shutdown RPC safely"
  ]
},

};

// Convenience export for project.js (no bundler in this project, so
// this just needs to exist as a global — kept explicit for clarity).
if (typeof module !== "undefined") { module.exports = PROJECTS; }
