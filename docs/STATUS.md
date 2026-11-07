# Status — Hanuman's Leap

- Updated: 7 Nov 2026
- Milestone: **M0 — setup done**. Next: **M1 — port the prototype to Vite + three.js modules**.
- Stage: Prototype (a playable single-file prototype exists; the modular game is not started)

## What this is
A 3D browser action-platformer retelling the Ramayana, starting with the Sundara Kandam:
Hanuman's leap across the ocean to Lanka, finding Sita in Ashoka Vatika, then Lanka Dahan
(burning the golden roofs) and leaping home. Inspired by the Kamba Ramayanam. Plays on phone
(touch) and desktop (keyboard). Free to play on GitHub Pages. Personal project, no revenue plan.

## Where things are
- Local: `~/workspace/raavan/hanuman`
- Repo: https://github.com/i-amar/hanuman (branch `main`)
- Live: https://i-amar.github.io/hanuman/ (auto-deploys on push; currently a placeholder build)
- Prototype: `prototype/index.html` — the playable reference (open it directly in a browser)
- Setup script: `~/workspace/setup-hanuman.sh`

## Done
- Vite + three.js + Playwright installed; `npm run build` passes.
- `CLAUDE.md` written (stack, folder ownership, rules, definition of done).
- 5 Claude Code subagents in `.claude/agents/`: engine, level-design, combat, assets, qa-tester.
- GitHub repo created; Pages workflow deploying successfully.
- Prototype committed to `prototype/index.html`.

## Not done yet
- `src/engine`, `src/levels`, `src/combat`, `src/assets` are empty; `src/main.js` is a stub.
- No `docs/PLAN.md` yet (Prompt 1 creates it).
- No QA playtest script yet (`qa/playtest.mjs`).
- No real 3D models or audio; placeholder primitives only.

## Next
1. Open Claude Code in `~/workspace/raavan/hanuman`, `/model opus`, check `/agents` lists 5.
2. Plan mode (Shift+Tab), send **Prompt 1**: plan the port of the prototype into modules and
   write `docs/PLAN.md`. Approve the plan before any code is written.
3. Build M1: engine (renderer, loop, input, touch UI), then level, then combat, then QA run.

## Assets needed from Amar
Hanuman model, gada (mace), rakshasa enemy, club — see the asset prompts doc. Music chosen by ear.

## Open bugs
None (no game code yet).

## Next prompt to run
Prompt 1 from the build plan, in plan mode.
