# EcoTrace Deployment Guide

## Deploy Backend to Cloud

### Option 1: Railway.app (Easiest)

1. **Sign up at [railway.app](https://railway.app)**

2. **Create new project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your repo
   - Select the `backend` folder

3. **Configure:**
   - Railway auto-detects Python
   - Add environment variables if needed
   - Get your deployment URL (e.g., `https://ecotrace-backend.railway.app`)

4. **Update extension:**
   - Edit `extension/content.js`
   - Change `API_URL` to your Railway URL
   - Reload extension

### Option 2: Render.com (Free Tier)

1. **Sign up at [render.com](https://render.com)**

2. **Create Web Service:**
   - Click "New +"
   - Select "Web Service"
   - Connect GitHub repo
   - Root directory: `backend`
   - Build command: `pip install -r requirements.txt`
   - Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

3. **Get URL and update extension**

### Option 3: Heroku

1. **Install Heroku CLI**

2. **Create Procfile in backend folder:**
```bash
cd backend
echo "web: uvicorn main:app --host 0.0.0.0 --port $PORT" > Procfile
```

3. **Deploy:**
```bash
heroku login
heroku create ecotrace-backend
git init
git add .
git commit -m "Deploy backend"
heroku git:remote -a ecotrace-backend
git push heroku main
```

4. **Get URL:**
```bash
heroku open
```

## Update Extension for Production

1. **Edit `extension/content.js`:**
```javascript
const API_URL = 'https://your-deployed-backend.com';
```

2. **Remove test alert:**
   - Already done in the latest version

3. **Test locally:**
   - Reload extension
   - Test on ChatGPT
   - Verify it connects to cloud backend

## Publish Extension to Chrome Web Store

### Prerequisites
- Google account
- $5 one-time developer fee
- Extension icon (48x48 PNG)
- Screenshots for listing

### Steps

1. **Prepare extension:**
```bash
cd extension
# Create zip file
# Windows: Right-click > Send to > Compressed folder
```

2. **Create developer account:**
   - Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
   - Pay $5 fee

3. **Upload extension:**
   - Click "New Item"
   - Upload zip file
   - Fill out listing:
     - Name: EcoTrace - AI Footprint Tracker
     - Description: Track energy, carbon, and water footprint of AI prompts
     - Category: Productivity
     - Language: English

4. **Add assets:**
   - Icon: 128x128 PNG
   - Screenshots: 1280x800 or 640x400
   - Promotional images (optional)

5. **Submit for review:**
   - Review takes 1-3 days
   - You'll get email when approved

## Share Extension Without Publishing

### For Team/Friends

1. **Package extension:**
```bash
cd extension
# Create zip: ecotrace-extension.zip
```

2. **Share instructions:**
```
1. Download ecotrace-extension.zip
2. Extract to a folder
3. Open Chrome: chrome://extensions/
4. Enable "Developer mode"
5. Click "Load unpacked"
6. Select the extracted folder
```

3. **Share backend URL:**
   - Give them your deployed backend URL
   - Or they run backend locally

## Deploy Dashboard (Optional)

### Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
cd dashboard
vercel
```

3. **Update API URL in dashboard:**
   - Edit `dashboard/src/App.js`
   - Change `API_URL` to your backend URL

### Netlify

1. **Build dashboard:**
```bash
cd dashboard
npm run build
```

2. **Deploy:**
   - Drag `build` folder to [netlify.com/drop](https://app.netlify.com/drop)
   - Or use Netlify CLI

## Environment Variables

### Backend
Create `.env` file:
```
PORT=8000
CORS_ORIGINS=*
```

### Dashboard
Create `.env` file:
```
REACT_APP_API_URL=https://your-backend.com
```

## Security Considerations

### For Production:

1. **Add authentication:**
   - User accounts
   - API keys
   - Rate limiting

2. **Update CORS:**
```python
# In backend/main.py
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://your-dashboard.com", "chrome-extension://*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

3. **Add HTTPS:**
   - Most cloud providers include this
   - Required for Chrome Web Store

4. **Add database:**
   - PostgreSQL for persistent storage
   - Redis for caching

## Cost Estimates

### Free Tier Options:
- Railway: 500 hours/month free
- Render: 750 hours/month free
- Vercel: Unlimited for personal projects
- Netlify: 100GB bandwidth/month

### Paid Options:
- Railway: $5/month for hobby plan
- Render: $7/month for starter
- Heroku: $7/month for basic dyno

## Monitoring

### Check Backend Health:
```bash
curl https://your-backend.com/stats
```

### Check Extension:
- Open Chrome DevTools (F12)
- Look for "🌍 EcoTrace" logs
- Check Network tab for API calls

## Troubleshooting

### Extension can't connect to backend:
- Check backend is deployed and running
- Verify API_URL in content.js
- Check CORS settings
- Look for errors in browser console

### Backend not responding:
- Check deployment logs
- Verify environment variables
- Test with curl or Postman
- Check rate limits

## Quick Deploy Checklist

- [ ] Backend deployed to cloud
- [ ] Backend URL updated in extension
- [ ] Extension tested with cloud backend
- [ ] Extension packaged as zip
- [ ] Screenshots prepared
- [ ] Chrome Web Store listing created
- [ ] Extension submitted for review
- [ ] Dashboard deployed (optional)
- [ ] Documentation updated

## Support

After deployment:
- Monitor error logs
- Track usage metrics
- Collect user feedback
- Plan feature updates

---

**Need help? Check FAQ.md or ARCHITECTURE.md for more details!**
