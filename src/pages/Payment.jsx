import React, { useState } from "react";
import { useWallet } from "../hooks/useWallet";

export default function Payment({ navigate }) {
  const [amount, setAmount] = useState(100);
  const [to, setTo] = useState("Merchant XYZ");
  const { pay } = useWallet();

  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate("home")} className="text-sm text-slate-500">← Back</button>
        <div className="font-semibold">Make a payment</div>
        <div />
      </div>

      <input
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="w-full border rounded-lg p-3 mb-3"
        placeholder="Pay to"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(+e.target.value)}
        className="w-full border rounded-lg p-3 mb-4"
        placeholder="Amount ₹"
      />
      <button
        onClick={() => {
          pay(amount);
          alert(`Paid ₹${amount} to ${to}`);
          navigate("home");
        }}
        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold"
      >
        Pay ₹{amount}
      </button>
    </div>
  );
}
