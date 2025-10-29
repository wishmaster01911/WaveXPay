import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext();

export function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const raw = localStorage.getItem('wavexpay_user');
    if(raw) setUser(JSON.parse(raw));
  },[]);

  function loginMock({ phone, name }){
    setLoading(true);
    const u = { id: phone || 'demo', name: name || 'Aarav', phone };
    localStorage.setItem('wavexpay_user', JSON.stringify(u));
    setTimeout(()=>{ setUser(u); setLoading(false); }, 700);
  }

  function logout(){
    localStorage.removeItem('wavexpay_user');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, loginMock, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = ()=> useContext(AuthContext)
