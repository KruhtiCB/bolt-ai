# Sisuni Tech - Complete Web Application

A comprehensive web application for Sisuni Tech Pvt Ltd, featuring a modern tech company website with career portal and backend functionality.

## Features

### Frontend
- **Modern React Application** with TypeScript and Vite
- **Responsive Design** using Tailwind CSS and shadcn/ui components
- **Multi-page Application** with React Router
- **Career Portal** with job listings, filtering, and application system
- **Contact Forms** with validation and toast notifications
- **Company Information** pages (About, Services, Why Join Us)
- **Taddy11 Game** showcase page

### Backend
- **Express.js Server** with MongoDB integration
- **File Upload System** for resume submissions
- **RESTful API** for job applications
- **Database Models** for application management
- **CORS Configuration** for frontend-backend communication

### Pages
1. **Home** - Company overview and hero section
2. **About** - Company story, mission, vision, and values
3. **Services** - Detailed service offerings
4. **Taddy11** - Gaming product showcase
5. **Career** - Job listings with application system
6. **Why Join Us** - Benefits, culture, and growth opportunities
7. **Contact** - Contact information and inquiry form

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui component library
- React Router for navigation
- Lucide React for icons

### Backend
- Node.js with Express.js
- MongoDB with Mongoose ODM
- Multer for file uploads
- CORS for cross-origin requests
- dotenv for environment variables

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd taddy11-web-pulse-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your MongoDB connection string and other configurations.

4. **Create uploads directory**
   ```bash
   mkdir -p uploads/resumes
   ```

### Running the Application

#### Development Mode (Full Stack)
```bash
npm run dev:full
```
This runs both the frontend (port 5173) and backend server (port 3001) concurrently.

#### Frontend Only
```bash
npm run dev
```

#### Backend Only
```bash
npm run server
```

#### Production Build
```bash
npm run build
```

## API Endpoints

### Applications
- `POST /api/applications/general` - Submit job application
- `GET /api/applications` - Get all applications (admin)
- `GET /api/applications/:id` - Get specific application
- `GET /api/health` - Health check endpoint

## File Structure

```
taddy11-web-pulse-main/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── home/            # Home page components
│   │   └── layout/          # Layout components (Navbar, Footer)
│   ├── pages/               # Page components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   └── main.tsx             # Application entry point
├── server/
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   └── server.js            # Express server
├── uploads/                 # File upload directory
└── public/                  # Static assets
```

## Features in Detail

### Career Portal
- **Job Listings**: Display available positions with filtering
- **Search & Filter**: Search by keywords, filter by department/location
- **Job Details**: Modal with comprehensive job information
- **Application System**: Complete application form with file upload
- **Resume Upload**: Support for PDF, DOC, and DOCX files
- **Form Validation**: Client-side and server-side validation

### Application Management
- **Database Storage**: All applications stored in MongoDB
- **File Management**: Resume files stored securely on server
- **Status Tracking**: Application status management system
- **Admin Interface**: API endpoints for application management

### Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Modern UI**: Clean, professional design with animations
- **Accessibility**: WCAG compliant components
- **Performance**: Optimized loading and rendering

## Environment Variables

```env
MONGODB_URI=mongodb://localhost:27017/sisuni-careers
PORT=3001
MAX_FILE_SIZE=5242880
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
```

## Deployment

### Frontend Deployment
The frontend can be deployed to any static hosting service:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

### Backend Deployment
The backend can be deployed to:
- Heroku
- AWS EC2
- DigitalOcean
- Railway

### Database
- MongoDB Atlas (recommended for production)
- Local MongoDB instance
- Docker container

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software owned by Sisuni Tech Pvt Ltd.

## Support

For support and questions, contact:
- Email: contact@sisuni.tech
- Website: [sisuni.tech](https://sisuni.tech)

## Changelog

### v1.0.0
- Initial release with complete frontend and backend
- Career portal with job application system
- Company information pages
- Contact and inquiry forms
- Responsive design implementation
- MongoDB integration
- File upload functionality