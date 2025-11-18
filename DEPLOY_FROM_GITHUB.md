# 🚀 Deploy EcoTrace from GitHub

## ✅ Repository is Ready!

Your project is now configured for GitHub deployment with:
- ✅ README.md with deploy buttons
- ✅ .gitignore configured
- ✅ LICENSE file (MIT)
- ✅ render.yaml for one-click Render deploy
- ✅ railway.json for Railway deploy
- ✅ GitHub Actions workflow
- ✅ Issue templates
- ✅ Deployment configs

## 🎯 Quick Deploy (3 Steps)

### Step 1: Push to GitHub (2 minutes)

**Windows:**
```bash
push-to-github.bat
```

**Mac/Linux:**
```bash
chmod +x push-to-github.sh
./push-to-github.sh
```

**Or manually:**
```bash
git init
git add .
git commit -m "Initial commit: EcoTrace"
git remote add origin https://github.com/YOUR_USERNAME/ecotrace.git
git push -u origin main
```

### Step 2: Deploy Backend (3 minutes)

**Option A: Render.com (Easiest)**

1. Go to https://render.com
2. Sign up with GitHub
3. New Web Service → Select your repo
4. Settings:
   - Root Directory: `backend`
   - Build: `pip install -r requirements.txt`
   - Start: `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Deploy!
6. Copy URL: `https://ecotrace-backend.onrender.com`

**Option B: Railway.app**

1. Go to https://railway.app
2. New Project → Deploy from GitHub
3. Select your repo
4. Select `backend` folder
5. Auto-deploys!
6. Copy URL from dashboard

**Option C: One-Click Deploy**

Click the deploy button in your README.md!

### Step 3: Update Extension (1 minute)

```bash
node update-extension-url.js https://your-backend-url.com
```

Then reload extension in Chrome!

## 📦 What's Included

### Backend Files
- `backend/main.py` - API server
- `backend/requirements.txt` - Dependencies
- `backend/Procfile` - Heroku/Railway config
- `backend/runtime.txt` - Python version
- `backend/test_api.py` - API tests

### Extension Files
- `extension/manifest.json` - Extension config
- `extension/content.js` - Main logic
- `extension/popup.html` - Popup UI
- `extension/popup.js` - Popup logic

### Dashboard Files
- `dashboard/src/App.js` - React app
- `dashboard/package.json` - Dependencies

### Deployment Files
- `render.yaml` - Render.com config
- `railway.json` - Railway config
- `.github/workflows/deploy.yml` - GitHub Actions
- `Procfile` - Heroku config

### Documentation
- `README.md` - Main documentation
- `GITHUB_SETUP.md` - GitHub guide
- `README_DEPLOY.md` - Deployment guide
- `DEPLOY_SIMPLE.md` - Simple deploy guide
- `START_HERE.md` - Quick start
- `FAQ.md` - Common questions

## 🎨 Repository Features

### Deploy Buttons
Your README includes one-click deploy buttons for:
- Render.com
- Railway.app

### GitHub Actions
Auto-deploy on push to main branch

### Issue Templates
- Bug reports
- Feature requests

### License
MIT License - open source friendly

## 🌟 Make it Public

### Before Publishing:

1. **Test everything locally**
2. **Deploy and test backend**
3. **Update README with your URLs**
4. **Add screenshots**
5. **Create demo video**

### After Publishing:

1. **Add topics** on GitHub:
   - `ai`
   - `carbon-footprint`
   - `sustainability`
   - `chrome-extension`
   - `fastapi`
   - `react`

2. **Add description**:
   "Track energy, carbon, and water footprint of AI prompts in real-time"

3. **Enable GitHub Pages** (optional):
   - Settings → Pages
   - Deploy dashboard as static site

4. **Share**:
   - Twitter/X
   - Reddit (r/webdev, r/programming)
   - Hacker News
   - Product Hunt

## 📊 Repository Stats

Once live, add badges to README:

```markdown
![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/ecotrace)
![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/ecotrace)
![GitHub issues](https://img.shields.io/github/issues/YOUR_USERNAME/ecotrace)
![License](https://img.shields.io/github/license/YOUR_USERNAME/ecotrace)
```

## 🤝 Enable Contributions

Your repo is ready for contributions with:
- CONTRIBUTING.md guide
- Issue templates
- Clear documentation
- MIT License

## 🔒 Security

### Environment Variables

For production, use environment variables:

**Render.com:**
- Dashboard → Environment
- Add: `CORS_ORIGINS`, `DATABASE_URL`, etc.

**Railway.app:**
- Variables tab
- Add secrets

### Secrets

Never commit:
- API keys
- Database passwords
- Private keys

Use `.env` files (already in .gitignore)

## 🎉 You're Ready!

Your repository is:
- ✅ Configured for deployment
- ✅ Ready for GitHub
- ✅ Open source friendly
- ✅ Contribution ready

**Run the push script now!**

```bash
# Windows
push-to-github.bat

# Mac/Linux
./push-to-github.sh
```

Then deploy from GitHub! 🚀
