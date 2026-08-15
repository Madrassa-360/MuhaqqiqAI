# 📜 Muhaqqiq AI — Digital Islamic Research Ecosystem & Admin Portal

<p align="center">
  <img src="./icon-192.png" alt="Muhaqqiq AI Logo" width="120" style="border-radius: 24px;" />
</p>

<p align="center">
  <strong>Accessible, AI-powered research platform for Islamic scholars, researchers, and students of knowledge.</strong>
</p>

<p align="center">
  <a href="https://Madrassa-360.github.io/MuhaqqiqAI/"><img src="https://img.shields.io/badge/Live_App-Online-10b981?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Demo"></a>
  <a href="https://Madrassa-360.github.io/MuhaqqiqAI/admin_manager.html"><img src="https://img.shields.io/badge/Admin_Portal-Active-ea580c?style=for-the-badge&logo=speedtest&logoColor=white" alt="Admin Portal"></a>
  <img src="https://img.shields.io/badge/PWA-Ready-6366f1?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA Ready">
  <img src="https://img.shields.io/badge/Language-Arabic%20%7C%20Urdu%20%7C%20English-f59e0b?style=for-the-badge" alt="Multi-Language">
</p>

---

## 🌟 Key Highlights & Features

### 📖 1. Main Research Ecosystem (`index.html`)
- **Scholarly Resource Hub:** Categorized collection of Islamic notebooks, classical texts, Hadith commentaries, Tafseer, Fiqh, Usul, and Seerah works.
- **NotebookLM Integration:** One-click instant launch for Google NotebookLM notebooks, Google Drive cloud folders, and original PDF source documents.
- **Multilingual Support:** Native font rendering and UI layout optimization for **Arabic**, **Urdu**, and **English**.
- **Advanced Search & Filtering:** Filter resources by category, author, death year, editor (*tahqeeq*), or key search terms.
- **Custom Aesthetic Themes:** Over 15+ light and dark mode glassmorphic themes (Emerald Night, Oud Amber, Lapis Dawn, Peach Soft, Lemon Light, Sky Blue, etc.).

### 🎴 2. Central Admin & User Manager (`admin_manager.html`)
- **Resource Cards Manager:** Edit card titles, descriptions, icons, categories, display order, and visibility status (`Active 👁️` / `Hidden 🙈`).
- **Button Links Editor:** Update NotebookLM URLs, Google Drive folder links, and PDF file links for any card in real time.
- **User Management & Passwords:** Create new user accounts, assign roles (`Admin 👑`, `Editor ✍️`, `Researcher 🔬`, `Standard User 👤`), reset/generate secure passwords, and toggle **Ban ⛔ / Unban ✅** status.
- **Master Security Control:** Update master admin password (`at_pass`) and manage active user sessions.
- **JSON Data Backup & Restore:** Export complete database backups as JSON or import existing datasets instantly.

### 📱 3. Progressive Web App (PWA)
- **Installable Desktop/Mobile App:** Add to Home Screen / Desktop on Chrome, Edge, and iOS Safari for a standalone app experience.
- **Offline Capability:** Service Worker (`sw.js`) caches assets and ensures smooth offline access with smart background updates.

---

## 🚀 Live Deployment Links

| Application Interface | URL |
|---|---|
| 🌐 **Main Research Web App** | [https://Madrassa-360.github.io/MuhaqqiqAI/](https://Madrassa-360.github.io/MuhaqqiqAI/) |
| 🛠️ **Admin & User Management Portal** | [https://Madrassa-360.github.io/MuhaqqiqAI/admin_manager.html](https://Madrassa-360.github.io/MuhaqqiqAI/admin_manager.html) |
| 📦 **GitHub Repository** | [https://github.com/Madrassa-360/MuhaqqiqAI](https://github.com/Madrassa-360/MuhaqqiqAI) |

---

## 📂 Repository File Breakdown

```
MuhaqqiqAI/
├── index.html               # Primary web application interface
├── admin_manager.html       # Central Admin & User Management Portal
├── manifest.json            # Web App Manifest for PWA installation
├── sw.js                    # Service Worker script for offline cache & auto updates
├── DEPLOY_INSTRUCTIONS.md   # Technical deployment documentation
├── README.md                # Detailed project documentation
├── icon-192.png             # 192x192 PWA App Icon
├── icon-512.png             # 512x512 High-Res App Icon
├── maskable-icon-512.png    # Android Maskable App Icon
├── apple-touch-icon.png     # iOS Home Screen Icon
└── favicon-32.png           # 32x32 Browser Tab Favicon
```

---

## 💻 Local Development Setup

No complex build step or `npm install` is required. The project is built using pure Vanilla HTML5, CSS3, and modern JavaScript.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Madrassa-360/MuhaqqiqAI.git
   cd MuhaqqiqAI
   ```

2. **Run a local web server:**
   - **Python:**
     ```bash
     python -m http.server 8080
     ```
   - **Node.js (npx):**
     ```bash
     npx serve .
     ```
   - **VS Code:** Open with *Live Server* extension.

3. Open your browser at `http://localhost:8080`.

---

## 🛠️ Pushing Updates to GitHub Pages

To commit and push future improvements to your live GitHub Pages deployment:

```bash
git add .
git commit -m "Update application features and data"
git push origin main
```

---

## 👨‍💻 Author & Credits

Developed for **Madrassa 360** by **Muhammad Talha Bin Farid**.

- **Ecosystem:** Al-Turath NotebookLM Hub
- **License:** Open Source for Educational and Research Purposes.
