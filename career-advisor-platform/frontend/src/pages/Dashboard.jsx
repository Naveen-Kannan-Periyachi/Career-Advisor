import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { 
  User, 
  Brain, 
  BookOpen, 
  MapPin, 
  Target, 
  TrendingUp,
  Calendar,
  Award,
  ClipboardList,
  Sparkles,
  School
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const quickActions = [
    {
      title: 'Take Assessment',
      description: 'Discover your strengths and interests',
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      link: '/assessment',
      color: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      title: 'View Recommendations',
      description: 'Get personalized course and career suggestions',
      icon: <Target className="h-8 w-8 text-green-600" />,
      link: '/recommendations',
      color: 'bg-green-50 hover:bg-green-100'
    },
    {
      title: 'Browse Colleges',
      description: 'Find nearby government colleges',
      icon: <MapPin className="h-8 w-8 text-purple-600" />,
      link: '/colleges',
      color: 'bg-purple-50 hover:bg-purple-100'
    },
    {
      title: 'Explore Courses',
      description: 'Learn about different degree programs',
      icon: <BookOpen className="h-8 w-8 text-orange-600" />,
      link: '/courses',
      color: 'bg-orange-50 hover:bg-orange-100'
    }
  ];

  const stats = [
    {
      title: 'Assessment Completed',
      value: user?.assessmentResults ? '1' : '0',
      icon: <Award className="h-6 w-6 text-green-600" />,
      color: 'bg-green-50'
    },
    {
      title: 'Colleges Saved',
      value: '0',
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Courses Viewed',
      value: '0',
      icon: <BookOpen className="h-6 w-6 text-purple-600" />,
      color: 'bg-purple-50'
    },
    {
      title: 'Recommendations',
      value: user?.assessmentResults?.recommendations?.length || '0',
      icon: <TrendingUp className="h-6 w-6 text-orange-600" />,
      color: 'bg-orange-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 animate-fadeInUp">
            Welcome back, {user?.name || 'Student'}!
          </h1>
          <p className="text-lg text-gray-600">
            Continue your personalized career journey
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.color} p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.link}
                className={`${action.color} p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 transform`}
              >
                <div className="mb-4">{action.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {action.title}
                </h3>
                <p className="text-gray-600 text-sm">{action.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Completion */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Profile Completion
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Basic Information</span>
                <span className="text-sm font-medium text-green-600">Complete</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Academic Background</span>
                <span className="text-sm font-medium text-yellow-600">Incomplete</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Assessment Results</span>
                <span className="text-sm font-medium text-yellow-600">
                  {user?.assessmentResults ? 'Complete' : 'Not Started'}
                </span>
              </div>
            </div>
            <Link
              to="/profile"
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
            >
              Complete Profile
              <User className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Upcoming Deadlines
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-red-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    University Admission Applications
                  </p>
                  <p className="text-xs text-gray-500">Due: March 15, 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-orange-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Scholarship Applications
                  </p>
                  <p className="text-xs text-gray-500">Due: April 1, 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Entrance Exam Registration
                  </p>
                  <p className="text-xs text-gray-500">Due: May 10, 2024</p>
                </div>
              </div>
            </div>
            <Link
              to="/timeline"
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
            >
              View All Deadlines
              <Calendar className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Recommendations Preview */}
        {user?.assessmentResults?.recommendations && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Your Recommendations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {user.assessmentResults.recommendations.slice(0, 3).map((rec, index) => (
                <div key={index} className="border rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <h4 className="font-medium text-gray-900">{rec.course}</h4>
                  <p className="text-sm text-gray-600 mt-1">{rec.college}</p>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {rec.confidence}% match
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/recommendations"
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
            >
              View All Recommendations
              <Target className="ml-1 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
