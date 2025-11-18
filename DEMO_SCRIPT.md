# EcoTrace Demo Script

## 30-Second Pitch

"EcoTrace shows you the environmental cost of every AI prompt. Energy, carbon, water - all calculated in real-time. It's like a fitness tracker, but for your AI usage."

## Live Demo (60 seconds)

### Setup (Pre-demo)
- Backend running
- Dashboard open in one tab
- ChatGPT open in another tab
- Extension installed and visible

### Demo Flow

**[0:00-0:10] The Problem**
"Every AI prompt uses energy, emits carbon, and consumes water. But we never see it."

**[0:10-0:25] The Solution**
1. Type in ChatGPT: "Explain machine learning"
2. Submit
3. Point to notification appearing: "There! 0.2 Wh, 0.1g CO₂, 0.1 mL water"

**[0:25-0:40] The Dashboard**
1. Switch to dashboard tab
2. Show the stats updating
3. Point to chart: "Every prompt tracked"

**[0:40-0:55] The Impact**
1. Type longer prompt: "Write a detailed essay about climate change"
2. Show higher footprint
3. Point to green tip: "Use shorter prompts - save 50%"

**[0:55-1:00] The Call**
"Make your AI usage visible. Make it sustainable. Try EcoTrace."

## Key Talking Points

✅ **Real-time tracking** - See impact instantly
✅ **No data stored** - Privacy-first design
✅ **Actionable tips** - Reduce footprint immediately
✅ **Works everywhere** - ChatGPT, Claude, Gemini

## Demo Prompts (Use These)

**Short prompt (low footprint):**
- "Write a haiku about trees"
- "Define recursion"

**Long prompt (high footprint):**
- "Write a detailed 500-word essay about renewable energy"
- "Explain quantum computing with examples and code"

**Comparison:**
Show how the long prompt uses 3-5x more resources

## Technical Highlights

- **Browser Extension**: Auto-detects AI sites
- **FastAPI Backend**: <100 lines of code
- **React Dashboard**: Real-time updates
- **Simple Math**: Token count × energy rate

## Questions to Anticipate

**Q: How accurate is this?**
A: "It's a prototype using research-based estimates. Production version would use actual API data."

**Q: Does it slow down AI responses?**
A: "No, calculations happen after the response. Zero impact on speed."

**Q: What about privacy?**
A: "We never store prompt text. Only token counts and footprints."

## Next Steps Pitch

"This is a 48-hour prototype. Imagine:
- Integration with OpenAI/Anthropic APIs
- Team dashboards for organizations
- Carbon offset suggestions
- Gamification - compete for lowest footprint"
