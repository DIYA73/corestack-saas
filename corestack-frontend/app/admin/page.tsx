"use client";
import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: string;
  email: string;
  role: string;
  plan: string;
};

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5050/api/admin/users"
        );
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">🔥 Admin Panel</h1>

      <div className="bg-zinc-900 p-6 rounded-xl">
        {users.length === 0 && <p>No users</p>}

        {users.map((u) => (
          <div key={u.id} className="border-b border-zinc-700 py-3">
            {u.email} — {u.plan}
          </div>
        ))}
      </div>
    </div>
  );
}