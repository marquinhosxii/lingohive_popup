"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Player = {
  avatar: string;
  name: string;
};

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("😀");

  const startQuiz = () => {
    const trimmedName = name.trim();
    if (!trimmedName) return alert("Please enter your name");

    const player: Player = { avatar, name: trimmedName };
    localStorage.setItem("player", JSON.stringify(player));
    router.push("/quiz");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Welcome to LingoHive Quiz</h1>
      <input
        className="border p-2"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* This could be replaced with a real avatar picker */}
      <input
        className="border p-2"
        type="text"
        placeholder="Choose avatar"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <button
        onClick={startQuiz}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Start Quiz
      </button>
    </div>
  );
}
