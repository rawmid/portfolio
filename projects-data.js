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
`#include<stdio.h>
#include<stdbool.h>

    int main(){     
        //for period 1 only
        int ans_1;
        int ans_1_1;

        int ans_2;//for more than 84amu
        //period 2
        int ans_2_1;
        int ans_2_2;
        int ans_2_3;
        int ans_2_4;
        int ans_2_5;
        int ans_2_6;
        int ans_2_7;
        int ans_2_8;

        int ans_3;
        int ans_4;
        int ans_5;
        int ans_6;
        int ans_7;
        

          //period 1
        char e1[]="Hidrogen";
        char e2[]="Helium";
          //period_2
        char e3[]="Lithum";
        char e4[]="Beryllium";
        char e5[]="Boron";
        char e6[]="Carbon";
        char e7[]="Nitrogen";
        char e8[]="Oxygen";
        char e9[]="Fluorine";
        char e10[]="Neon";
        //period 3
        char e11[]="Sodium";
        char e12[]="Magnesium";
        char e13[]="Aluminium";
        char e14[]="Silicon";
        char e15[]="Phosphorus";
        char e16[]="Sulfur";
        char e17[]="Clorine";
        char e18[]="Argon";
        //period 3
        char e19[]="Potassium";
        char e20[]="Calcium";
        char e21[]="Scandium";
        char e22[]="Titanium";
        char e23[]="Vanadium";


          
          //Intro
          printf("\n\n\n\n");
          printf("\tLets play a game\n\n");
          //Description
          printf("Here at first, you will hold a random\nelement in your mind. Then, I will try\nto guess the element by asking you some\nquestions. The questions will carry\nan answer of either 'Yes' or 'No'. So, lets see \nif I can guess the correct element\nthrough the expertise questions.\n\n\n");
          //Rules
          printf("Press 1 if your answer is 'YES'\nand type 0 if the answer is 'NO'\n\nDon't forget to sit with a Periodic table\nLets begin....\n\n");

          //period 1
          //First question
          printf("Here goes the first question:\n\n1. Is the element located in 'Period' 1?\n");
          //First answer
          printf("Your Answer: ");
          scanf("%d", &ans_1);
          printf("\n");
          if (ans_1>1 || 0>ans_1){
            printf("Please Only type either '1' or '0' in your answer");//error
          }

          //analyzing the user input (Answer)
          if (ans_1==1) {
                printf("I see your element is in 'Period 1'\n\nDoes it has single Proton in it's Nucleus?\nYour Answer: ");
                scanf("%d", &ans_1_1);

                if (ans_1_1>1 || 0>ans_1_1){
                  printf("Please Only type either '1' or '0' in your answer");//error
                }

                if (ans_1_1==1){
                  printf("The element is %s", e1);
                } 

                if (ans_1_1==0) {
                  printf("The element is %s", e2);
                }
              //period 1 ends


          } else {
                //question 2 ensuring the mass

                printf("Okay..\nQuestion goes on:\n2.Does it has a mass of more than 84amu?\nYour answer: ");
                scanf("%d", &ans_2);

                if (ans_2>1 || 0>ans_2){
                  printf("Please Only type either '1' or '0' in your answer");//error
                }


                //period 2
                if (ans_2==0){
                      printf("Is your element belongs to period 2?\nYour answer: ");
                      scanf("%d", &ans_2_1);
                    if (ans_2_1>1 || 0>ans_2_1){
                      printf("Please Only type either '1' or '0' in your answer");//error
                    }        
                }

                if (ans_2_1==1){
                      printf("Is that an Alkaline Metal or metalloid?\nYour answer: ");
                      scanf("%d", &ans_2_2);         
                    if (ans_2_2>1 || 0>ans_2_2){
                      printf("Please Only type either '1' or '0' in your answer");//error
                    }    

                if(ans_2_2==1){
                      printf("Does it belong to Group 1?\nYour answer:");
                      scanf("%d", &ans_2_3);
                    if (ans_2_3>1 || 0>ans_2_3){
                      printf("Please Only type either '1' or '0' in your answer");//error
                    }
                }

                if(ans_2_3==1){
                    printf("\n");
                    printf("The element is %s", e3);
                }      

                if(ans_2_3==0){
                      printf("Does it belong to Metalloids?\nYour answer:");
                      scanf("%d", &ans_2_4);
                    if (ans_2_4>1 || 0>ans_2_4){
                      printf("Please Only type either '1' or '0' in your answer");//error
                    }
                    if(ans_2_4==1){
                      printf("The element is %s", e5);
                    }
                    if(ans_2_4==0){
                      printf("The element is %s", e4);
                    }
                }

                if(ans_2_2==0){
                      printf("Does it belongs to Halo-gens or Noble gas?\nYour name: ");
                      scanf("%d", &ans_2_5);

                    if (ans_2_5>1 || 0>ans_2_5){
                      printf("Please Only type either '1' or '0' in your answer");//error
                    }

                  if(ans_2_5==1){
                      printf("Is is a Noble gas?\nYour answer: ");
                      scanf("%d", &ans_2_6);

                    if (ans_2_6>1 || 0>ans_2_6){
                      printf("Please Only type either '1' or '0' in your answer");//error
                    }

                    if(ans_2_6==1){
                          printf("The element is %s", e10);
                    } else {
                          printf("The element is %s", e9);
                    }

                  }    
                }
                if(ans_2_5==0){
                          printf("Does its mass more than 13amu?\nYour answer: ");
                          scanf("%d", &ans_2_7);

                    if (ans_2_7>1 || 0>ans_2_7){
                          printf("Please Only type either '1' or '0' in your answer");//error
                    }

                    if(ans_2_7==0){
                          printf("The element is %s", e6);
                    }

                    if(ans_2_7==1){
                          printf("Does it form water?\nYour answer: ");
                          scanf("%d", &ans_2_8);

                      if (ans_2_8>1 || 0>ans_2_8){
                            printf("Please Only type either '1' or '0' in your answer");//error
                      }

                      if(ans_2_8==1){
                            printf("The element is %s", e8);
                      }

                      if(ans_2_8==0){
                            printf("The element is %s", e7);
                      }
                    }
                }
            }
          }
    return 0;
}
`
        },
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
        name: "main.c",
        language: "c",
        content:
