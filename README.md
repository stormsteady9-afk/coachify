# 🧠 Coachify

> Intelligent Life Coaching Platform - Connect with AI and Human Coaches for Personal Growth

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-green)](https://nodejs.org/)

## 📋 Quick Links

- 🌐 **Website:** https://coachify.com
- 📦 **GitHub:** https://github.com/bearmentor/coachify
- 📊 **Project Board:** https://github.com/orgs/bearmentor/projects/1

## ✨ Features

### Core Platform
- 🤖 **AI Life Coach (FelixGPT)** - Empathetic AI-powered coaching with reflective questioning
- 👥 **Coach Discovery** - Find and connect with verified professional coaches and mentors
- 💬 **Smart Messaging** - Direct communication between coaches and clients
- 🎯 **Goal Tracking** - Set, track, and achieve meaningful growth milestones
- 📱 **Mobile First** - Fully responsive design for all devices
- 🌙 **Dark/Light Mode** - Beautiful theme switching support

### User Features
- 🔐 Secure authentication and profile management
- 💳 Flexible session pricing and payment
- 📊 Progress tracking with measurable insights
- 🤝 Community connections and peer support
- 📈 Long-term growth analytics

## 🛠️ Tech Stack

### Frontend
- React 18 + Remix (Full-stack framework)
- TypeScript (Type safety)
- Tailwind CSS (Styling)
- Tabler Icons (UI Icons)

### Backend
- Node.js Runtime
- Remix Server
- Prisma ORM (Database queries)
- Groq & OpenAI APIs (AI Coach)

### Database & DevOps
- PostgreSQL / SQLite
- Docker & Docker Compose
- Playwright (E2E Testing)
- pnpm (Package management)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (`npm i -g pnpm`)
- PostgreSQL or SQLite

### Installation

```bash
# Clone repository
git clone https://github.com/bearmentor/coachify.git
cd coachify

# Install dependencies
pnpm install

# Setup environment
cp .env.example .env

# Setup database
pnpm run db:migrate

# Start development server
pnpm dev
```

Visit http://localhost:3000

## ⚙️ Environment Variables

Create `.env` file:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/coachify"

# AI APIs (Optional)
OPENAI_API_KEY=your_key_here
GROQ_API_KEY=your_key_here

# Session
SESSION_SECRET=your_secret_here
```

## 📁 Project Structure

```
app/
├── components/       # Reusable React components
├── routes/          # Remix page routes
├── hooks/           # Custom React hooks
├── models/          # Database operations
├── helpers/         # Utility functions
└── utils/           # Shared utilities

prisma/             # Database schema & migrations
public/             # Static assets
e2e/                # End-to-end tests
```

## 🧑‍💻 Development

### Available Commands

```bash
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm start            # Start prod server
pnpm lint             # Run ESLint
pnpm format           # Format code with Prettier
pnpm test             # Run tests
pnpm test:e2e         # Run E2E tests
pnpm db:migrate       # Run migrations
pnpm db:seed          # Seed database
```

### Key Routes

- `/` - Landing page
- `/felix` - AI Coach (FelixGPT)
- `/coachee` - Coaching feed
- `/feedback` - Feedback form
- `/signup-choice` - Sign up options
- `/dashboard` - User dashboard

## 🤝 Contributing

We welcome contributions! Please:

1. **Fork** the repository
2. **Create** feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** branch: `git push origin feature/amazing-feature`
5. **Open** Pull Request

### Code Standards
- ✅ TypeScript strict mode
- ✅ ESLint + Prettier formatting
- ✅ Responsive design required
- ✅ Dark mode support required
- ✅ Tests for new features

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

## 🙋 Support

- 📧 **Email:** support@coachify.com
- 💬 **Issues:** [GitHub Issues](https://github.com/bearmentor/coachify/issues)
- 🤝 **Discussions:** [GitHub Discussions](https://github.com/bearmentor/coachify/discussions)

---

Built with ❤️ for personal transformation and growth
