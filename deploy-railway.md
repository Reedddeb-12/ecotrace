# Deploy to Railway (Easiest - 10 minutes)

## Step 1: Prepare Backend (Already Done! ✅)
- Procfile created
- requirements.txt ready
- Code is deployment-ready

## Step 2: Deploy Backend

### A. Create Railway Account
1. Go to https://railway.app
2. Click "Login" → Sign up with GitHub
3. Free tier: 500 hours/month (plenty for testing)

### B. Deploy
1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. If you don't have GitHub repo yet, choose "Empty Project"
4. Click "Deploy from GitHub repo" or "Empty Service"
5. For empty service:
   - Click "Add Service" → "Empty Service"
   - Go to Settings → Connect Repo
   - Or use Railway CLI (see below)

### C. Railway CLI Method (Faster)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy from backend folder
cd backend
railway init
railway up
```

Your backend will be live at: `https://your-app.up.railway.app`

## Step 3: Update Extension

Once deployed, update the API URL:
