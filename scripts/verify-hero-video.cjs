/**
 * Fails the build if the hero MP4 is missing or still a Git LFS pointer.
 * Set NEXT_PUBLIC_HERO_VIDEO_URL to skip (remote URL only).
 */
const fs = require('fs');
const path = require('path');

const HERO_REL = path.join('public', 'videos', 'DMR - INTRO 4K.mp4');

if (process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim()) {
  process.exit(0);
}

if (process.env.SKIP_HERO_VIDEO_CHECK === '1') {
  process.exit(0);
}

const file = path.join(__dirname, '..', HERO_REL);
if (!fs.existsSync(file)) {
  console.error(`verify-hero-video: missing ${HERO_REL}`);
  process.exit(1);
}

const fd = fs.openSync(file, 'r');
const buf = Buffer.alloc(200);
fs.readSync(fd, buf, 0, 200, 0);
fs.closeSync(fd);
const head = buf.toString('utf8', 0, 120);

if (head.includes('git-lfs.github.com/spec')) {
  console.error(`
verify-hero-video: ${HERO_REL} is a Git LFS pointer, not the real MP4.

Fix: run "git lfs pull", or set NEXT_PUBLIC_HERO_VIDEO_URL to a direct HTTPS .mp4 URL.
`);
  process.exit(1);
}

process.exit(0);