`#include <stdio.h>
#include <math.h>
#include <windows.h>

#ifndef M_PI
    #define M_PI 3.14159265358979323846
#endif


// Define DELAY_TIME in milliseconds
#define DELAY_TIME 20

// Define a macro to delay each character automatically
#ifdef _WIN32
    #define DELAYED_PRINT(fmt, ...) do { \
        char buffer[1024]; \
        snprintf(buffer, sizeof(buffer), fmt, ##__VA_ARGS__); \
        for (char *ptr = buffer; *ptr; ptr++) { \
            printf("%c", *ptr); \
            fflush(stdout); \
            Sleep(DELAY_TIME); \
        } \
    } while(0)
#else
    #define DELAYED_PRINT(fmt, ...) do { \
        char buffer[1024]; \
        snprintf(buffer, sizeof(buffer), fmt, ##__VA_ARGS__); \
        for (char *ptr = buffer; *ptr; ptr++) { \
            printf("%c", *ptr); \
            fflush(stdout); \
            usleep(DELAY_TIME * 500); \
        } \
    } while(0)
#endif


int main() {
    int user_willing = 1;
  
    // Explanation
    DELAYED_PRINT("\n\nWelcome\n\nHere, we will calculate the ground hitting location of an object when\nit is launched with a certain amount of force. So, let's begin with giving\nsome information below.\n\n\n");

    //main programme structure
    while (user_willing == 1) {
        
        // User Input

        float  mass;
        DELAYED_PRINT("Mass Of the Object  :");
        scanf("%f", &mass); // entering the mass
        //ensuring accuracy
        while (mass < 0) {
            DELAYED_PRINT("Please enter a valid mass:");
            scanf("%f", &mass);
        }

        float  force;
        DELAYED_PRINT("Implemented force   :");
        scanf("%f", &force); // entering the force
        //ensuring accuracy
        while (force < 0) {
            DELAYED_PRINT("Please enter a valid amount of force:");
            scanf("%f", &force);
        }

        float  force_given_on;
        DELAYED_PRINT("Distance of giving force  :");
        scanf("%f", &force_given_on); // Assume the force was applied over 10 meters
        //ensuring accuracy
        while (force_given_on < 0) {
            DELAYED_PRINT("Please enter valid info:");
            scanf("%f", &force_given_on);
        }
        
        float  angle;
        DELAYED_PRINT("Projectile angle     :");
        scanf("%f", &angle); // entering the angle

        //ensuring accuracy
        while (angle < 0 || angle > 90) {
            DELAYED_PRINT("Please enter a valid projectile angle angle:");
            scanf("%f", &angle);
        }

        //calculating velocity
        float  initial_velocity = sqrt((2 * force * force_given_on) / mass); // kinematic equation v^2 = u^2 + 2as, here u = 0
        //processing angle
        float  angle_radians = angle * (M_PI / 180.0); // Convert degrees to radians



        //calculating the whole scenerio
        float  gravity = 9.8;
        float  distance = (initial_velocity * initial_velocity * sin(2 * angle_radians)) / gravity;

        //Animation

        //elements
        char ball = '*';
        char ground = '|';

        //graph reaching top
        float x;                 
        float y;
        int spaces;
        float radian=360;
        int peak_height;

        //calculating the area
        int area = 0;
        int height;

        //calculating different angles
        float multiplyer = tan(angle_radians);

        //calculating peak height
        peak_height = 2 * 180 / tan(angle_radians);

        printf("Object launched ... ...\n");
        Sleep(400);

        //animaiton
        for (int  x = 0;  x < peak_height; x+=1) {
                
            //calculating y
             radian = x * M_PI / 180;
            y = sin(multiplyer * radian) * 100;

            //interpreting y to spaces
            spaces = (int)(y);
            height = spaces;
            area += spaces;

            //animation reaching the top
            if (spaces > -1) {
                printf("%c", ground);
                for (int i = 0; i < spaces; i++) {
                        printf(" ");
                } 
                
                printf("%c", ball);
                printf("%d\n", height);
                //delay time 
                Sleep(spaces / 4);                
            }

        }

        
        //resetting the info
        mass = 0;
        force = 0;
        force_given_on = 0;
        angle_radians = 0;
        angle = 0;
        
        
        //Showing the result

                //delay 
                DELAYED_PRINT("\n\nShowing the results in\n");
                DELAYED_PRINT("3\n");
                Sleep(1000);
                DELAYED_PRINT("2\n");
                Sleep(1000);
                DELAYED_PRINT("1\n");
                Sleep(600);


        Sleep(650);
        DELAYED_PRINT("\n\nThe object travelled %.2f meters\n\n\n", distance);

        Sleep(350);
        DELAYED_PRINT("Thank You for trusting us\n\n");
        Sleep(200);

        //loop
        DELAYED_PRINT("Would you want to continue? ('1' for yes, '0' for no)\nAns: ");
        scanf("%d", &user_willing);


        //ensuring accuaracy
        while (user_willing !=0 && user_willing !=1)
        {
          DELAYED_PRINT("Pls enter a valid answer\n");
           
          DELAYED_PRINT("Would you want to continue? ('1' for yes, '0' for no)\nAns: ");
          scanf("%d", &user_willing);
        }
        if (user_willing == 0) {
            DELAYED_PRINT("Thank You\n");
        }

    }

    return 0;
}
`
      },
      {
        name: "animation.c",
        language: "c",
        content:
`#include<stdio.h>
#include<math.h>
#include<windows.h>

#ifndef M_PI
    #define M_PI 3.14159265358979323846
#endif

int main() {
    //info 
    float angle;
    
    //elements
    char ball = '*';
    char ground = '|';


    //graph reaching top
    float x;         
    float y;
    int spaces;
    float radian=360;
    int peak_height;


    //calculating the area
    int height;

    //user input
    printf("Enter projectile angle:");
    scanf("%f", &angle);

    while (angle < 0 || angle > 90) {
        printf("Please enter a valid projectile angle angle:");
        scanf("%f", &angle);
    }


    //calculating different angles
    float angle_radians = angle * M_PI / 180;
    float multiplyer = tan(angle_radians);

    //calculating peak height
    peak_height = 2 * 180 / tan(angle_radians);

    //animaiton
    for (int  x = 0;  x < peak_height; x+=1) {
        //calculating y
        radian = x * M_PI / 180;
        y = sin(multiplyer * radian) * 100;

        //interpreting y to spaces
        spaces = (int)(y);
        height = spaces;

        //animation reaching the top
        if (spaces > -1) {
            printf("%c", ground);
            for (int i = 0; i < spaces; i++) {
                printf(" ");
            } 
        
            printf("%c", ball);
            printf("%d\n", height);
            //delay time 
            Sleep(spaces / 4);        
        }
    }

    return 0;
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
  "version": "1.0",
  "description": "Forces return to ChatGPT during study mode",
  "permissions": ["tabs", "storage", "scripting"],
  "host_permissions": ["<all_urls>"],
  "background": {
    "service_worker": "background.js"
  },
  "action": {
    "default_popup": "popup.html"
  },
  "icons": {
    "128": "icon.png"
  }
}
`
      },
      {
        name: "background.js",
        language: "javascript",
        content:
`const CHATGPT_DOMAIN = "chat.openai.com";

const BAD_DOMAINS = [
  "reddit.com", "youtube.com", "instagram.com", "discord.com",
  "twitter.com", "facebook.com", "x.com", "tiktok.com",
  "snapchat.com", "twitch.tv", "linkedin.com",
  "pinterest.com", "threads.net", "tracker.gg"
];

const warnedTabs = new Set();

async function checkForDistraction() {
  const { mode } = await chrome.storage.local.get("mode");
  if (mode !== "study") return;

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.url || !tab.url.startsWith("http")) return;

  const hostname = new URL(tab.url).hostname.toLowerCase();
  if (hostname.includes(CHATGPT_DOMAIN)) return;
  if (!BAD_DOMAINS.some(d => hostname.includes(d))) return;
  if (warnedTabs.has(tab.id)) return;

  warnedTabs.add(tab.id);

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: showWarningOverlay
  });

  setTimeout(async () => {
    try {
      const tabs = await chrome.tabs.query({ currentWindow: true });
      let gptTab = tabs.find(t =>
        t.url && new URL(t.url).hostname.includes(CHATGPT_DOMAIN)
      );

      if (!gptTab) {
        await chrome.tabs.create({
          url: `https://${CHATGPT_DOMAIN}`,
          active: true
        });
      } else {
        await chrome.tabs.update(gptTab.id, { active: true });
      }

      await chrome.tabs.remove(tab.id);
    } catch (e) {
      console.error("Redirect failed:", e);
    }

    warnedTabs.delete(tab.id);
  }, 3000);
}

