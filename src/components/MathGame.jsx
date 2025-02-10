import React, { useState, useEffect } from "react";
import "../assets/MathGame.css";

const MathGame = () => {
  const [equation, setEquation] = useState("");
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isGameActive, setIsGameActive] = useState(true);
  const [showResult, setShowResult] = useState(false);

  // جملات انگیزشی
  const motivationalMessages = [
    "آفرین! عالی بود!",
    "تو بهترینی!",
    "به این می‌گن پیشرفت!",
    "همینجوری ادامه بده!",
    "کارت حرف نداشت!",
  ];

  // جملات تشویقی برای امتیاز زیر ۱۵
  const lowScoreMessages = [
    "هنوز جای پیشرفت داری!",
    "بیشتر تلاش کن، موفق می‌شی!",
    "نگران نباش، دفعه بعد بهتر می‌شی!",
    "امتیازت خوب نیست، ولی می‌تونی بهتر بشی!",
  ];

  // تولید معادله درجه اول با جواب صحیح
  const generateEquation = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const c = a * (Math.floor(Math.random() * 10) + 1) + b; // تضمین جواب صحیح
    const equation = `${a}x + ${b} = ${c}`;
    setEquation(equation);

    // محاسبه پاسخ صحیح
    const correctAnswer = (c - b) / a;

    // تولید گزینه‌ها
    const generateOptions = () => {
      const options = [correctAnswer];
      while (options.length < 3) {
        const randomOption = correctAnswer + (Math.floor(Math.random() * 10) - 5);
        if (!options.includes(randomOption)) {
          options.push(randomOption);
        }
      }
      return options.sort(() => Math.random() - 0.5); // تصادفی کردن ترتیب گزینه‌ها
    };

    setOptions(generateOptions());
  };

  // شروع بازی
  useEffect(() => {
    generateEquation();
  }, []);

  // مدیریت تایمر
  useEffect(() => {
    if (timeLeft > 0 && isGameActive) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      endGame();
    }
  }, [timeLeft, isGameActive]);

  // بررسی پاسخ کاربر
  const checkAnswer = (selectedAnswer) => {
    const [a, b, c] = equation
      .replace("x", "")
      .split(/[\s+=]/)
      .filter((x) => x !== "")
      .map(Number);
    const correctAnswer = (c - b) / a;

    if (selectedAnswer === correctAnswer) {
      setScore(score + 5); // اضافه کردن ۵ امتیاز
      generateEquation();
      setTimeLeft(15);
    } else {
      endGame();
    }
  };

  // پایان بازی
  const endGame = () => {
    setIsGameActive(false);
    setShowResult(true);
  };

  // شروع مجدد بازی
  const restartGame = () => {
    setScore(0);
    setTimeLeft(15);
    setIsGameActive(true);
    setShowResult(false);
    generateEquation();
  };

  // انتخاب جمله انگیزشی بر اساس امتیاز
  const getMotivationalMessage = () => {
    if (score < 15) {
      return lowScoreMessages[Math.floor(Math.random() * lowScoreMessages.length)];
    }
    return motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
  };

  return (
    <div className="math-game-container">
      <h1>بازی ریاضی: پیدا کردن x</h1>
      {isGameActive ? (
        <>
          <div className="score-display">امتیاز: {score}</div>
          <div className="equation">{equation}</div>
          <div className="options">
            {options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => checkAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="timer">زمان باقی‌مانده: {timeLeft} ثانیه</div>
        </>
      ) : showResult ? (
        <div className="result-container">
          <div className="result-message">{getMotivationalMessage()}</div>
          <div className="final-score">امتیاز نهایی: {score}</div>
          <button className="restart-button" onClick={restartGame}>
            شروع مجدد
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default MathGame;