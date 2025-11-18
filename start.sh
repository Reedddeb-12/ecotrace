#!/bin/bash

echo "========================================"
echo "  EcoTrace - Starting All Services"
echo "========================================"
echo ""

echo "[1/2] Starting Backend..."
cd backend
python3 main.py &
BACKEND_PID=$!
cd ..
sleep 3

echo "[2/2] Starting Dashboard..."
cd dashboard
npm start &
DASHBOARD_PID=$!
cd ..

echo ""
echo "========================================"
echo "  Services Started!"
echo "========================================"
echo ""
echo "Backend:   http://localhost:8000"
echo "Dashboard: http://localhost:3000"
echo ""
echo "Next: Install the browser extension"
echo "  1. Open chrome://extensions/"
echo "  2. Enable Developer mode"
echo "  3. Load unpacked - select 'extension' folder"
echo ""
echo "Press Ctrl+C to stop all services"

# Wait for Ctrl+C
trap "kill $BACKEND_PID $DASHBOARD_PID; exit" INT
wait
