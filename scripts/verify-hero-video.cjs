/**
 * Fails the build if the hero MP4 is still a Git LFS pointer (common when
 * deploy hosts clone without LFS smudge). Set NEXT_PUBLIC_HERO_VIDEO_URL to skip.
 */
const fs = require('fs');
const path = require('path');

if (process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim()) {
  process.exit(0);
}

if (process.env.SKIP_HERO_VIDEO_CHECK === '1') {
  process.exit(0);
}

const file = path.join(__dirname, '..', 'public', 'videos', 'dmr-full-hd.mp4');
if (!fs.existsSync(file)) {
  console.error('verify-hero-video: missing public/videos/dmr-full-hd.mp4');
  process.exit(1);
}

const fd = fs.openSync(file, 'r');
const buf = Buffer.alloc(200);
fs.readSync(fd, buf, 0, 200, 0);
fs.closeSync(fd);
const head = buf.toString('utf8', 0, 120);

if (head.includes('git-lfs.github.com/spec')) {
  console.error(`
verify-hero-video: public/videos/dmr-full-hd.mp4 is a Git LFS pointer, not the real MP4.

Fix (pick one):
1) Vercel: Settings → Git → enable Git Large File Storage (LFS), then redeploy.
   https://vercel.com/docs/project-configuration/git-settings

2) Set env NEXT_PUBLIC_HERO_VIDEO_URL to a direct HTTPS URL to the same .mp4 (Blob, S3, CDN), then redeploy.

3) Other hosts: ensure the build runs "git lfs install && git lfs pull" after clone, or use SKIP_HERO_VIDEO_CHECK=1 only if you serve the video only via NEXT_PUBLIC_HERO_VIDEO_URL.
`);
  process.exit(1);
}

process.exit(0);
