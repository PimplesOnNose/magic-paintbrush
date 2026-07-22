#!/usr/bin/env python3
"""
Generate Chinese ink-wash painting illustrations for The Magic Paintbrush.
Uses Cloudflare Workers AI (FLUX) with Song-era shanshui prompts.
"""
import os
import sys
import base64
import time
import requests
from pathlib import Path

# Load Cloudflare credentials
env_path = Path.home() / ".pi" / "agent" / ".env"
if env_path.exists():
    with open(env_path) as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                key, val = line.split("=", 1)
                os.environ[key.strip()] = val.strip().strip('"')

ACCOUNT_ID = os.environ.get("CLOUDFLARE_ID", "")
API_KEY    = os.environ.get("CLOUDFLARE_API_KEY", "")

if not ACCOUNT_ID or not API_KEY:
    print("❌ Cloudflare credentials not found in ~/.pi/agent/.env", file=sys.stderr)
    sys.exit(1)

API_URL = f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/black-forest-labs/flux-1-schnell"

# ─── Shared style prefix ────────────────────────────────
STYLE = (
    "Classical Chinese ink-wash painting (水墨画), Song Dynasty shanshui style, "
    "masterpiece quality, elegant varied brushstrokes (cabi, shibi, pomo), "
    "aged xuan-paper texture, generous blank space (留白), soft diffused light, "
    "ink-black and grey washes with restrained colour accents, "
    "ancient scroll aesthetic, multi-vanishing-point perspective, "
    "evokes the spirit of Fan Kuan and Ma Yuan."
)

# ─── Per-chapter illustration prompts ────────────────────
SCENES = {
    1: (
        "A poor orphan boy crouching barefoot at the foot of misty Song-era mountains, "
        "drawing a bird in the sand with a twig, a humble cave dwelling behind him, "
        "pine trees, muted grey and jade washes, wide blank sky, "
        "solitary and hopeful atmosphere"
    ),
    2: (
        "Inside a dark cave dwelling at night, a white-bearded immortal elder "
        "glowing with soft five-coloured light, handing a gleaming golden paintbrush "
        "to a sleeping boy on a straw mat, a dreamlike soft halo, "
        "restrained gold and warm grey tones, intimate mystical atmosphere"
    ),
    3: (
        "A village scene at dawn: a young boy painting with a golden brush, "
        "a bird flying up from the paper into the sky, a fish splashing in a water bowl, "
        "farmers nearby with newly painted plough-oxen and waterwheels, "
        "joyful rural atmosphere, warm jade-green and grey washes, "
        "Song Dynasty village composition"
    ),
    4: (
        "A sinister wealthy landlord in dark robes standing before a locked stable door, "
        "two burly bailiffs behind him, a poor boy defiant inside the dark stable, "
        "snow beginning to fall outside, bare winter trees, "
        "dark and foreboding atmosphere, heavy ink dominance, "
        "dramatic contrast between warm interior glow and cold exterior"
    ),
    5: (
        "Night scene: a boy sitting by a bright painted fire eating hot cakes "
        "inside a snowbound stable, warm orange glow, "
        "then a painted ladder over a wall, the boy escaping into moonlit snow, "
        "a fine horse waiting below, a greedy landlord chasing with torches, "
        "dynamic diagonal composition, snow and firelight contrast, "
        "heroic escape atmosphere"
    ),
    6: (
        "A market town square: a white crane with newly painted eyes "
        "taking flight from a paper painting into the sky, "
        "townspeople looking up in amazement, a young painter holding a brush, "
        "ink splash on the crane's face, soft morning light, "
        "wonder and delight atmosphere, light grey and white washes"
    ),
    7: (
        "A vast calm blue-green sea with a small golden island in the centre, "
        "on the island a single glowing golden money tree, "
        "a great wooden ship with an emperor in golden robes "
        "standing at the bow sailing toward it, distant mountains, "
        "multi-vanishing-point perspective, Song Dynasty seascape, "
        "ambition and anticipation atmosphere, gold and jade accents"
    ),
    8: (
        "Violent storm at sea: towering waves crashing like collapsing walls of water, "
        "dark storm clouds and lightning, a foundering wooden ship capsizing, "
        "in the foreground a calm boy standing on the shore "
        "painting wind-strokes with a glowing golden brush, "
        "dynamic diagonal composition, splashed ink (泼墨) for the waves, "
        "dramatic and cathartic atmosphere, dark ink with gold accents"
    )
}

MAX_RETRIES = 3
RETRY_DELAY = 8


def generate_image(prompt, output_path):
    """Generate an image using Cloudflare AI FLUX model with retries."""
    payload = {
        "prompt":     STYLE + ", " + prompt,
        "width":      1024,
        "height":     768,
        "num_steps":  4,
        "guidance":   7.5
    }
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type":  "application/json"
    }

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            print(f"  🎨 Attempt {attempt}/{MAX_RETRIES} — requesting image…")
            resp = requests.post(API_URL, headers=headers, json=payload, timeout=180)
            resp.raise_for_status()
            data = resp.json()

            if "result" in data and "image" in data["result"]:
                img_bytes = base64.b64decode(data["result"]["image"])
                with open(output_path, "wb") as f:
                    f.write(img_bytes)
                print(f"  ✅ Saved {output_path.name} ({len(img_bytes)//1024} KB)")
                return True
            else:
                print(f"  ⚠️  Unexpected response: {str(data)[:200]}")

        except requests.exceptions.HTTPError as e:
            status = e.response.status_code if e.response else 0
            if status == 429:
                wait = RETRY_DELAY * attempt
                print(f"  ⏳ Rate-limited (429). Waiting {wait}s…")
                time.sleep(wait)
                continue
            print(f"  ❌ HTTP {status}: {e}")
        except requests.exceptions.Timeout:
            print(f"  ⏰ Timeout on attempt {attempt}")
        except Exception as e:
            print(f"  ❌ Error: {e}")

        if attempt < MAX_RETRIES:
            print(f"  ⏳ Retrying in {RETRY_DELAY}s…")
            time.sleep(RETRY_DELAY)

    return False


def main():
    output_dir = Path("images/raw")
    output_dir.mkdir(parents=True, exist_ok=True)

    print("=" * 60)
    print("🎨 神笔马良 — Image Generation (FLUX-1-schnell)")
    print("=" * 60)
    print(f"📁 Output: {output_dir.absolute()}")
    print(f"🎯 Model:  @cf/black-forest-labs/flux-1-schnell")
    print(f"🖌️  Style:  Song Dynasty ink-wash (水墨画)")
    print()

    success = 0
    total = len(SCENES)

    for ch_num in sorted(SCENES):
        prompt = SCENES[ch_num]
        out = output_dir / f"chapter-{ch_num}.webp"

        if out.exists():
            sz = out.stat().st_size // 1024
            print(f"⏭️  Chapter {ch_num} — already exists ({sz} KB)")
            success += 1
            continue

        print(f"\n📖 Chapter {ch_num}/{total}: Generating…")
        if generate_image(prompt, out):
            success += 1
        else:
            print(f"  ❌ FAILED for chapter {ch_num}")

    print(f"\n{'='*60}")
    print(f"✅ Done: {success}/{total} images generated")
    print(f"{'='*60}")

    # Copy raw → images/ (final serving dir)
    final_dir = Path("images")
    for webp in output_dir.glob("chapter-*.webp"):
        dest = final_dir / webp.name
        if not dest.exists():
            import shutil
            shutil.copy2(webp, dest)
            print(f"📋 Copied {webp.name} → images/")

    return success == total


if __name__ == "__main__":
    ok = main()
    sys.exit(0 if ok else 1)
