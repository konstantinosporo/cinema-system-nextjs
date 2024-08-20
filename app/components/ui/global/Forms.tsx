'use client';
import { useState } from 'react';
import axios from 'axios';

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '' // Only for sign-up
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [apiError, setApiError] = useState('');
  const [apiMessage, setApiMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({
      email: '',
      password: '',
      name: ''
    });
    setApiError('');
    setApiMessage('');

    try {
      if (isSignUp) {
        // Sign Up API call
        await axios.post('/api/auth/signup', formData);
        setApiMessage('Sign Up successful!');
      } else {
        // Sign In API call
        try {
          const response = await axios.post('/api/auth/signin', formData);

          // Assuming the successful response contains a message
          if (response.status === 200) {
            setApiMessage(response.data.message || 'Sign In successful!HARDCODE');
          }
        } catch (error:any) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            setApiMessage(error.response.data.error || 'An error occurred during sign in');
          } else if (error.request) {
            // The request was made but no response was received
            setApiMessage('No response received from the server.');
          } else {
            // Something happened in setting up the request that triggered an Error
            setApiMessage('Error in setting up the request.');
          }
        }

      }
    } catch (error: any) {
      if (error.response) {
        // API error response handling
        setApiError(error.response.data.error || 'Something went wrong!');
      } else {
        setApiError('Network error. Please try again.');
      }
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="example@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="********"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          {apiError && <p className="text-red-500 text-sm mb-4">{apiError}</p>}
          {apiMessage && <p className="text-green-500 text-sm mb-4">{apiMessage}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={toggleForm}
            className="text-blue-500 hover:underline"
          >
            {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
