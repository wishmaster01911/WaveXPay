import React, { useState } from 'react'
import { useWallet } from '../context/WalletContext'
import AnimatedPage from '../components/AnimatedPage'


export default function Wallet({ navigate }){
const { balance, addMoney } = useWallet();
const [amt, setAmt] = useState(500);


return (
<AnimatedPage>
<div className="bg-white p-4 rounded-2xl shadow">
<div className="flex justify-between">
<div>
<div className="text-sm text-slate-500">Wallet</div>
<div className="text-2xl font-bold">₹{balance}</div>
</div>
<div>
<button onClick={()=>navigate('home')} className="text-sm text-slate-500">Close</button>
</div>
</div>


<div className="mt-4">
<input type="number" value={amt} onChange={e=>setAmt(+e.target.value)} className="w-full border rounded p-3 mb-3" />
<button onClick={()=>{ addMoney(amt); alert('Added ₹'+amt); }} className="w-full bg-emerald-600 text-white py-3 rounded">Add Money</button>
</div>
</div>
</AnimatedPage>
)
}