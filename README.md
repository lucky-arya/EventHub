# 🎪 EventHub

> **The Ultimate Hub for Developer Events You Can't Miss**

EventHub is a modern, full-stack event management platform built with Next.js 16, designed specifically for developer communities. Discover, explore, and book hackathons, meetups, conferences, and tech events—all in one beautifully crafted platform.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-9.2.1-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## ✨ Features

### 🎯 Current Features

- **🔍 Event Discovery**: Browse through a curated list of developer events with beautiful card-based UI
- **📅 Event Details**: Comprehensive event pages with full descriptions, agendas, and venue information
- **🎫 Easy Booking**: Simple email-based booking system for securing your spot at events
- **🏷️ Smart Tagging**: Tag-based event categorization for better discoverability
- **🔗 SEO-Friendly URLs**: Clean, slug-based routing for better search engine optimization
- **⚡ Server-Side Rendering**: Lightning-fast page loads with Next.js App Router
- **🎨 Modern UI/UX**: Sleek, responsive design with Tailwind CSS and shadcn/ui components
- **📱 Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices
- **🌐 RESTful API**: Well-structured API routes for event and booking management
- **🗄️ Database Integration**: MongoDB with Mongoose ODM for robust data persistence
- **🔄 Real-time Updates**: Automatic revalidation and caching for optimal performance

### 🎭 Event Information Includes:

