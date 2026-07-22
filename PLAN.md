# 神笔马良 — The Magic Paintbrush
## Project Plan & Build Blueprint

> *A bilingual, illustrated web storybook adapting the beloved Chinese folktale **《神笔马良》 (Shén Bǐ Mǎ Liáng)** for primary-school children — narrated in Mandarin and English, illustrated in classical Chinese ink-wash (水墨画) style.*

---

## 1. Research Summary

### 1.1 The Story

**《神笔马良》** is a Chinese fairy tale (童话) created in **1955** by the Zhejiang children's-literature writer **洪汛涛 (Hong Xuntao)**, first published in *New Observer* (《新观察》). It won the 1980 First-Class Prize of the Second National Children's Literature Awards and has been translated into many languages. A famous 1955 stop-motion puppet film *The Magic Brush* (《神笔》) won the 8th Venice International Children's Film Festival prize.

**The tale, in brief:** Long ago, an orphaned boy named **马良 (Ma Liang)** loved to paint but was too poor to own a brush. He practised daily — drawing birds in sand with twigs, fish on rocks with reed roots, charcoal sketches on his cave dwelling's walls. One night in a dream, a white-bearded old man gifted him a **magic brush (神笔)** whose drawings came to life. Ma Liang used it selflessly to help poor villagers — painting ploughs, oxen, waterwheels, millstones. His fame spread. A **greedy landlord (恶财主)** seized him to paint gold; Ma Liang refused, so the landlord imprisoned him in a stable. Ma Liang painted a brazier and hot cakes to survive the snow, then a ladder to escape over the wall, a swift horse to flee, and a bow-and-arrow that toppled the landlord in pursuit. Far away in a market town he tried to live quietly, painting cranes without eyes so they couldn't fly — until an ink splash accidentally gave one eyes and it flew off. The news reached the **Emperor (皇帝)**, who forced Ma Liang to the capital. The Emperor tried to paint gold himself (got rocks / a python), then demanded a **money tree (摇钱树)**. Ma Liang outwitted him: he drew a vast sea, an island, the tree, a great ship — then, as the Emperor cried *"More wind! More wind!"*, Ma Liang kept painting storm after storm until the ship capsized and the greedy Emperor sank to the bottom of the sea. Ma Liang vanished — some say home to his farming friends, some say wandering to paint for the poor.

**Moral:** Greed destroys; kindness and perseverance are rewarded. The brush's magic only works through a pure heart.

### 1.2 Historical Setting & Theme

Although written in 1955, the story is set in **imperial/feudal China** (the 中国古代 backdrop of the original text — an orphaned peasant boy, a county magistrate / landlord with bailiffs, a private school (学馆), an Emperor with an imperial decree). There is no named dynasty (it is deliberately "无名朝代" / a timeless feudal-era setting). The visual and cultural identity of the app will therefore borrow from **Song Dynasty (960–1279)** aesthetics — the recognised high-water mark of classical Chinese ink-wash painting (山水画 / 水墨画): Fan Kuan's *Travellers Among Mountains and Streams*, Wang Ximeng's *A Thousand Miles of Rivers and Mountains*, Ma Yuan's *Water Map*. The Song era also matches the agrarian-folk setting (village, cave dwelling, plough-oxen, waterwheel) far better than the cosmopolitan Ming/Qing would.

**Thematic motifs to thread through the design**: scroll/parchment backgrounds; brush-and-ink textures; generous **blank space (留白)**; mountains, rivers, sea; cinnabar-red seals (印章) as accents; gold for the magic brush and the money tree; storm and sea for the climax.

### 1.3 Classical Chinese Ink-Wash Painting (水墨画) — Style Notes

