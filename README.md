```
 _____ ____  ___ _____ ____      _    ____ _____ 
| ____/ ___|/ _ \_   _|  _ \    / \  / ___| ____|
|  _|| |   | | | || | | |_) |  / _ \| |   |  _|  
| |__| |___| |_| || | |  _ <  / ___ \ |___| |___ 
|_____\____|\___/ |_| |_| \_\/_/   \_\____|_____|
```

# 🌍 EcoTrace - AI Footprint Tracker

**Track the energy, carbon, and water footprint of every AI prompt in real time.**

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

A fast, functional prototype that makes AI's environmental impact visible and actionable.

## ✨ Features

- 🔄 **Real-time Tracking** - See energy (Wh), carbon (gCO₂e), and water (mL) for every prompt
- 🤖 **Auto-Detection** - Works on ChatGPT, Claude, Gemini automatically
- 📊 **Live Dashboard** - Charts and totals update in real-time
- 💡 **Green Tips** - Actionable suggestions to reduce your footprint
- 🔒 **Privacy-First** - No prompt text stored, only token counts

## 🚀 Quick Deploy (5 minutes)

### Deploy Backend

**Option 1: Render.com (Recommended)**

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

Or manually:
1. Fork this repo
2. Go to [Render.com](https://render.com)
3. New Web Service → Connect your repo
4. Root Directory: `backend`
5. Build: `pip install -r requirements.txt`
6. Start: `uvicorn main:app --host 0.0.0.0 --port $PORT`
7. Deploy!

**Option 2: Railway.app**

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/YOUR_USERNAME/ecotrace)

**Option 3: Heroku**

```bash
cd backend
heroku create ecotrace-backend
git push heroku main
```

### Install Extension

1. Clone this repo
2. Update `extension/content.js` with your backend URL
3. Go to `chrome://extensions/`
4. Enable "Developer mode"
5. Click "Load unpacked" → Select `extension` folder
6. Visit ChatGPT and test!

## 📖 Documentation

- **[Quick Start Guide](START_HERE.md)** - Get running in 5 minutes
- **[Deployment Guide](README_DEPLOY.md)** - Deploy to production
- **[Setup Guide](SETUP.md)** - Detailed local setup
- **[Demo Script](DEMO_SCRIPT.md)** - Present EcoTrace
- **[Architecture](ARCHITECTURE.md)** - Technical details
- **[FAQ](FAQ.md)** - Common questions

## 🏗️ Project Structure

```
ecotrace/
├── backend/              # FastAPI server
│   ├── main.py          # API + calculations
│   ├── requirements.txt # Dependencies
│   └── Procfile         # Deployment config
├── extension/           # Browser extension
│   ├── manifest.json    # Extension config
│   ├── content.js       # Prompt detection
│   ├── popup.html       # Extension popup
│   └── popup.js         # Popup logic
├── dashboard/           # React dashboard
│   └── src/
│       ├── App.js       # Main component
│       └── App.css      # Styling
└── docs/               # Documentation
```

## 🎯 How It Works

```
User submits prompt → Extension detects → Estimates tokens → 
Backend calculates footprint → Shows notification → Updates dashboard
```

**Calculation Formula:**
- Energy = (tokens / 1000) × model_energy_rate
- Carbon = energy × 0.5 gCO₂e/Wh
- Water = energy × 0.5 mL/Wh

## 🛠️ Tech Stack

- **Backend**: FastAPI, Python 3.8+
- **Frontend**: React 18, Recharts
- **Extension**: Vanilla JS, Chrome Extension API
- **Styling**: CSS gradients, backdrop filters

## 🧪 Local Development

### Backend
```bash
cd backend
pip install -r requirements.txt
python main.py
```
Server runs on http://localhost:8000

### Dashboard
```bash
cd dashboard
npm install
npm start
```
Dashboard opens at http://localhost:3000

### Extension
1. Load unpacked in `chrome://extensions/`
2. Select `extension` folder
3. Visit ChatGPT and test

## 📊 Supported AI Platforms

- ✅ ChatGPT (chat.openai.com, chatgpt.com)
- ✅ Claude (claude.ai)
- ✅ Google Gemini (gemini.google.com)

## 🌱 Green Tips Implemented

- Suggests shorter prompts (50% reduction)
- Recommends smaller models (40% less energy)
- Encourages batching queries
- Real-time feedback on footprint

## 📈 Roadmap

- [ ] Real API integration (OpenAI, Anthropic)
- [ ] User authentication
- [ ] Persistent database (PostgreSQL)
- [ ] Historical analytics
- [ ] Carbon offset marketplace
- [ ] Team dashboards
- [ ] Mobile app
- [ ] Firefox/Safari support

## 🤝 Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md)

1. Fork the repo
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open Pull Request

## 📝 License

MIT License - see [LICENSE](LICENSE) file

## 🙏 Acknowledgments

- Energy estimates based on published AI research
- Carbon intensity from global grid averages
- Water usage from data center studies

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/YOUR_USERNAME/ecotrace/issues)
- **Discussions**: [GitHub Discussions](https://github.com/YOUR_USERNAME/ecotrace/discussions)
- **Documentation**: Check the `docs/` folder

## 🌟 Star History

If you find EcoTrace useful, please star the repo! ⭐

---

**Made with 💚 for a sustainable AI future**

Built in <48 hours as a prototype for environmental awareness.
