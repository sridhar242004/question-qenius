# QuestionGenius — Vercel Edition

## 🚀 Deploy

1. Extract this ZIP
2. Go to [vercel.com](https://vercel.com) → Add New Project → Upload
3. Drag the extracted folder
4. Framework shows **"Other"** → Deploy
5. Dashboard → Settings → Environment Variables
6. Add: `GROQ_API_KEY` = ``
7. Deployments → Redeploy

## ✅ Verify

Visit `https://YOUR-URL.vercel.app/api/health`

Should return: `{"status":"ok","groqConfigured":true}`

## 📝 What Changed

- Hardcoded Groq API key removed from frontend
- Direct `api.groq.com` calls removed
- All AI calls route through `/api/generate` backend proxy
- API key lives only in Vercel Environment Variables
