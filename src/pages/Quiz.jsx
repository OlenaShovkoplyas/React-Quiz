import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import { quiz as quizApi } from '../api';
import './Quiz.css';
import Timer from '../components/Timer/Timer';

const QuizWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '20px',
  flexDirection: 'column',
  backgroundColor: '#08565b8a',
}));

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { name } = useParams();
  const [quiz, setQuiz] = useState([]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quiz.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await quizApi.fetch(name);
        setQuiz(data[0]);
      } catch (err) {
        setError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    )();
  }, []);

  if (loading) return (<div style={{ height: '100vh' }}>Loading...</div>);
  if (error) return (<div style={{ height: '100vh' }}>Error ...</div>);

  return (
    <QuizWrapper>
      <div style={{ fontSize: '30px', color: 'rgba(10, 55, 10, 0.75)' }} >Quiz Name: {quiz.name}</div>
      <div>
        <img style={{ width: '300px' }} src={quiz.imageSrc} alt="Quiz Foto" />
      </div>
      <Timer />
      <div className='app_quiz'>
        {
          showScore
            ? <div className='score_section'>
             <div>Правильных ответов: {score} из {quiz.questions.length} </div>
             <button
             className='restart_btn'
             onClick={restart}
             >Начать заново </button>
            </div>

            : <div className='quiz'>
            <div className='question_section'>

              <div className='question_count'>
               <span>Вопрос: {currentQuestion + 1}</span> / {quiz.questions.length}
              </div>

              <div className='question_text'>
                {quiz.questions[currentQuestion].question}
              </div>
            </div>

            <div className='answer_section'>
              {quiz.questions[currentQuestion].answers.map((item) => (
                <button key={item} onClick={() => handleAnswerOptionClick(item.isCorrect)}
                >{item.answer}</button>
              ))
              }
            </div>

        </div>
      }
    </div>
    </QuizWrapper>
  );
}
