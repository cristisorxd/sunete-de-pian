import { useState } from "react";
import questions from "@/lib/questions";
import QuizOption from "@/components/quiz-option/quiz-option";
import { Progress } from "@/components/ui/progress";

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption: string) => {
    const correctAnswer = questions[currentQuestion].correct_answer;
    const points = questions[currentQuestion].points;

    if (selectedOption === correctAnswer) {
      setScore(score + points);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Test finalizat! Ai obținut ${score} puncte.`);
    }
  };
  return (
    <div className="flex flex-col">
      {currentQuestion + 1} / 15
      <Progress value={currentQuestion / 15 * 100}/>
      <h1 className="text-2xl text-amber-900 mb-5">{questions[currentQuestion].question}</h1>
      <div className="flex flex-col gap-2">
        {questions[currentQuestion].options.map((option) => (
          // <button key={option} onClick={() => handleAnswer(option)}>
            <QuizOption option={option} onClick={() => handleAnswer(option)} correctAnswer={questions[currentQuestion].correct_answer}/>
         
        ))}
      </div>
      <div>
        <p>Punctaj: {score}</p>
      </div>
    </div>
  );
};

export default Game;
