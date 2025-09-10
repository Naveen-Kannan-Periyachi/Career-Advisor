# Career Advisor Platform

A comprehensive digital platform that provides personalized career guidance to help students make informed decisions about their education and future careers.

## 🎯 Problem Statement

Many students face confusion after Class 10/12 about which stream to choose, what courses are available, and how their choices will impact their future careers. This leads to poor decisions and declining enrollment in government colleges.

## 💡 Solution

A mobile + web-based application that acts as a one-stop personalized career and education advisor, helping students:

- Discover their strengths and interests through aptitude assessments
- Explore degree programs and understand career prospects
- Find nearby government colleges with detailed information
- Get AI-driven personalized recommendations
- Track important deadlines and opportunities

## 🚀 Features

### Core Features

- **Aptitude Assessment**: Comprehensive quizzes to assess interests, strengths, and personality traits
- **Course Discovery**: Detailed information about degree programs and career paths
- **College Directory**: Location-based listing of government colleges with facilities and admission info
- **Career Mapping**: Visual charts showing career paths and job opportunities
- **AI Recommendations**: Personalized suggestions based on assessment results
- **Timeline Tracker**: Notifications for admission dates and scholarship deadlines

### Technical Features

- **Responsive Design**: Works seamlessly on mobile and desktop
- **Offline Support**: Basic functionality available without internet
- **Multilingual Support**: Support for regional languages
- **Real-time Notifications**: Push notifications for important updates
- **Secure Authentication**: JWT-based authentication system

## 🛠️ Technology Stack

### Backend

- **Node.js** with Express.js
- **MongoDB** with Mongoose
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Express Validator** for input validation

### Frontend

- **React 18** with Vite
- **React Router** for navigation
- **Tailwind CSS** for styling
- **React Hook Form** for form handling
- **Axios** for API calls
- **React Query** for data fetching
- **Lucide React** for icons

## 📁 Project Structure

```
career-advisor-platform/
├── backend/
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   └── server.js        # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── context/     # React context
│   │   └── App.jsx      # Main app component
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the backend directory:

```env
MONGODB_URI=mongodb://localhost:27017/career-advisor
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
```

4. Start the development server:

```bash
npm run dev
```

The backend will be running on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The frontend will be running on `http://localhost:5173`

## 📊 API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Users

- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Colleges

- `GET /api/colleges` - Get all colleges with filtering
- `GET /api/colleges/:id` - Get college by ID
- `GET /api/colleges/nearby/:lat/:lng` - Get nearby colleges

### Courses

- `GET /api/courses` - Get all courses with filtering
- `GET /api/courses/:id` - Get course by ID
- `GET /api/courses/stream/:stream` - Get courses by stream

### Assessments

- `GET /api/assessments` - Get all assessments
- `POST /api/assessments/:id/start` - Start an assessment
- `POST /api/assessments/:id/submit` - Submit assessment responses

### Recommendations

- `GET /api/recommendations/courses` - Get course recommendations
- `GET /api/recommendations/colleges` - Get college recommendations
- `GET /api/recommendations/career-paths` - Get career path recommendations

## 🎨 UI/UX Features

- **Modern Design**: Clean and intuitive interface
- **Mobile-First**: Responsive design for all devices
- **Accessibility**: WCAG 2.1 compliant
- **Dark Mode**: Optional dark theme support
- **Loading States**: Smooth loading animations
- **Error Handling**: User-friendly error messages

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for secure password storage
- **Input Validation**: Server-side validation for all inputs
- **CORS Configuration**: Proper cross-origin resource sharing
- **Rate Limiting**: API rate limiting to prevent abuse

## 📱 Mobile Support

- **Progressive Web App**: PWA capabilities for mobile installation
- **Offline Support**: Basic functionality without internet
- **Touch-Friendly**: Optimized for touch interactions
- **Fast Loading**: Optimized for mobile networks

## 🌐 Deployment

### Backend Deployment

1. Set up MongoDB Atlas or local MongoDB
2. Configure environment variables
3. Deploy to platforms like Heroku, Railway, or AWS

### Frontend Deployment

1. Build the production version:

```bash
npm run build
```

2. Deploy to platforms like Vercel, Netlify, or AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎯 Future Enhancements

- **Advanced AI**: Machine learning for better recommendations
- **Video Content**: Educational videos and virtual tours
- **Social Features**: Student communities and forums
- **Gamification**: Points, badges, and achievements
- **Analytics Dashboard**: Detailed insights and progress tracking
- **Multi-language Support**: Support for regional languages
- **Integration**: Integration with government databases and APIs

## 📞 Support

For support and questions, please contact:

- Email: support@careeradvisor.com
- GitHub Issues: [Create an issue](https://github.com/your-repo/issues)

---

**Built with ❤️ for students by the Career Advisor Team**
