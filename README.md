# Jehan's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and MongoDB.

![Portfolio Preview](https://via.placeholder.com/800x400/1f2937/ffffff?text=Portfolio+Preview)

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive design that looks great on all devices
- **Dark Theme**: Beautiful dark theme with gradient backgrounds
- **Contact Form**: Working contact form with MongoDB integration
- **Project Showcase**: Dynamic project gallery with filtering capabilities
- **SEO Optimized**: Built-in SEO optimization with Next.js
- **Performance**: Optimized for speed and performance
- **Vercel Deployment**: Ready for deployment on Vercel

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **Deployment**: Vercel
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-jehan.git
   cd portfolio-jehan
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   MONGODB_URI=mongodb://localhost:27017/portfolio-jehan
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

### Local MongoDB
1. Install MongoDB locally or use MongoDB Atlas
2. Create a database named `portfolio-jehan`
3. Update the `MONGODB_URI` in your `.env.local` file

### MongoDB Atlas (Recommended)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string and add it to `.env.local`

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy!

3. **Environment Variables in Vercel**
   Add these in your Vercel project settings:
   ```
   MONGODB_URI=your-mongodb-atlas-connection-string
   NEXTAUTH_SECRET=your-production-secret
   NEXTAUTH_URL=https://your-domain.vercel.app
   ```

## 📁 Project Structure

```
portfolio-jehan/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form endpoint
│   │   └── hello/         # Test endpoint
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── src/
│   ├── components/        # Reusable components
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── lib/              # Utility libraries
│   │   ├── mongodb.ts    # MongoDB connection
│   │   └── mongoose.ts   # Mongoose connection
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   └── utils/            # Utility functions
│       └── index.ts
├── public/               # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Content
- Update personal information in the page components
- Add your projects in `app/projects/page.tsx`
- Modify the about section in `app/about/page.tsx`
- Update contact information in `app/contact/page.tsx`

### Styling
- Global styles: `app/globals.css`
- Component styles: Use Tailwind CSS classes
- Custom animations: Define in `tailwind.config.js`

## 📧 Contact Form

The contact form sends data to `/api/contact` which stores messages in MongoDB:

```typescript
// POST /api/contact
{
  "name": "John Doe",
  "email": "john@example.com", 
  "message": "Hello world!"
}
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for the deployment platform
- [MongoDB](https://www.mongodb.com/) for the database solution

## 📞 Support

If you have any questions or need help with setup, feel free to reach out:

- Email: your.email@example.com
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your Name](https://linkedin.com/in/your-profile)

---

**Made with ❤️ by Jehan**
