# EcoTrace Architecture

## System Overview

```
┌─────────────────┐
│  Browser Site   │  (ChatGPT, Claude, etc.)
│  + Extension    │
└────────┬────────┘
         │ Detects prompt submission
         │ Estimates tokens
         │
         ▼
┌─────────────────┐
│  Content Script │  (content.js)
└────────┬────────┘
         │ POST /calculate
         │
         ▼
┌─────────────────┐
│  FastAPI Server │  (main.py)
│  Port 8000      │
└────────┬────────┘
         │ Calculates footprint
         │ Stores in memory
         │
         ├──────────────┐
         ▼              ▼
┌──────────────┐  ┌──────────────┐
│   Popup      │  │  Dashboard   │
│   Widget     │  │  (React)     │
└──────────────┘  └──────────────┘
```

## Component Details

### 1. Browser Extension

**Files:**
- `manifest.json` - Extension config
- `content.js` - Injected into AI sites
- `popup.html/js` - Extension popup UI

**Flow:**
1. Monitors textarea/input fields
2. Detects Enter key press
3. Estimates prompt tokens (~4 chars/token)
4. Waits for response completion
5. Estimates response tokens
6. Calls backend API
7. Shows floating notification

**Token Estimation:**
```javascript
tokens = Math.ceil(text.length / 4)
```

### 2. Backend API

**Endpoints:**

`POST /calculate`
- Input: model, prompt_tokens, response_tokens
- Output: energy_wh, carbon_gco2e, water_ml, tip
- Logic: tokens × energy_rate × conversion_factors

`GET /stats`
- Output: totals + history
- Storage: In-memory array (resets on restart)

**Calculation Formula:**
```python
energy_wh = (total_tokens / 1000) × model_energy_rate
carbon_gco2e = energy_wh × 0.5
water_ml = energy_wh × 0.5
```

**Model Energy Rates (Wh per 1000 tokens):**
- GPT-4: 0.5
- GPT-3.5: 0.3
- Claude: 0.4
- Gemini: 0.35

### 3. Dashboard

**Features:**
- Real-time stats (polls every 5s)
- Total counters (energy, carbon, water, prompts)
- Line chart showing footprint over time
- Green tips section

**Tech Stack:**
- React 18
- Recharts for visualization
- CSS gradients for styling

## Data Flow

```
User types prompt
    ↓
Extension detects submission
    ↓
Estimates tokens (prompt + response)
    ↓
POST to /calculate
    ↓
Backend calculates footprint
    ↓
Stores in history array
    ↓
Returns footprint + tip
    ↓
Extension shows notification
    ↓
Dashboard polls /stats
    ↓
Updates UI with new data
```

## Key Design Decisions

### Why token estimation?
- No access to actual API calls
- Good enough for demo purposes
- ~4 chars/token is industry standard

### Why in-memory storage?
- Fast and simple
- No database setup needed
- Perfect for 48-hour prototype
- Easy to replace with Redis/PostgreSQL later

### Why CORS enabled?
- Extension runs from chrome-extension:// origin
- Dashboard runs on localhost:3000
- Backend needs to accept both

### Why polling instead of WebSockets?
- Simpler implementation
- 5-second refresh is sufficient
- Less infrastructure complexity

## Scaling Considerations

**For Production:**

1. **Real API Integration**
   - Hook into OpenAI/Anthropic APIs
   - Get actual token counts
   - More accurate model detection

2. **Persistent Storage**
   - PostgreSQL for history
   - User accounts and authentication
   - Historical analytics

3. **Better Token Estimation**
   - Use tiktoken library
   - Model-specific tokenizers
   - Handle special tokens

4. **Enhanced Dashboard**
   - Date range filters
   - Export data (CSV/JSON)
   - Comparison with averages
   - Team/organization views

5. **Carbon Offset Integration**
   - Partner with offset providers
   - One-click offset purchase
   - Track offset history

## Performance

**Current:**
- Extension: <1ms overhead
- Backend: <10ms response time
- Dashboard: 5s polling interval
- Memory: ~1KB per prompt stored

**Bottlenecks:**
- In-memory storage (limited to RAM)
- No caching
- Polling creates unnecessary requests

**Optimizations:**
- Add Redis for caching
- WebSocket for real-time updates
- Batch API calls
- Compress history data
