"use client";

export default function Dashboard() {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : null;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">🔥 Dashboard</h1>

      {/* USER CARD */}
      <div className="bg-zinc-900 p-6 rounded-xl mb-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-3">Your Account</h2>
        <p className="text-zinc-400">Email: {user?.email}</p>
        <p className="text-zinc-400">Role: {user?.role}</p>
        <p className="text-zinc-400">Plan: {user?.plan}</p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6">

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-zinc-400">Users</h3>
          <p className="text-3xl font-bold mt-2">1</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-zinc-400">AI Requests</h3>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-zinc-400">Plan</h3>
          <p className="text-3xl font-bold mt-2 text-green-400">
            {user?.plan}
          </p>
        </div>

      </div>
    </div>
  );
}