Drawn from research (Met, Magnifissance, Wikipedia):
- **Tools:** brush, ink, paper/silk — minimal materials, maximum expression.
- **Lines over light/shadow:** the "beauty of lines" — strength, softness, movement, calm; thickness, lightness (淡), dryness (枯), wetness (湿), burnt ink (焦).
- **Multi-vanishing-point perspective** (not Western single-point).
- **Blank space (留白)** is essential — the unpainted area carries meaning and tranquility.
- **Artistic conception (意境):** "paintings are like tangible poetry" — portrayal of the *soul* of the subject over photographic realism; "the beauty between resemblance and non-resemblance."
- **Palette:** predominantly ink-blacks and grey washes; restrained colour accents (jade green, cinnabar red, gold). Aged-parchment / xuan-paper backgrounds.
- **Subjects relevant to this story:** mountains, rivers, sea & waves, pine trees, cranes, horses, oxen, village huts, scholars, old men with white beards, boats, storms.

### 1.4 Verification of Build Tooling (confirmed on this machine)
- **Edge TTS** is installed (`edge-tts` 7.2.8, Python 3.11). Verified working test clips were generated for:
  - Mandarin female voice **`zh-CN-XiaoxiaoNeural`** at **`-8%`** rate
  - English male voice **`en-US-GuyNeural`** at **`+0%`** rate
- **Cloudflare Workers AI** credentials (`CLOUDFLARE_ID`, `CLOUDFLARE_API_KEY`) are present in `~/.pi/agent/.env` → FLUX-1-schnell image generation is available.
- **Reference project** `~/Projects/white-snake-legend/` has an almost identical feature set (bilingual, Hanzi + pinyin as separate blocks, female-zh-slowed-8% / male-en audio, autoplay, ink-wash images). We will mirror its proven architecture and adapt the theme.

---

## 2. Story Adaptation — 8 Chapters for Primary-School Children

Audience-tuned: short, vivid, gentle sentences (primary-school level). The **evil landlord** and the **Emperor** are kept (canonical antagonists) but described without gore. Each chapter has an illustration scene, an English version, a Hanzi version, and a pinyin version (pinyin rendered as a **separate text block below the Hanzi**, per requirement).

| # | English title | 中文标题 | Pinyin | Scene / Illustration |
|---|----------------|---------|--------|----------------------|
| 1 | The Boy Who Loved to Paint | 爱画画的男孩 | Ài Huà Huà de Nán Hái | Orphan boy Ma Liang practising painting with a twig in sand; cave dwelling & mountains behind. |
| 2 | The Old Man and the Magic Brush | 老人赠神笔 | Lǎo Rén Zèng Shén Bǐ | White-bearded old man glowing with coloured light handing the golden brush to Ma Liang in a dream. |
| 3 | Paintings Come to Life | 画物皆成真 | Huà Wù Jiē Chéng Zhēn | Bird flying up, fish swimming, plough-ox & waterwheel — villagers rejoicing. |
| 4 | The Greedy Landlord | 贪心的恶财主 | Tān Xīn de È Cái Zhǔ | Glowering landlord with bailiffs seizing Ma Liang; snow falling outside the stable. |
| 5 | The Painting that Saved Ma Liang | 画卷救马良 | Huà Juǎn Jiù Mǎ Liáng | Brazier & hot cakes glowing in the snowbound stable; a painted ladder over the wall; a swift horse galloping away. |
| 6 | The Crane Without Eyes | 无眼的白鹤 | Wú Yǎn de Bái Hè | A white crane with no eyes, a splash of ink giving it eyes, taking flight over a market town. |
| 7 | The Emperor and the Money Tree | 皇帝与摇钱树 | Huáng Dì yǔ Yáo Qián Shù | Emperor in golden robes, a vast calm sea, an island with a glowing golden money tree, a great wooden ship. |
| 8 | The Storm at Sea | 海上风暴 | Hǎi Shàng Fēng Bào | Ma Liang calmly painting wind-strokes; towering waves, dark clouds, lightning, the ship capsizing. (Epilogue line: Ma Liang returns to paint for the poor.) |

> *Chapter count = 8* matches the reference app and gives a tight, well-paced picture-book rhythm (introduction → gift → good use → antagonist → escape → disguise → climax → resolution).

---

## 3. Architecture & File Layout

