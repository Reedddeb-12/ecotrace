# 📦 Push to GitHub & Deploy

## Step 1: Initialize Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: EcoTrace AI Footprint Tracker"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `ecotrace`
3. Description: `Track energy, carbon, and water footprint of AI prompts`
4. Public or Private (your choice)
5. **Don't** initialize with README (we already have one)
6. Click "Create repository"

## Step 3: Push to GitHub

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/ecotrace.git

# Push code
git branch -M main
git push -u origin main
```

## Step 4: Deploy Backend from GitHub

### Option A: Render.com

1. Go to https://render.com/dashboard
2. Click "New +" → "Web Service"
3. Click "Connect GitHub"
4. Select your `ecotrace` repository
5. Configure:
   - **Name**: `ecotrace-backend`
   - **Root Directory**: `backend`
   - **Environment**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - **Plan**: Free
6. Click "Create Web Service"
7. Wait 2-3 minutes for deployment
8. Copy your URL: `https://ecotrace-backend.onrender.com`

### Option B: Railway.app

1. Go to https://railway.app/dashboard
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your `ecotrace` repository
5. Select `backend` as root directory
6. Railway auto-detects Python and deploys
7. Copy URL from dashboard

### Option C: Vercel (Alternative)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy backend
cd backend
vercel
```

## Step 5: Update Extension

Once backend is deployed, update the extension:

```bash
# Use the helper script
node update-extension-url.js https://your-backend-url.com

# Or manually edit extension/content.js
# Change: const API_URL = 'http://localhost:8000';
# To: const API_URL = 'https://your-backend-url.com';
```

## Step 6: Commit Updated Extension

```bash
git add extension/content.js
git commit -m "Update extension with production backend URL"
git push
```

## Step 7: Test Deployment

1. Go to `chrome://extensions/`
2. Reload EcoTrace extension
3. Visit ChatGPT
4. Click test button
5. Verify notification appears!

## 🎉 You're Live!

Your EcoTrace is now:
- ✅ On GitHub
- ✅ Backend deployed
- ✅ Extension updated
- ✅ Ready to share!

## 📤 Share Your Project

### Share Extension

1. Zip the `extension` folder
2. Share with instructions:

```
1. Download and extract ecotrace-extension.zip
2. Open Chrome: chrome://extensions/
3. Enable "Developer mode"
4. Click "Load unpacked"
5. Select the extracted folder
6. Visit ChatGPT and test!
```

### Share Repository

Share your GitHub URL:
```
https://github.com/YOUR_USERNAME/ecotrace
```

People can:
- Clone and run locally
- Deploy their own instance
- Contribute improvements

## 🔄 Auto-Deploy on Push

Your backend will auto-deploy when you push to GitHub!

```bash
# Make changes
git add .
git commit -m "Add new feature"
git push

# Render/Railway automatically redeploys!
```

## 📊 Monitor Deployment

### Render.com
- Dashboard: https://dashboard.render.com
- View logs, metrics, and status

### Railway.app
- Dashboard: https://railway.app/dashboard
- View deployments and logs

## 🆘 Troubleshooting

**Push failed?**
```bash
# Check remote
git remote -v

# If wrong, update it
git remote set-url origin https://github.com/YOUR_USERNAME/ecotrace.git
```

**Deployment failed?**
- Check deployment logs in Render/Railway
- Verify `requirements.txt` is correct
- Ensure `Procfile` exists in backend folder

**Extension not connecting?**
- Verify API_URL in content.js
- Test backend: `https://your-url.com/stats`
- Check browser console for errors

## 🎯 Next Steps

1. ✅ Code on GitHub
2. ✅ Backend deployed
3. ✅ Extension working
4. 📝 Add README badges
5. 🌟 Get stars!
6. 🤝 Accept contributions

---

**Your EcoTrace is now open source and deployable!** 🚀
