interface QuizOptionProps {
  option: string;
  onClick: () => void;
  correctAnswer: string;
  selectedOption: string | null;
  isDisabled: boolean;
}

const QuizOption = ({
  option,
  onClick,
  correctAnswer,
  selectedOption,
  isDisabled,
}: QuizOptionProps) => {
  const getBackgroundColor = () => {
    if (selectedOption === null) return "bg-orange"; // Default color
    return option === correctAnswer ? "bg-green" : "bg-red-500";
  };

  return (
    <>
      <div
        className={`w-full rounded-xl flex items-center px-4 py-5 cursor-pointer text-white ${getBackgroundColor()} ${
          isDisabled && selectedOption !== option
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        onClick={!isDisabled ? onClick : undefined} // Prevent click if disabled
      >
        <span>{option}</span>
      </div>
    </>
  );
};

export default QuizOption;
