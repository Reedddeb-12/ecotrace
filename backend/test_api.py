"""Quick test script for the EcoTrace API"""
import requests

API_URL = "http://localhost:8000"

def test_calculate():
    print("Testing /calculate endpoint...")
    response = requests.post(f"{API_URL}/calculate", json={
        "model": "gpt-3.5",
        "prompt_tokens": 50,
        "response_tokens": 200
    })
    print(f"Status: {response.status_code}")
    print(f"Response: {response.json()}")
    print()

def test_stats():
    print("Testing /stats endpoint...")
    response = requests.get(f"{API_URL}/stats")
    print(f"Status: {response.status_code}")
    print(f"Response: {response.json()}")
    print()

if __name__ == "__main__":
    print("🌍 EcoTrace API Test\n")
    try:
        test_calculate()
        test_stats()
        print("✅ All tests passed!")
    except Exception as e:
        print(f"❌ Error: {e}")
        print("Make sure the backend is running: python main.py")
