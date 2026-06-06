<div align="center">

<!-- HERO BANNER -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=QuestionGenius%20Elite&fontSize=48&fontColor=fff&animation=twinkling&fontAlignY=36&desc=AI-Powered%20Assessment%20Intelligence%20Engine&descAlignY=58&descSize=18" width="100%"/>

<!-- BADGES ROW 1 — Status & Version -->
<p>
  <img src="https://img.shields.io/badge/version-2.0.0-6366f1?style=for-the-badge&logo=semver&logoColor=white" alt="Version"/>
  <img src="https://img.shields.io/badge/status-production%20ready-22c55e?style=for-the-badge&logo=statuspage&logoColor=white" alt="Status"/>
  <img src="https://img.shields.io/badge/license-MIT-f59e0b?style=for-the-badge&logo=opensourceinitiative&logoColor=white" alt="License"/>
  <img src="https://img.shields.io/badge/PRs-welcome-34d399?style=for-the-badge&logo=github&logoColor=white" alt="PRs Welcome"/>
</p>

<!-- BADGES ROW 2 — Tech Stack -->
<p>
  <img src="https://img.shields.io/badge/Groq-LPU%20Inference-FF4757?style=for-the-badge&logo=lightning&logoColor=white" alt="Groq"/>
  <img src="https://img.shields.io/badge/Llama_3.3-70B_Versatile-7C3AED?style=for-the-badge&logo=meta&logoColor=white" alt="Llama 3.3"/>
  <img src="https://img.shields.io/badge/Anthropic-Claude_Sonnet_4-00D2FF?style=for-the-badge&logo=anthropic&logoColor=white" alt="Claude"/>
  <img src="https://img.shields.io/badge/PDF.js-3.4.120-E44D26?style=for-the-badge&logo=mozilla&logoColor=white" alt="PDF.js"/>
</p>

<!-- BADGES ROW 3 — Frontend -->
<p>
  <img src="https://img.shields.io/badge/HTML5-Pure%20Vanilla-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-Custom%20Properties-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white" alt="Bootstrap"/>
  <img src="https://img.shields.io/badge/TailwindCSS-3.x-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/Chart.js-4.4.0-FF6384?style=flat-square&logo=chartdotjs&logoColor=white" alt="Chart.js"/>
  <img src="https://img.shields.io/badge/Mammoth.js-1.6.0-2E86AB?style=flat-square&logo=microsoftword&logoColor=white" alt="Mammoth.js"/>
</p>

<br/>

> **Transform any document into a comprehensive, pedagogically-sound question bank — in under 3 seconds.**  
> Powered by Groq's LPU inference engine and Meta's Llama 3.3 70B, with Anthropic Claude as an intelligent fallback.

<br/>

</div>

---

## 📺 Demo

<!-- Replace with your actual demo video or GIF -->
<div align="center">
<a href="YOUR_DEMO_VIDEO_URL_HERE">
  <img src="Screenshot 2026-06-06 211016.png" alt="QuestionGenius Elite Demo" width="80%" style="border-radius:12px; border: 2px solid #6366f1;"/>
</a>

<br/><br/>

> 🎬 **[Watch Full Demo Video →](YOUR_DEMO_VIDEO_URL_HERE)**  
> Upload a PDF → Configure AI → Get 30 questions in 1.2 seconds

</div>

---

## 📋 Table of Contents

