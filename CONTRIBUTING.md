# Contributing – Fun Camera 📸

Welcome! Your group builds **one camera screen** with a fun twist. Everything else is already done.

## 1. Setup (5 minutes)

```bash
git clone <repo-url>
cd <repo-folder>
npm install
npx expo start
```

- Install **Expo Go** on your phone and scan the QR code (iPhone: use the Camera app).
- Your phone and laptop must be on the **same Wi-Fi**.
- School Wi-Fi blocking it? Try `npx expo start --tunnel`.

## 2. The golden rule 🥇

**Only edit files inside your own `groups/groupN/` folder.**

- ✅ Edit `groups/groupN/index.tsx`, add new files like `groups/groupN/Sticker.tsx`
- ❌ Don't edit `app/`, `components/`, `groups/registry.ts`, `package.json` or any config file
- ❌ Don't install new packages

A robot checks every pull request and will complain if you change files outside your folder.

## 3. Git workflow

```bash
git checkout -b group-N          # e.g. group-3
# ...work...
git add groups/groupN
git commit -m "Add countdown"    # commit often!
git push -u origin group-N
```

- Open **one pull request** to `main` before the deadline. The teacher merges all PRs.
- **Not a collaborator on the repo?** Fork it on GitHub, work on your fork, and open the PR from there.

## 4. Rename your screen

Edit `meta` at the top of your file – the home screen updates automatically:

```tsx
export const meta = {
  title: 'Countdown Cam',
  emoji: '⏱️',
};
```

## 5. I broke everything 😱

Copy the starter back into your file:

```bash
cp groups/_starter/CameraStarter.tsx groups/groupN/index.tsx
```

Then set your `meta` again. (If the app crashes on your screen, the rest of the app still works – you'll see a red error message instead.)

## 6. No camera?

Simulator or broken camera? Use the **🖼️ Gallery** button to pick a photo instead.

## 7. Ideas

The list of feature ideas is at the top of your `index.tsx`. Pick one, or invent your own and get a quick OK from the teacher.

**Tip:** overlays are just `View`s, `Text`s and emojis with `position: 'absolute'`, placed next to the `CameraView` (never inside it). Look for the `🎨 YOUR OVERLAY GOES HERE` comments.

## 8. Time plan (90 min)

| Time      | What                                                   |
| --------- | ------------------------------------------------------ |
| 0–10 min  | Teacher demo, form groups, clone and run               |
| 10–20 min | Pick an idea and tell the teacher in one sentence      |
| 20–75 min | Build!                                                 |
| 75 min    | Open your pull request                                 |
| 75–90 min | Merge and demo on the projector (~90 seconds per group) |
