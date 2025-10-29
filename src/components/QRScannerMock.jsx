import React, { useState } from 'react'

export default function QRScannerMock({ onScan }){
  const [text, setText] = useState('upi://pay?pa=merchant@upi&pn=Merchant');
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <div className="mb-3 text-sm text-slate-500">Simulated QR Scanner</div>
      <textarea value={text} onChange={e=>setText(e.target.value)} className="w-full p-3 border rounded mb-3" rows={3} />
      <div className="flex gap-2">
        <button onClick={()=>onScan(text)} className="flex-1 bg-indigo-600 text-white py-2 rounded">Use QR</button>
      </div>
    </div>
  )
}
