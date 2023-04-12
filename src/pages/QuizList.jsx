import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { quiz } from '../api';
import QuizCard from '../components/QuizCard/QuizCard';

const QuizListWrapper = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

export default function QuizList() {
  const [quizData, setQuiz] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await quiz.fetch();
        console.log(data);
        setQuiz(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <QuizListWrapper>
      {quizData.map((quiz, index) => (
        <QuizCard
          key={index}
          quizName={quiz.name}
          id={index}
          quizImage={quiz.imageSrc}
          quizDescription={quiz.description}
        />
      ))}
    </QuizListWrapper>
  );
}
