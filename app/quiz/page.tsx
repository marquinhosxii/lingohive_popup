"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  {
    question: "What is the past tense of 'go'?",
    options: ["goes", "goed", "went", "gone"],
    answer: 2
  },
  {
    question: "Choose the correct sentence:",
    options: [
      "She don’t like apples",
      "She doesn’t like apples",
      "She not like apples",
      "She isn’t like apples"
    ],
    answer: 1
  }
  // Add more questions here
];

export default function Quiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (i: number) => {
    if (i === questions[current].answer) {
      setScore((prev) => prev + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      localStorage.setItem("score", (i === questions[current].answer ? score + 1 : score).toString());
      router.push("/result");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2 className="text-xl">{questions[current].question}</h2>
      {questions[current].options.map((opt, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(i)}
          className="border p-2 w-64 hover:bg-gray-100"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
