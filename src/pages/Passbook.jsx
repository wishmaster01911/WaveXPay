import React from 'react'
import AnimatedPage from '../components/AnimatedPage'


const MOCK_TX = [
{ id:1, type:'debit', title:'Sent to Merchant', amount:199, date:'2025-10-20' },
{ id:2, type:'credit', title:'Cashback', amount:20, date:'2025-10-19' },
{ id:3, type:'debit', title:'Recharge', amount:199, date:'2025-10-12' },
]


export default function Passbook(){
return (
<AnimatedPage>
<div className="bg-white p-4 rounded-2xl shadow">
<div className="font-semibold mb-3">Transactions</div>
<div className="flex flex-col gap-3">
{MOCK_TX.map(tx=> (
<div key={tx.id} className="flex justify-between items-center">
<div>
<div className="font-medium">{tx.title}</div>
<div className="text-xs text-slate-400">{tx.date}</div>
</div>
<div className={`${tx.type==='credit'? 'text-emerald-600':'text-rose-600'}`}>{tx.type==='credit'? `+₹${tx.amount}`:`-₹${tx.amount}`}</div>
</div>
))}
</div>
</div>
</AnimatedPage>
)
}