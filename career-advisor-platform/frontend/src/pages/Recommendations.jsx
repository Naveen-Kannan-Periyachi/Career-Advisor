import { useAuth } from '../context/AuthContext';
import { Target, TrendingUp, MapPin, BookOpen, Star, ArrowRight, CheckCircle } from 'lucide-react';

const Recommendations = () => {
  const { user } = useAuth();

  // Mock recommendations - in real app, this would come from API
  const recommendations = {
    courses: [
      {
        id: 1,
        name: 'Bachelor of Science in Computer Science',
        stream: 'Science',
        matchScore: 92,
        reasoning: 'Your high logical and numerical aptitude makes you perfect for computer science',
        careerPaths: ['Software Engineer', 'Data Scientist', 'AI/ML Engineer'],
        salaryRange: { min: 600000, max: 2000000 }
      },
      {
        id: 2,
        name: 'Bachelor of Commerce',
        stream: 'Commerce',
        matchScore: 78,
        reasoning: 'Your analytical skills and attention to detail align well with commerce',
        careerPaths: ['Accountant', 'Financial Analyst', 'Business Consultant'],
        salaryRange: { min: 400000, max: 1200000 }
      }
    ],
    colleges: [
      {
        id: 1,
        name: 'Delhi University',
        location: 'New Delhi',
        distance: '5 km',
        matchScore: 88,
        courses: ['B.Sc. Computer Science', 'B.Com'],
        facilities: ['Library', 'Hostel', 'WiFi', 'Transport'],
        rating: 4.5
      },
      {
        id: 2,
        name: 'Jawaharlal Nehru University',
        location: 'New Delhi',
        distance: '12 km',
        matchScore: 85,
        courses: ['B.Sc. Computer Science', 'B.A. Economics'],
        facilities: ['Library', 'Hostel', 'WiFi'],
        rating: 4.7
      }
    ],
    careerPaths: [
      {
        title: 'Software Engineer',
        industry: 'Technology',
        matchScore: 90,
        salaryRange: { min: 600000, max: 2000000 },
        growthProspects: 'High',
        requiredSkills: ['Programming', 'Problem Solving', 'Logical Thinking'],
        companies: ['Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys']
      },
      {
        title: 'Data Analyst',
        industry: 'Analytics',
        matchScore: 85,
        salaryRange: { min: 400000, max: 1200000 },
        growthProspects: 'High',
        requiredSkills: ['Statistics', 'Data Visualization', 'Critical Thinking'],
        companies: ['Deloitte', 'PwC', 'EY', 'KPMG', 'Accenture']
      }
    ]
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getGrowthColor = (growth) => {
    switch (growth) {
      case 'High': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 animate-fadeInUp">Personalized Recommendations</h1>
          <p className="text-lg text-gray-600">
            Based on your assessment results and preferences
          </p>
        </div>

        {!user?.assessmentResults ? (
          <div className="glass p-8 rounded-2xl shadow-xl text-center animate-fadeInUp">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Your Assessment First</h2>
            <p className="text-gray-600 mb-6">
              Take our comprehensive assessment to get personalized recommendations for courses, colleges, and career paths.
            </p>
            <button className="btn-animated bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-blue-600 transition inline-flex items-center">
              Take Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Assessment Summary */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Your Assessment Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">85%</div>
                  <div className="text-sm text-gray-600">Logical Reasoning</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">78%</div>
                  <div className="text-sm text-gray-600">Numerical Ability</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">82%</div>
                  <div className="text-sm text-gray-600">Verbal Ability</div>
                </div>
              </div>
            </div>

            {/* Course Recommendations */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Recommended Courses
              </h2>
              <div className="space-y-6">
                {recommendations.courses.map(course => (
                  <div key={course.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {course.name}
                        </h3>
                        <div className="flex items-center text-sm text-gray-600">
                          <BookOpen className="h-4 w-4 mr-1" />
                          <span>{course.stream}</span>
                        </div>
                      </div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(course.matchScore)}`}>
                        {course.matchScore}% match
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{course.reasoning}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Career Paths:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.careerPaths.map((path, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            {path}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span>₹{course.salaryRange.min.toLocaleString()} - ₹{course.salaryRange.max.toLocaleString()}/year</span>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* College Recommendations */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Recommended Colleges
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendations.colleges.map(college => (
                  <div key={college.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {college.name}
                        </h3>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{college.location} • {college.distance}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm font-medium">{college.rating}</span>
                        </div>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(college.matchScore)}`}>
                          {college.matchScore}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Available Courses:</h4>
                      <div className="flex flex-wrap gap-1">
                        {college.courses.map((course, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Facilities:</h4>
                      <div className="flex flex-wrap gap-1">
                        {college.facilities.map((facility, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Path Recommendations */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Recommended Career Paths
              </h2>
              <div className="space-y-6">
                {recommendations.careerPaths.map((career, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {career.title}
                        </h3>
                        <div className="text-sm text-gray-600">{career.industry}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getGrowthColor(career.growthProspects)}`}>
                          {career.growthProspects} Growth
                        </span>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(career.matchScore)}`}>
                          {career.matchScore}% match
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {career.requiredSkills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Top Companies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {career.companies.map((company, companyIndex) => (
                          <span key={companyIndex} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span>₹{career.salaryRange.min.toLocaleString()} - ₹{career.salaryRange.max.toLocaleString()}/year</span>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Ready to Take Action?
              </h3>
              <p className="text-blue-700 mb-4">
                Save your recommendations and start planning your educational journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Save Recommendations
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Download Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
