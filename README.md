# Fun Camera 📸

A collective class app for Mobile Development. Each group of students owns exactly one camera screen in `groups/groupN/` and gives it a fun twist – a frame, a countdown, a photo booth strip, stickers and so on. The shared app (navigation, home screen, registry, helpers) is already done, so groups never edit the same files and merge conflicts are practically impossible.

Built with Expo (SDK 57), Expo Router, `expo-camera` and `expo-image-picker`. Runs in **Expo Go** on iOS and Android.

## Run it

```bash
npm install
npx expo start          # scan the QR code with Expo Go
npx expo start --tunnel # if the network blocks the normal connection
```

Type check with `npm run typecheck`.

## Students

Read **[CONTRIBUTING.md](CONTRIBUTING.md)** before you start.

## Project layout

```
app/                         routes (home screen + group/[id])
components/shared/           useCameraSetup, PermissionGate, pickFromGallery
components/GroupErrorBoundary.tsx
groups/registry.ts           list of all groups
groups/_starter/             untouched copy of the starter screen
groups/group1 … group7/      one folder per group
```

**Adding a group:** copy `groups/group7` to `groups/group8`, then add one import and one `group(...)` line in `groups/registry.ts`.
