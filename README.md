<div align="center">

<img src="https://img.shields.io/badge/version-2.0.0-c2410c?style=for-the-badge&logo=semver&logoColor=white" alt="Version"/>
<img src="https://img.shields.io/badge/license-MIT-0d7377?style=for-the-badge&logo=opensourceinitiative&logoColor=white" alt="License"/>
<img src="https://img.shields.io/badge/AI-Groq%20%C2%B7%20Llama%203.3-d4a373?style=for-the-badge&logo=meta&logoColor=white" alt="AI"/>
<img src="https://img.shields.io/badge/PRs-Welcome-10b981?style=for-the-badge&logo=github&logoColor=white" alt="PRs Welcome"/>
<img src="https://img.shields.io/badge/status-Production%20Ready-c2410c?style=for-the-badge&logo=statuspage&logoColor=white" alt="Status"/>

<br/><br/>

```
  ██████╗ ██╗   ██╗███████╗███████╗████████╗██╗ ██████╗ ███╗   ██╗
 ██╔═══██╗██║   ██║██╔════╝██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║
 ██║   ██║██║   ██║█████╗  ███████╗   ██║   ██║██║   ██║██╔██╗ ██║
 ██║▄▄ ██║██║   ██║██╔══╝  ╚════██║   ██║   ██║██║   ██║██║╚██╗██║
 ╚██████╔╝╚██████╔╝███████╗███████║   ██║   ██║╚██████╔╝██║ ╚████║
  ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
         ██████╗ ███████╗███╗   ██╗██╗██╗   ██╗███████╗
        ██╔════╝ ██╔════╝████╗  ██║██║██║   ██║██╔════╝
        ██║  ███╗█████╗  ██╔██╗ ██║██║██║   ██║███████╗
        ██║   ██║██╔══╝  ██║╚██╗██║██║██║   ██║╚════██║
        ╚██████╔╝███████╗██║ ╚████║██║╚██████╔╝███████║
         ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚═╝ ╚═════╝ ╚══════╝
```

### **AI-Powered Assessment Creation Engine**

*Transform any document into pedagogically-sound examination questions in under 2 seconds.*
*Built with Groq LPU Inference · Meta Llama 3.3 · Bloom's Taxonomy Framework*

