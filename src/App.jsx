import React, { useState } from 'react';
import Home from './pages/Home';
import SendMoney from './pages/SendMoney';
import ScanPay from './pages/ScanPay';
import Wallet from './pages/Wallet';
import Passbook from './pages/Passbook';
import Rewards from './pages/Rewards';
import Offers from './pages/Offers';
import { useAuth } from './context/AuthContext';
import Login from './auth/Login';


export default function App() {
  const [screen, setScreen] = useState('home');
  const { user } = useAuth();

  if (!user) return <Login onLogin={() => setScreen('home')} />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-4">
      <div className="max-w-md mx-auto">
        {screen === 'home' && <Home navigate={setScreen} />}
        {screen === 'send' && <SendMoney navigate={setScreen} />}
        {screen === 'scan' && <ScanPay navigate={setScreen} />}
        {screen === 'wallet' && <Wallet navigate={setScreen} />}
        {screen === 'passbook' && <Passbook navigate={setScreen} />}
        {screen === 'rewards' && <Rewards navigate={setScreen} />}
        {screen === 'offers' && <Offers navigate={setScreen} />}

        <nav className="fixed bottom-6 left-0 right-0 flex justify-center">
          <div className="bg-white px-4 py-2 rounded-3xl shadow flex gap-3">
            <button
              onClick={() => setScreen('home')}
              className={`px-3 py-2 rounded ${screen === 'home' ? 'bg-indigo-600 text-white' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => setScreen('send')}
              className={`px-3 py-2 rounded ${screen === 'send' ? 'bg-indigo-600 text-white' : ''}`}
            >
              Send
            </button>
            <button
              onClick={() => setScreen('scan')}
              className={`px-3 py-2 rounded ${screen === 'scan' ? 'bg-indigo-600 text-white' : ''}`}
            >
              Scan
            </button>
            <button
              onClick={() => setScreen('wallet')}
              className={`px-3 py-2 rounded ${screen === 'wallet' ? 'bg-indigo-600 text-white' : ''}`}
            >
              Wallet
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
