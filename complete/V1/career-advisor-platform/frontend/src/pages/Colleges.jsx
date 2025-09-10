import { useState } from 'react';
import { MapPin, Search, Filter, Star, Users, BookOpen, Wifi, Car } from 'lucide-react';

const Colleges = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedStream, setSelectedStream] = useState('');

  // Mock data - in real app, this would come from API
  const colleges = [
    {
      id: 1,
      name: 'Delhi University',
      type: 'Government',
      location: 'New Delhi, Delhi',
      courses: ['B.A.', 'B.Sc.', 'B.Com.', 'BBA'],
      rating: 4.5,
      students: 50000,
      facilities: ['Library', 'Hostel', 'WiFi', 'Transport'],
      established: 1922
    },
    {
      id: 2,
      name: 'Jawaharlal Nehru University',
      type: 'Government',
      location: 'New Delhi, Delhi',
      courses: ['B.A.', 'B.Sc.', 'B.Tech'],
      rating: 4.7,
      students: 8000,
      facilities: ['Library', 'Hostel', 'WiFi'],
      established: 1969
    },
    {
      id: 3,
      name: 'University of Mumbai',
      type: 'Government',
      location: 'Mumbai, Maharashtra',
      courses: ['B.A.', 'B.Sc.', 'B.Com.', 'BBA', 'B.Tech'],
      rating: 4.3,
      students: 75000,
      facilities: ['Library', 'Hostel', 'WiFi', 'Transport'],
      established: 1857
    }
  ];

  const states = ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'West Bengal'];
  const streams = ['Arts', 'Science', 'Commerce', 'Engineering'];

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = !selectedState || college.location.includes(selectedState);
    const matchesStream = !selectedStream || college.courses.some(course => 
      (selectedStream === 'Arts' && course.includes('B.A.')) ||
      (selectedStream === 'Science' && course.includes('B.Sc.')) ||
      (selectedStream === 'Commerce' && course.includes('B.Com.')) ||
      (selectedStream === 'Engineering' && course.includes('B.Tech'))
    );
    
    return matchesSearch && matchesState && matchesStream;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Government Colleges Directory
          </h1>
          <p className="text-lg text-gray-600">
            Find and explore government colleges across India
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
                  placeholder="Search colleges or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* State Filter */}
            <div>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All States</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
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
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredColleges.length} colleges
          </p>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredColleges.map(college => (
            <div key={college.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {college.name}
                    </h3>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{college.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{college.rating}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {college.type}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Available Courses:</h4>
                  <div className="flex flex-wrap gap-1">
                    {college.courses.map((course, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Facilities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        {facility === 'Library' && <BookOpen className="h-3 w-3 mr-1" />}
                        {facility === 'WiFi' && <Wifi className="h-3 w-3 mr-1" />}
                        {facility === 'Transport' && <Car className="h-3 w-3 mr-1" />}
                        {facility === 'Hostel' && <Users className="h-3 w-3 mr-1" />}
                        <span>{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{college.students.toLocaleString()} students</span>
                  </div>
                  <span>Est. {college.established}</span>
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
        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No colleges found
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

export default Colleges;
