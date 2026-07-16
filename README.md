# RigoLLM 2026 — Website

Website for the **Symposium on Rigorous LLM Systems (RigoLLM)**, a full-day workshop
co-located with **USENIX ATC 2026** (Nov 15–18, 2026, Hyatt Hotel, Shatin, Hong Kong).

Live site: **https://rigollm.github.io/rigollm26/**
ATC 2026: https://sigops.org/s/conferences/atc/2026/index.html

## Structure

```
website/
├── index.html            # single-page site (hero, about, topics, CFP, dates, format, organizers, contact)
├── assets/
│   ├── css/style.css     # styling matched to the ATC 2026 look (accent #f82249, Open Sans / Raleway)
│   └── js/main.js        # mobile nav + header scroll behavior
├── .nojekyll             # serve files as-is (skip Jekyll processing)
└── README.md
```

The site is static, dependency-free (fonts via Google Fonts CDN), and responsive.
Content is drawn from the workshop proposal (`../proposal_overleaf/intro.tex`).

## Deploy (GitHub Pages)

The repository is `RigoLLM/rigollm26`. To publish:

1. Push to `main`.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source = Deploy from a branch**,
   **Branch = `main`**, **Folder = `/website`** (or move the contents to the repo root).
4. Save. The site publishes at `https://rigollm.github.io/rigollm26/`.

> If Pages cannot serve from a subfolder in your setup, either (a) use a `main` →
> `/website` mapping, or (b) publish `website/` to the repo root / a `gh-pages` branch.

## Local preview

```bash
cd website
python3 -m http.server 8000
# open http://localhost:8000
```
