# EcoTrace Setup Guide

## Prerequisites
- Python 3.8+
- Node.js 16+
- Chrome or Edge browser

## Step 1: Backend Setup (2 minutes)

```bash
cd backend
pip install -r requirements.txt
python main.py
```

Backend will run on http://localhost:8000

## Step 2: Dashboard Setup (3 minutes)

```bash
cd dashboard
npm install
npm start
```

Dashboard will open at http://localhost:3000

## Step 3: Browser Extension (1 minute)

1. Open Chrome/Edge
2. Go to `chrome://extensions/`
3. Enable "Developer mode" (top right)
4. Click "Load unpacked"
5. Select the `extension` folder
6. Pin the extension to your toolbar

## Testing the Demo

1. Visit https://chat.openai.com or https://claude.ai
2. Submit any prompt
3. Watch for the EcoTrace notification (top-right corner)
4. Click the extension icon to see details
5. View the dashboard for cumulative stats

## Demo Flow

1. **Submit a prompt** → "Explain quantum computing in 100 words"
2. **See notification** → Energy: 0.15 Wh, Carbon: 0.08 gCO₂e, Water: 0.08 mL
3. **Check popup** → Click extension icon for last calculation
4. **View dashboard** → See totals and charts update in real-time

## Quick Demo Script

```
1. Open ChatGPT
2. Type: "Write a haiku about AI"
3. Submit and watch the notification appear
4. Open dashboard to see the footprint added
5. Try a longer prompt to see higher footprint
6. Notice the green tips suggesting optimizations
```

## Troubleshooting

**Extension not detecting prompts?**
- Refresh the AI website after installing extension
- Check console for errors (F12)

**Backend connection failed?**
- Ensure backend is running on port 8000
- Check CORS is enabled

**Dashboard not updating?**
- Backend must be running
- Check browser console for fetch errors

## Demo Video Tips

1. Show the extension installation (10 sec)
2. Submit a short prompt, show notification (15 sec)
3. Submit a long prompt, compare footprints (15 sec)
4. Show dashboard with charts (20 sec)
5. Highlight green tips feature (10 sec)

Total: ~70 seconds for a punchy demo!