```
magic-paintbrush/
├── README.md                  # Project overview + run instructions
├── LICENSE                    # MIT
├── .gitignore
├── .nojekyll                 # for GitHub Pages
├── index.html                # Single-page app shell
├── PLAN.md                   # this document
├── css/
│   └── style.css              # Ink-wash theme, scroll aesthetic, Song-era palette
├── js/
│   ├── story-data.js          # STORY constant: title + 8 chapters × {en, zh, pinyin, image}
│   └── app.js                  # Renderer, navigation, language toggle, audio, autoplay
├── images/
│   ├── chapter-1.webp … chapter-8.webp   # Final illustrations served to the page
│   └── raw/                    # Generated originals (kept for regeneration)
├── audio/
│   ├── en/  chapter-1.mp3 … chapter-8.mp3   # Male (en-US-GuyNeural), +0%
│   └── zh/  chapter-1.mp3 … chapter-8.mp3   # Female (zh-CN-XiaoxiaoNeural), -8%
├── generate-images.py         # Cloudflare FLUX-1-schnell → ink-wash illustrations
├── generate-audio.py          # Edge TTS → bilingual narration
└── .github/workflows/deploy.yml  # GitHub Pages deploy (optional)
```

---

## 4. Frontend — Design & UX

### 4.0 How this UI differs from White Snake & Butterfly Lovers (concrete uniqueness)

I inspected both sibling projects so this app does **not** become a reskin. The two existing apps are actually more alike each other than either is to my plan for *The Magic Paintbrush* — here is the concrete contrast:

| Design axis | 🐍 White Snake Legend | 🦋 Butterfly Lovers | 🖌️ The Magic Paintbrush (this app) |
|---|---|---|---|
| **Palette anchor** | Lotus-pink + crimson + jade on aged paper (romantic / feminine) | Indigo + vermillion + jade on rice paper (literary / Eastern Jin) | **Ink-black + cinnabar + gold + sea-jade on xuan paper** — fewer pastels, bolder ink contrast, gold reserved strictly for the magic elements |
| **Accent identity** | Lotus petals & mist | Floating ASCII 🦋 butterflies + hero ornament | **Brush strokes** — ink splash particles that drip then fade, plus a faint dry-brush (枯笔) texture overlay on the whole page |
| **Opening screen** | None — drops you straight into chapter 1 with a fixed header | A dedicated **hero** "展卷阅读 / Begin the Tale" with animated butterflies, then toolbar reveals on scroll | A **scroll-unrolling** intro: the title appears as a handscroll literally rolls open (CSS transform on a rolled-paper element), then a "开卷 / Open the Scroll" CTA. No butterflies, no static page. |
| **Progress indicator** | **Moon phase** SVG that fills through the story | Linear bar inside the bottom audio player | **A long horizontal handscroll (长卷)** that unfurls left→right as you progress; a tiny painted brush sits at the current scroll position. Think *A Thousand Miles of Rivers and Mountains* shrinking into a progress bar. |
| **Pinyin treatment** | Separate block below Hanzi (paragraph-level) | **Inline ruby** (`<ruby><rt>mǎ</rt></ruby>`) stacked above each character | **Two separate blocks** per the requirement — same approach as White Snake (matches the prompt) BUT each Hanzi line is paired with its pinyin by **vertical alignment via a 2-column CSS grid**: column 1 = Hanzi lines, column 2 = pinyin lines, line-by-line. This is *neither* White Snake's single parasitic block nor Butterfly's per-character ruby. |
| **Chapter nav** | Bridge dots (West-Lake bridge metaphor) | Numbered toolbar chips (1–8) | **Painted panel chips** — 8 small vertical scrolls in a tray, the current one "wet" (gold stroke), the visited ones stamped with a tiny red 印章. Metaphor = stacked scrolls, not a bridge or numerals. |
| **Audio UI** | Per-chapter mini bar inside each chapter card | Single fixed-bottom sticky player with volume | A **single fixed-bottom "inkstone" (砚台)** audio console — the progress bar reads as ink pooling in the stone; a working "magic-brush" cursor rests in it. Plus a per-chapter mini play button still inside the card for quick access. |
| **Animation signature** | Mist drift + lotus petals falling | Two bobbing 🦋 in hero, hover transitions | **Ink unrolling, ink dripping at scene boundaries, and a single "magic-brush flourish" animation that runs once per chapter when its illustration enters the viewport** — a gold cinnabar stroke sweeps across the image top edge like a brush signature (题款), introducing the scene. No looping ambient fauna. |
| **Music / ambient** | None | None | **None** (keeps parity, no scope creep) |
| **Section divider** | ◈ lotus motif between title and content | Standard rule | **A small cinnabar seal (印章)** rotates/stamps in at the divider — seals are a key Song-era aesthetic and tie to the painting theme |
| **Typography** | Playfair Display + Crimson Pro (English), Noto Serif SC + Ma Shan Zheng (Chinese) | Cormorant Garamond + Noto Serif SC | **EB Garamond (English serif, slightly more bookish than Playfair) + Noto Serif SC + ZCOOL XiaoWei (a brushy-but-readable 宋体 for headings)** — gives a more "ancient printed book" feel vs White Snake's magazine-elegant look |

