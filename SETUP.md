# Portfolio Setup and Run Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set up Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local` with your MongoDB connection string:
```env
MONGODB_URI=your-mongodb-connection-string
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

### 3. Add Your Hero Image
Place your profile image at `public/images/hero.jpg`

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure Overview

```
portfolio-jehan/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx           # Main portfolio page
├── src/
│   ├── components/        # All portfolio sections
│   │   ├── Hero.tsx       # Hero section with image
│   │   ├── About.tsx      # About section
│   │   ├── Projects.tsx   # Projects showcase
│   │   ├── Skills.tsx     # Skills grid
│   │   ├── Contact.tsx    # Contact form
│   │   └── Navbar.tsx     # Smooth scroll navigation
│   └── lib/
│       └── content.ts     # All your content data
└── public/images/         # Your images go here
```

## Customization Tips

### 1. Update Your Content
Edit `src/lib/content.ts` to add your:
- Personal information
- Project details
- Skills
- Contact information

### 2. Color Scheme
The calm color palette is configured in `tailwind.config.js`:
- Primary: #4B91F1 (Calm blue)
- Secondary: #DDEFFC (Light blue)
- Background: #F7FAFC (Off-white)
- Accent: #6EE7B7 (Soft green)

### 3. Add Your Images
- Hero image: `public/images/hero.jpg`
- Project images: `public/images/project-1.jpg`, etc.

## Features Included

✅ **Smooth scrolling navigation**  
✅ **Mobile-responsive design**  
✅ **Calm, professional color scheme**  
✅ **Easy-to-read fonts (Inter & Open Sans)**  
✅ **Working contact form with MongoDB**  
✅ **Project showcase with tech tags**  
✅ **Skills organized by category**  
✅ **Resume download link**  
✅ **Social media links**  

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Ready for Deployment

The project is configured for easy deployment to Vercel:
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy!

Your portfolio is ready to showcase your work! 🚀
