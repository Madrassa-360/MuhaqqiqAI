# Muhaqqiq AI — GitHub Pages Deployment & Management Guide

## 1. Project Overview & Repository Details
- **GitHub Repository:** [https://github.com/Madrassa-360/MuhaqqiqAI](https://github.com/Madrassa-360/MuhaqqiqAI)
- **Live Application Link:** [https://Madrassa-360.github.io/MuhaqqiqAI/](https://Madrassa-360.github.io/MuhaqqiqAI/)
- **Admin & Resource Manager:** [https://Madrassa-360.github.io/MuhaqqiqAI/admin_manager.html](https://Madrassa-360.github.io/MuhaqqiqAI/admin_manager.html)

---

## 2. Project File Structure & Components

| File Name | Description & Purpose |
|---|---|
| `index.html` | Primary web application (Muhaqqiq AI Ecosystem interface, books, preview modals, search) |
| `admin_manager.html` | Central Admin Portal (Edit cards, update button links, manage users, assign passwords, ban/unban, JSON backup) |
| `manifest.json` | PWA Web App Manifest (for installation on Mobile/Desktop Home Screen) |
| `sw.js` | Service Worker (Auto-update cache strategy, offline mode support) |
| `icon-192.png` | App Icon (192×192 pixels) |
| `icon-512.png` | App Icon (512×512 pixels) |
| `maskable-icon-512.png` | Android Maskable App Icon |
| `apple-touch-icon.png` | iPhone / iPad Home Screen Icon |
| `favicon-32.png` | Browser Tab Icon |
| `DEPLOY_INSTRUCTIONS.md` | Deployment and maintenance documentation |

---

## 3. How to Deploy & Activate GitHub Pages

1. Navigate to repository settings:  
   👉 `https://github.com/Madrassa-360/MuhaqqiqAI/settings/pages`
2. Under **Build and deployment** → **Source**:
   - Select **Deploy from a branch**.
   - **Branch:** Choose `main`.
   - **Folder:** Select `/(root)`.
3. Click **Save**.
4. GitHub Pages will build your application within 60 seconds.

---

## 4. Pushing Future Updates to GitHub

Whenever you modify any code locally, run these terminal commands to automatically update your live site:

```powershell
git add .
git commit -m "Update application features and data"
git push origin main
```

---

## 5. PWA Installation & Service Worker Auto-Update Behavior
- **Automatic Updates:** When connected to the internet, `sw.js` fetches the latest version of `index.html` and `admin_manager.html` directly from the server, bypassing browser cache locks.
- **Desktop/Android (Chrome/Edge):** Displays native "Install App" prompts for a standalone window experience.
- **iOS Safari:** Use **Share → Add to Home Screen**.
- **Offline Support:** LocalStorage data (`at_nb`, `at_users`, `at_pass`, etc.) and cached assets remain available offline.
