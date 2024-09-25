import React from 'react'

interface QuizOptionProps {
    option: string
    onClick: () => void
    correctAnswer: string
}
const QuizOption = ({ option, onClick, correctAnswer }: QuizOptionProps) => {
    const [isAnswerCorrect, setIsAnswerCorrect] = React.useState<boolean | null>(null);

    const internalOnClick = () => {
        if (option === correctAnswer) {
            setIsAnswerCorrect(true);
        } else {
            setIsAnswerCorrect(false);
        }
    };

    React.useEffect(() => {
        if (isAnswerCorrect !== null) {
            const timer = setTimeout(() => {
                setIsAnswerCorrect(null);
                onClick();
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isAnswerCorrect, onClick]);

    const getBackgroundColor = () => {
        if (isAnswerCorrect === null) return 'bg-orange';
        return isAnswerCorrect ? 'bg-green' : 'bg-red-500';
    };

    return (
        <div
            className={`w-full rounded-xl flex items-center px-4 py-5 cursor-pointer text-white ${getBackgroundColor()}`}
            onClick={internalOnClick}
        >
            <span>{option}</span>
        </div>
    );
};

export default QuizOption;