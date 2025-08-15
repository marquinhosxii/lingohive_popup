"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("🐱");

  const handleStart = () => {
    localStorage.setItem("player", JSON.stringify({ name, email, avatar }));
    router.push("/quiz");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">English Level Test</h1>

      <input
        className="border p-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        className="border p-2"
      >
        <option>🐱</option>
        <option>🐶</option>
        <option>🦊</option>
        <option>🐼</option>
      </select>

      <button
        onClick={handleStart}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Start Quiz
      </button>
    </div>
  );
}
