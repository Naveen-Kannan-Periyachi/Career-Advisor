import { useState } from 'react';
import { BookOpen, Search, Filter, TrendingUp, Users, Award, Clock } from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStream, setSelectedStream] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  // Mock data - in real app, this would come from API
  const courses = [
    {
      id: 1,
      name: 'Bachelor of Arts (B.A.)',
      code: 'BA',
      stream: 'Arts',
      level: 'Undergraduate',
      duration: 3,
      description: 'A comprehensive undergraduate program covering various subjects in humanities and social sciences.',
      subjects: ['English', 'History', 'Political Science', 'Economics', 'Psychology'],
      careerPaths: ['Government Jobs', 'Teaching', 'Journalism', 'Social Work'],
      demand: 'High',
      salaryRange: { min: 300000, max: 800000 }
    },
    {
      id: 2,
      name: 'Bachelor of Science (B.Sc.)',
      code: 'BSC',
      stream: 'Science',
      level: 'Undergraduate',
      duration: 3,
      description: 'A science-focused undergraduate program covering various scientific disciplines.',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'],
      careerPaths: ['Research', 'Teaching', 'Healthcare', 'Technology'],
      demand: 'High',
      salaryRange: { min: 400000, max: 1200000 }
    },
    {
      id: 3,
      name: 'Bachelor of Commerce (B.Com.)',
      code: 'BCOM',
      stream: 'Commerce',
      level: 'Undergraduate',
      duration: 3,
      description: 'A commerce-focused program covering business, accounting, and economics.',
      subjects: ['Accounting', 'Business Studies', 'Economics', 'Statistics', 'Taxation'],
      careerPaths: ['Banking', 'Finance', 'Accounting', 'Business'],
      demand: 'High',
      salaryRange: { min: 350000, max: 1000000 }
    },
    {
      id: 4,
      name: 'Bachelor of Business Administration (BBA)',
      code: 'BBA',
      stream: 'Commerce',
      level: 'Undergraduate',
      duration: 3,
      description: 'A business administration program focusing on management and entrepreneurship.',
      subjects: ['Management', 'Marketing', 'Finance', 'Human Resources', 'Operations'],
      careerPaths: ['Management', 'Entrepreneurship', 'Consulting', 'Sales'],
      demand: 'High',
      salaryRange: { min: 400000, max: 1500000 }
    }
  ];

  const streams = ['Arts', 'Science', 'Commerce'];
  const levels = ['Undergraduate', 'Postgraduate', 'Diploma'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStream = !selectedStream || course.stream === selectedStream;
    const matchesLevel = !selectedLevel || course.level === selectedLevel;
    
    return matchesSearch && matchesStream && matchesLevel;
  });

  const getDemandColor = (demand) => {
    switch (demand) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Degree Programs
          </h1>
          <p className="text-lg text-gray-600">
            Explore various degree programs and their career prospects
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Stream Filter */}
            <div>
              <select
                value={selectedStream}
                onChange={(e) => setSelectedStream(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Streams</option>
                {streams.map(stream => (
                  <option key={stream} value={stream}>{stream}</option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Levels</option>
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {course.name}
                    </h3>
                    <p className="text-sm text-gray-600">{course.code}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDemandColor(course.demand)}`}>
                      {course.demand} Demand
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{course.stream}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{course.duration} years</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Subjects:</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.subjects.map((subject, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Career Paths:</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.careerPaths.map((path, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                        {path}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Salary Range:</h4>
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-sm text-gray-600">
                      ₹{course.salaryRange.min.toLocaleString()} - ₹{course.salaryRange.max.toLocaleString()} per annum
                    </span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No courses found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
