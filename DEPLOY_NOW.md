# 🚀 Deploy EcoTrace - Step by Step

## Option 1: Railway.app (Recommended - 5 minutes)

### Step 1: Deploy Backend

1. **Go to** https://railway.app
2. **Sign up** with GitHub (free)
3. **Click** "New Project"
4. **Select** "Deploy from GitHub repo"
5. **Connect** your GitHub account
6. **Push code to GitHub first**:

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit"

# Create GitHub repo and push
# Go to github.com, create new repo "ecotrace"
git remote add origin https://github.com/YOUR_USERNAME/ecotrace.git
git push -u origin main
```

7. **In Railway**, select your repo
8. **Select** the `backend` folder as root directory
9. **Railway auto-detects** Python and deploys!
10. **Get your URL**: Click on deployment → Copy URL (e.g., `https://ecotrace-production.up.railway.app`)

### Step 2: Update Extension

Edit `extension/content.js`:
