# EcoTrace Testing Checklist

## Pre-Demo Checklist

### Backend ✓
- [ ] Install dependencies: `pip install -r requirements.txt`
- [ ] Start server: `python main.py`
- [ ] Verify running: http://localhost:8000
- [ ] Test API: `python test_api.py`
- [ ] Check CORS enabled (no errors in browser console)

### Dashboard ✓
- [ ] Install dependencies: `npm install`
- [ ] Start dashboard: `npm start`
- [ ] Verify opens: http://localhost:3000
- [ ] Check initial state (zeros displayed)
- [ ] Verify gradient background loads

### Extension ✓
- [ ] Open `chrome://extensions/`
- [ ] Enable Developer mode
- [ ] Load unpacked → select `extension` folder
- [ ] Verify icon appears in toolbar
- [ ] Check no errors in extension console

## Functional Testing

### Test 1: Basic Flow
1. Open ChatGPT (https://chat.openai.com)
2. Type: "Hello, how are you?"
3. Press Enter
4. **Expected**: Notification appears in 3-5 seconds
5. **Verify**: Shows Energy, Carbon, Water values
6. **Verify**: Green tip displayed

### Test 2: Extension Popup
1. Click EcoTrace extension icon
2. **Expected**: Popup shows last calculation
3. **Verify**: Values match notification
4. Click "View Dashboard" button
5. **Expected**: Opens dashboard in new tab

### Test 3: Dashboard Updates
1. Keep dashboard open
2. Submit prompt on ChatGPT
3. Wait 5-10 seconds
4. **Expected**: Dashboard totals increase
5. **Expected**: Chart shows new data point
6. **Verify**: Prompt counter increments

### Test 4: Different Prompt Sizes
1. Short prompt: "Hi" → Low footprint (~0.05 Wh)
2. Medium prompt: "Explain AI" → Medium (~0.15 Wh)
3. Long prompt: "Write 500 words about climate" → High (~0.5+ Wh)
4. **Verify**: Footprint scales with length
5. **Verify**: Tips change based on size

### Test 5: Multiple Prompts
1. Submit 3-5 prompts in succession
2. **Expected**: Each shows notification
3. **Expected**: Dashboard accumulates totals
4. **Expected**: Chart shows all data points
5. **Verify**: No duplicate calculations

### Test 6: API Endpoints
```bash
# Test calculate endpoint
curl -X POST http://localhost:8000/calculate \
  -H "Content-Type: application/json" \
  -d '{"model":"gpt-3.5","prompt_tokens":50,"response_tokens":200}'

# Test stats endpoint
curl http://localhost:8000/stats
```

**Expected**: Valid JSON responses

## Edge Cases

### Test 7: Very Short Prompt
- Input: "Hi"
- **Expected**: Still calculates (minimum values)
- **Expected**: Tip suggests it's efficient

### Test 8: Very Long Prompt
- Input: 1000+ character prompt
- **Expected**: Higher footprint
- **Expected**: Tip suggests shorter prompts

### Test 9: Rapid Submissions
- Submit 3 prompts quickly (within 10 seconds)
- **Expected**: All tracked separately
- **Expected**: No crashes or errors

### Test 10: Backend Restart
1. Stop backend (Ctrl+C)
2. Restart: `python main.py`
3. **Expected**: History resets (in-memory)
4. **Expected**: New prompts tracked correctly

## Browser Compatibility

### Chrome
- [ ] Extension loads
- [ ] Notifications appear
- [ ] Popup works
- [ ] Dashboard displays correctly

### Edge
- [ ] Extension loads
- [ ] Notifications appear
- [ ] Popup works
- [ ] Dashboard displays correctly

## AI Site Compatibility

### ChatGPT (chat.openai.com)
- [ ] Detects prompts
- [ ] Calculates footprint
- [ ] Shows notification

### Claude (claude.ai)
- [ ] Detects prompts
- [ ] Calculates footprint
- [ ] Shows notification

### Gemini (gemini.google.com)
- [ ] Detects prompts
- [ ] Calculates footprint
- [ ] Shows notification

## Performance Testing

### Response Times
- [ ] Backend API: <50ms
- [ ] Notification appears: <5 seconds after response
- [ ] Dashboard updates: <10 seconds
- [ ] Extension popup: <100ms to open

### Resource Usage
- [ ] Backend memory: <50MB
- [ ] Extension memory: <10MB
- [ ] Dashboard memory: <100MB
- [ ] No memory leaks after 10+ prompts

## Visual Testing

### Notification
- [ ] Appears in top-right corner
- [ ] Gradient background visible
- [ ] All values displayed clearly
- [ ] Tip text readable
- [ ] Disappears after 5 seconds
- [ ] Smooth slide-in animation

### Dashboard
- [ ] Gradient background loads
- [ ] All 4 stat cards visible
- [ ] Chart renders correctly
- [ ] Tips section displays
- [ ] Responsive on different screen sizes

### Popup
- [ ] Gradient background
- [ ] Values clearly visible
- [ ] Button clickable
- [ ] Proper sizing (320px width)

## Error Handling

### Backend Down
1. Stop backend
2. Submit prompt
3. **Expected**: Error in console (graceful failure)
4. **Expected**: No browser crash

### Network Error
1. Disconnect internet
2. Submit prompt
3. **Expected**: Timeout error
4. **Expected**: Extension continues working

### Invalid Data
1. Send malformed request to API
2. **Expected**: 422 validation error
3. **Expected**: Helpful error message

## Demo Readiness

### Final Checks
- [ ] All services running
- [ ] No console errors
- [ ] Test prompts prepared
- [ ] Dashboard showing data
- [ ] Extension icon visible
- [ ] Browser tabs organized
- [ ] Screen recording ready

### Demo Script Ready
- [ ] 30-second pitch memorized
- [ ] Test prompts bookmarked
- [ ] Talking points reviewed
- [ ] Backup plan if demo fails

## Known Limitations (Document These)

1. **Token estimation**: ~4 chars/token (not exact)
2. **Response detection**: 3-second delay (heuristic)
3. **Storage**: In-memory only (resets on restart)
4. **Sites**: Limited to ChatGPT, Claude, Gemini
5. **Accuracy**: Research-based estimates (not API data)

## Success Criteria

✅ Extension detects prompts automatically
✅ Calculations complete in <5 seconds
✅ Dashboard updates in real-time
✅ No crashes or errors during demo
✅ Visual design is polished
✅ Green tips are relevant
✅ Flow is smooth and intuitive

## Troubleshooting Guide

**Notification not appearing?**
- Refresh AI website
- Check backend is running
- Check browser console for errors
- Verify extension is enabled

**Dashboard not updating?**
- Check backend is running on port 8000
- Check CORS errors in console
- Verify fetch requests succeeding
- Try manual refresh

**Extension not loading?**
- Check manifest.json is valid
- Verify all files present
- Check extension errors in chrome://extensions
- Try removing and re-adding extension

**API errors?**
- Check backend logs
- Verify request format
- Test with curl/Postman
- Check CORS configuration
