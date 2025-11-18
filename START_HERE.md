# 🚀 START HERE - EcoTrace Quick Start

Welcome to EcoTrace! This is your 5-minute guide to get up and running.

## 📋 What You Need

- ✅ Python 3.8+ installed
- ✅ Node.js 16+ installed
- ✅ Chrome or Edge browser
- ✅ 10 minutes of time

## 🎯 Three Simple Steps

### Step 1: Start the Backend (2 minutes)

Open a terminal and run:

```bash
cd backend
pip install -r requirements.txt
python main.py
```

You should see: `🌍 EcoTrace Backend starting on http://localhost:8000`

**Keep this terminal open!**

---

### Step 2: Start the Dashboard (2 minutes)

Open a **new** terminal and run:

```bash
cd dashboard
npm install
npm start
```

Your browser will open to http://localhost:3000

**Keep this terminal open too!**

---

### Step 3: Install the Extension (1 minute)

1. Open Chrome or Edge
2. Go to `chrome://extensions/`
3. Turn on "Developer mode" (top right toggle)
4. Click "Load unpacked"
5. Select the `extension` folder from this project
6. You should see the EcoTrace icon appear!

---

## 🎉 Test It Out!

1. Go to https://chat.openai.com (or Claude, Gemini)
2. Type any prompt: "Hello, how are you?"
3. Press Enter
4. Wait 3-5 seconds
5. **Look for the notification in the top-right corner!** 🎊

You should see:
- ⚡ Energy (Wh)
- 🌫️ Carbon (gCO₂e)
- 💧 Water (mL)
- 💡 A green tip

## 📊 Check Your Dashboard

Switch to the dashboard tab (http://localhost:3000) and you'll see:
- Your total footprint
- A chart of your prompts
- Green tips for reducing impact

## 🎬 Try This Demo

1. **Short prompt**: "Hi" → See low footprint
2. **Long prompt**: "Write a 500-word essay about climate change" → See higher footprint
3. **Compare**: Notice the difference!

## ❓ Something Not Working?

### Backend won't start?
```bash
# Make sure Python is installed
python --version

# Try upgrading pip
pip install --upgrade pip
```

### Dashboard won't start?
```bash
# Make sure Node.js is installed
node --version

# Try clearing cache
cd dashboard
rm -rf node_modules
npm install
```

### Extension not detecting prompts?
1. Refresh the AI website
2. Check the extension is enabled
3. Press F12 and look for errors in console

### Still stuck?
Check **[FAQ.md](FAQ.md)** for detailed troubleshooting!

## 📚 What's Next?

### Want to demo this?
→ Read **[DEMO_SCRIPT.md](DEMO_SCRIPT.md)**

### Want to understand how it works?
→ Read **[ARCHITECTURE.md](ARCHITECTURE.md)**

### Want to customize it?
→ Read **[CONTRIBUTING.md](CONTRIBUTING.md)**

### Want quick commands?
→ Read **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)**

### Want everything?
→ Read **[INDEX.md](INDEX.md)** for complete navigation

## 🎯 Quick Commands Reference

**Start everything (Windows):**
```bash
start.bat
```

**Start everything (Mac/Linux):**
```bash
chmod +x start.sh
./start.sh
```

**Test the API:**
```bash
cd backend
python test_api.py
```

**Check if backend is running:**
Open http://localhost:8000/stats in your browser

## 💡 Pro Tips

1. **Keep both terminals open** - Backend and dashboard need to run simultaneously
2. **Refresh AI sites** - After installing the extension, refresh ChatGPT/Claude
3. **Wait for notifications** - They appear 3-5 seconds after the AI responds
4. **Check the dashboard** - It updates every 5 seconds automatically
5. **Try different prompt lengths** - See how footprint scales!

## 🎊 You're Ready!

That's it! You now have:
- ✅ A working browser extension
- ✅ A live backend API
- ✅ A real-time dashboard
- ✅ Environmental impact tracking

**Go submit some prompts and watch your footprint!** 🌍💚

---

## 📞 Need Help?

- **Quick fixes**: [QUICK_REFERENCE.md](QUICK_REFERENCE.md)
- **Common questions**: [FAQ.md](FAQ.md)
- **Detailed setup**: [SETUP.md](SETUP.md)
- **All docs**: [INDEX.md](INDEX.md)

## 🎬 Ready to Demo?

Once you've tested it and everything works:
1. Read [DEMO_SCRIPT.md](DEMO_SCRIPT.md)
2. Follow [TESTING.md](TESTING.md) checklist
3. Record using [VIDEO_GUIDE.md](VIDEO_GUIDE.md)

## 🌟 Share Your Experience!

EcoTrace is about raising awareness. Once you've tried it:
- Share with friends
- Demo to your team
- Post on social media
- Contribute improvements

**Let's make AI sustainable together!** 🌍💚

---

**Total setup time: ~5 minutes**
**Total demo time: ~60 seconds**
**Total impact: Priceless** ✨
