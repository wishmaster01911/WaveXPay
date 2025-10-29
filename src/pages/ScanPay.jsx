import React from 'react'
import QRScannerMock from '../components/QRScannerMock'
import AnimatedPage from '../components/AnimatedPage'


export default function ScanPay({ navigate }){
function onScan(result){
alert('Scanned: ' + result);
navigate('send');
}


return (
<AnimatedPage>
<div className="mt-4">
<div className="bg-white p-4 rounded-2xl shadow">
<div className="font-semibold mb-2">Scan QR to Pay</div>
<QRScannerMock onScan={onScan} />
</div>
</div>
</AnimatedPage>
)
}