function showWarningOverlay() {
  if (document.getElementById("study-anchor-warning")) return;

  const overlay = document.createElement("div");
  overlay.id = "study-anchor-warning";
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    backdrop-filter: blur(18px);
    background: rgba(0,0,0,0.6);
    z-index: 999999;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: system-ui, sans-serif;
  `;

  const modal = document.createElement("div");
  modal.style.cssText = `
    width: 420px;
    max-width: 90%;
    padding: 36px 40px;
    border-radius: 32px;
    background: radial-gradient(circle at top, #101a2b, #070b14);
    box-shadow:
      0 0 80px rgba(0,0,0,0.9),
      inset 0 0 1px rgba(255,255,255,0.18);
    text-align: center;
    color: white;
  `;

  modal.innerHTML = `
    <!-- ICON (EXACT STYLE) -->
    <div style="
      width: 64px;
      height: 64px;
      margin: 0 auto 20px;
      border-radius: 16px;
      background: linear-gradient(180deg, #0f1c2f, #0a1322);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow:
        inset 0 0 10px rgba(255,255,255,0.08),
        0 0 20px rgba(80,140,255,0.35);
    ">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M9 7L4 12L9 17" stroke="white" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 12H14C17.3137 12 20 14.6863 20 18" stroke="white" stroke-width="2.4" stroke-linecap="round"/>
      </svg>
    </div>

    <h2 style="margin:0 0 10px;font-weight:600;">
      Action Required
    </h2>

    <p style="opacity:0.9;line-height:1.45;margin-bottom:24px;">
      Please return to ChatGPT<br>
      to continue your session.
    </p>

    <div id="countdown" style="
      display: inline-block;
      padding: 12px 34px;
      border-radius: 18px;
      background: linear-gradient(180deg, #5fa8ff, #2f6bff);
      font-weight: 600;
      box-shadow: 0 0 30px rgba(80,140,255,0.75);
    ">
      Go Back (3)
    </div>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  let time = 3;
  const btn = modal.querySelector("#countdown");

  const timer = setInterval(() => {
    time--;
    if (time <= 0) clearInterval(timer);
    else btn.textContent = `Go Back (${time})`;
  }, 1000);
}



chrome.tabs.onActivated.addListener(checkForDistraction);
chrome.tabs.onUpdated.addListener((_, info) => {
  if (info.status === "complete") checkForDistraction();
});
`
      },
      {
        name: "popup.html",
        language: "html",
        content:
`<!DOCTYPE html>
<html>
<head>
  <style>
    html, body {
      width: 220px;
      height: 320px;
      margin: 0;
      padding: 0;
      overflow: hidden;

      /* IMPORTANT: no transparency */
      background: linear-gradient(180deg, #191e25, #0b0712);
    }

    body {
      font-family: system-ui, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .card {
      width: 100%;
      height: 100%;
      border-radius: 0; 
      background: linear-gradient(circle at top, #181e28, #050910);
      box-shadow: inset 0 0 40px rgba(0,0,0,0.9);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
      color: white;
    }


    .label {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0.4px;
      opacity: 0.95;
    }

    .switch {
      position: relative;
      width: 56px;
      height: 150px;
      margin: 20px 0;
      border-radius: 28px;
      background: linear-gradient(180deg, #04070d, #070f1e);
      box-shadow:
        inset 0 0 18px rgba(0,0,0,0.9),
        inset 0 0 2px rgba(255,255,255,0.05);
      cursor: pointer;
    }

    .knob {
      position: absolute;
      left: 6px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: linear-gradient(180deg, #182221, #091412);
      box-shadow:
        0 0 10px rgba(54, 54, 54, 0.35);
      transition: top 0.35s cubic-bezier(.4,0,.2,1);
    }

    .study .knob {
      top: 8px;
      background: linear-gradient(180deg, #47e38a, #1fae66);
      box-shadow: 0 0 25px rgba(80,255,160,0.55);
    }

    .casual .knob {
      top: 98px;
    }
  </style>
</head>

<body>
  <div class="card">
    <div class="label">Study</div>

    <div id="switch" class="switch casual">
      <div class="knob"></div>
    </div>

    <div class="label">Casual</div>
  </div>

  <script src="popup.js"></script>
</body>
</html>
`
      },

      {
        name: "popupt.js",
        language: "javascript",
        content:
`const switchEl = document.getElementById("switch");

function setMode(mode) {
  switchEl.classList.remove("study", "casual");
  switchEl.classList.add(mode);
  chrome.storage.local.set({ mode });
}

chrome.storage.local.get("mode", ({ mode }) => {
  setMode(mode || "casual");
});

switchEl.addEventListener("click", () => {
  chrome.storage.local.get("mode", ({ mode }) => {
    setMode(mode === "study" ? "casual" : "study");
  });
});
`
      },
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
