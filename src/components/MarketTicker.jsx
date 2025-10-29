import React from 'react'
import { useMarketData } from '../hooks/useMarketData'

export default function MarketTicker(){
  const data = useMarketData();
  return (
    <div className="flex flex-col gap-2">
      {data.map(d => (
        <div key={d.symbol} className="flex items-center justify-between">
          <div className="font-medium">{d.symbol}</div>
          <div className="text-sm">{d.value.toFixed(2)}</div>
          <div className={`${d.change>=0 ? 'text-emerald-600' : 'text-rose-600'}`}>{d.change>0?`+${d.change}`:d.change}</div>
        </div>
      ))}
    </div>
  )
}
