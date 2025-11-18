#!/bin/bash

echo "🚀 EcoTrace - Push to GitHub"
echo "=============================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

# Add all files
echo ""
echo "📝 Adding files..."
git add .
echo "✅ Files added"

# Commit
echo ""
echo "💾 Creating commit..."
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Initial commit: EcoTrace AI Footprint Tracker"
fi
git commit -m "$commit_msg"
echo "✅ Commit created"

# Get GitHub username and repo name
echo ""
echo "🔗 GitHub Repository Setup"
read -p "Enter your GitHub username: " github_user
read -p "Enter repository name (default: ecotrace): " repo_name
if [ -z "$repo_name" ]; then
    repo_name="ecotrace"
fi

# Add remote
echo ""
echo "🌐 Adding GitHub remote..."
git remote add origin "https://github.com/$github_user/$repo_name.git" 2>/dev/null || \
git remote set-url origin "https://github.com/$github_user/$repo_name.git"
echo "✅ Remote added"

# Push
echo ""
echo "⬆️  Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "🎉 Success! Your code is on GitHub!"
echo ""
echo "📍 Repository URL:"
echo "   https://github.com/$github_user/$repo_name"
echo ""
echo "🚀 Next steps:"
echo "   1. Go to Render.com or Railway.app"
echo "   2. Deploy from your GitHub repo"
echo "   3. Update extension with backend URL"
echo ""
echo "📖 See GITHUB_SETUP.md for detailed instructions"
