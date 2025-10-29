import React, { useState } from "react";
import { useWallet } from "../hooks/useWallet";

export default function Recharge({ navigate }) {
  const [amount, setAmount] = useState(199);
  const [provider, setProvider] = useState("Jio Prepaid");
  const { pay } = useWallet();

  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate("home")} className="text-sm text-slate-500">← Back</button>
        <div className="font-semibold">Mobile Recharge</div>
        <div />
      </div>

      <input
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
        className="w-full border rounded-lg p-3 mb-3"
        placeholder="Operator"
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
          alert(`Recharged ₹${amount} for ${provider}`);
          navigate("home");
        }}
        className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold"
      >
        Recharge ₹{amount}
      </button>
    </div>
  );
}
