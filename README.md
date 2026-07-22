# 🖌️ 神笔马良 — The Magic Paintbrush

> *A boy's brush, a tyrant's greed, a sea that swallows empires.*

A bilingual, illustrated web storybook adapting the beloved Chinese folktale **《神笔马良》 (Shén Bǐ Mǎ Liáng)** for primary-school children — narrated in Mandarin and English with classical Chinese ink-wash (水墨画) illustration.

[![Live Demo](https://img.shields.io/badge/Live-Demo-161616?style=flat-square&logo=githubpages)](https://pimplesonnose.github.io/magic-paintbrush/)
[![License: MIT](https://img.shields.io/badge/License-MIT-inherit?style=flat-square)](LICENSE)
[![Audience](https://img.shields.io/badge/Audience-Primary%20School-cinnabar?style=flat-square)](https://github.com)

---

## 🌟 Features

| | |
|---|---|
| 🖌️ **Ink-wash illustrations** | 8 classical 水墨画 scenes, AI-generated to Song-era aesthetic |
| 🔤 **Bilingual narration** | Toggle English ↔ Chinese at any moment |
| 📖 **Two-block Hanzi + pinyin** | Chinese and pinyin render as two adjacent text blocks (line-aligned) |
| 🇨🇳 **Mandarin audio** | Female voice (Xiaoxiao), slowed -8% for clarity |
| 🇺🇸 **English audio** | Male voice (Guy), natural pace |
| ▶️ **Auto-play** | Seamless chapter-to-chapter narration |
| 📜 **Handscroll UI** | Progress bar is a handscroll (长卷), the audio console is an inkstone (砚台) |
| ⌨️ **Keyboard shortcuts** | `← →` navigate · `Space` play/pause · `A` autoplay |
| 📱 **Responsive** | Reads beautifully on phone, tablet, and desktop |

---

## 📖 The Story

A poor orphan boy in imperial China loved to paint. With no brush, he practised on sand and stone and walls. One night, a white-bearded immortal gave him a **magic brush** — whatever he drew came to life. Ma Liang used it to help the poor. But a greedy landlord, and then an Emperor, tried to seize it for gold. Ma Liang outwitted both — first by painting his way to freedom, then by summoning a storm at sea that swallowed the Emperor's ship… or did it?

8 chapters · 8 illustrations · 16 narrations · 1 magic brush.

---

## 🛠️ Tech Stack

- **Frontend** — Vanilla HTML, CSS, JavaScript (zero dependencies)
- **Illustrations** — Cloudflare Workers AI (FLUX-1-schnell) with Song-era ink-wash prompts
- **Audio** — Microsoft Edge TTS (`zh-CN-XiaoxiaoNeural` + `en-US-GuyNeural`)
- **Fonts** — EB Garamond, Noto Serif SC, ZCOOL XiaoWei, Inter
- **Hosting** — Static (GitHub Pages)

---

## 🚀 Run locally

```bash
# Serve
python3 -m http.server 8000
# Open http://localhost:8000

# (Optional) Regenerate audio
pip install edge-tts
python3 generate-audio.py

# (Optional) Regenerate illustrations (requires Cloudflare creds in ~/.pi/agent/.env)
python3 generate-images.py
```

---

## 📄 License

Released under the [MIT License](LICENSE).

---

*Built as part of a series of bilingual Chinese folktale webbooks.*

### 🙏 Credits

This project was crafted with ✨ by:

- **[Pi](https://pi.dev)** — AI agent orchestration and project architecture
- **[MiniMax](https://www.minimax.io/)** — Story composition, illustration prompts, and creative direction
