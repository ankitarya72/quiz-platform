// src/components/QuizComponent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizData } from '../quizData'; // Ensure quizData.js is at this level
import Timer from '../Timer'; // Ensure Timer.js is at this level

const QuizComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(quizData.length).fill(null));
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const initialTime = 300; // 5 minutes for the quiz
  const navigate = useNavigate();

  const handleOptionClick = (questionIndex, option) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex] = option;
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleSubmitQuiz = () => {
    let finalScore = 0;
    quizData.forEach((question, index) => {
      if (selectedOptions[index] === question.answer) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
    setShowScore(true);
  };

  const handleTimeUp = () => {
    handleSubmitQuiz();
  };

  const handleStartAgain = () => {
    navigate('/'); // Navigate back to HomeComponent
  };

  return (
    <div className="quiz-container">
      {!showScore && <Timer initialTime={initialTime} onTimeUp={handleTimeUp} />}
      {showScore ? (
        <div className="score-section">
          <p>You scored {score} out of {quizData.length}</p>
          <button onClick={handleStartAgain}>Start Again</button>
        </div>
      ) : (
        <div className="question-section">
          {quizData.map((question, index) => (
            <div key={index} className="question-block">
              <div className="question-text">{question.question}</div>
              <div className="options-section">
                {question.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick(index, option)}
                    className={`option-button ${
                      selectedOptions[index] === option ? 'selected' : ''
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button onClick={handleSubmitQuiz} disabled={selectedOptions.includes(null)}>
            Submit Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
