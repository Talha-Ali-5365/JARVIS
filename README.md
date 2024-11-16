# JARVIS - Advanced AI Assistant Agent

## 🤖 Introduction

JARVIS is a sophisticated AI assistant agent built using React and modern JavaScript technologies. It's designed to be a versatile and powerful tool that can handle various tasks including file operations, terminal commands, AI-powered conversations, web scraping, and internet searches. This agent combines multiple cutting-edge technologies to provide a comprehensive solution for both developers and end-users.

## 🌟 Features Overview

JARVIS comes equipped with multiple powerful capabilities that make it a versatile AI assistant:

- File System Operations
- Terminal Command Execution
- AI-Powered Conversations (via Gemini)
- Web Scraping Capabilities
- Internet Search Integration
- File Encryption/Decryption

## 🛠️ Technical Stack

- React
- TypeScript/TSX
- Google's Generative AI (Gemini)
- Node.js File System API
- Crypto Module
- Tavily Search API
- Web Scraping Integration

## 📚 Detailed Component Documentation

### 1. File System Operations
The file system module provides comprehensive file handling capabilities:

#### Available Functions:
- `readFile`: Reads content from specified files
- `writeFile`: Creates or updates files with new content
- `listFiles`: Displays all files in the current directory
- `encryptFile`: Securely encrypts files using AES-256-CBC
- `decryptFile`: Decrypts previously encrypted files

### 2. Terminal Command Execution
Secure and controlled terminal command execution with built-in safety features:

- Command execution with timeout protection
- Blocked dangerous commands for security
- Working directory context maintenance
- Detailed output capture (stdout and stderr)

### 3. AI Conversation Module (Gemini Integration)
Advanced AI conversation capabilities powered by Google's Gemini:

- Text-based conversations
- Image analysis and processing
- Multi-modal interactions
- Context-aware responses

### 4. Web Scraping Capabilities
Robust web scraping functionality:

- URL content extraction
- Content analysis
- AI-powered content interpretation
- Error handling and retry mechanisms

### 5. Internet Search Integration
Integrated web search capabilities via Tavily:

- Real-time web searches
- Relevant result filtering
- Error handling
- Rate limiting protection

### 6. Security Features
Built-in security measures:

- AES-256-CBC encryption
- Secure key management
- Command execution safeguards
- Environment variable protection

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- React development environment
- Required API keys:
  - Google API Key (for Gemini)
  - Tavily API Key (for web searches)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd agentX
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
GOOGLE_API_KEY=your_gemini_api_key
TAVILY_API_KEY=your_tavily_api_key
```

4. Start the development server:
```bash
npm start
```

## 💡 Usage Examples

### File Operations
```typescript
// Reading a file
await fileActions.readFile('example.txt');

// Writing to a file
await fileActions.writeFile('output.txt', 'Hello, World!');

// Encrypting a file
await fileActions.encryptFile('sensitive.txt');
```

### AI Conversations
```typescript
// Text-based query
await geminiActions.askQuestion('What is the weather like today?');

// Image analysis
await geminiActions.askQuestionWithImage('What's in this image?', 'image.png');
```

### Web Operations
```typescript
// Web scraping
await scrapingActions.scrapeWebsite('Extract main content', 'https://example.com');

// Web search
await websearchActions.search('Latest AI developments');
```

## 🔒 Security Considerations

- All file operations are performed with proper error handling
- Terminal commands are filtered for potentially dangerous operations
- Encryption uses industry-standard AES-256-CBC
- API keys are protected through environment variables
- Input validation is implemented throughout the system

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Google Generative AI team for Gemini API
- Tavily team for their search API
- React Agents community
- All contributors and supporters

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintenance team.

---

Made with ❤️ by the JARVIS Development Team