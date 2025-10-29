import { useEffect, useState } from 'react'
export function useMarketData(){
  const [data, setData] = useState([]);
  useEffect(()=>{
    const mock = [
      { symbol:'NIFTY', value:19845.2, change:32.4 },
      { symbol:'SENSEX', value:65875.8, change:-120.1 }
    ];
    setTimeout(()=> setData(mock), 500);
  },[]);
  return data;
}
