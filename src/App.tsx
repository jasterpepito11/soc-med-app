import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {Login } from './components';
import { Home } from './container';

function App() {
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  console.log(googleClientId);
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<Home />} />
    </Routes>
    </GoogleOAuthProvider>
  )
}

export default App
