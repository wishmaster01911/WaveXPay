import React, { createContext, useContext, useState } from 'react'

const WalletContext = createContext();

export function WalletProvider({ children }){
  const [balance, setBalance] = useState(()=>{
    const raw = localStorage.getItem('wavexpay_wallet');
    return raw ? Number(raw) : 542.75;
  });

  function sync(b){ setBalance(b); localStorage.setItem('wavexpay_wallet', String(b)); }

  function pay(amount){ sync(+(balance - amount).toFixed(2)); }
  function addMoney(amount){ sync(+(balance + amount).toFixed(2)); }

  return (
    <WalletContext.Provider value={{ balance, pay, addMoney }}>
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = ()=> useContext(WalletContext)
