import React from 'react'

export default function OffersCarousel({ offers }){
  return (
    <div className="flex gap-3 overflow-x-auto py-2">
      {offers.map(o => (
        <div key={o.id} className="min-w-[220px] bg-gradient-to-r from-emerald-400 to-indigo-500 text-white p-4 rounded-2xl shadow">
          <div className="font-bold">{o.title}</div>
          <div className="text-sm mt-1">{o.desc}</div>
        </div>
      ))}
    </div>
  )
}
