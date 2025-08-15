"use client";
import { useEffect, useState } from "react";

type Player = {
  avatar: string;
  name: string;
};

export default function Result() {
  const [score, setScore] = useState(0);
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    const savedScore = localStorage.getItem("score");
    const savedPlayer = localStorage.getItem("player");

    if (savedScore) setScore(parseInt(savedScore));
    if (savedPlayer) {
      try {
        const parsed: unknown = JSON.parse(savedPlayer);
        if (
          typeof parsed === "object" &&
          parsed !== null &&
          "avatar" in parsed &&
          "name" in parsed
        ) {
          setPlayer(parsed as Player);
        }
      } catch {
        console.error("Invalid player data in localStorage");
      }
    }
  }, []);

  const level = score <= 1 ? "Beginner" : "Intermediate";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Results</h1>
      {player && (
        <div>
          {player.avatar} {player.name}
        </div>
      )}
      <p>Score: {score}</p>
      <p>Level: {level}</p>
    </div>
  );
}
