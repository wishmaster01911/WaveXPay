import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function Header(){
  const { user, logout } = useAuth();
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">W</div>
        <div>
          <div className="text-sm font-semibold">WaveXPay</div>
          <div className="text-xs text-slate-500">Secure · Fast</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {user ? (
          <div className="text-sm text-right">
            <div className="font-medium">{user.name}</div>
            <div className="text-xs text-slate-500">{user.phone}</div>
          </div>
        ) : (
          <div className="text-xs text-slate-500">Guest</div>
        )}
        {user && (
          <button onClick={logout} className="px-3 py-1 border rounded">Logout</button>
        )}
      </div>
    </header>
  )
}
