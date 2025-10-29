import React, { useState } from 'react'
import { useWallet } from '../context/WalletContext'
import AnimatedPage from '../components/AnimatedPage'


export default function SendMoney({ navigate }){
const [to, setTo] = useState('');
const [amount, setAmount] = useState(100);
const { pay } = useWallet();


return (
<AnimatedPage>
<div className="bg-white p-5 rounded-2xl shadow">
<div className="flex items-center justify-between mb-4">
<button onClick={()=>navigate('home')} className="text-sm text-slate-500">← Back</button>
<div className="font-semibold">Send Money</div>
<div />
</div>


<input value={to} onChange={e=>setTo(e.target.value)} placeholder="UPI ID / Mobile / VPA" className="w-full border rounded p-3 mb-3" />
<input type="number" value={amount} onChange={e=>setAmount(+e.target.value)} className="w-full border rounded p-3 mb-4" />


<button onClick={()=>{ pay(amount); alert(`Sent ₹${amount} to ${to}`); navigate('home'); }} className="w-full bg-indigo-600 text-white py-3 rounded">Send ₹{amount}</button>
</div>
</AnimatedPage>
)
}