- Event title, description, and detailed overview
- High-quality event images (Cloudinary integration ready)
- Venue details and location information
- Date, time, and event mode (online/offline/hybrid)
- Target audience and event tags
- Detailed agenda and schedule
- Organizer information
- Related/similar events recommendations

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon set
- **[class-variance-authority](https://cva.style/)** - Component variant management

### Backend
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database
- **[Mongoose](https://mongoosejs.com/)** - MongoDB object modeling
- **[Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)** - Serverless API endpoints

### DevOps & Tools
- **[Cloudinary](https://cloudinary.com/)** - Image hosting and optimization
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing

---

## 📁 Project Structure

```
eventhub/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── events/        # Event-related endpoints
│   │       ├── route.ts   # GET all events
│   │       └── [slug]/    # GET event by slug
│   ├── events/            # Event pages
│   │   └── [slug]/        # Dynamic event detail page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
│
├── components/            # React components
│   ├── BookEvent.tsx      # Event booking form
│   ├── EventCard.tsx      # Event card component
│   ├── EventDetails.tsx   # Event details display
│   ├── ExploreBtn.tsx     # Explore button component
│   ├── Footer.tsx         # Footer component
│   ├── LightRays.tsx      # Animated background
│   └── NavBar.tsx         # Navigation bar
│
├── database/              # Database models
│   ├── booking.model.ts   # Booking schema
│   └── event.model.ts     # Event schema
│
├── lib/                   # Utilities and actions
│   ├── actions/           # Server actions
│   │   ├── booking.actions.tsx
│   │   └── event.actions.tsx
│   ├── constants.ts       # App constants
│   ├── monodb.ts          # MongoDB connection
│   └── utils.ts           # Helper functions
│
├── public/                # Static assets
│   ├── icons/            # SVG icons
│   └── images/           # Event images
│
└── Configuration files
    ├── components.json    # shadcn/ui config
    ├── eslint.config.mjs  # ESLint configuration
    ├── next.config.ts     # Next.js configuration
    ├── package.json       # Dependencies
    ├── postcss.config.mjs # PostCSS configuration
    └── tsconfig.json      # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm** or **bun**
- **MongoDB** (local installation or MongoDB Atlas account)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/eventhub.git
   cd eventhub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add:
   ```env
   # MongoDB Connection
   MONGODB_URI=your_mongodb_connection_string
   
   # Cloudinary (Optional - for image uploads)
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   
   # Application URL
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

---

## 🗄️ Database Models

### Event Model

```typescript
{
  title: string           // Event title (max 100 chars)
  slug: string            // URL-friendly identifier (unique)
  description: string     // Full description (max 1000 chars)
  overview: string        // Brief overview (max 500 chars)
  image: string          // Event image URL
  venue: string          // Venue name
  location: string       // Event location
  date: string           // Event date
  time: string           // Event time
  mode: string           // online | offline | hybrid
  audience: string       // Target audience
  agenda: string[]       // Array of agenda items
  organizer: string      // Organizer name
  tags: string[]         // Event tags for categorization
  createdAt: Date        // Auto-generated
  updatedAt: Date        // Auto-generated
}
```

### Booking Model

```typescript
{
  eventId: ObjectId      // Reference to Event
  email: string          // Attendee email (validated)
  createdAt: Date        // Auto-generated
  updatedAt: Date        // Auto-generated
}
```

---

## 🔌 API Routes

### Event Endpoints

#### Get All Events
```
GET /api/events
```
Returns all events sorted by creation date (newest first).

#### Get Event by Slug
```
GET /api/events/[slug]
```
Returns a specific event and similar events based on tags.

### Booking Endpoints

Booking functionality is handled through server actions for enhanced security and performance.

---

## 💡 Usage

### Adding Events

Events can be added directly to MongoDB using the Event model schema. Future versions will include an admin dashboard for event management.

### Booking Events

1. Navigate to an event detail page
2. Scroll to the booking section
3. Enter your email address
4. Click "Book Now"
5. Receive confirmation message

### Exploring Events

- Browse featured events on the homepage
- Click on any event card to view full details
- View similar events based on tags
- Use the explore button for advanced filtering (upcoming feature)

---

## 🎨 Customization

### Styling

The project uses Tailwind CSS with custom configurations. Modify styles in:
- `app/globals.css` - Global styles and custom CSS
- `tailwind.config.ts` - Tailwind configuration (if needed)

### Components

All components are modular and can be found in the `components/` directory. They use:
- **shadcn/ui** for base components
- **class-variance-authority** for variant management
- **Lucide React** for icons

---

## 🚧 Upcoming Features

### Phase 1: Core Enhancements
- [ ] **User Authentication** - OAuth and email-based authentication
- [ ] **User Dashboard** - Personal event bookings and favorites
- [ ] **Event Categories** - Dedicated pages for hackathons, meetups, conferences
- [ ] **Advanced Search** - Filter by date, location, tags, and mode
- [ ] **Event Calendar View** - Visual calendar for browsing events

### Phase 2: Social Features
- [ ] **User Reviews & Ratings** - Rate and review attended events
- [ ] **Social Sharing** - Share events on social media platforms
- [ ] **Event Reminders** - Email/push notifications for upcoming events
- [ ] **Attendee List** - See who else is attending
- [ ] **Event Comments** - Discussion threads for each event

### Phase 3: Organizer Features
- [ ] **Organizer Dashboard** - Create and manage events
- [ ] **Analytics** - Event attendance and engagement metrics
- [ ] **Ticket Management** - Paid events with integrated payment
- [ ] **Email Campaigns** - Bulk email to registered attendees
- [ ] **QR Code Check-in** - Digital check-in system

### Phase 4: Advanced Features
- [ ] **Event Waitlist** - Join waitlist for sold-out events
- [ ] **Event Recommendations** - AI-powered event suggestions
- [ ] **Multi-language Support** - Internationalization (i18n)
- [ ] **Dark Mode** - System-wide dark theme
- [ ] **Progressive Web App** - Offline support and installability
- [ ] **Live Streaming Integration** - Embed live streams for virtual events
- [ ] **Networking Features** - Connect with other attendees
- [ ] **Event Certificates** - Auto-generated participation certificates

### Phase 5: Platform Expansion
- [ ] **Mobile App** - Native iOS and Android applications
- [ ] **API Documentation** - Public API for third-party integrations
- [ ] **Webhooks** - Real-time event updates for external systems
- [ ] **Advanced Analytics** - Data visualization and insights
- [ ] **Multi-tenant System** - White-label solution for organizations

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed
- Test your changes thoroughly before submitting
- Keep PRs focused on a single feature or bug fix

---

## 📋 Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please read and follow our Code of Conduct to maintain a positive environment.

---

## 🐛 Bug Reports & Feature Requests

If you encounter any bugs or have feature requests, please:

1. Check if the issue already exists in the [Issues](https://github.com/yourusername/eventhub/issues) tab
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details (OS, Node version, etc.)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Twitter: [@yourhandle](https://twitter.com/yourhandle)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Vercel](https://vercel.com/) for excellent hosting and deployment
- [shadcn](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [MongoDB](https://www.mongodb.com/) for database solutions
- The open-source community for inspiration and support

---

## 📞 Support

If you like this project, please consider:

- ⭐ Starring the repository
- 🐦 Sharing on social media
- 💬 Spreading the word in dev communities
- ☕ [Buy me a coffee](https://www.buymeacoffee.com/yourhandle) (optional)

---

## 🔗 Links

- **Live Demo**: [https://eventhub-demo.vercel.app](https://eventhub-demo.vercel.app) _(coming soon)_
- **Documentation**: [https://docs.eventhub.dev](https://docs.eventhub.dev) _(coming soon)_
- **API Docs**: [https://api.eventhub.dev](https://api.eventhub.dev) _(coming soon)_

---

<div align="center">

**Made with ❤️ for the Developer Community**

[⬆ Back to Top](#-eventhub)

</div>