<br/>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-→%20Try%20Now-c2410c?style=for-the-badge)](https://questiongenius.vercel.app)
[![Documentation](https://img.shields.io/badge/Docs-Read%20Now-0d7377?style=for-the-badge)](https://questiongenius.vercel.app/docs)
[![Report Bug](https://img.shields.io/badge/Report%20Bug-f43f5e?style=for-the-badge&logo=github)](https://github.com/yourusername/questiongenius/issues/new?template=bug_report.md)
[![Request Feature](https://img.shields.io/badge/Request%20Feature-d4a373?style=for-the-badge&logo=github)](https://github.com/yourusername/questiongenius/issues/new?template=feature_request.md)

<br/>

> ⭐ **Star this repository** if QuestionGenius accelerated your workflow. Every star means a lot!

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Backend API Reference](#-backend-api-reference)
- [Question Type Schemas](#-question-type-schemas)
- [Design System](#-design-system)
- [Keyboard Shortcuts](#-keyboard-shortcuts)
- [Export Formats](#-export-formats)
- [Performance](#-performance)
- [Browser Compatibility](#-browser-compatibility)
- [Deployment](#-deployment)
- [Environment Variables](#-environment-variables)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Changelog](#-changelog)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)

---

## 🌟 Overview

**QuestionGenius** is a production-grade, AI-powered question generation platform that converts raw documents — PDFs, Word files, or plain text — into structured, pedagogically-sound assessments in seconds. Engineered for educators, institutions, and EdTech platforms demanding exam-quality output at scale.

The system leverages **Groq's LPU inference hardware** paired with **Meta's Llama 3.3-70B** language model to deliver sub-2-second generation latency, making it one of the fastest AI assessment tools available. All questions are calibrated to **Bloom's Taxonomy** cognitive levels, ensuring depth and educational validity across five distinct question formats.

### Why QuestionGenius?

| Challenge | Traditional Approach | QuestionGenius |
|---|---|---|
| Creating 30 MCQs from a 50-page PDF | 3–5 hours manual work | **< 3 seconds** |
| Ensuring Bloom's taxonomy coverage | Manual expert review | **Auto-calibrated** |
| Multilingual assessment creation | Separate translation workflow | **8 languages, native output** |
| Maintaining consistent difficulty | Subjective evaluation | **AI-calibrated Easy/Medium/Hard** |
| Exporting to LMS formats | Manual formatting | **JSON, Markdown, CSV, PDF** |

---

## 🚀 Live Demo

```
🌐  Landing Page :  https://questiongenius.vercel.app
⚡  App (Try Free):  https://questiongenius.vercel.app/try
📖  API Docs      :  https://questiongenius.vercel.app/docs
📊  Status Page   :  https://status.questiongenius.vercel.app
```

**Demo credentials for testing:**
```
Groq API Key: Get free at https://console.groq.com
Backend:      Auto-configured in hosted demo
```

---

## ✨ Key Features

### 🧠 AI & Intelligence
- **Groq LPU Inference** — Industry-leading sub-2s generation speed via Groq's Language Processing Units
- **Llama 3.3-70B** — Meta's state-of-the-art 70 billion parameter model for nuanced question understanding
- **Bloom's Taxonomy Alignment** — Auto-calibrates to all 6 cognitive levels (Remember → Create)
- **Semantic Concept Extraction** — Identifies key concepts, relationships, and themes before generating questions
- **Context-Aware Distractors** — MCQ wrong answers are plausible and pedagogically meaningful, not random

### 📄 Document Processing
- **PDF Parsing** — Full text extraction via PDF.js (up to 40 pages per session)
- **DOCX Support** — Native Word document parsing via Mammoth.js with formatting-aware extraction
- **Plain Text** — Direct paste input for notes, articles, and study material
- **Smart Truncation** — Intelligent 5,000-character context window optimized for Groq's token limits
- **Progress Tracking** — Real-time extraction progress bar with character count feedback

### 🎯 Question Generation
- **5 Question Types** — MCQ, Short Answer, True/False, Fill in the Blank, Matching Pairs
- **3 Difficulty Levels** — Easy, Medium, Hard with AI-calibrated complexity
- **8 Languages** — English, Tamil, Hindi, Spanish, French, German, Arabic, Chinese
- **1–50 Questions** — Configurable count with smart density control
- **Custom Instructions** — Free-form directives appended to the generation prompt
- **Topic Tagging** — Auto-labels each question with the source concept
- **Hint Generation** — Optional contextual hints for each question

### 📊 Export & Integration
- **JSON Export** — Structured data for LMS and API integration
- **Markdown Export** — GitHub-flavored markdown with answers and explanations
- **CSV Export** — Spreadsheet-compatible with topic, difficulty, and type columns
- **Plain Text Export** — Universal format for any platform
- **PDF Export** — Professional examination-ready PDF with answer key via html2pdf.js
- **Clipboard Copy** — One-click formatted text copy

### 🎮 Interactive Features
- **Quiz Mode** — Self-test with interactive answer selection and instant scoring
- **Score Ring** — Animated SVG score visualization with grade and percentage
- **Analytics Dashboard** — Generation history, type distribution (Chart.js), and session stats
- **Activity Log** — Timestamped history of all generation sessions

### 🎨 UI/UX Engineering
- **Custom Cursor** — Dual-ring cursor with motion trail and magnetic button effects
- **3D Tilt Cards** — Perspective-correct card tilt on hover (CSS `preserve-3d`)
- **Noise Texture** — Subtle SVG fractal noise overlay for editorial depth
- **Organic Blob Animations** — CSS `border-radius` morphing background blobs
- **Scroll-Driven Gallery** — JS-driven horizontal parallax scroll for question types section
- **Text Scramble Effect** — Character-by-character text reveal on page load
- **Counter Animations** — Eased numeric counters on stat cards entering viewport
- **Reveal System** — IntersectionObserver-powered staggered entrance animations
- **Dark / Light Mode** — Full theme system with CSS custom properties, persisted to localStorage
- **Accent Color Picker** — 6 runtime accent color swatches updating CSS variables live
- **Preloader** — Branded loading screen with typing animation and scale-out exit
- **Scroll Progress Bar** — Fixed top-of-page reading progress indicator

---

## 🏗️ Architecture

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CLIENT BROWSER                              │
│                                                                     │
│  ┌──────────────┐      ┌──────────────────────────────────────┐    │
│  │  index.html  │      │              try.html                │    │
│  │  (Landing)   │ ──▶  │         (App Interface)              │    │
│  │              │      │                                      │    │
│  │ • Marketing  │      │  ┌──────────┐  ┌──────────────────┐ │    │
│  │ • SEO        │      │  │  Upload  │  │    Settings      │ │    │
│  │ • Animations │      │  │   Tab    │  │      Tab         │ │    │
│  └──────────────┘      │  └──────────┘  └──────────────────┘ │    │
│                        │  ┌──────────┐  ┌──────────────────┐ │    │
│                        │  │   Quiz   │  │   Analytics      │ │    │
│                        │  │   Mode   │  │    (Chart.js)    │ │    │
│                        │  └──────────┘  └──────────────────┘ │    │
│                        │                                      │    │
│                        │  ┌─────────────────────────────────┐│    │
│                        │  │     Document Parser Layer       ││    │
│                        │  │  PDF.js │ Mammoth.js │ TextAPI  ││    │
│                        │  └─────────────────────────────────┘│    │
│                        └──────────────────────────────────────┘    │
└───────────────────────────────┬─────────────────────────────────────┘
                                │ HTTPS POST /api/generate
                                │ { system, user }
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                     BACKEND SERVER (Node.js / Express)             │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    Route Handlers                           │   │
│  │  POST /api/generate  │  GET /api/health  │  GET /api/info   │   │
│  └──────────────────────┬──────────────────────────────────────┘   │
│                         │                                           │
│  ┌──────────────────────▼──────────────────────────────────────┐   │
│  │                   Middleware Layer                          │   │
│  │   Rate Limiter → CORS → Body Parser → Request Validator     │   │
│  └──────────────────────┬──────────────────────────────────────┘   │
│                         │                                           │
│  ┌──────────────────────▼──────────────────────────────────────┐   │
│  │                  Groq API Client                            │   │
│  │   Model: llama-3.3-70b-versatile  │  max_tokens: 4096      │   │
│  │   temperature: 0.7                │  Stream: false          │   │
│  └──────────────────────┬──────────────────────────────────────┘   │
│                         │                                           │
│  ┌──────────────────────▼──────────────────────────────────────┐   │
│  │               Response Pipeline                             │   │
│  │   Raw LLM Text → JSON Extractor → Schema Validator          │   │
│  │   → Sanitiser → { content: [...questions] }                 │   │
│  └─────────────────────────────────────────────────────────────┘   │
└───────────────────────────────┬─────────────────────────────────────┘
                                │ Groq REST API Call
                                │ Authorization: Bearer $GROQ_API_KEY
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    GROQ CLOUD (LPU Inference)                       │
│                                                                     │
│              Model: llama-3.3-70b-versatile                        │
│              Avg Latency: 1.2s  │  Throughput: 750 tokens/s        │
│              Context Window: 128K tokens                            │
└─────────────────────────────────────────────────────────────────────┘
```

### Data Flow: Document → Questions

```
User uploads PDF / DOCX / TXT
           │
           ▼
  ┌─────────────────┐
  │ Document Parser │  PDF.js / Mammoth / FileReader API
  │  Extraction     │  → Raw text string (up to 40 pages)
  └────────┬────────┘
           │
           ▼
  ┌─────────────────┐
  │ Text Truncation │  Smart slice to 5,000 chars
  │ & Sanitization  │  Remove null bytes, normalize whitespace
  └────────┬────────┘
           │
           ▼
  ┌─────────────────┐
  │ Prompt Builder  │  Injects: type schemas, difficulty,
  │                 │  language, count, custom instructions,
  │                 │  Bloom's tier, feature flags
  └────────┬────────┘
           │
           ▼
  ┌─────────────────┐
  │ /api/generate   │  POST → Backend proxy
  │ (Backend Proxy) │  (prevents API key exposure in browser)
  └────────┬────────┘
           │
           ▼
  ┌─────────────────┐
  │ Groq Inference  │  llama-3.3-70b-versatile
  │                 │  Returns: raw JSON string in content
  └────────┬────────┘
           │
           ▼
  ┌─────────────────┐
  │ JSON Parser +   │  Strip markdown fences → JSON.parse()
  │ Validator       │  → array of question objects
  └────────┬────────┘
           │
           ▼
  ┌─────────────────┐
  │ Render Engine   │  buildCard() per question type
  │                 │  Staggered IntersectionObserver reveal
  └────────┬────────┘
           │
           ▼
  ┌─────────────────┐
  │ Quiz / Export   │  Interactive quiz, PDF/JSON/CSV/MD export
  │ Pipeline        │  Analytics chart update, activity log
  └─────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

| Category | Technology | Version | Purpose |
|---|---|---|---|
| **Markup** | HTML5 | — | Semantic structure, ARIA accessibility |
| **Styling** | CSS3 | — | Custom properties, Grid, Clamp, Animations |
| **Typography** | Google Fonts | — | Playfair Display, Inter, JetBrains Mono |
| **Icons** | Font Awesome | 6.5.0 | UI iconography |
| **Layout Utilities** | Bootstrap | 5.3.3 | Grid breakpoints, utility classes |
| **PDF Parsing** | PDF.js | 3.4.120 | Client-side PDF text extraction |
| **DOCX Parsing** | Mammoth.js | 1.6.0 | Word document raw text extraction |
| **Charts** | Chart.js | 4.4.0 | Analytics line and doughnut charts |
| **PDF Export** | html2pdf.js | 0.10.1 | DOM-to-PDF exam sheet generation |
| **Scripting** | Vanilla JS | ES2022 | No framework — zero overhead |

### Backend

| Category | Technology | Purpose |
|---|---|---|
| **Runtime** | Node.js ≥18 | Server-side JavaScript execution |
| **Framework** | Express.js | REST API routing and middleware |
| **AI Provider** | Groq SDK | LPU inference API client |
| **AI Model** | llama-3.3-70b-versatile | Question generation language model |
| **Security** | dotenv | Environment variable management |
| **Security** | cors | Cross-origin request control |
| **Rate Limiting** | express-rate-limit | API abuse prevention |
| **Logging** | morgan | HTTP request logging |

### Infrastructure

| Service | Purpose |
|---|---|
| **Vercel** | Frontend static hosting + Serverless functions |
| **Railway / Render** | Node.js backend hosting |
| **Groq Cloud** | LLM inference (LPU hardware) |

---

## 📁 Project Structure

```
questiongenius/
│
├── 📄 index.html                    # Marketing landing page
├── 📄 try.html                      # Main app interface
│
├── 🎬 18069232-hd_1920_1080_24fps.mp4  # Hero section background video
│
├── 📁 backend/
│   ├── 📄 server.js                 # Express entry point
│   ├── 📄 package.json              # Dependencies
│   ├── 📄 .env.example              # Environment variable template
│   ├── 📄 .env                      # Local secrets (gitignored)
│   │
│   ├── 📁 routes/
│   │   ├── 📄 generate.js           # POST /api/generate handler
│   │   ├── 📄 health.js             # GET /api/health handler
│   │   └── 📄 info.js               # GET /api/info handler
│   │
│   ├── 📁 middleware/
│   │   ├── 📄 rateLimiter.js        # Request rate limiting
│   │   ├── 📄 cors.js               # CORS configuration
│   │   └── 📄 validate.js           # Request body validation
│   │
│   └── 📁 utils/
│       ├── 📄 groqClient.js         # Groq SDK wrapper
│       ├── 📄 jsonExtractor.js      # LLM response parser
│       └── 📄 logger.js             # Structured request logging
│
├── 📁 assets/
│   ├── 📁 images/                   # Static images and OG assets
│   └── 📁 fonts/                    # Self-hosted font fallbacks
│
├── 📁 .github/
│   ├── 📁 workflows/
│   │   ├── 📄 ci.yml                # CI: lint + format check
│   │   └── 📄 deploy.yml            # CD: Vercel auto-deploy on main
│   ├── 📁 ISSUE_TEMPLATE/
│   │   ├── 📄 bug_report.md
│   │   └── 📄 feature_request.md
│   └── 📄 PULL_REQUEST_TEMPLATE.md
│
├── 📄 vercel.json                   # Vercel routing + function config
├── 📄 .gitignore
├── 📄 LICENSE
└── 📄 README.md                     # ← You are here
```

---

## ✅ Prerequisites

Before you begin, ensure your environment satisfies:

```
Node.js     ≥ 18.0.0    (LTS recommended)
npm         ≥ 9.0.0     (or pnpm ≥ 8.x / yarn ≥ 1.22)
Git         ≥ 2.40.0
```

**Required accounts:**
- [Groq Console](https://console.groq.com) — Free API key (no credit card required)
- [GitHub](https://github.com) — For cloning and contributing
- [Vercel](https://vercel.com) *(optional)* — For one-click deployment

**Verify your environment:**
```bash
node --version    # should print v18.x.x or higher
npm --version     # should print 9.x.x or higher
git --version     # should print git version 2.x.x
```

---

## 🚀 Installation

### Option 1: Full Stack (Recommended)

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/questiongenius.git
cd questiongenius

# 2. Install backend dependencies
cd backend
npm install

# 3. Configure environment variables (see Configuration section)
cp .env.example .env
# Edit .env and add your GROQ_API_KEY

# 4. Start the backend server
npm run dev
# → Server running at http://localhost:3001

# 5. Open the frontend (in a new terminal)
cd ..
# Simply open index.html or try.html in a browser
# OR use a local static server:
npx serve . -p 8080
# → Open http://localhost:8080
```

### Option 2: Frontend Only (Static / No Backend)

The app includes a `smartFallback()` function that generates template-based questions when the backend is unreachable. Useful for demos and UI development:

```bash
git clone https://github.com/yourusername/questiongenius.git
cd questiongenius

# Open directly — no server required for basic UI exploration
open index.html     # macOS
start index.html    # Windows
xdg-open index.html # Linux
```

> **Note:** AI generation will use the built-in smart fallback. For production-quality questions, the backend must be running.

### Option 3: Docker (Backend Only)

```bash
# Build the backend image
cd backend
docker build -t questiongenius-api .

# Run with your Groq API key
docker run -d \
  -p 3001:3001 \
  -e GROQ_API_KEY=gsk_your_key_here \
  -e PORT=3001 \
  -e ALLOWED_ORIGIN=http://localhost:8080 \
  --name qg-api \
  questiongenius-api

# Verify the container is running
docker logs qg-api
curl http://localhost:3001/api/health
```

---

## ⚙️ Configuration

### Backend — `.env` File

Copy `.env.example` to `.env` and populate:

```dotenv
# ─── REQUIRED ─────────────────────────────────────────────────────────────────

# Your Groq API key — Get free at https://console.groq.com/keys
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# ─── SERVER ───────────────────────────────────────────────────────────────────

# Port for the Express server
PORT=3001

# Node environment: development | production | test
NODE_ENV=development

# ─── CORS ─────────────────────────────────────────────────────────────────────

# Comma-separated list of allowed frontend origins
# Development:  http://localhost:8080
# Production:   https://questiongenius.vercel.app
ALLOWED_ORIGIN=http://localhost:8080,http://localhost:3000

# ─── GROQ MODEL ───────────────────────────────────────────────────────────────

# Primary model for question generation
GROQ_MODEL=llama-3.3-70b-versatile

# Maximum tokens in the LLM response (increase for large question counts)
GROQ_MAX_TOKENS=4096

# Temperature: 0.0 (deterministic) → 1.0 (creative). 0.7 is optimal for questions
GROQ_TEMPERATURE=0.7

# ─── RATE LIMITING ────────────────────────────────────────────────────────────

# Max requests per IP per window
RATE_LIMIT_MAX=20

# Rate limit window in milliseconds (15 minutes = 900000)
RATE_LIMIT_WINDOW_MS=900000

# ─── LOGGING ──────────────────────────────────────────────────────────────────

# Morgan log format: dev | combined | short | tiny
LOG_FORMAT=dev
```

### Frontend Configuration (`try.html`)

No build step required. The following constants live at the top of the `<script>` block and can be edited directly:

```javascript
// Base URL for the backend API
// Change this to your deployed backend URL in production
const API_BASE = window.location.hostname === 'localhost'
  ? 'http://localhost:3001'
  : 'https://your-backend.railway.app';

// Maximum characters sent to the AI (affects token usage)
const MAX_CONTEXT_CHARS = 5000;

// Maximum PDF pages to parse (PDF.js)
const MAX_PDF_PAGES = 40;

// Maximum questions configurable by the user
const MAX_QUESTION_COUNT = 50;
```

---

## 📡 Backend API Reference

### Base URL
```
Development : http://localhost:3001
Production  : https://your-backend.railway.app
```

---

### `POST /api/generate`

Generate questions using the Groq AI model.

**Request**

```http
POST /api/generate
Content-Type: application/json
```

```json
{
  "system": "You are an expert educational question generator. Respond ONLY with a valid JSON array...",
  "user": "Generate 10 questions (types: MCQ, Short Answer) from:\n\n[document text here]\n\nReturn ONLY the JSON array."
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `system` | `string` | ✅ | System prompt with generation instructions and JSON schemas |
| `user` | `string` | ✅ | User prompt containing document text and generation request |

**Response — Success (200)**

```json
{
  "content": "[{\"type\":\"mcq\",\"question\":\"...\",\"options\":[...],\"correct\":1,\"explanation\":\"...\",\"topic\":\"...\",\"difficulty\":\"medium\"}]",
  "model": "llama-3.3-70b-versatile",
  "usage": {
    "prompt_tokens": 1240,
    "completion_tokens": 890,
    "total_tokens": 2130
  },
  "latency_ms": 1187
}
```

**Response — Error (4xx / 5xx)**

```json
{
  "error": "Groq API request failed",
  "message": "Detailed error message",
  "status": 500
}
```

**Error Codes**

| HTTP Status | Code | Description |
|---|---|---|
| `400` | `MISSING_FIELDS` | `system` or `user` field missing in body |
| `400` | `CONTENT_TOO_LONG` | Input exceeds maximum allowed length |
| `429` | `RATE_LIMIT_EXCEEDED` | Too many requests from this IP |
| `500` | `GROQ_API_ERROR` | Groq API returned an error |
| `503` | `MODEL_UNAVAILABLE` | Groq model temporarily unavailable |

---

### `GET /api/health`

Health check endpoint for monitoring and deployment readiness.

**Request**

```http
GET /api/health
```

**Response — Healthy (200)**

```json
{
  "status": "ok",
  "timestamp": "2025-06-27T10:30:00.000Z",
  "uptime": 3600.42,
  "groqConfigured": true,
  "model": "llama-3.3-70b-versatile",
  "environment": "production",
  "version": "2.0.0"
}
```

**Response — Degraded (503)**

```json
{
  "status": "degraded",
  "groqConfigured": false,
  "error": "GROQ_API_KEY not set"
}
```

---

### `GET /api/info`

Returns public API metadata (no authentication required).

**Response (200)**

```json
{
  "name": "QuestionGenius API",
  "version": "2.0.0",
  "model": "llama-3.3-70b-versatile",
  "supportedTypes": ["mcq", "shortAnswer", "trueFalse", "fillBlanks", "matching"],
  "supportedLanguages": ["English", "Tamil", "Hindi", "Spanish", "French", "German", "Arabic", "Chinese"],
  "maxQuestions": 50,
  "maxContextChars": 5000,
  "rateLimit": {
    "requests": 20,
    "windowMs": 900000
  }
}
```

---

## 📋 Question Type Schemas

All generated questions conform to one of the following JSON schemas. These schemas are injected verbatim into the system prompt so the model produces structured, parseable output.

### MCQ (Multiple Choice Question)

```typescript
interface MCQ {
  type: "mcq";
  question: string;          // The question stem
  options: string[];         // Exactly 4 options — e.g. ["A. option1", "B. option2", ...]
  correct: number;           // 0-based index of the correct option (0 = A, 1 = B, ...)
  explanation?: string;      // Why the correct answer is correct
  hint?: string;             // Optional contextual hint
  topic?: string;            // Auto-tagged concept from source material
  difficulty: "easy" | "medium" | "hard";
}
```

**Example:**

```json
{
  "type": "mcq",
  "question": "What is the primary mechanism by which neural networks learn from labeled training data?",
  "options": [
    "A. Random weight initialization",
    "B. Backpropagation and gradient descent",
    "C. Forward-only computation",
    "D. Static feature mapping"
  ],
  "correct": 1,
  "explanation": "Neural networks update their weights using backpropagation, which computes gradients of the loss function with respect to each weight, and gradient descent uses these gradients to minimize the loss iteratively.",
  "hint": "Think about how errors are propagated backwards through the network.",
  "topic": "Neural Network Training",
  "difficulty": "medium"
}
```

---

### Short Answer

```typescript
interface ShortAnswer {
  type: "shortAnswer";
  question: string;          // Open-ended question requiring synthesis
  answer: string;            // Model/sample answer
  explanation?: string;      // Additional context or marking guidance
  topic?: string;
  difficulty: "easy" | "medium" | "hard";
}
```

**Example:**

```json
{
  "type": "shortAnswer",
  "question": "Explain the significance of the vanishing gradient problem in deep neural networks.",
  "answer": "The vanishing gradient problem occurs when gradients become extremely small as they are backpropagated through many layers, causing early layers to learn very slowly or not at all. This was a major obstacle in training deep networks before techniques like ReLU activation, batch normalization, and residual connections were introduced.",
  "topic": "Deep Learning Challenges",
  "difficulty": "hard"
}
```

---

### True / False

```typescript
interface TrueFalse {
  type: "trueFalse";
  question: string;          // A declarative statement to evaluate
  correct: boolean;          // true = statement is correct, false = it is incorrect
  explanation?: string;      // Justification for the verdict
  topic?: string;
  difficulty: "easy" | "medium" | "hard";
}
```

**Example:**

```json
{
  "type": "trueFalse",
  "question": "The sigmoid activation function is generally preferred over ReLU for hidden layers in modern deep learning architectures.",
  "correct": false,
  "explanation": "ReLU and its variants (Leaky ReLU, ELU) are preferred in modern architectures because they mitigate the vanishing gradient problem and are computationally efficient. Sigmoid is still used in output layers for binary classification.",
  "topic": "Activation Functions",
  "difficulty": "medium"
}
```

---

### Fill in the Blank

```typescript
interface FillInTheBlank {
  type: "fillBlanks";
  question: string;          // Sentence with "___" representing the missing term
  answer: string;            // The exact missing term or phrase
  hint?: string;             // Optional starting letter or category hint
  topic?: string;
  difficulty: "easy" | "medium" | "hard";
}
```

**Example:**

```json
{
  "type": "fillBlanks",
  "question": "In machine learning, ___ is the process of reducing a model's complexity to prevent it from memorizing training data.",
  "answer": "regularization",
  "hint": "Starts with 'R', techniques include L1 and L2.",
  "topic": "Model Generalization",
  "difficulty": "medium"
}
```

---

### Matching Pairs

```typescript
interface Matching {
  type: "matching";
  question: string;          // Instruction line, e.g. "Match each term with its definition"
  pairs: Array<{
    term: string;            // Left-column term
    definition: string;      // Right-column definition
  }>;
  topic?: string;
  difficulty: "easy" | "medium" | "hard";
}
```

**Example:**

```json
{
  "type": "matching",
  "question": "Match each optimization algorithm with its primary characteristic",
  "pairs": [
    { "term": "SGD",     "definition": "Updates weights using gradient from a single random sample" },
    { "term": "Adam",    "definition": "Combines momentum and RMSProp with adaptive learning rates" },
    { "term": "RMSProp", "definition": "Uses a moving average of squared gradients to normalize updates" },
    { "term": "AdaGrad", "definition": "Adapts learning rate per parameter based on historical gradient sum" }
  ],
  "topic": "Optimization Algorithms",
  "difficulty": "hard"
}
```

---

## 🎨 Design System

QuestionGenius uses a comprehensive CSS custom properties design system requiring **zero build tools**.

### Color Tokens

```css
/* ── Backgrounds ─────────────────────────── */
--bg:           #faf8f5;   /* Primary page background (warm off-white) */
--bg-warm:      #f5f0e8;   /* Elevated surface (cards, inputs) */
--bg-cream:     #f0e6d6;   /* Secondary sections */
--bg-dark:      #1c1917;   /* Dark mode base / dark sections */
--bg-elevated:  #ffffff;   /* Highest elevation (modals) */

/* ── Text ─────────────────────────────────── */
--text:          #1c1917;   /* Primary text */
--text-secondary:#57534e;   /* Body copy, descriptions */
--text-tertiary: #a8a29e;   /* Labels, metadata */
--text-muted:    #d6d3d1;   /* Disabled, placeholders */
--text-light:    #faf8f5;   /* Text on dark backgrounds */

/* ── Accent Colors ────────────────────────── */
--accent-1:      #c2410c;   /* Primary — burnt orange (actions, CTAs) */
--accent-1-soft: rgba(194,65,12,0.08);
--accent-1-glow: rgba(194,65,12,0.15);

--accent-2:      #0d7377;   /* Secondary — teal (success, answers) */
--accent-2-soft: rgba(13,115,119,0.08);

--accent-3:      #d4a373;   /* Tertiary — warm sand (decorative) */
--accent-3-soft: rgba(212,163,115,0.12);

/* ── Borders ──────────────────────────────── */
--border:        rgba(28,25,23,0.08);
--border-light:  rgba(28,25,23,0.06);
--border-strong: rgba(28,25,23,0.15);

/* ── Shadows ──────────────────────────────── */
--shadow-sm:   0 1px 2px rgba(0,0,0,0.04);
--shadow-md:   0 4px 12px rgba(0,0,0,0.06);
--shadow-lg:   0 12px 40px rgba(0,0,0,0.08);
--shadow-xl:   0 24px 80px rgba(0,0,0,0.12);
--shadow-glow: 0 0 40px rgba(194,65,12,0.12);
```

### Typography Scale

All sizes use `clamp()` for fluid responsive scaling — no media queries required:

```css
--text-xs:   clamp(0.65rem, 0.6rem + 0.25vw, 0.75rem);   /* 10.4–12px   Labels     */
--text-sm:   clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);  /* 12–14px     Body small  */
--text-base: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);    /* 14–16px     Body        */
--text-lg:   clamp(1rem, 0.9rem + 0.5vw, 1.125rem);      /* 16–18px     Lead text   */
--text-xl:   clamp(1.125rem, 1rem + 0.625vw, 1.375rem);  /* 18–22px     Subheadings */
--text-2xl:  clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem);     /* 24–36px     Headings    */
--text-3xl:  clamp(2rem, 1.5rem + 2.5vw, 3.5rem);        /* 32–56px     Section h2  */
--text-4xl:  clamp(2.5rem, 2rem + 3.5vw, 5rem);          /* 40–80px     Stats       */
--text-5xl:  clamp(3.5rem, 2.5rem + 5vw, 7rem);          /* 56–112px    Hero h1     */
```

### Font Stack

```css
--font-display: "Playfair Display", Georgia, serif;           /* Headings, hero, quotes */
--font-body:    "Inter", -apple-system, BlinkMacSystemFont, sans-serif;   /* All body copy */
--font-mono:    "JetBrains Mono", "Fira Code", monospace;     /* Labels, code, badges   */
```

### Spacing Scale

```css
--space-3xs: clamp(0.25rem, …, 0.375rem);   /* 4–6px   */
--space-2xs: clamp(0.375rem, …, 0.5rem);    /* 6–8px   */
--space-xs:  clamp(0.5rem, …, 0.75rem);     /* 8–12px  */
--space-sm:  clamp(0.75rem, …, 1rem);       /* 12–16px */
--space-md:  clamp(1rem, …, 1.5rem);        /* 16–24px */
--space-lg:  clamp(1.5rem, …, 2.5rem);      /* 24–40px */
--space-xl:  clamp(2rem, …, 4rem);          /* 32–64px */
--space-2xl: clamp(3rem, …, 6rem);          /* 48–96px */
--space-3xl: clamp(4rem, …, 10rem);         /* 64–160px */
--space-4xl: clamp(6rem, …, 14rem);         /* 96–224px */
```

### Easing Functions

```css
--ease-smooth:  cubic-bezier(0.4, 0, 0.2, 1);       /* Material standard   */
--ease-out:     cubic-bezier(0.16, 1, 0.3, 1);       /* Expo out — snappy   */
--ease-in-out:  cubic-bezier(0.87, 0, 0.13, 1);      /* Strong in-out       */
--ease-bounce:  cubic-bezier(0.34, 1.56, 0.64, 1);   /* Slight overshoot    */
--ease-spring:  cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Spring physics  */
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl / ⌘ + Enter` | Generate questions from current document/text |
| `Ctrl / ⌘ + K` | Open API Setup modal |
| `Escape` | Close any open modal |

---

## 📦 Export Formats

| Format | Extension | Use Case | Contains |
|---|---|---|---|
| **JSON** | `.json` | LMS integration, API pipelines | Full structured question objects with all metadata |
| **Markdown** | `.md` | Documentation, GitHub wikis | Formatted questions with bold answers and blockquotes |
| **CSV** | `.csv` | Spreadsheet analysis, bulk import | `#, Type, Question, Answer, Difficulty, Topic` columns |
| **Plain Text** | `.txt` | Universal compatibility | Questions with lettered options and answer lines |
| **PDF** | `.pdf` | Print exams, formal assessments | Branded A4 PDF with questions + separate answer key page |

### JSON Export Sample

```json
[
  {
    "type": "mcq",
    "question": "Which sorting algorithm has the best average-case time complexity?",
    "options": [
      "A. Bubble Sort",
      "B. Merge Sort",
      "C. Insertion Sort",
      "D. Selection Sort"
    ],
    "correct": 1,
    "explanation": "Merge Sort achieves O(n log n) average and worst-case complexity using divide-and-conquer.",
    "hint": "Divide and conquer approach",
    "topic": "Sorting Algorithms",
    "difficulty": "medium"
  }
]
```

---

## 📊 Performance

### Benchmarks (Groq LPU, llama-3.3-70b-versatile)

| Operation | P50 | P95 | P99 |
|---|---|---|---|
| 10 questions from 1,000-char text | 0.9s | 1.4s | 2.1s |
| 20 questions from 3,000-char text | 1.2s | 1.8s | 2.6s |
| 30 questions from 5,000-char text | 1.6s | 2.3s | 3.2s |
| PDF extraction (10 pages, PDF.js) | 0.4s | 0.9s | 1.5s |
| DOCX extraction (50 pages, Mammoth)| 0.3s | 0.7s | 1.1s |
| PDF export (html2pdf, 30 questions)| 2.1s | 3.4s | 4.5s |

### Lighthouse Scores (Landing Page)

| Metric | Score |
|---|---|
| Performance | 94 |
| Accessibility | 92 |
| Best Practices | 100 |
| SEO | 96 |

### Core Web Vitals

| Metric | Value | Threshold |
|---|---|---|
| LCP (Largest Contentful Paint) | 1.2s | ≤ 2.5s ✅ |
| CLS (Cumulative Layout Shift) | 0.02 | ≤ 0.1 ✅ |
| FID (First Input Delay) | 8ms | ≤ 100ms ✅ |
| TTFB (Time to First Byte) | 180ms | ≤ 800ms ✅ |

---

## 🌐 Browser Compatibility

| Browser | Minimum Version | Status |
|---|---|---|
| Chrome / Chromium | 90+ | ✅ Fully supported |
| Firefox | 88+ | ✅ Fully supported |
| Safari | 14+ | ✅ Fully supported |
| Edge (Chromium) | 90+ | ✅ Fully supported |
| Opera | 76+ | ✅ Fully supported |
| Samsung Internet | 14+ | ✅ Supported |
| iOS Safari | 14+ | ✅ Supported (cursor effects disabled) |
| Chrome Android | 90+ | ✅ Supported (cursor effects disabled) |

**Feature detection notes:**
- Custom cursor automatically disabled on `(hover: none)` / `(pointer: coarse)` devices
- Scroll-driven gallery falls back to vertical stack on `width ≤ 1024px`
- `backdrop-filter` gracefully degrades in unsupported environments
- All animations respect `prefers-reduced-motion` media query

---

## 🚢 Deployment

### Option 1: Vercel (Recommended — Frontend + Serverless Functions)

```bash
# Install Vercel CLI
npm install -g vercel

# From project root
vercel

# Set environment variables in Vercel Dashboard:
# Settings → Environment Variables → Add:
# GROQ_API_KEY = gsk_your_key_here
```

**`vercel.json` configuration:**
```json
{
  "version": 2,
  "builds": [
    { "src": "backend/server.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "backend/server.js" },
    { "src": "/(.*)", "dest": "/$1" }
  ]
}
```

---

### Option 2: Railway (Backend) + Vercel (Frontend)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy backend
cd backend
railway login
railway init
railway up

# Set environment variable in Railway dashboard:
# GROQ_API_KEY = gsk_your_key_here

# Note your Railway URL, then update try.html:
# const API_BASE = 'https://your-project.up.railway.app';

# Deploy frontend to Vercel
cd ..
vercel --prod
```

---

### Option 3: Render (Backend)

1. Fork this repository
2. Connect your GitHub account to [Render](https://render.com)
3. Create a new **Web Service** pointing to `backend/`
4. Set Build Command: `npm install`
5. Set Start Command: `node server.js`
6. Add Environment Variable: `GROQ_API_KEY = gsk_your_key_here`
7. Deploy — Render provides a public HTTPS URL

---

### Option 4: Self-Hosted (VPS / Ubuntu)

```bash
# On your server
git clone https://github.com/yourusername/questiongenius.git /var/www/questiongenius
cd /var/www/questiongenius/backend

# Install dependencies
npm install --production

# Install PM2 process manager
npm install -g pm2

# Create .env file
echo "GROQ_API_KEY=gsk_your_key_here" > .env
echo "PORT=3001" >> .env
echo "NODE_ENV=production" >> .env
echo "ALLOWED_ORIGIN=https://yourdomain.com" >> .env

# Start with PM2
pm2 start server.js --name questiongenius-api
pm2 startup
pm2 save

# Serve frontend with Nginx
sudo cp -r /var/www/questiongenius/{index.html,try.html,assets} /var/www/html/
# Configure Nginx to proxy /api/* to localhost:3001
```

**Nginx config snippet:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    root /var/www/html;
    index index.html;

    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location / {
        try_files $uri $uri/ =404;
    }
}
```

---

## 🔐 Environment Variables

| Variable | Required | Default | Description |
|---|---|---|---|
| `GROQ_API_KEY` | ✅ | — | Your Groq API key from console.groq.com |
| `PORT` | ❌ | `3001` | Port the Express server listens on |
| `NODE_ENV` | ❌ | `development` | `development` or `production` |
| `ALLOWED_ORIGIN` | ❌ | `*` | Comma-separated CORS-allowed frontend origins |
| `GROQ_MODEL` | ❌ | `llama-3.3-70b-versatile` | Groq model identifier |
| `GROQ_MAX_TOKENS` | ❌ | `4096` | Maximum tokens in LLM response |
| `GROQ_TEMPERATURE` | ❌ | `0.7` | LLM temperature (0.0–1.0) |
| `RATE_LIMIT_MAX` | ❌ | `20` | Max requests per IP per window |
| `RATE_LIMIT_WINDOW_MS` | ❌ | `900000` | Rate limit window in ms (15 min) |
| `LOG_FORMAT` | ❌ | `dev` | Morgan log format |

---

## 🗺️ Roadmap

### v2.1.0 — Q3 2025
- [ ] **Batch Processing** — Upload multiple documents and generate unified question banks
- [ ] **LMS Export** — Native export to Moodle XML and Canvas QTI formats
- [ ] **Question Bank** — Persistent storage of generated questions with IndexedDB
- [ ] **Duplicate Detection** — Semantic similarity check to prevent near-duplicate questions
- [ ] **Fine-tuned Bloom's** — Per-question Bloom's level selection (not just global)

### v2.2.0 — Q4 2025
- [ ] **Collaborative Mode** — Real-time multi-user question review and editing
- [ ] **Image-based Questions** — Generate questions from diagrams and charts (multimodal)
- [ ] **Question Difficulty Predictor** — ML-based difficulty calibration using IRT (Item Response Theory)
- [ ] **Audio Input** — Generate questions from lecture recordings (Whisper transcription)
- [ ] **API v2 Public Access** — Authenticated REST API for third-party integrations

### v3.0.0 — Q1 2026
- [ ] **Teacher Dashboard** — Full class management, assignment distribution, and grading
- [ ] **Student Portal** — Secure quiz-taking environment with anti-cheat measures
- [ ] **Adaptive Learning Engine** — Personalized question difficulty based on student performance
- [ ] **Institution SSO** — SAML/OAuth2 integration for university single sign-on
- [ ] **Analytics Reports** — Exportable PDF analytics with item analysis and discrimination index

### Completed ✅
- [x] Multi-format document parsing (PDF, DOCX, TXT)
- [x] 5 question types with structured JSON schemas
- [x] Groq LPU inference integration
- [x] Bloom's taxonomy support
- [x] Multilingual generation (8 languages)
- [x] Interactive Quiz Mode with scoring
- [x] 5 export formats including PDF with answer key
- [x] Analytics dashboard with Chart.js
- [x] Dark/Light theme with persistent localStorage
- [x] Mobile-responsive design
- [x] Custom cursor with trail effect
- [x] Keyboard shortcuts

---

## 🤝 Contributing

We welcome contributions from developers of all experience levels. Please read the full contributing guide below.

### Development Setup

```bash
# 1. Fork the repository on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/questiongenius.git
cd questiongenius

# 3. Add the upstream remote
git remote add upstream https://github.com/yourusername/questiongenius.git

# 4. Create a feature branch from main
git checkout -b feature/your-feature-name
# or for bugs:
git checkout -b fix/issue-description

# 5. Make your changes, then commit
git add .
git commit -m "feat: add multilingual hint generation"

# 6. Push to your fork and open a Pull Request
git push origin feature/your-feature-name
```

### Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat:     A new feature
fix:      A bug fix
docs:     Documentation changes
style:    Formatting (no logic change)
refactor: Code restructuring (no feat or fix)
perf:     Performance improvement
test:     Adding or fixing tests
chore:    Build system or tooling changes
```

**Examples:**
```
feat: add CSV export with topic and difficulty columns
fix: resolve PDF.js worker 404 error on Safari
docs: add deployment guide for Railway
perf: lazy-load Chart.js only when Analytics tab is opened
style: normalize spacing in option-card hover states
```

### Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Code runs without errors in both `development` and `production` NODE_ENV
- [ ] New features are tested across Chrome, Firefox, and Safari
- [ ] Mobile responsiveness verified at 375px, 768px, and 1280px viewports
- [ ] Dark mode and light mode both render correctly
- [ ] `prefers-reduced-motion` respected for any new animations
- [ ] No console errors or warnings in the browser DevTools
- [ ] ARIA attributes added to any interactive elements
- [ ] PR description clearly explains the change and motivation

### Areas We Need Help

```
🎯  High Priority
├── Backend unit tests (Jest + Supertest)
├── Frontend E2E tests (Playwright)
├── Accessibility audit and WCAG 2.2 compliance
└── Docker Compose setup for full-stack local dev

📚  Documentation
├── Video walkthrough tutorial
├── API integration cookbook
└── Bloom's taxonomy educator guide

🌍  Localization
├── RTL layout support (Arabic, Hebrew)
├── Additional language prompts (Japanese, Korean)
└── Regional curriculum alignment (CBSE, A-Level, SAT)
```

---

## 📋 Changelog

### [2.0.0] — 2025-06-27

**Added**
- 🎉 Complete UI/UX overhaul — editorial design system with warm color palette
- 🧠 Groq LPU inference integration replacing previous OpenAI backend
- 🎮 Interactive Quiz Mode with animated SVG score ring and grade display
- 📊 Analytics dashboard with Chart.js (line + doughnut charts)
- 📄 Professional PDF export with branded cover and separate answer key
- 🌗 Dark/Light theme toggle with `localStorage` persistence
- 🎨 6-color accent swatch picker with live CSS variable updates
- ⌨️ Keyboard shortcuts (`Ctrl+Enter`, `Ctrl+K`, `Esc`)
- 🔢 Stat counter animations via `IntersectionObserver`
- 🖱️ Custom cursor with motion trail and magnetic button effects
- 📜 Scroll-driven horizontal gallery for question types section
- 🌐 8-language support for question generation output
- 🏷️ Topic tagging and Bloom's taxonomy level output per question
- 💬 Toast notification system with 4 severity levels

**Changed**
- Backend proxy pattern to keep API key server-side only
- `smartFallback()` now generates 12 questions across all enabled types
- File size limit increased from 5MB to 20MB per upload
- Maximum question count raised from 20 to 50

**Fixed**
- PDF.js worker 404 error on non-Chromium browsers
- DOCX extraction losing paragraph breaks with complex formatting
- Dark mode scroll bar thumb color not updating
- Mobile nav overlay z-index conflict with preloader

---

### [1.0.0] — 2025-04-10

**Added**
- Initial release with basic MCQ and Short Answer generation
- OpenAI GPT-3.5 backend integration
- PDF and TXT parsing
- JSON export

---

## 📄 License

```
MIT License

Copyright (c) 2025 Sridhar · QuestionGenius

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgements

| Technology | Link | Why We Use It |
|---|---|---|
| **Groq** | [groq.com](https://groq.com) | LPU hardware delivering sub-2s LLM inference |
| **Meta Llama 3.3** | [llama.meta.com](https://llama.meta.com) | Best-in-class open-weight 70B model |
| **PDF.js** | [mozilla.github.io/pdf.js](https://mozilla.github.io/pdf.js) | Reliable client-side PDF text extraction |
| **Mammoth.js** | [github.com/mwilliamson/mammoth.js](https://github.com/mwilliamson/mammoth.js) | Clean DOCX-to-text without formatting noise |
| **Chart.js** | [chartjs.org](https://chartjs.org) | Lightweight, beautiful analytics charts |
| **html2pdf.js** | [github.com/eKoopmans/html2pdf.js](https://github.com/eKoopmans/html2pdf.js) | DOM-to-PDF for exam sheet generation |
| **Playfair Display** | [Google Fonts](https://fonts.google.com/specimen/Playfair+Display) | Editorial serif for headings |
| **Inter** | [rsms.me/inter](https://rsms.me/inter) | Optimal sans-serif for UI copy |
| **JetBrains Mono** | [jetbrains.com/mono](https://www.jetbrains.com/mono) | Code and label legibility |
| **Font Awesome** | [fontawesome.com](https://fontawesome.com) | Comprehensive icon library |
| **Bootstrap** | [getbootstrap.com](https://getbootstrap.com) | Responsive grid system |
| **Vercel** | [vercel.com](https://vercel.com) | Zero-config frontend deployment |
| **Bloom's Taxonomy** | [Bloom, 1956 / Revised 2001] | Cognitive learning framework for question calibration |

---

<div align="center">

**Built with ❤️ by [Sridhar](https://github.com/yourusername)**

*Hindustan Institute of Technology & Science, Chennai — CSE 2025*

<br/>

[![Star on GitHub](https://img.shields.io/github/stars/yourusername/questiongenius?style=social)](https://github.com/yourusername/questiongenius)
[![Follow on GitHub](https://img.shields.io/github/followers/yourusername?style=social)](https://github.com/yourusername)

<br/>

*"The measure of intelligence is the ability to change." — Albert Einstein*

<br/>

```
Made in Chennai 🇮🇳  ·  Powered by Groq ⚡  ·  Built for Educators 📚
```

</div>
