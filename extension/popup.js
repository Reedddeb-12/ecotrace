// Load and display the last footprint calculation
try {
  chrome.storage.local.get(['lastFootprint'], (result) => {
    const content = document.getElementById('content');
  
  if (result.lastFootprint) {
    const fp = result.lastFootprint;
    content.innerHTML = `
      <div class="stats">
        <div class="stat-row">
          <span class="stat-label">⚡ Energy</span>
          <span class="stat-value">${fp.energy_wh} Wh</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">🌫️ Carbon</span>
          <span class="stat-value">${fp.carbon_gco2e} gCO₂e</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">💧 Water</span>
          <span class="stat-value">${fp.water_ml} mL</span>
        </div>
      </div>
      <div class="tip">${fp.tip}</div>
      <button id="viewDashboard">View Full Dashboard</button>
    `;
    
    document.getElementById('viewDashboard').addEventListener('click', () => {
      chrome.tabs.create({ url: 'http://localhost:3000' });
    });
  } else {
    content.innerHTML = `
      <div class="loading">
        Submit a prompt on ChatGPT, Claude, or Gemini to see its footprint!
      </div>
      <button id="viewDashboard">View Dashboard</button>
    `;
    
    document.getElementById('viewDashboard').addEventListener('click', () => {
      chrome.tabs.create({ url: 'http://localhost:3000' });
    });
  }
  });
} catch (error) {
  console.error('EcoTrace popup error:', error);
  document.getElementById('content').innerHTML = `
    <div class="loading">Error loading data. Check console.</div>
  `;
}
