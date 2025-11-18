# EcoTrace Quick Reference

## 🚀 Start Everything

**Windows:**
```bash
start.bat
```

**Mac/Linux:**
```bash
chmod +x start.sh
./start.sh
```

**Manual:**
```bash
# Terminal 1 - Backend
cd backend && python main.py

# Terminal 2 - Dashboard
cd dashboard && npm start
```

## 🔗 URLs

- Backend API: http://localhost:8000
- Dashboard: http://localhost:3000
- API Docs: http://localhost:8000/docs
- Extension: chrome://extensions/

## 📡 API Endpoints

### Calculate Footprint
```bash
POST http://localhost:8000/calculate
{
  "model": "gpt-3.5",
  "prompt_tokens": 50,
  "response_tokens": 200
}
```

### Get Stats
```bash
GET http://localhost:8000/stats
```

## 🧮 Formulas

```
Energy (Wh) = (total_tokens / 1000) × model_rate
Carbon (gCO₂e) = energy × 0.5
Water (mL) = energy × 0.5
Tokens ≈ text_length / 4
```

## 🎯 Model Energy Rates

| Model | Wh per 1000 tokens |
|-------|-------------------|
| GPT-4 | 0.5 |
| GPT-3.5 | 0.3 |
| Claude | 0.4 |
| Gemini | 0.35 |

## 🌱 Green Tips Logic

| Condition | Tip |
|-----------|-----|
| tokens > 2000 | "Try shorter prompts - save 50%" |
| model = GPT-4 | "Use GPT-3.5 for simple tasks - 40% less" |
| tokens > 1000 | "Break into smaller queries" |
| else | "Great! Low footprint" |

## 🎬 Demo Prompts

**Short (low footprint):**
- "Write a haiku about trees"
- "Define recursion"

**Long (high footprint):**
- "Write a 500-word essay on climate change"
- "Explain quantum computing with examples"

## 🐛 Quick Fixes

**Backend won't start?**
```bash
pip install --upgrade fastapi uvicorn pydantic
```

**Dashboard won't start?**
```bash
cd dashboard
rm -rf node_modules package-lock.json
npm install
```

**Extension not working?**
1. Refresh AI website
2. Check extension is enabled
3. Look for errors in console (F12)

**CORS errors?**
- Backend must be running
- Check `allow_origins=["*"]` in main.py

## 📊 Expected Values

**Typical prompt (100 tokens):**
- Energy: ~0.03 Wh
- Carbon: ~0.015 gCO₂e
- Water: ~0.015 mL

**Long prompt (1000 tokens):**
- Energy: ~0.3 Wh
- Carbon: ~0.15 gCO₂e
- Water: ~0.15 mL

## 🎨 Color Scheme

- Primary: #667eea (purple-blue)
- Secondary: #764ba2 (purple)
- Gradient: 135deg from primary to secondary
- Text: white
- Overlay: rgba(255,255,255,0.15)

## 📁 Key Files

```
backend/main.py          - API logic
extension/content.js     - Prompt detection
extension/popup.html     - Extension UI
dashboard/src/App.js     - Dashboard UI
```

## ⌨️ Keyboard Shortcuts

- **F12**: Open browser console
- **Ctrl+C**: Stop backend/dashboard
- **Ctrl+Shift+R**: Hard refresh dashboard

## 🔍 Debugging

**Check backend logs:**
```bash
cd backend
python main.py
# Watch terminal output
```

**Check extension logs:**
1. Open chrome://extensions/
2. Click "Inspect views: service worker"
3. Check console

**Check API manually:**
```bash
curl http://localhost:8000/stats
```

## 📈 Success Metrics

- ✅ Notification appears <5s after prompt
- ✅ Dashboard updates <10s
- ✅ No console errors
- ✅ Smooth animations
- ✅ Accurate calculations

## 🎯 Demo Checklist

- [ ] Backend running
- [ ] Dashboard open
- [ ] Extension installed
- [ ] ChatGPT tab ready
- [ ] Test prompts prepared
- [ ] No errors in console

## 💡 Pro Tips

1. **Pre-load data**: Submit 3-4 prompts before demo
2. **Keep dashboard visible**: Shows real-time updates
3. **Use short prompts first**: Show low footprint
4. **Then use long prompt**: Dramatic comparison
5. **Highlight tips**: Show actionable advice
6. **Pin extension**: Make icon visible in toolbar

## 🚨 Emergency Fixes

**Everything broken?**
```bash
# Kill all processes
# Windows: Ctrl+C in both terminals
# Mac/Linux: killall python node

# Restart fresh
cd backend && python main.py &
cd dashboard && npm start
```

**Extension disappeared?**
1. chrome://extensions/
2. Click "Load unpacked"
3. Select extension folder again

**Dashboard blank?**
- Check backend is running
- Check http://localhost:8000/stats in browser
- Look for CORS errors in console

## 📞 Support

Check these files for more details:
- SETUP.md - Detailed setup instructions
- TESTING.md - Complete test checklist
- DEMO_SCRIPT.md - Presentation guide
- ARCHITECTURE.md - Technical details
