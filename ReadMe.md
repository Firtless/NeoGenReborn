# 🧪 `dev-proto` Branch — Integration & Staging Environment

> **IMPORTANT FOR ALL TEAM MEMBERS:**  
> This branch is our **Integration Testing Ground**. It is where `dev-web`, `dev-backend`, and `dev-hard` come together to test end-to-end functionality (Website ↔ Supabase ↔ ESP32).

---

## 🎯 Purpose of this Branch

1. **Staging Playground:** Test how the live Vercel website, Supabase database, and physical ESP32 communicate together in real-time.
2. **Conflict Sandbox:** Resolve all merge conflicts here so our `main` branch stays pristine, working, and ready for evaluation.
3. **Automated Live Previews:** Pushing to this branch triggers our live online test build so everyone can see if the system works end-to-end.

---

## 🛑 Golden Rules

- **DO NOT code directly on `dev-proto`:** Always write your code inside your assigned branch (`dev-web`, `dev-backend`, or `dev-hard`).
- **Test locally first:** Make sure your code runs on your machine before bringing it here.
- **Never push broken code to `main`:** Only merge `dev-proto` into `main` after the whole team confirms the prototype is working.

---

## 🚀 Step-by-Step Guide: How to Merge Your Work Into `dev-proto`

Follow these exact terminal commands whenever you finish a task on your branch and are ready to test it with the team.

### Step 1: Save & Push Your Work on Your Own Branch

Before switching branches, commit and push everything in your workspace (e.g., `dev-web`):

```bash
# Make sure you are on your branch
git checkout dev-web

# Save your changes
git add .
git commit -m "Add locker unlock button logic"
git push origin dev-web
```