**Net effect:** where White Snake is *atmospheric & romantic* and Butterfly Lovers is *hero-driven & literal* (two emoji butterflies), The Magic Paintbrush is **artefact-driven**: the whole interface behaves like you are manipulating a real Song-era handscroll and inkstone set. The progress bar *is* a scroll, the audio console *is* an inkstone, the dividers *are* seals, and gold ink appears only where the magic does. No lotus petals, no butterflies, no moon phase, no Ruby text.

**Two reused ideas kept (because they are correct for this brief, not because they are "in the sibling apps"):**
1. Pinyin as a **separate block** (not ruby) — this is literally your requirement #4, so even though Butterfly Lovers chose ruby, we follow the requirement and White Snake's precedent.
2. Vanilla HTML/CSS/JS + the same Cloudflare/Edge-TTS asset pipeline — a structural pattern shared across the family of storybook apps, invisible to the user and appropriate here too.

Everything else is redesigned around the **brush / scroll / seal / inkstone** motif.

### 4.1 Theme — Song-era "painter's studio" aesthetic
- **Palette** (CSS variables — note naming differs from both siblings to avoid cargo-culting):
  - `--xuan-paper:   #F4EFE3`  (slightly warmer than both siblings)
  - `--xuan-paper-2: #ECE4D2`
  - `--ink:          #16161D`  (deeper than both siblings, for bold stroke contrast)
  - `--ink-soft:     #3A3A47`
  - `--cinnabar:     #B23A2C`  (true 朱砂 seal red, slightly less crimson than White Snake)
  - `--cinnabar-deep:#8E2A20`
  - `--brush-gold:   #C9A24A`  (gold reserved *only* for magic-brush & money-tree moments)
  - `--jade-wash:    #6E9183`  (muted, used for water / sea scenes)
  - `--stone-grey:   #7C7468`  (inkstone & wet-brush neutrals)
  - `--mist:         rgba(124,116,104,0.10)`
- **Fonts:** EB Garamond + Noto Serif SC + ZCOOL XiaoWei + Inter (UI only).
- **Atmosphere:**
  - 3 drifting **ink-mist** layers (like a wet brush dragged across xuan paper) — desaturated, not the cool blue mist of White Snake.
  - **Ink-splash particles** that form, drip downward, then fade — replacing lotus petals and butterflies.
  - A very low-opacity **dry-brush stroke texture** (SVG noise + `mix-blend-mode: multiply`) over the whole page so it always reads as *paper that has been painted on*, not a clean screen.
- **Decorative:** a vertical cinnabar **seal block (印章)** beside the title (the seal reads "神筆" in seal-script 篆书 font); faint double-line **scroll border** around each illustration; a gold "magic" brushstroke ribbon only on chapters that feature the brush's magic (1, 2, 3, 5, 7, 8).

