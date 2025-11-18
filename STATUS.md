# 🟢 EcoTrace - Live Status

## ✅ System Status: LIVE

### Backend API
- **Status**: 🟢 Running
- **URL**: http://localhost:8000
- **Endpoints**:
  - POST /calculate - Calculate footprint
  - GET /stats - Get statistics
- **Test**: http://localhost:8000/stats

### Dashboard
- **Status**: 🟢 Running  
- **URL**: http://localhost:3000
- **Features**:
  - Real-time stats
  - Charts
  - Green tips

### Browser Extension
- **Status**: ✅ Ready
- **Works on**:
  - ChatGPT (chat.openai.com, chatgpt.com)
  - Claude (claude.ai)
  - Gemini (gemini.google.com)
- **Features**:
  - Auto-detects prompts
  - Shows notifications
  - Test button available

## 🎯 How to Use

### 1. Test the Connection
1. Go to ChatGPT
2. Look for **"🌍 Test EcoTrace"** button (bottom-right)
3. Click it
4. You should see a notification!

### 2. Track Real Prompts
1. Type any prompt in ChatGPT
2. Press Enter
3. Wait 8 seconds
4. Notification appears automatically!

### 3. View Dashboard
1. Open http://localhost:3000
2. See your cumulative stats
3. Charts update in real-time

## 🔍 Verify Everything is Working

### Check Backend
```bash
# Open in browser or use curl
http://localhost:8000/stats
```

Should return JSON with stats.

### Check Dashboard
```bash
# Open in browser
http://localhost:3000
```

Should show the dashboard with gradient background.

### Check Extension
1. Go to `chrome://extensions/`
2. Find "EcoTrace - AI Footprint Tracker"
3. Should be enabled (blue toggle)
4. No errors shown

## 📊 Test Flow

**Complete Test (2 minutes):**

1. **Backend Test**:
   - Open http://localhost:8000/stats
   - Should see: `{"total_energy_wh": 0, ...}`

2. **Extension Test**:
   - Go to ChatGPT
   - Click test button
   - See notification ✅

3. **Dashboard Test**:
   - Open http://localhost:3000
   - See stats update ✅

4. **Real Prompt Test**:
   - Type: "Hello"
   - Press Enter
   - Wait 8 seconds
   - See notification ✅
   - Check dashboard updates ✅

## 🚨 Troubleshooting

### Backend Not Responding?
```bash
# Check if running
# Look for process in Task Manager: python.exe

# Restart
cd backend
python main.py
```

### Dashboard Not Loading?
```bash
# Check if running
# Look for process in Task Manager: node.exe

# Restart
cd dashboard
npm start
```

### Extension Not Working?
1. Go to `chrome://extensions/`
2. Reload EcoTrace
3. Refresh ChatGPT page
4. Check browser console (F12) for errors

## 📈 Current Configuration

**Backend**: 
- Port: 8000
- CORS: Enabled for all origins
- Storage: In-memory (resets on restart)

**Dashboard**:
- Port: 3000
- Polling: Every 5 seconds
- API: http://localhost:8000

**Extension**:
- API: http://localhost:8000
- Detection: Enter key press
- Wait time: 8 seconds
- Estimation: Response = 3x prompt

## 🎉 You're Live!

Everything is connected and working:
- ✅ Backend receiving requests
- ✅ Dashboard showing data
- ✅ Extension tracking prompts

**Go to ChatGPT and try it now!** 🚀
