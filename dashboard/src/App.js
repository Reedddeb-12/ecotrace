import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './App.css';

const API_URL = 'https://ecotrace-1.onrender.com';

function App() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 5000); // Refresh every 5s
    return () => clearInterval(interval);
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch(`${API_URL}/stats`);
      const data = await response.json();
      setStats(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  const chartData = stats?.history?.map((h, i) => ({
    name: `#${i + 1}`,
    energy: h.energy_wh,
    carbon: h.carbon_gco2e,
    water: h.water_ml / 10 // Scale down for visibility
  })) || [];

  return (
    <div className="App">
      <header>
        <h1>🌍 EcoTrace Dashboard</h1>
        <p>Track your AI footprint in real-time</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card energy">
          <div className="stat-icon">⚡</div>
          <div className="stat-content">
            <div className="stat-label">Total Energy</div>
            <div className="stat-value">{stats?.total_energy_wh || 0} Wh</div>
            <div className="stat-sub">≈ {((stats?.total_energy_wh || 0) / 1000).toFixed(3)} kWh</div>
          </div>
        </div>

        <div className="stat-card carbon">
          <div className="stat-icon">🌫️</div>
          <div className="stat-content">
            <div className="stat-label">Total Carbon</div>
            <div className="stat-value">{stats?.total_carbon_gco2e || 0} g</div>
            <div className="stat-sub">CO₂ equivalent</div>
          </div>
        </div>

        <div className="stat-card water">
          <div className="stat-icon">💧</div>
          <div className="stat-content">
            <div className="stat-label">Total Water</div>
            <div className="stat-value">{stats?.total_water_ml || 0} mL</div>
            <div className="stat-sub">≈ {((stats?.total_water_ml || 0) / 1000).toFixed(2)} L</div>
          </div>
        </div>

        <div className="stat-card prompts">
          <div className="stat-icon">💬</div>
          <div className="stat-content">
            <div className="stat-label">Total Prompts</div>
            <div className="stat-value">{stats?.total_prompts || 0}</div>
            <div className="stat-sub">tracked today</div>
          </div>
        </div>
      </div>

      {chartData.length > 0 && (
        <div className="chart-container">
          <h2>Footprint Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip 
                contentStyle={{ background: '#333', border: 'none', borderRadius: '8px' }}
              />
              <Line type="monotone" dataKey="energy" stroke="#ffd700" strokeWidth={2} name="Energy (Wh)" />
              <Line type="monotone" dataKey="carbon" stroke="#ff6b6b" strokeWidth={2} name="Carbon (g)" />
              <Line type="monotone" dataKey="water" stroke="#4ecdc4" strokeWidth={2} name="Water (mL/10)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      <div className="tips-section">
        <h2>🌱 Green Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <strong>Use shorter prompts</strong>
            <p>Reduce token count by 50% with concise questions</p>
          </div>
          <div className="tip-card">
            <strong>Choose smaller models</strong>
            <p>GPT-3.5 uses 40% less energy than GPT-4</p>
          </div>
          <div className="tip-card">
            <strong>Batch your queries</strong>
            <p>Combine related questions in one prompt</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