### 4.2 Layout per chapter
```
[ Chapter badge:  "Chapter 3 · 第三章" ]                ← gold only on magic-chapters
[ Illustration frame — ink-wash image, scroll border, vignette ]
      ↳ on enter: single gold brush-flourish sweeps across the top (题款)
[ Chapter titles: English / Hanzi / Pinyin ]
[ Per-chapter mini play button + small duration readout ]
[ ───────  ◈ seal stamp  ─────── ]                     ← cinnabar seal divider
[ Content EN block:   <p>…English narration…</p> ]
[ Content ZH blocks (CSS grid, 2 columns, line-aligned):
     col 1 .zh-text     …Hanzi…      (row 1)
     col 2 .pinyin-line …pinyin…     (row 1) ]
[ "magic" brushstroke accent only on magic chapters ]
```

### 4.3 Controls (header)
1. **Language toggle** — `EN | 中文` segmented control styled as two small painted tablets. Switching mid-play swaps the audio track and continues from the same timestamp.
2. **Auto-play toggle** — a brush/play icon labelled "Auto". When on, the next chapter auto-advances ~1.2s after audio ends.
3. **Prev / Next arrows** + **scroll-tray navigation**: 8 vertical mini-scroll chips (current = wet gold, visited = stamped with a tiny 印章).
4. Keyboard: `← →` navigate, `Space` play/pause, `A` toggle autoplay.

### 4.4 Fixed-bottom audio console — "the inkstone (砚台)"
A persistent horizontal bar styled as a flat oval inkstone: ink pools from left→right as audio plays; a tiny brush cursor sits at the playhead; tapping the stone seeks. Volume slider hidden by default, revealed on hover. Labels: current chapter in EN+ZH.

### 4.5 Behaviour requirements satisfied
| Requirement | Implementation |
|---|---|
| Toggle English ↔ Chinese | `setLang()` updates `data-lang`, shows/hides content blocks, swaps audio src |
| Hanzi and pinyin as 2 separate blocks | `.zh-text` (Hanzi only) + `.pinyin-line` (pinyin only) siblings |
| Pre-recorded mp3 per page | `audio/{en,zh}/chapter-N.mp3`, lazy-loaded per chapter |
| Mandarin = female, slowed 8% | `edge_tts.Communicate(text, "zh-CN-XiaoxiaoNeural", rate="-8%")` |
| English = male, regular speed | `edge_tts.Communicate(text, "en-US-GuyNeural", rate="+0%")` |
| Auto-play toggle | `state.autoPlay`; `audioPlayer 'ended'` → `goToChapter(idx+1)` after delay |

---

## 5. Image Generation (`generate-images.py`)

- **Model:** `@cf/black-forest-labs/flux-1-schnell` (1024×768, 4 steps, guidance 7.5) via Cloudflare Workers AI — same proven setup as the reference app.
- **Style prefix (shared):** *"Classical Chinese ink-wash painting (水墨画), Song Dynasty shanshui style, masterpiece quality, elegant varied brushstrokes, aged xuan-paper texture, generous blank space (留白), soft diffused light, ink-black and grey washes with restrained colour accents."*
- **Per-chapter prompts** (sculpted from the scene table in §2) — each names the subject, the dominant ink treatment (枯笔/湿笔), and the cultural motif, e.g.:
  - Ch 1: lonely cave dwelling at the foot of misty mountains, a poor boy crouching in sand drawing birds with a twig, muted greys, Song shanshui composition.
  - Ch 2: a white-bearded immortal glowing with five-coloured light inside a dark cave, handing a glowing golden brush to a sleeping boy, dreamlike soft halo, restrained gold.
  - Ch 7: an emperor in yellow-gold robes standing at the shore, a vast calm jade sea, a small island bearing a single glowing golden money tree, a great wooden ship at sail, multi-vanishing-point perspective.
  - Ch 8: violent storm at sea, towering collapsing-wall waves, dark stormclouds and lightning, a foundering ship, a boy calmly painting wind-strokes with a brush — dynamic diagonal composition, splashed-ink (泼墨) for the waves.
