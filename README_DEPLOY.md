# 🚀 Deploy EcoTrace - Quick Start

## 📋 What You Need
- GitHub account (free)
- 10 minutes of time
- Your working EcoTrace project

## 🎯 Deployment Steps

### 1️⃣ Deploy Backend (5 minutes)

**Recommended: Render.com** (No CLI needed!)

1. Go to https://render.com → Sign up
2. Click "New +" → "Web Service"  
3. Connect your GitHub repo (or use public repo)
4. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Click "Create Web Service"
6. Wait 2-3 minutes
7. **Copy your URL**: `https://ecotrace-backend.onrender.com`

### 2️⃣ Update Extension (1 minute)

**Option A - Automatic:**
```bash
node update-extension-url.js https://your-backend-url.com
```

**Option B - Manual:**
Edit `extension/content.js`, line 4:
```javascript
const API_URL = 'https://your-backend-url.com';
```

### 3️⃣ Test It (30 seconds)

1. Go to `chrome://extensions/`
2. Reload EcoTrace
3. Go to ChatGPT
4. Click test button → Should work!

---

## ✅ You're Done!

Your extension now works on any device!

## 📤 Share with Others

### Quick Share (Friends/Team):
```bash
# Zip the extension
cd extension
# Create zip file
```

Share the zip + these instructions:
1. Extract zip
2. Chrome → `chrome://extensions/`
3. Enable Developer mode
4. Load unpacked → Select folder

### Public Release (Chrome Web Store):
See `DEPLOYMENT.md` for full guide

---

## 📚 More Resources

- **Full Deployment Guide**: `DEPLOYMENT.md`
- **Simple Guide**: `DEPLOY_SIMPLE.md`
- **Checklist**: `DEPLOYMENT_CHECKLIST.md`
- **Railway Guide**: `deploy-railway.md`

---

## 💰 Costs

**Free Options:**
- Render.com: 750 hours/month
- Railway.app: 500 hours/month  
- Vercel: Unlimited (for dashboard)

**All free tiers are enough for personal use!**

---

## 🆘 Need Help?

**Backend not deploying?**
- Check `backend/requirements.txt` exists
- Verify `backend/Procfile` exists
- Check deployment logs

**Extension not connecting?**
- Verify API_URL is correct
- Check browser console (F12)
- Test backend: `https://your-url.com/stats`

**Still stuck?**
- Check `FAQ.md`
- Review `TROUBLESHOOTING.md`

---

## 🎉 Success!

Once deployed:
- ✅ Works on any device
- ✅ No local backend needed
- ✅ Share with anyone
- ✅ Always accessible

**Start deploying now!** 🚀
