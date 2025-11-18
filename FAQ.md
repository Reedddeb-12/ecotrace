# EcoTrace - Frequently Asked Questions

## General Questions

### What is EcoTrace?
EcoTrace is a browser extension that tracks the energy, carbon, and water footprint of AI prompts in real-time. It helps make AI's environmental impact visible and actionable.

### How accurate are the calculations?
The prototype uses research-based estimates and token approximation. For production use, integration with actual AI APIs would provide more accurate measurements.

### Does it slow down AI responses?
No. EcoTrace calculates footprints after the AI response is complete, so there's zero impact on response time.

### What AI platforms does it support?
Currently: ChatGPT, Claude, and Gemini. The extension can be easily extended to support other platforms.

### Is my data private?
Yes. EcoTrace never stores your prompt text. It only tracks token counts and calculated footprints.

## Setup Questions

### What do I need to install?
- Python 3.8+ (for backend)
- Node.js 16+ (for dashboard)
- Chrome or Edge browser (for extension)

### How long does setup take?
About 5-6 minutes total:
- Backend: 2 minutes
- Dashboard: 3 minutes
- Extension: 1 minute

### Can I use Firefox or Safari?
The current extension is built for Chrome/Edge (Manifest V3). Firefox and Safari versions would require minor modifications to the manifest.json file.

### Do I need an API key?
No. This prototype doesn't connect to external APIs. It uses local calculations based on token estimates.

## Technical Questions

### How does token estimation work?
The extension uses a simple heuristic: approximately 4 characters per token. This is based on industry standards for English text.

### Where is data stored?
Currently in-memory on the backend. Data resets when you restart the server. For production, you'd use a database like PostgreSQL.

### Can I export my data?
Not in the current prototype, but this would be easy to add. The `/stats` endpoint returns all data in JSON format.

### How are energy rates determined?
Based on published research:
- GPT-4: ~0.5 Wh per 1000 tokens
- GPT-3.5: ~0.3 Wh per 1000 tokens
- Claude: ~0.4 Wh per 1000 tokens
- Gemini: ~0.35 Wh per 1000 tokens

### What's the carbon calculation?
Carbon = Energy × 0.5 gCO₂e/Wh (global average grid intensity)

### What's the water calculation?
Water = Energy × 0.5 mL/Wh (data center cooling estimates)

## Troubleshooting

### Extension not detecting prompts?
1. Refresh the AI website after installing the extension
2. Check that the extension is enabled in chrome://extensions/
3. Look for errors in the browser console (F12)
4. Verify you're on a supported site (ChatGPT, Claude, Gemini)

### Notification not appearing?
1. Check that the backend is running on port 8000
2. Look for CORS errors in the browser console
3. Try submitting another prompt
4. Check extension console for errors

### Dashboard showing zeros?
1. Ensure backend is running
2. Submit at least one prompt
3. Wait 5-10 seconds for refresh
4. Check browser console for fetch errors
5. Verify http://localhost:8000/stats returns data

### Backend won't start?
```bash
# Reinstall dependencies
pip install --upgrade -r requirements.txt

# Check Python version
python --version  # Should be 3.8+

# Try running directly
python backend/main.py
```

### Dashboard won't start?
```bash
# Clear and reinstall
cd dashboard
rm -rf node_modules package-lock.json
npm install
npm start
```

