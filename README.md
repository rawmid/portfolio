# Rawnak Tahmid — Portfolio

My personal portfolio website — a single-page hub for the things I build, the stuff I'm learning, and a couple of dream projects I can't stop thinking about.

🔗 Live site: *https://rawmid.github.io/portfolio/* 

## About

Hi, I'm Rawnak — a developer based in Dhaka, Bangladesh who likes learning things, building stuff, playing games, and trying new ideas. Sometimes I'm deep in a focused sprint, sometimes I'm bouncing between three half-finished experiments, but I always come back to actually shipping something. This site is where I collect that work.

## What's on the site

- **Home** — a profile card with a quick "about me" and my contact details
- **Pinned Projects** — my active/recent builds, each with its own detail page
- **Learnings** — a roadmap and tech-stack breakdown showing what I'm learning and how far along I am
- **Moonshot Lab** — bigger, ambitious dream projects that are more vision than shipped product right now
- **Contact** — a working contact form

## Featured Projects

| Project | Description | Stack |
|---|---|---|
| **Backdot** | A CLI chemistry companion — an intelligent periodic table assistant that identifies elements through a Yes/No decision tree | C |
| **Missile Simulator** | A terminal-based physics simulator that calculates projectile range and renders an ASCII animation of the launch | C |
| **Study Anchor** | A lightweight browser extension that helps you stay focused while studying by monitoring and blocking distracting sites | HTML, CSS, JavaScript |
| **Web Terminal** | A cinematic, simulated terminal experience built just for fun | HTML, CSS, JavaScript |

### Moonshot Lab (dream projects)

- **Kidchemist** — bringing chemistry to life for young minds: playful, safe, and made to spark curiosity
- **TomēLab** — a realistic surgical simulation platform focused on precision, anatomy, and training

## Tech Stack

Built with plain **HTML, CSS, and JavaScript** — no framework, no build step. Fonts via Google Fonts (Space Grotesk & Inter). The contact form is powered by [Web3Forms](https://web3forms.com/).

## Project Structure

```
├── index.html          # Home page (hero, pinned projects, learnings, moonshot lab, contact)
├── all-projects.html    # Full projects listing
├── project.html          # Individual project detail page (driven by projects-data.js)
├── docs.html              # Moonshot Lab documentation pages (driven by docs-data.js)
├── projects-data.js       # Data source for pinned/all projects
├── docs-data.js            # Data source for Moonshot Lab vision docs
├── script.js / project.js / all-projects.js  # Page logic
├── style.css / project.css / all-projects.css / docs.css  # Styling
└── assets/               # Images and icons
```

## Running Locally

No build tools required — it's static HTML/CSS/JS.

```bash
git clone <this-repo-url>
cd <repo-folder>
```

Then just open `index.html` in your browser, or serve it locally:

```bash
python3 -m http.server 8000
```

and visit `http://localhost:8000`.

## Contact

- GitHub: [@rawmid](https://github.com/rawmid)
- Instagram: [@_rawnak_thmd](https://www.instagram.com/_rawnak_thmd/?hl=en)
- Or use the contact form on the site

---

⭐ If you find something here useful or interesting, feel free to star the repo!
