# ✅ Deployment Checklist

## Pre-Deployment (Already Done!)
- [x] Backend code ready
- [x] Procfile created
- [x] requirements.txt ready
- [x] Extension working locally
- [x] Dashboard working locally

## Deploy Backend

### Choose One Platform:

#### Option 1: Render.com
- [ ] Sign up at render.com
- [ ] Create new Web Service
- [ ] Connect GitHub or use public repo
- [ ] Set root directory: `backend`
- [ ] Set build: `pip install -r requirements.txt`
- [ ] Set start: `uvicorn main:app --host 0.0.0.0 --port $PORT`
- [ ] Deploy and copy URL

#### Option 2: Railway.app
- [ ] Sign up at railway.app
- [ ] New Project → Deploy from GitHub
- [ ] Select backend folder
- [ ] Auto-deploys
- [ ] Copy URL from dashboard

#### Option 3: Heroku
- [ ] Install Heroku CLI
- [ ] `heroku login`
- [ ] `cd backend`
- [ ] `heroku create ecotrace-backend`
- [ ] `git push heroku main`
- [ ] Copy URL

## Update Extension
- [ ] Edit `extension/content.js`
- [ ] Change `API_URL` to your deployed URL
- [ ] Or run: `node update-extension-url.js YOUR_URL`
- [ ] Save file

## Test Deployment
- [ ] Go to `chrome://extensions/`
- [ ] Reload EcoTrace
- [ ] Go to ChatGPT
- [ ] Click test button
- [ ] Verify notification appears
- [ ] Check backend logs for request

## Share Extension

### For Friends/Team:
- [ ] Zip `extension` folder
- [ ] Share zip file
- [ ] Provide instructions (see below)

### For Public:
- [ ] Create icon (128x128 PNG)
- [ ] Take screenshots
- [ ] Zip extension
- [ ] Submit to Chrome Web Store
- [ ] Pay $5 developer fee
- [ ] Wait 1-3 days for approval

## Optional: Deploy Dashboard
- [ ] Deploy to Vercel/Netlify
- [ ] Update API_URL in dashboard
- [ ] Share dashboard URL

---

## Installation Instructions (For Others)

Share this with people:

```
1. Download ecotrace-extension.zip
2. Extract to a folder
3. Open Chrome: chrome://extensions/
4. Enable "Developer mode" (top right)
5. Click "Load unpacked"
6. Select the extracted folder
7. Go to ChatGPT and test!
```

---

## Verification

After deployment, verify:
- [ ] Backend URL works: `https://your-url.com/stats`
- [ ] Extension connects to backend
- [ ] Notifications appear
- [ ] Dashboard shows data (if deployed)
- [ ] Works on different devices

---

## 🎉 Deployment Complete!

Your EcoTrace is now live and accessible from anywhere!
