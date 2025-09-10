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
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: 'Aptitude Assessment',
      description: 'Take comprehensive quizzes to discover your strengths, interests, and personality traits.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      title: 'Course Discovery',
      description: 'Explore degree programs and understand what each course offers for your future career.'
    },
    {
      icon: <MapPin className="h-8 w-8 text-purple-600" />,
      title: 'College Directory',
      description: 'Find nearby government colleges with detailed information about courses, facilities, and admission processes.'
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: 'Career Mapping',
      description: 'Visual charts showing career paths, job opportunities, and growth prospects for each stream.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-red-600" />,
      title: 'AI Recommendations',
      description: 'Get personalized suggestions for courses, colleges, and career paths based on your profile.'
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: 'Expert Guidance',
      description: 'Access to counselors and educational experts for personalized career guidance.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Government Colleges' },
    { number: '100+', label: 'Degree Programs' },
    { number: '50+', label: 'Career Paths' },
    { number: '10K+', label: 'Students Helped' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Career Journey Starts Here
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover your potential, explore opportunities, and make informed decisions about your education and career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Link
                  to="/dashboard"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    to="/login"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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
      <section className="py-16 bg-gray-50">
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
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to make informed decisions about your education and career.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Students Nationwide
            </h2>
            <p className="text-xl text-blue-100">
              Join thousands of students who have found their path with our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
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
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Take Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          ) : (
            <Link
              to="/register"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
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
