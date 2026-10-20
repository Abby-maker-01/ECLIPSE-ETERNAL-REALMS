# ECLIPSE: REALMS OF RUIN — Android Starter Project

A playable **top-down 2D pixel-style RPG prototype** with landscape-first mobile layout.

## Included in this ZIP
- `www/` — game frontend (HTML, CSS, JavaScript, manifest)
- `.github/workflows/build-apk.yml` — GitHub Actions Android APK build
- `capacitor.config.json` — Capacitor settings
- `package.json` — dependencies and scripts
- `server/` — separate starter WebSocket server for future multiplayer work
- `firestore-not-used.md` — note about prototype storage/network limitations

## Important truth about this build
This is a playable local prototype, **not yet a finished MMORPG**. Movement, collision, enemies, combat, XP/levels, quests, inventory, class selection, gathering, basic crafting, and a demo founder badge are implemented locally. Real accounts, persistent cloud saves, live players, guilds, chat, and player trading need a deployed and secured backend. The FOUNDER badge is currently a demo display and must not be treated as secure account entitlement.

## Build APK with GitHub Actions
1. Create a new GitHub repository, for example `eclipse-realms-of-ruin`.
2. Upload **the contents of this ZIP** into the repository root (so `package.json`, `capacitor.config.json`, `www/`, and `.github/` are at the root).
3. Open the repository's **Actions** tab.
4. Select **Build ECLIPSE Android APK** and press **Run workflow** (or push a commit to trigger it).
5. Wait for the workflow to finish successfully.
6. Open the completed run and download the artifact named `ECLIPSE-REALMS-OF-RUIN-APK`. It contains a debug APK for testing.

## Orientation
The web app is designed for landscape. `manifest.json` requests landscape, CSS displays a rotate prompt in portrait, and the Capacitor Android build calls Android's orientation configuration via `MainActivity.java` after platform creation.

## Local preview
Open `www/index.html` in a browser. Some browser restrictions may affect local file previews; GitHub Pages or a simple local web server is more reliable.

## Next steps for real online multiplayer
Deploy `server/server.js` to a Node.js host that supports persistent WebSocket connections, then implement authenticated accounts, server-authoritative movement/combat, persistent player data, chat, parties, guilds, and secure founder entitlements. Do not use the demo founder flag for a real live game.
