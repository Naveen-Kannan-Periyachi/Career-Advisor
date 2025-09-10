import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const result = await login(data.email, data.password);
    if (result.success) {
      navigate('/dashboard');
    }
    setIsLoading(false);
  };

  return (
    <div className="auth-container">
      {/* Floating Shapes */}
      <div className="auth-floating-shape"></div>
      <div className="auth-floating-shape"></div>
      <div className="auth-floating-shape"></div>
      
      <div className="auth-card">
        {/* Logo */}
        <div className="auth-logo">
          <span>CA</span>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 gradient-text">
            Welcome Back
          </h2>
          <p className="text-gray-600">
            Sign in to continue your career journey
          </p>
        </div>
        
        <form className="auth-stagger-container" onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="Enter your password"
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

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-6 auth-stagger-item">
            <div className="flex items-center">
              <div className="auth-checkbox">
                <input id="remember-me" name="remember-me" type="checkbox" />
                <div className="auth-checkbox-custom"></div>
              </div>
              <label htmlFor="remember-me" className="text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <Link
              to="/forgot-password"
              className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="auth-btn auth-stagger-item mb-4"
          >
            {isLoading && <div className="auth-loading"></div>}
            {isLoading ? 'Signing in...' : 'Sign in'}
            {!isLoading && <ArrowRight className="ml-2 h-5 w-5" />}
          </button>

          {/* Divider */}
          <div className="auth-divider auth-stagger-item">
            <span>New to Career Advisor?</span>
          </div>

          {/* Register Link */}
          <Link
            to="/register"
            className="auth-btn-secondary auth-stagger-item"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Create your account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
