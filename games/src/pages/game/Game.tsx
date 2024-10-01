import { useState, useEffect } from "react";
import questionsBeginner from "@/lib/questions-beginner";
import QuizOption from "@/components/quiz-option/quiz-option";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null); 

  useEffect(() => {
    // Proceed to next question after 2 seconds if an option is selected
    if (selectedOption !== null) {
      const timer = setTimeout(() => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questionsBeginner.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setIsFinished(true);
        }
        setIsDisabled(false); 
        setSelectedOption(null); 
      }, 2000);

      return () => clearTimeout(timer); 
    }
  }, [selectedOption, currentQuestion, questionsBeginner.length]);

  const handleAnswer = (selectedOption: string) => {
    setSelectedOption(selectedOption); 
    setIsDisabled(true);

    const correctAnswer = questionsBeginner[currentQuestion].correct_answer;
    const points = questionsBeginner[currentQuestion].points;

    if (selectedOption === correctAnswer) {
      setScore((prevScore) => prevScore + points); 
    }
  };

  return (
    <div className="flex flex-col mb-10 md:px-16 lg:px-32">
      {isFinished ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl text-amber-900 mb-5">Felicitari! Ai terminat jocul.</h1>
          <h2 className="text-lg text-amber-900 mb-5">Scorul tau este: {score} / 100</h2>
          <Button onClick={() => window.location.reload()} size="lg">Joaca din nou</Button>
        </div>
      ) : (
        <>
          {currentQuestion + 1} / {questionsBeginner.length}
          <Progress value={(currentQuestion / questionsBeginner.length) * 100} className="mb-4" />
          {questionsBeginner[currentQuestion].image && (
            <img
              src={questionsBeginner[currentQuestion].image}
              className="w-96 self-center py-3"
            />
          )}
          <h1 className="text-2xl text-amber-900 mb-5">
            {questionsBeginner[currentQuestion].question}
          </h1>
          <div className="flex flex-col gap-2">
            {questionsBeginner[currentQuestion].options.map((option) => (
              <QuizOption
                key={option}
                option={option}
                onClick={() => handleAnswer(option)}
                correctAnswer={questionsBeginner[currentQuestion].correct_answer}
                selectedOption={selectedOption}
                isDisabled={isDisabled}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
