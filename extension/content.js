// EcoTrace - AI Footprint Tracker
console.log('EcoTrace: Content script loaded!');

const API_URL = 'https://ecotrace-1.onrender.com';

// Estimate tokens (rough: ~4 chars per token)
function estimateTokens(text) {
  return Math.ceil(text.length / 4);
}

// Detect model from URL
function detectModel() {
  const url = window.location.hostname;
  if (url.includes('openai') || url.includes('chatgpt')) return 'gpt-3.5';
  if (url.includes('claude')) return 'claude';
  if (url.includes('gemini') || url.includes('bard')) return 'gemini';
  return 'gpt-3.5';
}

// Show floating notification
function showNotification(footprint) {
  console.log('EcoTrace: Showing notification', footprint);
  
  const notification = document.createElement('div');
  notification.id = 'ecotrace-notification';
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 16px 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    z-index: 999999;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 14px;
    min-width: 250px;
    animation: slideIn 0.3s ease-out;
  `;
  
  notification.innerHTML = `
    <div style="font-weight: bold; margin-bottom: 8px; font-size: 16px;">🌍 EcoTrace</div>
    <div style="display: flex; justify-content: space-between; margin: 4px 0;">
      <span>⚡ Energy:</span>
      <strong>${footprint.energy_wh} Wh</strong>
    </div>
    <div style="display: flex; justify-content: space-between; margin: 4px 0;">
      <span>🌫️ Carbon:</span>
      <strong>${footprint.carbon_gco2e} gCO₂e</strong>
    </div>
    <div style="display: flex; justify-content: space-between; margin: 4px 0;">
      <span>💧 Water:</span>
      <strong>${footprint.water_ml} mL</strong>
    </div>
    <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.3); font-size: 12px;">
      ${footprint.tip}
    </div>
  `;
  
  // Remove old notification if exists
  const oldNotification = document.getElementById('ecotrace-notification');
  if (oldNotification) {
    oldNotification.remove();
  }
  
  document.body.appendChild(notification);
  
  // Store for popup
  try {
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.set({ lastFootprint: footprint });
    }
  } catch (e) {
    console.log('EcoTrace: Could not save to storage:', e);
  }
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s';
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(400px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`;
document.head.appendChild(style);

// Calculate and show footprint
async function calculateFootprint(promptTokens, responseTokens) {
  console.log('EcoTrace: Calculating footprint...', { promptTokens, responseTokens });
  
  try {
    const response = await fetch(`${API_URL}/calculate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: detectModel(),
        prompt_tokens: promptTokens,
        response_tokens: responseTokens
      })
    });
    
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }
    
    const footprint = await response.json();
    console.log('EcoTrace: Footprint calculated:', footprint);
    showNotification(footprint);
  } catch (error) {
    console.error('EcoTrace: Failed to calculate footprint', error);
    // Show demo notification
    showNotification({
      energy_wh: 0.2,
      carbon_gco2e: 0.1,
      water_ml: 0.1,
      tip: '⚠️ Backend not reachable. Using demo values.'
    });
  }
}

// Add test button
function addTestButton() {
  const testButton = document.createElement('button');
  testButton.textContent = '🌍 Test EcoTrace';
  testButton.id = 'ecotrace-test-button';
  testButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    z-index: 999998;
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  `;
  
  testButton.addEventListener('click', () => {
    console.log('EcoTrace: Test button clicked');
    calculateFootprint(50, 200);
  });
  
  // Remove old button if exists
  const oldButton = document.getElementById('ecotrace-test-button');
  if (oldButton) {
    oldButton.remove();
  }
  
  document.body.appendChild(testButton);
  console.log('EcoTrace: Test button added');
}

// Simple prompt detection - watches for Enter key
let lastPromptText = '';
let isWaitingForResponse = false;

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey && !isWaitingForResponse) {
    const target = e.target;
    
    if (target.tagName === 'TEXTAREA' || target.contentEditable === 'true') {
      const promptText = target.value || target.textContent || '';
      
      if (promptText.length > 10) {
        lastPromptText = promptText;
        isWaitingForResponse = true;
        console.log('EcoTrace: Prompt detected, waiting for response...');
        
        // Wait 8 seconds for response to complete
        setTimeout(() => {
          const promptTokens = estimateTokens(lastPromptText);
          // Estimate response as 3x prompt length (typical for AI responses)
          const responseTokens = promptTokens * 3;
          
          console.log('EcoTrace: Calculating with estimated response');
          calculateFootprint(promptTokens, responseTokens);
          
          isWaitingForResponse = false;
        }, 8000);
      }
    }
  }
}, true);

// Initialize
console.log('EcoTrace: Initializing...');
setTimeout(() => {
  addTestButton();
  console.log('EcoTrace: Ready! Click the test button or submit a prompt.');
}, 1000);
