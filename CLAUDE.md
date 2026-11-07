# Hanuman's Leap

A 3D browser action-platformer retelling the Ramayana, starting with the Sundara Kandam
(Hanuman's leap to Lanka, finding Sita in Ashoka Vatika, Lanka Dahan). Inspired by the
Kamba Ramayanam. Plays on phone (touch) and desktop (keyboard). Free on GitHub Pages.

## Stack
- Vite + vanilla JS (ES modules) + three.js. No frameworks, no TypeScript for now.
- Models: GLB via GLTFLoader (+ DRACOLoader). Animations: AnimationMixer.
- Audio: Web Audio API. Tests: Playwright (headless Chromium).

## Folder ownership (one agent per folder; never edit another agent's folder)
- src/engine/   -> engine agent: renderer, loop, physics/collision, camera, input, touch UI
- src/levels/   -> level-design agent: level data, platforms, triggers, story scenes, dialogue
- src/combat/   -> combat agent: player moves, enemies, AI, damage, bosses
- src/assets/   -> assets agent: loaders, asset manifest, audio manager
- public/assets/ -> assets agent: optimized GLB, textures, audio (raw drops in public/assets/raw/)
- qa/           -> qa-tester agent: playtest scripts and reports
- src/main.js and shared interfaces in src/core/ -> lead session only

## Reference
- prototype/index.html is the working single-file prototype. Port its behaviour faithfully:
  same level layout, jump/double-jump/leap numbers, combat timings, phases and dialogue.

## Rules
- Expose a debug hook: window.__game = { player, enemies, phase, teleport(x,y,z) } for QA.
- Keep 60 fps on a mid-range phone: <150 draw calls, textures <=2048px, models <30k faces.
- Every change: `npm run build` must pass. Commit small, clear messages.
- Placeholder primitives stay until a real asset exists; never block on art.
- Respectful tone: Rama, Sita and Hanuman are revered figures. Heroic and dignified, no
  slapstick on them, no mocking. Rakshasas and Ravana can be fierce villains.
- Claude cannot hear audio: the human picks music by ear; agents only wire it in.

## Commands
- npm run dev       # local server at http://localhost:5173 (also on your phone via LAN IP)
- npm run build     # production build to dist/
- npm run qa        # headless full-run playtest (qa-tester owns qa/playtest.mjs)

## End of every session (lead)
Update docs/STATUS.md (overwrite) with: date, milestone, tasks done today, tasks next,
open bugs from QA, assets needed from the human, and the single next prompt to run.
Tick finished tasks in docs/PLAN.md. Commit both.

## Definition of done for a task
Builds, runs with no console errors, passes npm run qa, committed.
