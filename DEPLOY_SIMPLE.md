# 🚀 Deploy EcoTrace in 3 Steps

## Step 1: Deploy Backend (5 min)

### Option A: Render.com (Easiest, No CLI needed)

1. **Go to** https://render.com
2. **Sign up** (free)
3. **Click** "New +" → "Web Service"
4. **Connect** GitHub (or use "Public Git Repository")
5. **Settings**:
   - Name: `ecotrace-backend`
   - Root Directory: `backend`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
6. **Click** "Create Web Service"
7. **Wait** 2-3 minutes for deployment
8. **Copy** your URL: `https://ecotrace-backend.onrender.com`

### Option B: Railway.app (Also Easy)

1. **Go to** https://railway.app
2. **Sign up** with GitHub
3. **New Project** → "Deploy from GitHub"
4. **Select** your repo → `backend` folder
5. **Auto-deploys!**
6. **Copy** URL from dashboard

## Step 2: Update Extension (1 min)

Run this command with your deployed URL:

```bash
node update-extension-url.js https://your-backend-url.com
```

Or manually edit `extension/content.js`:
```javascript
// Change this line:
const API_URL = 'http://localhost:8000';

// To this:
const API_URL = 'https://your-backend-url.com';
```

## Step 3: Reload Extension (30 sec)

1. Go to `chrome://extensions/`
2. Find EcoTrace
3. Click reload button
4. Test on ChatGPT!

---

## ✅ You're Live!

Your extension now works from anywhere!

## Share with Others

### Option 1: Share Extension Folder
1. Zip the `extension` folder
2. Share with friends
3. They load it as unpacked extension

### Option 2: Publish to Chrome Web Store
See DEPLOYMENT.md for full guide

---

## 💰 Cost

**Free Tier Options:**
- Render.com: 750 hours/month free
- Railway.app: 500 hours/month free
- Both are plenty for personal use!

**Paid (if needed):**
- Render: $7/month
- Railway: $5/month

---

## 🔧 Troubleshooting

**Backend not responding?**
- Check deployment logs in Render/Railway
- Verify CORS is enabled (it is!)
- Test URL in browser: `https://your-url.com/stats`

**Extension not connecting?**
- Check API_URL in content.js
- Reload extension
- Check browser console (F12)

---

## 🎉 Next Steps

1. Deploy backend (5 min)
2. Update extension (1 min)
3. Share with friends!
4. Optional: Publish to Chrome Web Store
