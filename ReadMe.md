# 🍱 Smart Food Locker System (NeoGenReborn)

Welcome to the **NeoGenReborn** food locker project repository! This is a university prototype system featuring an ESP32 micro-controller, a Supabase database, and a live web application to manage and monitor physical food lockers.

---

## 🏗️ Repository & Branch Architecture

To keep collaborative work clean and prevent merge conflicts across hardware, backend, and web components, this repository is organized into isolated developer branches and an integration testing pipeline.

### 🌿 Permanent Branches

| Branch | Description | Direct Commit Allowed? |
| :--- | :--- | :---: |
| **`main`** | **Production & Release Branch.** Contains stable code, project documentation, and final graded releases. | ❌ NO (PR only) |
| **`dev-proto`** | **Integration & Staging Branch.** Where feature branches merge to test end-to-end hardware & web communication. | ⚠️ Merges only |
| **`dev-web`** | **Frontend Workspace.** Dedicated environment for website UI (HTML/CSS/JS or React). | ✅ Yes |
| **`dev-backend`** | **Backend Workspace.** Dedicated environment for Flask API routes, database schemas, and SQL scripts. | ✅ Yes |
| **`dev-hard`** | **Hardware Workspace.** Dedicated environment for ESP32 C++ / Arduino firmware. | ✅ Yes |

---

## 📁 Monorepo Folder Structure

```text
NeoGenReborn/
├── frontend/             # Web UI files (index.html, index.js, styles)
├── backendF/             # Flask API server, requirements.txt, and SQL schema
├── esp32/                # ESP32 firmware source code and hardware config templates
├── .gitignore            # Excludes build artifacts, secrets, and Mac OS metadata
└── .env.example          # Environment variable template for Supabase API keys