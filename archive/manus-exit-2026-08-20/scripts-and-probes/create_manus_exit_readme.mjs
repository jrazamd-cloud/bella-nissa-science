import fs from 'node:fs';
import path from 'node:path';

const project = '/home/ubuntu/bella-nissa-science';
const archive = path.join(project, 'archive/manus-exit-2026-08-20');
const readme = path.join(archive, 'README.md');

function walk(root) {
  const entries = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const absolute = path.join(root, entry.name);
    if (entry.isDirectory()) entries.push(...walk(absolute));
    else if (entry.isFile() && absolute !== readme) entries.push(absolute);
  }
  return entries;
}

function originalPath(relative) {
  const name = path.basename(relative);
  const explicit = {
    'bella_nissa_science_claude_handoff_2026-08-20.md': '/home/ubuntu/bella_nissa_science_claude_handoff_2026-08-20.md',
    'bns-jsonld-review.md': '/home/ubuntu/bns-jsonld-review.md',
    'bns-cycle12-serum-beat_61e0a461.mp4': '/manus-storage/bns-cycle12-serum-beat_61e0a461.mp4 (preserved from /home/ubuntu/webdev-static-assets/bns-cycle12-serum-beat.mp4)',
    'serum-beat-first_5c9c3ff2.jpg': '/home/ubuntu/webdev-static-assets/cycle12-serum-review-frames/serum-beat-first.jpg',
    'serum-beat-middle_0bae6322.jpg': '/home/ubuntu/webdev-static-assets/cycle12-serum-review-frames/serum-beat-middle.jpg',
    'serum-beat-last_446273f6.jpg': '/home/ubuntu/webdev-static-assets/cycle12-serum-review-frames/serum-beat-last.jpg',
    'bella-nissa-shopify-klaviyo-handoff.zip': '/home/ubuntu/bella-nissa-shopify-klaviyo-handoff.zip',
  };
  if (explicit[relative]) return explicit[relative];
  if (relative.startsWith('webdev-static-assets-originals/')) return `/home/ubuntu/webdev-static-assets/${name}`;
  if (relative.startsWith('cycle12-chip-frames/')) return `/home/ubuntu/cycle12-chip-frames/${relative.slice('cycle12-chip-frames/'.length)}`;
  if (relative.startsWith('cycle12-stills-ritual-work/')) return `/home/ubuntu/cycle12-stills-ritual-work/${relative.slice('cycle12-stills-ritual-work/'.length)}`;
  if (relative.startsWith('cycle3-probe/')) return `/home/ubuntu/cycle3-probe/${relative.slice('cycle3-probe/'.length)}`;
  if (relative.startsWith('scripts-and-probes/')) return `/home/ubuntu/${name}`;
  if (relative.startsWith('early-brand-assets/')) return `/home/ubuntu/${name}`;
  if (relative.startsWith('legacy-github-push-notes/')) return `/home/ubuntu/bella-nissa-github-push/${name}`;
  return 'Unknown source mapping — review required';
}

function bytes(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

const rows = walk(archive).map((absolute) => {
  const relative = path.relative(archive, absolute).split(path.sep).join('/');
  return { relative, size: fs.statSync(absolute).size, original: originalPath(relative) };
});
const total = rows.reduce((sum, row) => sum + row.size, 0);

const lines = [
  '# Manus Sandbox Exit Archive — 20 August 2026',
  '',
  '> **Purpose:** Preserve eligible Bella Nissa Science artifacts that were present only in the Manus sandbox before trial expiry. This archive is historical/supporting material only; it does not alter the live application, integrate media, or change deployed behavior.',
  '',
  `**Archive inventory:** ${rows.length} files, ${bytes(total)} bytes. Every archived file is below the owner-specified 50 MB individual-file limit.`,
  '',
  '## Included files',
  '',
  '| Archived path | Bytes | Original sandbox path |',
  '|---|---:|---|',
  ...rows.map((row) => `| \`${row.relative}\` | ${bytes(row.size)} | \`${row.original}\` |`),
  '',
  '## Explicit exclusions',
  '',
  '| Excluded location or material | Reason |',
  '|---|---|',
  '| `/home/ubuntu/bns-portability-clean-check/` | Fresh clean-clone validation workspace; its source is already represented by GitHub and its `node_modules` dependency tree was excluded. |',
  '| `/home/ubuntu/bella-nissa-github-push/` source tree | Historical Git clone whose source is already preserved by repository history. Its five unique supporting notes are included under `legacy-github-push-notes/`; `.git` internals were not duplicated. |',
  '| `/home/ubuntu/bella-nissa-shopify-klaviyo-handoff/` expanded folder | Its contents are preserved in the included files-only ZIP; duplicating the expanded files would duplicate the same handoff. |',
  '| Project `node_modules/`, `dist/`, clean-clone dependency folders, and build output | Explicitly excluded by owner instruction. |',
  '| Existing tracked repository source and portable `/media`/`/fonts` assets | Already preserved in GitHub; duplicate content was not copied solely because it was present elsewhere in the sandbox. |',
  '| Files over 50 MB | None found among the identified Bella Nissa Science artifacts. |',
  '',
  '## Notes',
  '',
  'The retired serum beat keeps the owner-specified durable-storage filename in this archive. The active website does not use it. The three serum review frames retain the requested hash-bearing archive names even though their accessible sandbox source names were un-hashed.',
  '',
  'The `cycle12-chip-frames/` directory contains the 384 frame-level inputs used to calculate the ritual-chip contrast audit. Those frames are intentionally retained as audit evidence, even though the current active ritual sequence has already been integrated separately.',
  '',
];

fs.writeFileSync(readme, `${lines.join('\n')}\n`);
