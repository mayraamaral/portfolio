# Mayra Amaral's Portfolio

<p align="center">
<img src="https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js badge" />
<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript badge" />
<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind badge" />
<img src="https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black" alt="React badge" />
<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker badge" />
</p>

A modern, multilingual portfolio website showcasing my professional profile, knowledge, and work. Built with Next.js 16 and featuring internationalization support.

## Summary

- [Application](#-application)
- [Technologies](#%EF%B8%8F-technologies)
  - [Portfolio](#portfolio)
  - [Blog](#blog)
- [Getting Started](#-getting-started)
  - [Local Development](#installation)
  - [Docker Deployment](#docker-deployment)
- [Folder Structure](#-folder-structure)
- [Features](#-features)
- [Goals Accomplished](#-goals-accomplished)

## 📲 Application

🔗 **Portfolio:** [https://mayra.dev](https://mayra.dev)  
🔗 **Blog:** [https://blog.mayra.dev](https://blog.mayra.dev)

## 🛠️ Technologies

### Portfolio

- **Next.js** v16.0.0 (App Router with Turbopack)
- **React** v19.2.0
- **TypeScript** v5
- **Tailwind CSS** v4
- **next-intl** v4.4.0 (Internationalization)
- **next-themes** v0.4.6 (Dark/Light mode)
- **react-icons** v5.5.0
- **Package Manager:** pnpm v10.6.5
- **Deploy:** Vercel

### Blog

In development...

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20.9
- pnpm >= 10.6.5

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

Open [http://localhost:3030](http://localhost:3030) with your browser to see the result.

### Docker Deployment

#### Prerequisites

- Docker
- Docker Compose (optional)

#### Option 1: Using Docker Only

```bash
# Build the image
docker build -t portfolio:latest .

# Run the container
docker run -d \
  --name portfolio \
  -p 3030:3030 \
  -e NODE_ENV=production \
  -e PORT=3030 \
  --restart unless-stopped \
  portfolio:latest

# View logs
docker logs -f portfolio

# Stop the container
docker stop portfolio

# Remove the container
docker rm portfolio

# Rebuild the image (no cache)
docker build --no-cache -t portfolio:latest .
```

#### Option 2: Using Docker Compose

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f portfolio

# Stop the container
docker-compose down

# Rebuild the image
docker-compose build --no-cache
```

**Note**: If you get a network error with Docker Compose, you may need to create the external network first or remove the network configuration from `docker-compose.yml`.

The application will be available at [http://localhost:3030](http://localhost:3030).

#### Docker Configuration

The Docker setup uses a multi-stage build for optimal image size:
- **Stage 1**: Install dependencies with pnpm
- **Stage 2**: Build the Next.js application
- **Stage 3**: Create minimal production runtime

The container runs as a non-root user for enhanced security and uses Next.js standalone output mode for efficient deployment.

## 📁 Folder Structure

```
📦portfolio
┣ 📂app
┃ ┣ 📂[locale]              # Internationalized routes
┃ ┃ ┣ 📜layout.tsx          # Root layout with theme provider
┃ ┃ ┗ 📜page.tsx            # Main page
┃ ┣ 📂components            # React components
┃ ┃ ┣ 📜AboutMe.tsx         # About me section
┃ ┃ ┣ 📜Academic.tsx        # Academic background
┃ ┃ ┣ 📜Banner.tsx          # Hero banner
┃ ┃ ┣ 📜Contact.tsx         # Contact section
┃ ┃ ┣ 📜Experience.tsx      # Work experience
┃ ┃ ┣ 📜Header.tsx          # Navigation header
┃ ┃ ┣ 📜Projects.tsx        # Projects showcase
┃ ┃ ┗ 📜ThemeProvider.tsx   # Theme context provider
┃ ┗ 📜globals.css           # Global styles
┣ 📂i18n                    # Internationalization config
┃ ┣ 📜request.ts
┃ ┗ 📜routing.ts
┣ 📂messages                # Translation files
┃ ┣ 📜en.json               # English translations
┃ ┗ 📜pt.json               # Portuguese translations
┣ 📂public                  # Static assets
┃ ┣ 📜favicon.ico
┃ ┗ 📜...
┣ 📜next.config.ts          # Next.js configuration
┣ 📜tailwind.config.ts      # Tailwind configuration
┣ 📜tsconfig.json           # TypeScript configuration
┗ 📜package.json
```

## ✨ Features

- 🌍 **Multilingual Support** - Portuguese and English versions using next-intl
- 🌓 **Dark/Light Mode** - Theme switching with system preference detection
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Performance Optimized** - Built with Next.js 16 and Turbopack
- 🎨 **Modern UI** - Clean design with Tailwind CSS v4
- ♿ **SEO Optimized** - Proper meta tags and semantic HTML
- 🔄 **Server Components** - Leveraging React Server Components for better performance

## 🎯 Goals Accomplished

- [x] SEO optimization
- [x] Header with navigation
- [x] Hero banner
- [x] About me section
- [x] Work experience timeline
- [x] Academic background
- [x] Projects showcase
- [x] Contact section
- [x] English version (i18n support)
- [x] Spanish version (i18n support)
- [x] Mobile responsive version
- [x] Dark/Light theme toggle
- [x] Modern tech stack migration (Angular → Next.js)

## 📝 License

This project is private and proprietary.

---

Made with ❤️ by [Mayra Amaral](https://mayra.dev)
