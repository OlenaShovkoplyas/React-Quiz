import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import { quiz as quizApi } from '../api';
import Timer from '../components/Timer/Timer';

const QuizWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100vh',
  padding: '20px',
}));

export default function Quiz() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = question + 1;
    if (nextQuestion < quiz.length) {
      setQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restart = () => {
    setQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await quizApi.fetch(name);
        setQuiz(data);
      } catch (err) {
        setError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return (<div style={{ height: '100vh' }}>Loading...</div>);

  if (error) return (<div style={{ height: '100vh' }}>Error ...</div>);

  return (
    <QuizWrapper>
      <div>
        <img src={quiz.imageSrc}/>
      </div>

      <div>
        <Timer restart={restart}/>
      </div>

      <div key={quiz.id}>
        {
          showScore
            ? <div>
                <div>Answers {score} from {quiz.length}</div>
                <div>Quiz finished, Congradulation!</div>
              </div>

            : <div>
                <div>
                  <span>Question: {question + 1} </span> / {quiz.length}
                  <div>{quiz[question].questionText}</div>
                  <p>Score: {score}</p>
                </div>

                <div>
                  {quiz[question].answer.map((answer) => (
                    <button
                      onClick={() => handleAnswerClick(answer.isCorrect)}
                      key={answer}>{answer.answerText}</button>
                  ))}
                </div>
              </div>
        }
      </div>
    </QuizWrapper>
  );
}
