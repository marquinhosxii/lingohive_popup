"use client";
import { useEffect, useState } from "react";

export default function Result() {
  const [score, setScore] = useState(0);
  const [player, setPlayer] = useState<any>(null);

  useEffect(() => {
    const savedScore = localStorage.getItem("score");
    const savedPlayer = localStorage.getItem("player");
    if (savedScore) setScore(parseInt(savedScore));
    if (savedPlayer) setPlayer(JSON.parse(savedPlayer));
  }, []);

  const level = score <= 1 ? "Beginner" : "Intermediate"; // lógica simple

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Results</h1>
      {player && <div>{player.avatar} {player.name}</div>}
      <p>Score: {score}</p>
      <p>Level: {level}</p>
    </div>
  );
}
