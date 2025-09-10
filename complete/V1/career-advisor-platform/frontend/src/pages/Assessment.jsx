import { useState } from 'react';
import { Brain, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const assessmentSteps = [
    {
      title: 'Aptitude Assessment',
      description: 'Test your verbal, numerical, spatial, and logical reasoning abilities',
      duration: '15 minutes',
      questions: 20
    },
    {
      title: 'Personality Assessment',
      description: 'Discover your personality traits and behavioral patterns',
      duration: '10 minutes',
      questions: 15
    },
    {
      title: 'Interest Assessment',
      description: 'Identify your interests and career preferences',
      duration: '10 minutes',
      questions: 12
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="mx-auto h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Career Assessment
          </h1>
          <p className="text-lg text-gray-600">
            Discover your strengths, interests, and personality to find the perfect career path
          </p>
        </div>

        {/* Assessment Overview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Assessment Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {assessmentSteps.map((step, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center text-white font-bold ${
                    index <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
                  }`}>
                    {index < currentStep ? <CheckCircle className="h-5 w-5" /> : index + 1}
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{step.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{step.questions} questions</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Instructions
          </h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
              <span>Answer all questions honestly for accurate results</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
              <span>There are no right or wrong answers</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
              <span>Take your time to think about each question</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
              <span>You can pause and resume the assessment at any time</span>
            </li>
          </ul>
        </div>

        {/* Start Button */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
            Start Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Estimated total time: 35 minutes
          </p>
        </div>

        {/* Previous Results */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Previous Assessment Results
          </h3>
          <div className="text-center py-8">
            <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              No previous assessments found. Complete your first assessment to see results here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
