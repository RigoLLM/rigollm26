# RigoLLM 2026 — Website

Website for the **Symposium on Rigorous LLM Systems (RigoLLM)**, a full-day workshop
co-located with **USENIX ATC 2026** (Nov 15–18, 2026, Hyatt Hotel, Shatin, Hong Kong).

Live site: **https://rigollm.github.io/rigollm26/**
ATC 2026: https://sigops.org/s/conferences/atc/2026/index.html

Built with **Jekyll** (native to GitHub Pages) so the content lives in plain
**Markdown + YAML** — you edit text, not HTML.

## Editing content (no HTML needed)

| To change… | Edit this file |
|---|---|
| Dates, venue, title, contact, ATC link | `_config.yml` |
| Hero tagline | `_includes/hero.md` |
| About text | `_includes/about.md`, `_includes/about_lead.md` |
| The two guiding principles | `_data/principles.yml` |
| Topics of interest | `_data/topics.yml` |
| Call-for-papers intro / note | `_includes/cfp_intro.md`, `_includes/cfp_note.md` |
| Paper categories | `_data/categories.yml` |
| Important dates | `_data/dates.yml` |
| Format intro / cards | `_includes/format_intro.md`, `_data/format.yml` |
| Organizing committee | `_data/organizers.yml` |
| Contact blurb | `_includes/contact.md` |

`.md` files are Markdown (headings, **bold**, links all work). `.yml` files are
simple lists — copy an existing entry to add a new topic, date, or organizer.
The page template `index.html` and styling `assets/css/style.css` rarely need edits.

## Structure

```
website/
├── _config.yml            # headline facts + Jekyll settings
├── index.html             # Jekyll template (assembles the data + markdown)
├── _data/*.yml            # structured lists (topics, organizers, dates, …)
├── _includes/*.md         # prose sections, in Markdown
├── assets/css/style.css   # ATC 2026-inspired styling (accent #f82249)
├── assets/js/main.js      # mobile nav + header scroll
├── Gemfile                # matches the GitHub Pages build
└── README.md
```

## Local preview

```bash
cd website
bundle install                 # first time only
bundle exec jekyll serve        # → http://localhost:4000/rigollm26/
```

## Deploy (GitHub Pages)

The repository is `RigoLLM/rigollm26`.

1. Push to `main`.
2. Repo **Settings → Pages**.
3. **Source = Deploy from a branch**, **Branch = `main`**, **Folder = `/website`**. Save.

GitHub builds the Jekyll site automatically and publishes it at
`https://rigollm.github.io/rigollm26/`.

> The repo is currently **private**; GitHub Pages on a private repo requires a
> paid plan. Either upgrade the plan, or make the repo public (it contains only
> website code). The `baseurl` in `_config.yml` is set to `/rigollm26` to match
> the project-page URL — change it if the repo is renamed.
