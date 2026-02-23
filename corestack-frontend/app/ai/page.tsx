"use client";

import { useState } from "react";
import axios from "axios";

type Chat = {
  role: string;
  text: string;
};

export default function AIPage() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (!user?.token) {
      alert("Login first");
      return;
    }

    setChat((prev) => [...prev, { role: "user", text: message }]);
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5050/api/ai/chat",
        { message },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setChat((prev) => [
        ...prev,
        { role: "ai", text: res.data.reply },
      ]);

      setMessage("");
    } catch (error) {
      console.log(error);
      alert("AI error (check backend)");
    }

    setLoading(false);
  };

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">🤖 AI Assistant</h1>

      <div className="bg-zinc-900 p-6 rounded-xl h-[400px] overflow-y-auto mb-4">
        {chat.length === 0 && (
          <p className="text-zinc-500">Ask anything...</p>
        )}

        {chat.map((c, i) => (
          <div key={i} className="mb-4">
            <p className="text-sm text-zinc-400">
              {c.role === "user" ? "You" : "AI"}
            </p>
            <p>{c.text}</p>
          </div>
        ))}

        {loading && <p className="text-zinc-400">AI typing...</p>}
      </div>

      <div className="flex gap-3">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask AI..."
          className="flex-1 p-3 rounded-lg bg-zinc-900 border border-zinc-700"
        />

        <button
          onClick={sendMessage}
          className="bg-white text-black px-6 rounded-lg font-bold"
        >
          Send
        </button>
      </div>
    </div>
  );
}