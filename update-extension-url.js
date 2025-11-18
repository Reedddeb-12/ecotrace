// Script to update extension API URL
// Usage: node update-extension-url.js YOUR_BACKEND_URL

const fs = require('fs');
const path = require('path');

const newUrl = process.argv[2];

if (!newUrl) {
  console.log('❌ Please provide backend URL');
  console.log('Usage: node update-extension-url.js https://your-backend.com');
  process.exit(1);
}

const contentJsPath = path.join(__dirname, 'extension', 'content.js');
let content = fs.readFileSync(contentJsPath, 'utf8');

// Replace localhost URL with new URL
content = content.replace(
  /const API_URL = ['"]http:\/\/localhost:8000['"];/,
  `const API_URL = '${newUrl}';`
);

fs.writeFileSync(contentJsPath, content);

console.log('✅ Extension updated!');
console.log(`   API URL: ${newUrl}`);
console.log('\nNext steps:');
console.log('1. Go to chrome://extensions/');
console.log('2. Reload EcoTrace extension');
console.log('3. Test on ChatGPT!');