### CORS errors?
Make sure the backend is running and has CORS enabled. Check `main.py` for:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    ...
)
```

### Port already in use?
```bash
# Windows - Kill process on port 8000
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:8000 | xargs kill -9
```

## Feature Questions

### Can I track multiple users?
Not in the current prototype. You'd need to add user authentication and separate data storage per user.

### Can I set goals or limits?
Not yet, but this would be a great feature! You could add alerts when daily footprint exceeds a threshold.

### Can I compare with others?
Not currently, but a leaderboard feature would be straightforward to add.

### Can I offset my carbon?
Not built-in, but the dashboard could link to carbon offset providers based on your total emissions.

### Can I track specific projects?
Not yet. You'd need to add tagging or categorization features.

### Can I see historical data?
The dashboard shows recent history, but data resets on server restart. Add a database for persistent history.

## Customization Questions

### Can I change the colors?
Yes! Edit the CSS files:
- Extension: `extension/popup.html` (inline styles)
- Dashboard: `dashboard/src/App.css` and `dashboard/src/index.css`

### Can I add more models?
Yes! Edit `backend/main.py` and add to the `MODEL_ENERGY` dictionary:
```python
MODEL_ENERGY = {
    "your-model": 0.4,  # Wh per 1000 tokens
    ...
}
```

### Can I change the notification duration?
Yes! Edit `extension/content.js`:
```javascript
setTimeout(() => {
  notification.remove();
}, 5000);  // Change 5000 to desired milliseconds
```

### Can I disable notifications?
Edit `extension/content.js` and comment out the `showNotification()` call. The data will still be tracked.

## Deployment Questions

### Can I deploy this to production?
Yes, but you'd want to:
1. Add a real database (PostgreSQL, MongoDB)
2. Add user authentication
3. Use environment variables for configuration
4. Add proper error handling and logging
5. Implement rate limiting
6. Add HTTPS
7. Publish extension to Chrome Web Store

### How do I publish the extension?
1. Create a developer account on Chrome Web Store
2. Package the extension as a .zip file
3. Upload and fill out the listing
4. Pay the one-time $5 developer fee
5. Wait for review (usually 1-3 days)

### Can I host the backend on Heroku/AWS?
Yes! The FastAPI backend can be deployed to:
- Heroku (with Procfile)
- AWS Lambda (with Mangum adapter)
- Google Cloud Run
- DigitalOcean App Platform
- Any VPS with Python support

### What about the dashboard?
The React dashboard can be deployed to:
- Vercel (easiest)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## Performance Questions

### How much memory does it use?
- Backend: ~30-50 MB
- Dashboard: ~50-100 MB
- Extension: ~5-10 MB

### How many prompts can it track?
Currently unlimited, but stored in memory. For production, you'd want to:
- Paginate history
- Archive old data
- Set retention policies

### Does it work offline?
No. The extension needs to communicate with the backend API. You could add offline support with service workers and local storage.

### Can it handle multiple tabs?
Yes. Each tab with the extension will independently track prompts and send to the backend.

## Comparison Questions

### How is this different from carbon calculators?
EcoTrace is real-time and automatic. Traditional calculators require manual input and don't integrate with your workflow.

### Why not just use the AI provider's data?
Most AI providers don't expose environmental metrics. EcoTrace makes this visible regardless of provider.

### Is this better than just using less AI?
EcoTrace helps you use AI more efficiently, not necessarily less. It's about informed choices.

## Future Questions

### What features are planned?
- Real API integration
- User accounts
- Historical analytics
- Carbon offset integration
- Team dashboards
- Mobile app
- More AI platforms

### Can I contribute?
Yes! This is a prototype, but contributions are welcome:
- Add support for more AI platforms
- Improve token estimation
- Add new visualizations
- Improve documentation
- Report bugs

### Will this be open source?
That's up to you! The prototype is ready to be open-sourced if desired.

### Can I use this for my company?
Yes! You'd want to add:
- Multi-user support
- Team dashboards
- Admin controls
- SSO integration
- Custom branding

## Contact & Support

### Where can I get help?
- Check SETUP.md for detailed instructions
- Review TESTING.md for troubleshooting steps
- Read QUICK_REFERENCE.md for common tasks
- Check ARCHITECTURE.md for technical details

### How do I report a bug?
Document:
1. What you were doing
2. What you expected
3. What actually happened
4. Browser console errors (F12)
5. Backend terminal output

### How do I request a feature?
Describe:
1. The feature you want
2. Why it would be useful
3. How you imagine it working
4. Any examples from other tools

## Credits

### Research Sources
- Energy estimates based on published AI research
- Carbon intensity from global grid averages
- Water usage from data center studies

### Technologies Used
- FastAPI (backend framework)
- React (dashboard framework)
- Recharts (data visualization)
- Chrome Extension API (browser integration)

---

**Still have questions? Check the other documentation files or experiment with the code!**
