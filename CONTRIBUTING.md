# Contributing to EcoTrace

Thank you for your interest in contributing to EcoTrace! This guide will help you get started.

## 🎯 Ways to Contribute

### 1. Report Bugs
Found a bug? Help us fix it!
- Check if it's already reported in issues
- Include steps to reproduce
- Share browser console errors
- Mention your OS and browser version

### 2. Suggest Features
Have an idea? We'd love to hear it!
- Describe the feature clearly
- Explain the use case
- Share examples from other tools
- Consider implementation complexity

### 3. Improve Documentation
Documentation is never perfect!
- Fix typos or unclear sections
- Add examples
- Translate to other languages
- Create tutorials or guides

### 4. Write Code
Ready to code? Great!
- Start with "good first issue" labels
- Follow the code style guide below
- Write tests for new features
- Update documentation

### 5. Test & Review
Help ensure quality!
- Test new features
- Review pull requests
- Report edge cases
- Verify fixes work

## 🚀 Getting Started

### 1. Fork & Clone
```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/ecotrace.git
cd ecotrace
```

### 2. Set Up Development Environment
```bash
# Backend
cd backend
pip install -r requirements.txt
python main.py

# Dashboard
cd dashboard
npm install
npm start

# Extension
# Load unpacked in chrome://extensions/
```

### 3. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### 4. Make Changes
- Write clean, readable code
- Follow existing patterns
- Add comments for complex logic
- Test your changes

### 5. Commit
```bash
git add .
git commit -m "feat: add new feature"
# or
git commit -m "fix: resolve bug"
```

### 6. Push & Create PR
```bash
git push origin feature/your-feature-name
# Then create a Pull Request on GitHub
```

## 📝 Code Style Guide

### Python (Backend)
```python
# Use type hints
def calculate_footprint(tokens: int, model: str) -> dict:
    """Calculate energy, carbon, and water footprint.
    
    Args:
        tokens: Total token count
        model: Model name (e.g., 'gpt-3.5')
    
    Returns:
        Dictionary with energy_wh, carbon_gco2e, water_ml
    """
    pass

# Use descriptive variable names
energy_wh = calculate_energy(tokens)  # Good
e = calc(t)  # Bad

# Keep functions small and focused
# One function = one responsibility
```

### JavaScript (Extension & Dashboard)
```javascript
// Use const/let, not var
const API_URL = 'http://localhost:8000';
let tokenCount = 0;

// Use arrow functions
const calculateTokens = (text) => Math.ceil(text.length / 4);

// Use async/await, not callbacks
async function fetchStats() {
  const response = await fetch(`${API_URL}/stats`);
  return response.json();
}

// Add JSDoc comments
/**
 * Estimate token count from text length
 * @param {string} text - Input text
 * @returns {number} Estimated token count
 */
function estimateTokens(text) {
  return Math.ceil(text.length / 4);
}
```

### React (Dashboard)
```javascript
// Use functional components
function Dashboard() {
  const [stats, setStats] = useState(null);
  
  // Use descriptive names
  const fetchDashboardStats = async () => {
    // ...
  };
  
  return (
    <div className="dashboard">
      {/* ... */}
    </div>
  );
}

// Extract reusable components
function StatCard({ icon, label, value }) {
  return (
    <div className="stat-card">
      <span>{icon}</span>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
```

### CSS
```css
/* Use meaningful class names */
.stat-card { }  /* Good */
.sc { }  /* Bad */

/* Group related properties */
.notification {
  /* Positioning */
  position: fixed;
  top: 20px;
  right: 20px;
  
  /* Box model */
  padding: 16px;
  margin: 0;
  
  /* Visual */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  
  /* Typography */
  font-size: 14px;
  color: white;
}

/* Use CSS variables for theme colors */
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
}
```

## 🧪 Testing Guidelines

### Before Submitting
- [ ] Code runs without errors
- [ ] All existing tests pass
- [ ] New features have tests
- [ ] Documentation is updated
- [ ] No console warnings
- [ ] Works in Chrome and Edge

### Manual Testing
1. Test the happy path
2. Test edge cases
3. Test error handling
4. Test on different screen sizes
5. Test with different data volumes

