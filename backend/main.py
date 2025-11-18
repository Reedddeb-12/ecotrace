from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime
from typing import List

app = FastAPI()

# Enable CORS for browser extension and dashboard
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simple constants for footprint calculation
# Based on research: ~0.3 Wh per 1000 tokens for GPT-3.5, scaled for other models
MODEL_ENERGY = {
    "gpt-4": 0.5,      # Wh per 1000 tokens
    "gpt-3.5": 0.3,
    "claude": 0.4,
    "gemini": 0.35,
    "default": 0.4
}

# Carbon intensity: ~0.5 gCO2e per Wh (global average)
CARBON_PER_WH = 0.5

# Water: ~0.5 L per kWh (data center cooling)
WATER_PER_WH = 0.5

# In-memory storage for demo
footprint_history = []

class PromptRequest(BaseModel):
    model: str
    prompt_tokens: int
    response_tokens: int

class FootprintResponse(BaseModel):
    energy_wh: float
    carbon_gco2e: float
    water_ml: float
    tip: str

@app.post("/calculate", response_model=FootprintResponse)
def calculate_footprint(req: PromptRequest):
    # Log incoming request for debugging
    print(f"📊 Calculating footprint: model={req.model}, prompt_tokens={req.prompt_tokens}, response_tokens={req.response_tokens}")
    
    # Get energy per 1000 tokens for this model
    energy_rate = MODEL_ENERGY.get(req.model.lower(), MODEL_ENERGY["default"])
    
    # Calculate total tokens and energy
    total_tokens = req.prompt_tokens + req.response_tokens
    energy_wh = (total_tokens / 1000) * energy_rate
    
    # Calculate carbon and water
    carbon_gco2e = energy_wh * CARBON_PER_WH
    water_ml = energy_wh * WATER_PER_WH
    
    print(f"✅ Result: {total_tokens} tokens → {energy_wh:.2f} Wh, {carbon_gco2e:.2f} gCO₂e, {water_ml:.2f} mL")
    
    # Store for dashboard
    footprint_history.append({
        "timestamp": datetime.now().isoformat(),
        "model": req.model,
        "tokens": total_tokens,
        "energy_wh": energy_wh,
        "carbon_gco2e": carbon_gco2e,
        "water_ml": water_ml
    })
    
    # Generate tip
    tip = get_green_tip(total_tokens, req.model)
    
    return FootprintResponse(
        energy_wh=round(energy_wh, 2),
        carbon_gco2e=round(carbon_gco2e, 2),
        water_ml=round(water_ml, 2),
        tip=tip
    )

@app.get("/stats")
def get_stats():
    if not footprint_history:
        return {
            "total_energy_wh": 0,
            "total_carbon_gco2e": 0,
            "total_water_ml": 0,
            "total_prompts": 0,
            "history": []
        }
    
    total_energy = sum(h["energy_wh"] for h in footprint_history)
    total_carbon = sum(h["carbon_gco2e"] for h in footprint_history)
    total_water = sum(h["water_ml"] for h in footprint_history)
    
    return {
        "total_energy_wh": round(total_energy, 2),
        "total_carbon_gco2e": round(total_carbon, 2),
        "total_water_ml": round(total_water, 2),
        "total_prompts": len(footprint_history),
        "history": footprint_history[-50:]  # Last 50 entries
    }

def get_green_tip(tokens: int, model: str) -> str:
    if tokens > 2000:
        return "💡 Try shorter prompts to reduce footprint by up to 50%"
    elif "gpt-4" in model.lower():
        return "🌱 Consider GPT-3.5 for simpler tasks - 40% less energy"
    elif tokens > 1000:
        return "♻️ Break complex queries into smaller ones"
    else:
        return "✅ Great! This prompt has a low footprint"

if __name__ == "__main__":
    import uvicorn
    print("🌍 EcoTrace Backend starting on http://localhost:8000")
    uvicorn.run(app, host="0.0.0.0", port=8000)
