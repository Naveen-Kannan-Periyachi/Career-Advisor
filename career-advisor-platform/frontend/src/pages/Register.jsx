import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useForm } from 'react-hook-form';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  MapPin, 
  BookOpen,
  Calendar,
  ArrowRight,
  Sparkles,
  CheckCircle
} from 'lucide-react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const password = watch('password');

  // Academic interest options
  const interestOptions = [
    'Science', 'Mathematics', 'Commerce', 'Arts', 'Vocational', 
    'Sports', 'Technology', 'Languages', 'Other'
  ];

  const onSubmit = async (data) => {
    setIsLoading(true);
    const result = await registerUser(data);
    if (result.success) {
      navigate('/dashboard');
    }
    setIsLoading(false);
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="auth-container">
      {/* Floating Shapes */}
      <div className="auth-floating-shape"></div>
      <div className="auth-floating-shape"></div>
      <div className="auth-floating-shape"></div>
      
      <div className="auth-card" style={{ maxWidth: '500px' }}>
        {/* Logo */}
        <div className="auth-logo">
          <span>CA</span>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 gradient-text">
            Join Career Advisor
          </h2>
          <p className="text-gray-600">
            Start your personalized career journey today
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
              currentStep >= 1 ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {currentStep > 1 ? <CheckCircle className="w-5 h-5" /> : '1'}
            </div>
            <div className={`w-16 h-1 rounded transition-all ${
              currentStep >= 2 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gray-200'
            }`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
              currentStep >= 2 ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {currentStep > 2 ? <CheckCircle className="w-5 h-5" /> : '2'}
            </div>
            <div className={`w-16 h-1 rounded transition-all ${
              currentStep >= 3 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gray-200'
            }`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
              currentStep >= 3 ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              3
            </div>
          </div>
        </div>
        
        <form className="auth-stagger-container" onSubmit={handleSubmit(onSubmit)}>
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-4">
              {/* Name Field */}
              <div className="auth-form-group auth-stagger-item">
                <input
                  {...register('name', {
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters'
                    }
                  })}
                  type="text"
                  className="auth-form-input"
                  placeholder="Enter your full name"
                />
                <label className="auth-floating-label">Full Name</label>
                <User className="auth-input-icon h-5 w-5" />
                {errors.name && (
                  <div className="auth-error">
                    <span>{errors.name.message}</span>
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div className="auth-form-group auth-stagger-item">
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  className="auth-form-input"
                  placeholder="Enter your email"
                />
                <label className="auth-floating-label">Email Address</label>
                <Mail className="auth-input-icon h-5 w-5" />
                {errors.email && (
                  <div className="auth-error">
                    <span>{errors.email.message}</span>
                  </div>
                )}
              </div>

              {/* Phone Field */}
              <div className="auth-form-group auth-stagger-item">
                <input
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: 'Please enter a valid 10-digit phone number'
                    }
                  })}
                  type="tel"
                  className="auth-form-input"
                  placeholder="Enter your phone number"
                />
                <label className="auth-floating-label">Phone Number</label>
                <Phone className="auth-input-icon h-5 w-5" />
                {errors.phone && (
                  <div className="auth-error">
                    <span>{errors.phone.message}</span>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={nextStep}
                className="auth-btn auth-stagger-item w-full"
              >
                Continue
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          )}

          {/* Step 2: Personal Details */}
          {currentStep === 2 && (
            <div className="space-y-4">
              {/* Age & Gender Row */}
              <div className="grid grid-cols-2 gap-4 auth-stagger-item">
                <div className="auth-form-group">
                  <input
                    {...register('age', {
                      required: 'Age is required',
                      min: { value: 13, message: 'Minimum age is 13' },
                      max: { value: 30, message: 'Maximum age is 30' }
                    })}
                    type="number"
                    className="auth-form-input"
                    placeholder="Age"
                  />
                  <label className="auth-floating-label">Age</label>
                  <Calendar className="auth-input-icon h-5 w-5" />
                  {errors.age && (
                    <div className="auth-error">
                      <span>{errors.age.message}</span>
                    </div>
                  )}
                </div>

                <div className="auth-form-group">
                  <select
                    {...register('gender', { required: 'Please select your gender' })}
                    className="auth-select"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer_not_to_say">Prefer not to say</option>
                  </select>
                  {errors.gender && (
                    <div className="auth-error">
                      <span>{errors.gender.message}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Location Field */}
              <div className="auth-form-group auth-stagger-item">
                <input
                  {...register('location', { required: 'Location is required' })}
                  type="text"
                  className="auth-form-input"
                  placeholder="Enter your city/town"
                />
                <label className="auth-floating-label">Location</label>
                <MapPin className="auth-input-icon h-5 w-5" />
                {errors.location && (
                  <div className="auth-error">
                    <span>{errors.location.message}</span>
                  </div>
                )}
              </div>

              {/* Class Field */}
              <div className="auth-form-group auth-stagger-item">
                <select
                  {...register('class', { required: 'Please select your class' })}
                  className="auth-select"
                >
                  <option value="">Select your current class</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                  <option value="UG">Undergraduate</option>
                  <option value="PG">Postgraduate</option>
                </select>
                {errors.class && (
                  <div className="auth-error">
                    <span>{errors.class.message}</span>
                  </div>
                )}
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="auth-btn-secondary flex-1"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="auth-btn flex-1"
                >
                  Continue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Academic & Security */}
          {currentStep === 3 && (
            <div className="space-y-4">
              {/* Role & Stream Row */}
              <div className="grid grid-cols-2 gap-4 auth-stagger-item">
                <div className="auth-form-group">
                  <select
                    {...register('role', { required: 'Please select your role' })}
                    className="auth-select"
                  >
                    <option value="">I am a</option>
                    <option value="student">Student</option>
                    <option value="parent">Parent</option>
                    <option value="counselor">Counselor</option>
                  </select>
                  {errors.role && (
                    <div className="auth-error">
                      <span>{errors.role.message}</span>
                    </div>
                  )}
                </div>

                <div className="auth-form-group">
                  <select
                    {...register('preferredStream', { required: 'Please select your preferred stream' })}
                    className="auth-select"
                  >
                    <option value="">Preferred stream</option>
                    <option value="science">Science</option>
                    <option value="commerce">Commerce</option>
                    <option value="arts">Arts</option>
                    <option value="vocational">Vocational</option>
                    <option value="not_sure">Not Sure</option>
                  </select>
                  {errors.preferredStream && (
                    <div className="auth-error">
                      <span>{errors.preferredStream.message}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Academic Interests */}
              <div className="auth-form-group auth-stagger-item">
                <select
                  {...register('interests', { required: 'Please select at least one interest' })}
                  multiple
                  className="auth-select"
                  style={{ minHeight: '4rem' }}
                >
                  {interestOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <label className="auth-floating-label">Academic Interests (hold Ctrl to select multiple)</label>
                <BookOpen className="auth-input-icon h-5 w-5" />
                {errors.interests && (
                  <div className="auth-error">
                    <span>{errors.interests.message}</span>
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div className="auth-form-group auth-stagger-item">
                <input
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    }
                  })}
                  type={showPassword ? 'text' : 'password'}
                  className="auth-form-input"
                  placeholder="Create a password"
                />
                <label className="auth-floating-label">Password</label>
                <Lock className="auth-input-icon h-5 w-5" />
                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
                {errors.password && (
                  <div className="auth-error">
                    <span>{errors.password.message}</span>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="auth-form-group auth-stagger-item">
                <input
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: value => value === password || 'Passwords do not match'
                  })}
                  type="password"
                  className="auth-form-input"
                  placeholder="Confirm your password"
                />
                <label className="auth-floating-label">Confirm Password</label>
                <Lock className="auth-input-icon h-5 w-5" />
                {errors.confirmPassword && (
                  <div className="auth-error">
                    <span>{errors.confirmPassword.message}</span>
                  </div>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start mb-6 auth-stagger-item">
                <div className="auth-checkbox">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                  />
                  <div className="auth-checkbox-custom"></div>
                </div>
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the{' '}
                  <Link to="/terms" className="text-blue-600 hover:text-blue-500 font-medium">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-blue-600 hover:text-blue-500 font-medium">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="auth-btn-secondary flex-1"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="auth-btn flex-1"
                >
                  {isLoading && <div className="auth-loading"></div>}
                  {isLoading ? 'Creating...' : 'Create Account'}
                  {!isLoading && <Sparkles className="ml-2 h-5 w-5" />}
                </button>
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="auth-divider auth-stagger-item">
            <span>Already have an account?</span>
          </div>

          {/* Login Link */}
          <Link
            to="/login"
            className="auth-btn-secondary auth-stagger-item"
          >
            <ArrowRight className="mr-2 h-5 w-5" />
            Sign in instead
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
