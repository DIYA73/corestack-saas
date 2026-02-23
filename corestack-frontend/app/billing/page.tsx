"use client";
import axios from "axios";

export default function BillingPage() {
  const upgrade = async () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const res = await axios.post(
      "http://localhost:5050/api/stripe/checkout",
      {},
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    window.location.href = res.data.url;
  };

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-6">💳 Upgrade to Pro</h1>

      <div className="bg-zinc-900 p-6 rounded-xl w-[400px]">
        <h2 className="text-xl mb-2">Pro Plan</h2>
        <p className="text-zinc-400 mb-4">$10/month</p>

        <button
          onClick={upgrade}
          className="bg-green-500 px-6 py-3 rounded-lg font-bold"
        >
          Upgrade Now 🚀
        </button>
      </div>
    </div>
  );
}