- **Output:** `images/raw/chapter-N.webp`, copied to `images/chapter-N.webp` for serving. Idempotent (skips existing files). Retry on timeout/5xx.
- Reference for the exact API/HTTP shape: `~/Projects/white-snake-legend/generate-images.py`.

---

## 6. Audio Generation (`generate-audio.py`)

- **Mandarin:** `zh-CN-XiaoxiaoNeural` (female), rate **`-8%`** — slow, clear narration ideal for primary-school listeners.
- **English:** `en-US-GuyNeural` (male), rate **`+0%`** — warm, natural pace.
- **Text source:** parsed from `js/story-data.js` (regex extract of each chapter's `title.{en,zh}` + `content.{en,zh}`) so audio stays in sync with the story file.
- **Text sent to TTS:** `"{title}.{content}"` per chapter, per language.
- **Output:** `audio/en/chapter-N.mp3` and `audio/zh/chapter-N.mp3`. Idempotent (skips existing files).
- Reference: `~/Projects/white-snake-legend/generate-audio.py`.

---

## 7. Execution Plan — Build Order

1. **Scaffold** — create the directory tree, `.gitignore`, `.nojekyll`, `LICENSE`, `README.md`, `PLAN.md` (this file). Copy reference `index.html` and adapt header/title/section names.
2. **Story content** — write `js/story-data.js` with the 8 chapters (English narration written for children + Chinese Hanzi adaptation + accurate pinyin with tone marks). Cross-check pinyin against the Hanzi block.
3. **Theme & CSS** — `css/style.css`: Song-era palette, scroll/brush decorative motifs, mist + brush-stroke particles, brush-stroke progress indicator, two-block Hanzi/pinyin layout styling, responsive rules, animations. Re-skin the reference theme rather than rewriting from scratch.
4. **App logic** — `js/app.js`: chapter renderer, nav, language toggle (with audio swap), autoplay, audio progress, keyboard shortcuts, brush-stroke progress, particle init. Adapt the reference app.js; change the theme-dependent bits (progress widget, particle type).
5. **Generate images** — run `generate-images.py` (Cloudflare FLUX) → 8 ink-wash illustrations into `images/`.
6. **Generate audio** — run `generate-audio.py` (Edge TTS) → 16 mp3 files (8 EN + 8 ZH) into `audio/`.
7. **Test locally** — `python3 -m http.server 8000` from the project dir; open in browser; verify:
   - language toggle swaps both text and audio
   - autoplay advances through all 8 chapters in both languages
   - Hanzi and pinyin render as two distinct blocks
   - images display with scroll-frame styling
   - mobile viewport looks readable
8. **Polish** — typographic tuning, pinyin line-break alignment with Hanzi, accessibility passes, favicon, meta tags.
9. **Commit & deploy (optional)** — git init, push to GitHub repo, enable GitHub Pages.

---

## 8. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| FLUX prompts render non-Chinese or anachronistic details | Strong, specific style prefix + per-scene cultural anchoring (Song shanshui, xuan-paper, 留白); regenerate any dud chapters. |
| Pinyin inaccuracies | Hand-author and proof-read pinyin blocks; add a quick `pypinyin` cross-check script if needed. |
| Edge TTS rate value format | Confirmed `-8%` / `+0%` strings work (test clips generated successfully). |
| Differentiation from sibling apps (looks like a White Snake reskin) | §4.0 lock-in: no lotus petals, no butterflies, no moon phase, no ruby text; introduce scroll-progress + inkstone + seal + brush-flourish motifs unique to this app; bolder ink contrast and a different font pairing. |
| Long Chinese paragraphs wrap awkwardly vs pinyin | Keep paragraphs short (3–5 sentences); align pinyin as its own readable block, not character-by-character. |

---

## 9. Out-of-Scope (for now)

- Character-by-character ruby(annotation) pinyin (we use a separate block per the requirement).
- Interactive drawing "magic brush" mini-game (could be a future enhancement).
- Translations beyond English/Mandarin.
- Server-side hosting (static GitHub Pages only).

---

*This plan is the source of truth for the build. Implementation will follow the execution order in §7.*
