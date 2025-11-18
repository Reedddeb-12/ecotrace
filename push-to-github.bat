@echo off
echo ========================================
echo   EcoTrace - Push to GitHub
echo ========================================
echo.

REM Check if git is initialized
if not exist ".git" (
    echo [1/5] Initializing git repository...
    git init
    echo Done!
) else (
    echo [1/5] Git already initialized
)

echo.
echo [2/5] Adding files...
git add .
echo Done!

echo.
echo [3/5] Creating commit...
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Initial commit: EcoTrace AI Footprint Tracker
git commit -m "%commit_msg%"
echo Done!

echo.
echo [4/5] GitHub Repository Setup
set /p github_user="Enter your GitHub username: "
set /p repo_name="Enter repository name (default: ecotrace): "
if "%repo_name%"=="" set repo_name=ecotrace

echo.
echo Adding GitHub remote...
git remote add origin https://github.com/%github_user%/%repo_name%.git 2>nul
if errorlevel 1 (
    git remote set-url origin https://github.com/%github_user%/%repo_name%.git
)
echo Done!

echo.
echo [5/5] Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo ========================================
echo   Success! Code is on GitHub!
echo ========================================
echo.
echo Repository URL:
echo   https://github.com/%github_user%/%repo_name%
echo.
echo Next steps:
echo   1. Go to Render.com or Railway.app
echo   2. Deploy from your GitHub repo
echo   3. Update extension with backend URL
echo.
echo See GITHUB_SETUP.md for detailed instructions
echo.
pause