### Writing Tests
```python
# Backend tests (test_api.py)
def test_calculate_endpoint():
    response = requests.post(f"{API_URL}/calculate", json={
        "model": "gpt-3.5",
        "prompt_tokens": 50,
        "response_tokens": 200
    })
    assert response.status_code == 200
    data = response.json()
    assert "energy_wh" in data
    assert data["energy_wh"] > 0
```

## 📋 Pull Request Checklist

- [ ] Branch is up to date with main
- [ ] Code follows style guide
- [ ] Tests pass
- [ ] Documentation updated
- [ ] Commit messages are clear
- [ ] No merge conflicts
- [ ] Screenshots included (for UI changes)
- [ ] Breaking changes documented

## 🎯 Priority Areas

### High Priority
- [ ] Real API integration (OpenAI, Anthropic)
- [ ] Persistent storage (PostgreSQL)
- [ ] User authentication
- [ ] Firefox extension support
- [ ] Mobile responsiveness

### Medium Priority
- [ ] Historical analytics
- [ ] Export data (CSV, JSON)
- [ ] Custom model support
- [ ] Notification preferences
- [ ] Dark mode

### Low Priority
- [ ] Gamification features
- [ ] Social sharing
- [ ] Multiple languages
- [ ] Advanced visualizations
- [ ] Browser sync

## 🐛 Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g., Windows 11]
- Browser: [e.g., Chrome 120]
- Version: [e.g., 1.0.0]

**Console errors**
Paste any errors from browser console.
```

## 💡 Feature Request Template

```markdown
**Feature description**
Clear description of the feature.

**Use case**
Why is this feature needed?

**Proposed solution**
How should it work?

**Alternatives considered**
Other approaches you've thought about.

**Additional context**
Screenshots, mockups, examples.
```

## 🔄 Development Workflow

### 1. Pick an Issue
- Check existing issues
- Comment that you're working on it
- Ask questions if unclear

### 2. Develop
- Create feature branch
- Make small, focused commits
- Test frequently
- Keep commits atomic

### 3. Review
- Self-review your code
- Check for console errors
- Test edge cases
- Update documentation

### 4. Submit PR
- Write clear description
- Link related issues
- Add screenshots
- Request review

### 5. Address Feedback
- Respond to comments
- Make requested changes
- Re-request review
- Be patient and respectful

## 🎨 Design Guidelines

### Colors
- Primary: #667eea (purple-blue)
- Secondary: #764ba2 (purple)
- Success: #4ecdc4 (teal)
- Warning: #ffd700 (gold)
- Error: #ff6b6b (red)

### Typography
- Font: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI')
- Headings: Bold, larger sizes
- Body: Regular weight, 14-16px
- Code: Monospace font

### Spacing
- Small: 8px
- Medium: 16px
- Large: 24px
- XLarge: 40px

### Components
- Cards: Rounded corners (12-16px)
- Buttons: Rounded (8px)
- Shadows: Subtle, layered
- Animations: Smooth, 0.3s duration

## 📚 Resources

### Documentation
- [FastAPI Docs](https://fastapi.tiangolo.com/)
- [React Docs](https://react.dev/)
- [Chrome Extension Guide](https://developer.chrome.com/docs/extensions/)

### Tools
- [Postman](https://www.postman.com/) - API testing
- [React DevTools](https://react.dev/learn/react-developer-tools) - React debugging
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Browser debugging

### Learning
- [Python Best Practices](https://docs.python-guide.org/)
- [JavaScript Style Guide](https://github.com/airbnb/javascript)
- [React Patterns](https://reactpatterns.com/)

## 🤝 Code of Conduct

### Be Respectful
- Treat everyone with respect
- Welcome newcomers
- Be patient with questions
- Give constructive feedback

### Be Collaborative
- Share knowledge
- Help others learn
- Review code thoughtfully
- Celebrate contributions

### Be Professional
- Keep discussions on-topic
- Avoid personal attacks
- Respect different opinions
- Focus on the code, not the person

## 🎉 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation
- Thanked publicly

## 📞 Getting Help

### Questions?
- Check FAQ.md first
- Search existing issues
- Ask in discussions
- Reach out to maintainers

### Stuck?
- Review ARCHITECTURE.md
- Check code comments
- Look at similar features
- Ask for guidance

## 🚀 Ready to Contribute?

1. Read this guide
2. Set up your environment
3. Pick an issue or feature
4. Start coding!
5. Submit your PR

Thank you for making EcoTrace better! 💚🌍
