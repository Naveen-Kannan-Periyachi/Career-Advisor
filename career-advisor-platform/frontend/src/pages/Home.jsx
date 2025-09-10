import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  BookOpen, 
  MapPin, 
  Brain, 
  Target, 
  Users, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Home = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600 animate-float" />,
      title: 'Aptitude Assessment',
      description: 'Take comprehensive quizzes to discover your strengths, interests, and personality traits.',
      delay: '0.1s'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-600 animate-float" />,
      title: 'Course Discovery',
      description: 'Explore degree programs and understand what each course offers for your future career.',
      delay: '0.2s'
    },
    {
      icon: <MapPin className="h-8 w-8 text-purple-600 animate-float" />,
      title: 'College Directory',
      description: 'Find nearby government colleges with detailed information about courses, facilities, and admission processes.',
      delay: '0.3s'
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600 animate-float" />,
      title: 'Career Mapping',
      description: 'Visual charts showing career paths, job opportunities, and growth prospects for each stream.',
      delay: '0.4s'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-red-600 animate-float" />,
      title: 'AI Recommendations',
      description: 'Get personalized suggestions for courses, colleges, and career paths based on your profile.',
      delay: '0.5s'
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600 animate-float" />,
      title: 'Expert Guidance',
      description: 'Access to counselors and educational experts for personalized career guidance.',
      delay: '0.6s'
    }
  ];

  const stats = [
    { number: '500+', label: 'Government Colleges' },
    { number: '100+', label: 'Degree Programs' },
    { number: '50+', label: 'Career Paths' },
    { number: '10K+', label: 'Students Helped' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 animate-fadeIn relative overflow-hidden">
      <div className="parallax-bg"></div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white animate-fadeIn shadow-pop relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-700/90"></div>
        <div className="absolute inset-0">
          <div className="morphing-shape w-64 h-64 absolute -top-32 -right-32 opacity-20"></div>
          <div className="morphing-shape w-48 h-48 absolute -bottom-24 -left-24 opacity-20" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg animate-fadeInUp neon-glow">
              Your Career Journey Starts Here
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fadeInUp typing-animation">
              Discover your potential, explore opportunities, and make informed decisions about your education and career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Link
                  to="/dashboard"
                  className="liquid-btn transform-gpu hover-lift"
                >
                  <span>Go to Dashboard</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="liquid-btn transform-gpu hover-lift"
                  >
                    <span>Get Started Free</span>
                  </Link>
                  <Link
                    to="/login"
                    className="btn-animated border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:bg-white hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600 transition"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white/70 backdrop-blur-lg animate-fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Problem We Solve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Many students face confusion after Class 10/12 about which stream to choose, 
              what courses are available, and how their choices will impact their future careers. 
              This leads to poor decisions and declining enrollment in government colleges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Challenges:</h3>
              <ul className="space-y-3">
                {[
                  'Uncertainty about subject stream selection (Arts, Science, Commerce)',
                  'Lack of awareness about available degree programs',
                  'Limited knowledge of career opportunities after graduation',
                  'Difficulty finding nearby government colleges',
                  'Missing important admission deadlines and scholarship opportunities'
                ].map((challenge, index) => (
                  <li key={index} className="flex items-start animate-fadeInUp">
                    <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass p-8 rounded-2xl shadow-xl animate-fadeInUp">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution:</h3>
              <p className="text-gray-700 mb-4">
                A comprehensive digital platform that provides personalized career guidance, 
                helping students make informed decisions about their education and future.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-semibold">
                  "Empowering students with the right information at the right time to make the right choices."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 animate-fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 gradient-text">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fadeInUp">
              Everything you need to make informed decisions about your education and career.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card interactive-card stagger-item"
                style={{ animationDelay: feature.delay }}
              >
                <div className="mb-4 icon">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-sky-400 text-white animate-fadeInUp relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/95 to-sky-400/95"></div>
        <div className="absolute inset-0">
          <div className="w-32 h-32 bg-white/10 rounded-full absolute top-10 left-10 animate-float"></div>
          <div className="w-20 h-20 bg-white/10 rounded-full absolute bottom-20 right-20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="w-16 h-16 bg-white/10 rounded-full absolute top-32 right-32 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-glow">
              Trusted by Students Nationwide
            </h2>
            <p className="text-xl text-blue-100">
              Join thousands of students who have found their path with our platform.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-container">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card text-center animate-bounceIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-number score-counter mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white/70 backdrop-blur-lg animate-fadeInUp">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Take the first step towards a successful career by discovering your potential and exploring opportunities.
          </p>
          {user ? (
            <Link
              to="/assessment"
              className="btn-animated bg-blue-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-blue-600 transition inline-flex items-center"
            >
              Take Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          ) : (
            <Link
              to="/register"
              className="btn-animated bg-blue-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-blue-600 transition inline-flex items-center"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
