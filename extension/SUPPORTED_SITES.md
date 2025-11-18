 # EcoTrace - Supported AI Sites

## Currently Supported

EcoTrace currently works on these AI chat platforms:

✅ **ChatGPT**
- chat.openai.com
- chatgpt.com

✅ **Claude**
- claude.ai

✅ **Google Gemini**
- gemini.google.com
- bard.google.com

## Why Only These Sites?

The extension is configured to ONLY run on AI chat sites to:
- Avoid unnecessary resource usage
- Protect your privacy on other sites
- Focus on AI-specific tracking

## Add More Sites

To add support for other AI platforms, edit `manifest.json`:

```json
"content_scripts": [
  {
    "matches": [
      "*://chat.openai.com/*",
      "*://chatgpt.com/*",
      "*://claude.ai/*",
      "*://gemini.google.com/*",
      "*://your-new-site.com/*"  // Add here
    ],
    "js": ["content.js"],
    "run_at": "document_end"
  }
]
```

## Potential Sites to Add

Want to track these? Add them to the manifest:

- **Perplexity AI**: `*://perplexity.ai/*`
- **Poe**: `*://poe.com/*`
- **HuggingChat**: `*://huggingface.co/chat/*`
- **Bing Chat**: `*://bing.com/chat/*`
- **Character.AI**: `*://character.ai/*`

## Testing on New Sites

After adding a new site:
1. Reload the extension in `chrome://extensions/`
2. Visit the new site
3. Check browser console (F12) for "🌍 EcoTrace" logs
4. Submit a prompt and verify notification appears

## Privacy Note

The extension ONLY runs on sites you explicitly add to the manifest. It cannot access any other websites.