| Section | Description |
|---|---|
| [🏗️ Architecture](#️-architecture) | System design, data flow, component overview |
| [✨ Features](#-features) | Full feature breakdown with technical depth |
| [⚙️ Tech Stack](#️-tech-stack) | Every library, API, and tool used |
| [🚀 Getting Started](#-getting-started) | Zero-config local setup in 60 seconds |
| [🔌 API Configuration](#-api-configuration) | Groq & Anthropic setup guide |
| [🔄 How It Works](#-how-it-works) | Step-by-step generation pipeline walkthrough |
| [📁 Project Structure](#-project-structure) | File layout and module responsibilities |
| [📦 Question Schema](#-question-schema) | Full JSON schema for all 5 question types |
| [📊 Analytics & Stats](#-analytics--stats) | Real-time metrics and session tracking |
| [🎯 Question Types](#-question-types) | All 5 formats: spec, logic, and example output |
| [⌨️ Keyboard Shortcuts](#️-keyboard-shortcuts) | Power-user hotkeys |
| [🌐 Deployment](#-deployment) | GitHub Pages, Netlify, Vercel guides |
| [🛣️ Roadmap](#️-roadmap) | What's coming next |
| [🤝 Contributing](#-contributing) | How to open a PR |
| [📄 License](#-license) | MIT |

---

## 🏗️ Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                        QUESTIONGENIUS ELITE v2.0                    │
│                     Pure Client-Side Architecture                    │
└─────────────────────────────────────────────────────────────────────┘

 ┌──────────────┐        ┌──────────────────────────────────────────┐
 │              │        │             BROWSER (Client)             │
 │  index.html  │──────▶ │  ┌──────────┐   ┌────────────────────┐  │
 │  Landing Page│        │  │  try.html │   │   State Engine (S) │  │
 │              │        │  │  App Core │──▶│   localStorage     │  │
 └──────────────┘        │  └─────┬────┘   └────────────────────┘  │
                         │        │                                  │
                         └────────┼─────────────────────────────────┘
                                  │
              ┌───────────────────┼───────────────────┐
              ▼                   ▼                   ▼
     ┌────────────────┐  ┌───────────────┐  ┌────────────────┐
     │  Document      │  │   Settings    │  │   Results      │
     │  Ingestion     │  │   Manager     │  │   Renderer     │
     │  Layer         │  │               │  │                │
     └───────┬────────┘  └───────────────┘  └───────┬────────┘
             │                                       │
     ┌───────▼──────────────────────┐               │
     │     PARSER SELECTION LOGIC   │               │
     │                              │               │
     │  ┌─────────┐  ┌──────────┐  │               │
     │  │ PDF.js  │  │Mammoth.js│  │               │
     │  │ (PDFs)  │  │ (DOCX)   │  │               │
     │  └────┬────┘  └────┬─────┘  │               │
     │       │             │        │               │
     │  ┌────▼─────────────▼─────┐ │               │
     │  │  Raw Text Extraction   │ │               │
     │  │  (max 5,000 chars)     │ │               │
     │  └────────────┬───────────┘ │               │
     └───────────────┼─────────────┘               │
                     │                              │
     ┌───────────────▼──────────────────────────┐  │
     │          AI GENERATION LAYER             │  │
     │                                          │  │
     │  ┌─────────────────────────────────────┐ │  │
     │  │  System Prompt Engineering          │ │  │
     │  │  • JSON schema injection            │ │  │
     │  │  • Bloom's taxonomy level           │ │  │
     │  │  • Difficulty calibration           │ │  │
     │  │  • Language localization            │ │  │
     │  └─────────────────────────────────────┘ │  │
     │                  │                        │  │
     │  ┌───────────────▼────────────────────┐  │  │
     │  │      PROVIDER WATERFALL            │  │  │
     │  │                                    │  │  │
     │  │  1st → Groq API                    │  │  │
     │  │        llama-3.3-70b-versatile     │  │  │
     │  │        response_format: json       │  │  │
     │  │        max_tokens: 4096            │  │  │
     │  │             ▼ (on failure)         │  │  │
     │  │  2nd → Anthropic Claude            │  │  │
     │  │        claude-sonnet-4-20250514    │  │  │
     │  │             ▼ (on failure)         │  │  │
     │  │  3rd → SmartFallback()             │  │  │
     │  │        JS-based local generator    │  │  │
     │  └────────────────────────────────────┘  │  │
     └──────────────────────────────────────────┘  │
                     │                              │
     ┌───────────────▼──────────────────────────┐  │
     │           JSON VALIDATION LAYER          │──┘
     │   parseJSON() → unwrap → Array check     │
     └──────────────────────────────────────────┘
```
### Component Architecture

```
src/
├── index.html              ← Landing page (standalone, zero-deps inline)
│   ├── Canvas particle system (vanilla JS)
│   ├── Hero typewriter rotation
│   ├── Intersection Observer reveal animations
│   └── Counter animation engine
│
└── try.html                ← Application shell
    ├── State Management
    │   └── Object S{} ← single source of truth + localStorage persistence
    ├── Document Processing
    │   ├── extractText(file) ← dispatcher
    │   ├── PDF.js pipeline  ← async page iteration
    │   └── Mammoth DOCX     ← arrayBuffer extraction
    ├── AI Layer
    │   ├── callAI()         ← orchestrator with provider waterfall
    │   ├── callGroq()       ← primary; unwraps {questions:[]} wrappers
    │   ├── callClaude()     ← fallback; direct-browser-access header
    │   ├── parseJSON()      ← regex-based JSON fence stripper
    │   └── smartFallback()  ← offline JS generator
    ├── Render Engine
    │   ├── renderResults()  ← staggered animation + card injection
    │   ├── buildCard(q, i)  ← per-type HTML builder (5 branches)
    │   ├── pickOpt()        ← MCQ answer reveal + disability
    │   └── pickTF()         ← True/False answer reveal
    ├── Quiz Engine
    │   ├── prepareQuiz()    ← resets QZ state object
    │   ├── renderQuizQ()    ← per-question progressive renderer
    │   ├── quizAns()        ← scoring + feedback injection
    │   └── showQuizEnd()    ← SVG ring + grade calculation
    ├── Analytics
    │   ├── initCharts()     ← Chart.js line + doughnut init
    │   └── activity-log     ← session history table
    ├── Export Engine
    │   └── 4 formats: JSON · Markdown · CSV · Plain Text
    └── Visual Layer
        ├── Neural particle canvas (WebGL-adjacent, rAF loop)
        ├── Cursor glow (mousemove → CSS left/top)
        ├── Scroll progress bar
        └── Toast notification system
```

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🧠 AI Generation Engine
- **Groq LPU Inference** — llama-3.3-70b-versatile at ~700 tok/s
- **3-tier provider waterfall** — Groq → Claude → Local JS fallback, fully automatic
- **Structured JSON output** — `response_format: json_object` enforced at API level
- **Prompt schema injection** — 5 question-type schemas embedded in system prompt
- **Bloom's Taxonomy support** — Remember → Create cognitive levels
- **Multi-language output** — 8 languages incl. Tamil, Hindi, Arabic, Chinese

</td>
<td width="50%">

### 📄 Document Ingestion
- **PDF.js v3.4.120** — async page-by-page extraction, up to 40 pages
- **Mammoth.js v1.6.0** — lossless DOCX/DOC raw text extraction
- **FileReader API** — zero-latency TXT processing
- **Drag & Drop + Click** — dual input UX with animated feedback
- **Progress tracking** — real-time extraction percentage bar
- **5,000 char smart truncation** — avoids token limit errors

</td>
</tr>
<tr>
<td width="50%">

### 🎯 Question Types (5 formats)
- **MCQ** — 4-option with distractor logic + correct index
- **True/False** — nuanced binary statements
- **Short Answer** — model answer + explanation
- **Fill in the Blank** — cloze-style with hint support
- **Matching Pairs** — term-definition grid layout

</td>
<td width="50%">

### 📊 Analytics Dashboard
- **Chart.js line chart** — 7-day generation history
- **Doughnut chart** — live question type distribution
- **Session activity table** — doc name, count, duration, status
- **localStorage persistence** — stats survive page refresh
- **P95 latency tracking** — rolling average generation time

</td>
</tr>
<tr>
<td width="50%">

### 🎮 Interactive Quiz Mode
- **Progressive rendering** — one question at a time
- **Instant answer feedback** — color-coded correct/wrong states
- **SVG score ring** — animated gradient circle with grade (A+→D)
- **Partial credit** — short answer gets 0.5 points
- **Session scoring** — live score counter throughout quiz

</td>
<td width="50%">

### ⬇️ Export Engine
- **JSON** — full schema with metadata (difficulty, topic, explanation)
- **Markdown** — GitHub-ready `.md` with answer blocks
- **CSV** — spreadsheet-compatible, Excel-ready
- **Plain Text** — printer-friendly with unicode dividers
- **Clipboard API** — one-click copy all questions

</td>
</tr>
</table>

---

## ⚙️ Tech Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **AI (Primary)** | Groq API + Llama 3.3 | `llama-3.3-70b-versatile` | Question generation at ~700 tok/s |
| **AI (Fallback)** | Anthropic Claude | `claude-sonnet-4-20250514` | Automatic fallback if Groq fails |
| **AI (Offline)** | SmartFallback JS | — | Regex-based local generation |
| **PDF Parsing** | PDF.js | `3.4.120` | Client-side PDF text extraction |
| **DOCX Parsing** | Mammoth.js | `1.6.0` | Word document processing |
| **Charts** | Chart.js | `4.4.0` | Analytics visualisations |
| **UI Framework** | Bootstrap | `5.3.3` | Grid system + utilities |
| **Utility CSS** | Tailwind CSS | `3.x` CDN | Rapid utility classes |
| **Icons** | Font Awesome | `6.5.0` | All iconography |
| **Fonts** | Google Fonts | — | Syne, DM Sans, Exo 2, Mulish, JetBrains Mono |
| **Animations** | Animate.css | `4.1.1` | Entry animations |
| **Runtime** | Vanilla JS (ES2022) | — | Zero build step, pure browser |
| **Persistence** | localStorage API | — | Session stats + user preferences |
| **Canvas** | HTML5 Canvas 2D | — | Neural particle background |

> **Zero build tooling required.** No Webpack, Vite, npm, or Node.js. Drop the files in a folder and open in browser.

---

## 🚀 Getting Started

### Prerequisites

```
• Any modern browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
• A free Groq API key  →  https://console.groq.com
• (Optional) Anthropic Claude key for fallback  →  https://console.anthropic.com
```

### Option 1 — Clone & Open (Fastest)

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/questiongenius-elite.git
cd questiongenius-elite

# 2. Open directly — no install step needed
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

### Option 2 — Local Dev Server (Recommended for CORS-free API calls)

```bash
# Using Python (built-in)
python3 -m http.server 8080
# → http://localhost:8080

# Using Node.js serve
npx serve .
# → http://localhost:3000

# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

### Option 3 — GitHub Pages (One-click deploy)

```bash
# Push to a GitHub repo, then:
# Settings → Pages → Source: main branch / root → Save
# Your app is live at: https://YOUR_USERNAME.github.io/questiongenius-elite/
```

### First Run Checklist

```
 ✅ Open index.html in browser
 ✅ Click "Get Started" → navigates to try.html
 ✅ Click the 🔑 key icon in the navbar → paste your Groq API key
 ✅ Upload a PDF or paste text in the Upload tab
 ✅ Select question types + difficulty + count
 ✅ Click "Generate Questions" or press Ctrl+Enter
 ✅ Questions appear in ~1.2 seconds
```

---

## 🔌 API Configuration

### Groq (Primary — Free, Ultra-Fast)

1. Sign up at **[console.groq.com](https://console.groq.com)** — free tier available
2. Create an API key (starts with `gsk_...`)
3. In the app: click the **🔑** icon → paste key → click **Save & Activate**

```js
// Internal call structure (try.html → callGroq)
POST https://api.groq.com/openai/v1/chat/completions
Authorization: Bearer gsk_YOUR_KEY_HERE
Content-Type: application/json

{
  "model": "llama-3.3-70b-versatile",
  "messages": [{ "role": "system", "content": "..." }, { "role": "user", "content": "..." }],
  "max_tokens": 4096,
  "temperature": 0.7,
  "response_format": { "type": "json_object" }
}
```

> **Rate limits (free tier):** 14,400 req/day · 6,000 tokens/min · 30 req/min

### Anthropic Claude (Fallback — Auto-detects Claude.ai context)

```js
// Internal call structure (try.html → callClaude)
POST https://api.anthropic.com/v1/messages
anthropic-version: 2023-06-01
anthropic-dangerous-direct-browser-access: true  ← enables CORS from browser

{
  "model": "claude-sonnet-4-20250514",
  "max_tokens": 4096,
  "system": "...",
  "messages": [{ "role": "user", "content": "..." }]
}
```

> **Running inside Claude.ai?** No key needed — the `anthropic-dangerous-direct-browser-access` header makes it work automatically.

### Provider Priority Logic

```
User clicks Generate
        │
        ▼
S.groqKey exists?
   │         │
  YES         NO
   │           └──────────────────────────────────┐
   ▼                                              ▼
callGroq()                                  callClaude()
   │                                              │
   ▼                                              ▼
Response OK?                              Response OK?
   │     │                                  │      │
 YES     NO                               YES      NO
   │      └──── callClaude() ────▶          │       │
   ▼                                       ▼        ▼
parseJSON()                           parseJSON()  smartFallback()
```

---

## 🔄 How It Works

### Phase 1 — Document Ingestion

```
User Input → File Type Detection → Parser Selection → Raw Text Buffer
```

| Input Type | Parser | Max Input | Extraction Method |
|---|---|---|---|
| `.pdf` | PDF.js 3.4.120 | 40 pages | `getTextContent()` per page, items joined |
| `.docx` / `.doc` | Mammoth.js 1.6.0 | Full doc | `extractRawText()` via `arrayBuffer` |
| `.txt` | FileReader API | Full file | `file.text()` native promise |
| Pasted text | DOM | Unlimited | `textarea.value.trim()` |

All paths converge to a single `string` truncated to **5,000 characters** before AI submission.

### Phase 2 — Prompt Engineering

The system prompt is dynamically assembled at generation time:

```
System Prompt = [
  Role definition (expert question generator)
  + JSON-only instruction (no markdown, no explanation)
  + ${S.count} questions at ${S.difficulty} difficulty
  + All 5 question type JSON schemas (inline)
  + Mixed-type distribution: ${typeStr}
  + Language override: ${lang}
  + Conditional: omit hints / explanations if unchecked
  + Optional: custom instructions textarea value
]

User Prompt = [
  "Generate ${count} questions (types: ${typeStr}) from:\n\n${text}\n\nReturn ONLY the JSON array."
]
```

### Phase 3 — AI Response Parsing

The `parseJSON()` function handles all malformed responses:

```js
function parseJSON(raw) {
  // Step 1: Strip markdown code fences
  let s = raw.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();

  // Step 2: Find outermost JSON array brackets
  const a = s.indexOf('['), b = s.lastIndexOf(']');
  if (a !== -1 && b !== -1) s = s.slice(a, b + 1);

  // Step 3: Parse and validate
  const p = JSON.parse(s);
  if (Array.isArray(p) && p.length > 0) return p;
  throw new Error('Empty array');
}
```

Groq's `json_object` mode may return `{ "questions": [...] }` — the unwrap logic handles all common wrappers: `questions`, `data`, `items`, `result`.

### Phase 4 — Rendering Pipeline

```js
renderResults(qs)
  └── qs.map((q, i) => buildCard(q, i))       // builds HTML string per type
      └── list.innerHTML = cards.join('')       // single DOM write (perf)
          └── staggered classList.add('show')  // 70ms per card animation delay
```

Each card type (`mcq`, `trueFalse`, `shortAnswer`, `fillBlanks`, `matching`) renders a different interactive HTML block with reveal-on-demand answers.

### Phase 5 — Quiz Mode State Machine

```
States: IDLE → READY → QUESTION[0..n] → END

IDLE     → prepareQuiz(qs)    → READY
READY    → startQuiz()        → QUESTION[0]
QUESTION → quizAns(answer)    → QUESTION[idx+1] or END
END      → showQuizEnd()      → SVG ring + grade display
         → startQuiz()        → QUESTION[0] (retry loop)
```

---

## 📁 Project Structure

```
questiongenius-elite/
│
├── 📄 index.html          # Landing page — completely self-contained
│   │                      # No external JS file dependencies
│   ├── <style>            # ~500 lines CSS: CSS vars, neo-brutalist theme
│   └── <script>           # Particle canvas, typewriter, reveal observer,
│                          # counter animation, cursor, scroll progress
│
├── 📄 try.html            # Full application — ~1,200 lines JS
│   ├── <style>            # Neural Cosmos dark/light theme (CSS vars)
│   └── <script>
│       ├── STATE          # const S = {} — single source of truth
│       ├── THEME          # applyTheme(), localStorage persist
│       ├── TABS           # switchTab() — 4 panes
│       ├── FILE UPLOAD    # drag/drop, processFile(), extractText()
│       ├── AI GENERATION  # callAI(), callGroq(), callClaude(), smartFallback()
│       ├── JSON PARSING   # parseJSON() — robust fence stripping
│       ├── RENDER ENGINE  # renderResults(), buildCard() per type
│       ├── INTERACTIVITY  # pickOpt(), pickTF(), toggleReveal()
│       ├── COPY/EXPORT    # 4 export formats via Blob + URL.createObjectURL
│       ├── QUIZ MODE      # QZ state object, renderQuizQ(), quizAns()
│       ├── STATS UI       # updateStatsUI(), persist()
│       ├── CHARTS         # Chart.js line + doughnut lazy init
│       ├── MODALS         # API Setup, Help — open/close/backdrop click
│       ├── TOAST SYSTEM   # toast(msg, type) — 4s auto-dismiss
│       ├── CANVAS BG      # Neural particle Node class + rAF draw loop
│       ├── CURSOR GLOW    # mousemove → CSS transform
│       └── KEYBOARD       # Ctrl+Enter, Ctrl+K, Escape
│
├── 📄 18069232-hd_1920_1080_24fps.mp4   # Hero demo video (try.html)
│
└── 📄 README.md           # This file
```

---

## 📦 Question Schema

All 5 question types output strictly-typed JSON objects:

### MCQ (Multiple Choice)
```json
{
  "type": "mcq",
  "question": "What is the primary mechanism by which neural networks learn?",
  "options": [
    "A. Random weight initialization",
    "B. Backpropagation + gradient descent",
    "C. Forward-only computation",
    "D. Static feature mapping"
  ],
  "correct": 1,
  "explanation": "Backpropagation computes gradients of the loss w.r.t. all weights...",
  "hint": "Think about how errors are propagated back through layers",
  "topic": "Deep Learning",
  "difficulty": "medium"
}
```

### True / False
```json
{
  "type": "trueFalse",
  "question": "Gradient descent always converges to the global minimum.",
  "correct": false,
  "explanation": "Gradient descent can get stuck in local minima for non-convex loss surfaces.",
  "topic": "Optimization",
  "difficulty": "hard"
}
```

### Short Answer
```json
{
  "type": "shortAnswer",
  "question": "Explain the vanishing gradient problem and one solution.",
  "answer": "Gradients shrink exponentially during backprop in deep networks...",
  "explanation": "ReLU activations and residual connections help mitigate this.",
  "topic": "Neural Networks",
  "difficulty": "hard"
}
```

### Fill in the Blank
```json
{
  "type": "fillBlanks",
  "question": "The ___ algorithm updates weights by moving in the direction of steepest descent.",
  "answer": "gradient descent",
  "hint": "Starts with 'G', involves partial derivatives",
  "topic": "Optimization",
  "difficulty": "easy"
}
```

### Matching Pairs
```json
{
  "type": "matching",
  "question": "Match each optimizer to its key characteristic",
  "pairs": [
    { "term": "SGD",  "definition": "Fixed learning rate, high variance updates" },
    { "term": "Adam", "definition": "Adaptive learning rates with momentum" },
    { "term": "RMSProp", "definition": "Divides learning rate by running average of gradients" }
  ],
  "topic": "Optimizers",
  "difficulty": "medium"
}
```

---

## 📊 Analytics & Stats

The app tracks and persists the following metrics to `localStorage` under key `qg_v2`:

```js
S.stats = {
  docs:       0,   // total documents processed
  qs:         0,   // total questions generated (all sessions)
  totalTime:  0,   // cumulative generation time in seconds
  sessions:   0,   // number of generate() calls
}
```

**Derived metrics displayed in UI:**
- `Docs Processed` — `S.stats.docs`
- `Questions Made` — `S.stats.qs`
- `Avg Time (P95)` — `(S.stats.totalTime / S.stats.sessions).toFixed(1) + "s"`
- `AI Provider` — dynamic based on active provider pill

**Charts:**
- **Line chart** — hardcoded 7-day mock until first session, then shows real session count
- **Doughnut chart** — live distribution from `S.questions` array (updates per generation)
- **Activity table** — last 10 sessions with timestamp, doc name, count, duration

---

## 🎯 Question Types

| Type | Bloom's Level | Best For | Distractor Logic |
|---|---|---|---|
| **MCQ** | Remember → Apply | Fact-checking, concept recall | 3 plausible wrong answers, same grammatical form |
| **True/False** | Understand | Misconception testing | Nuanced statements, not trivially obvious |
| **Short Answer** | Analyze → Evaluate | Deep understanding, synthesis | N/A — model answer provided |
| **Fill in Blank** | Remember → Apply | Vocabulary, key terms | Hint letter + topic tag |
| **Matching** | Understand → Apply | Terminology sets, definitions | 3+ pairs shuffled display |

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl` + `Enter` | Trigger question generation |
| `Ctrl` + `K` | Open API Setup modal |
| `Esc` | Close any open modal |

---

## 🌐 Deployment

### GitHub Pages (Zero-cost, Instant)

```bash
# Push repo to GitHub, then:
# 1. Settings → Pages → Source: Deploy from branch
# 2. Branch: main / (root)
# 3. Save → wait ~60s
# 4. Live at: https://YOUR_USERNAME.github.io/questiongenius-elite/
```

### Netlify (Drag & Drop)

```bash
# Option A: Drag project folder onto netlify.com/drop
# Option B: Connect GitHub repo → auto-deploy on push
# No build command needed → Publish directory: /
```

### Vercel

```bash
npx vercel
# Framework: Other
# Build Command: (leave blank)
# Output Directory: .
# → Deployed in ~10 seconds
```

### Custom Domain + Cloudflare

```bash
# 1. Deploy to any of the above
# 2. Add your domain in provider dashboard
# 3. Update DNS CNAME record at your registrar
# 4. Enable Cloudflare proxy → free DDoS protection + CDN
```

---

## 🛣️ Roadmap

```
v2.0  ✅  Groq primary + Claude fallback + local JS fallback
v2.0  ✅  5 question types + quiz mode + 4 export formats
v2.0  ✅  Analytics dashboard + Chart.js
v2.0  ✅  Dark/light theme + accent color swatches
v2.0  ✅  Multi-language support (8 languages)

v2.1  🔄  Image upload support (OCR via Tesseract.js)
v2.1  🔄  Bulk export to Anki flashcard format (.apkg)
v2.1  🔄  YouTube URL input → transcript extraction → questions
v2.2  ⏳  LMS integration (Moodle XML, Canvas QTI export)
v2.2  ⏳  Collaborative mode (shared question banks via URL hash)
v2.3  ⏳  Voice input (Web Speech API) for pasting text
v3.0  ⏳  PWA support — offline-first, installable on mobile
v3.0  ⏳  OpenRouter integration (50+ model support)
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

```bash
# 1. Fork the repo
# 2. Create your feature branch
git checkout -b feat/add-anki-export

# 3. Make your changes (index.html or try.html)
# 4. Test locally with a live server

# 5. Commit with conventional commit format
git commit -m "feat(export): add Anki .apkg export format"

# 6. Push and open a PR
git push origin feat/add-anki-export
```

### Commit Convention

```
feat(scope):     new feature
fix(scope):      bug fix
docs(scope):     documentation only
style(scope):    formatting, CSS
refactor(scope): code restructure, no behaviour change
perf(scope):     performance improvement
```

### Good First Issues

- [ ] Add `aria-label` attributes to all icon buttons (accessibility)
- [ ] Add a "shuffle questions" button to quiz mode
- [ ] Add question count badge per type in the analytics doughnut
- [ ] Support CSV input (parse rows as text content)
- [ ] Add keyboard navigation for MCQ options (1/2/3/4 keys)

---

## 📄 License

```
MIT License

Copyright (c) 2025 QuestionGenius Elite

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
```

---

## 🙏 Acknowledgements

| Project | Usage |
|---|---|
| [Groq](https://groq.com) | LPU-powered inference engine — the speed backbone |
| [Meta Llama 3.3](https://llama.meta.com) | Base model for question generation |
| [Anthropic Claude](https://anthropic.com) | Fallback AI model |
| [PDF.js](https://mozilla.github.io/pdf.js/) | Client-side PDF parsing by Mozilla |
| [Mammoth.js](https://github.com/mwilliamson/mammoth.js) | DOCX extraction |
| [Chart.js](https://chartjs.org) | Analytics visualisation |
| [Bootstrap](https://getbootstrap.com) | Responsive grid system |
| [Font Awesome](https://fontawesome.com) | Icon library |
| [Google Fonts](https://fonts.google.com) | Syne · DM Sans · Exo 2 · Mulish · JetBrains Mono |

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%"/>

**Built with 🧠 AI + ⚡ Speed + 🎯 Purpose**

<p>
  <a href="https://questiongenius.netlify.app/">🌐 Live Demo</a> ·
  <a href="https://github.com/YOUR_USERNAME/questiongenius-elite/issues">🐛 Report Bug</a> ·
  <a href="https://github.com/YOUR_USERNAME/questiongenius-elite/issues">💡 Request Feature</a>
</p>

<p>
  <img src="https://img.shields.io/github/stars/YOUR_USERNAME/questiongenius-elite?style=social" alt="Stars"/>
  <img src="https://img.shields.io/github/forks/YOUR_USERNAME/questiongenius-elite?style=social" alt="Forks"/>
  <img src="https://img.shields.io/github/watchers/YOUR_USERNAME/questiongenius-elite?style=social" alt="Watchers"/>
</p>

*If this project helped you, consider starring ⭐ — it helps others discover it.*

</div>
