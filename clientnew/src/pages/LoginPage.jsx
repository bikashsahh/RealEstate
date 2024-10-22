import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { GoogleLogin } from '@react-oauth/google';

import ProfilePage from './ProfilePage';
import { useAuth } from '../../hooks';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [redirect, setRedirect] = useState(false);
  const auth = useAuth();

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await auth.login(formData);
    if (response.success) {
      toast.success(response.message);
      setRedirect(true);
    } else {
      toast.error(response.message);
    }
  };

  const handleGoogleLogin = async (credential) => {
    const response = await auth.googleLogin(credential);
    if (response.success) {
      toast.success(response.message);
      setRedirect(true);
    } else {
      toast.error(response.message);
    }
  };

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  if (auth.user) {
    return <ProfilePage />;
  }

  return (
    <div className="mt-4 flex grow items-center justify-around p-4 md:p-0 bg-beige-100">
      <div className="mb-40 bg-white p-6 shadow-md rounded-md">
        <h1 className="mb-4 text-center text-4xl font-bold text-green-600">ApnaNiwas</h1>
        <h2 className="mb-6 text-center text-xl text-gray-700">Welcome Back</h2>
        <form className="mx-auto max-w-md" onSubmit={handleFormSubmit}>
          <input
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleFormData}
            className="w-full mb-4 p-2 border border-gray-300 rounded-md"
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            value={formData.password}
            onChange={handleFormData}
            className="w-full mb-6 p-2 border border-gray-300 rounded-md"
          />
          <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Login</button>
        </form>

        {/* Uncomment if Google login is to be used */}
        {/* <div className="my-6 flex w-full items-center gap-4">
          <div className="h-0 w-1/2 border-[1px] border-gray-300"></div>
          <p className="text-sm text-gray-500">or</p>
          <div className="h-0 w-1/2 border-[1px] border-gray-300"></div>
        </div>
        
        <div className="flex h-[50px] justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              handleGoogleLogin(credentialResponse.credential);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            text="continue_with"
            width="350"
          />
        </div> */}

        <div className="py-4 text-center text-gray-600">
          Don't have an account yet?{' '}
          <Link className="text-green-600 underline" to={'/register'}>
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
