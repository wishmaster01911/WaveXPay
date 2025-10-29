import React from 'react'
import Header from '../components/Header'
import ServiceCard from '../components/ServiceCard'
import OffersCarousel from '../components/OffersCarousel'
import MarketTicker from '../components/MarketTicker'
import { useOffers } from '../hooks/useOffers'
import { useAuth } from '../context/AuthContext'
import { useWallet } from '../context/WalletContext'


export default function Home({ navigate }){
const offers = useOffers();
const { user } = useAuth();
const { balance } = useWallet();


const services = [
{ id:'send', title:'Send', subtitle:'Transfer money', icon:'💸' },
{ id:'scan', title:'Scan', subtitle:'Scan to Pay', icon:'📷' },
{ id:'add', title:'Add Money', subtitle:'Top-up wallet', icon:'➕' },
{ id:'passbook', title:'Passbook', subtitle:'Transactions', icon:'📒' },
];


return (
<div>
<Header />


<div className="bg-white p-4 rounded-2xl shadow mt-4">
<div className="flex justify-between items-center">
<div>
<div className="text-sm text-slate-500">Hello</div>
<div className="text-lg font-semibold">{user?.name || 'User'}</div>
</div>
<div className="text-right">
<div className="text-xs text-slate-500">Wallet balance</div>
<div className="text-xl font-bold">₹{balance}</div>
</div>
</div>


<div className="mt-4 grid grid-cols-4 gap-3">
{services.map(s => (
<ServiceCard key={s.id} icon={s.icon} title={s.title} subtitle={s.subtitle} onClick={()=>navigate(s.id)} />
))}
</div>
</div>


<div className="mt-4"><OffersCarousel offers={offers} /></div>


<div className="mt-4 bg-white p-4 rounded-2xl shadow"><MarketTicker /></div>
</div>
)
}