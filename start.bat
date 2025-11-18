@echo off
echo ========================================
echo   EcoTrace - Starting All Services
echo ========================================
echo.

echo [1/2] Starting Backend...
start "EcoTrace Backend" cmd /k "cd backend && python main.py"
timeout /t 3 /nobreak > nul

echo [2/2] Starting Dashboard...
start "EcoTrace Dashboard" cmd /k "cd dashboard && npm start"

echo.
echo ========================================
echo   Services Started!
echo ========================================
echo.
echo Backend:   http://localhost:8000
echo Dashboard: http://localhost:3000
echo.
echo Next: Install the browser extension
echo   1. Open chrome://extensions/
echo   2. Enable Developer mode
echo   3. Load unpacked - select 'extension' folder
echo.
echo Press any key to exit...
pause > nul
