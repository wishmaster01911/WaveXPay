import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Login({ onLogin }) {
  const [phone, setPhone] = useState('');
  const { loginMock } = useAuth();

  function handleLogin() {
    loginMock({ phone, name: 'Aarav' });
    onLogin(); 
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-2">WaveXPay</h2>
          <p className="text-sm text-slate-500 mb-4">Enter your phone to continue</p>
          <input
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="Phone (e.g. 9000000000)"
            className="w-full border rounded p-3 mb-3"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-indigo-600 text-white py-3 rounded"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
