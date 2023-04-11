import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Quiz from '../pages/Quiz';
import QuizList from '../pages/QuizList';
import AddNewQuiz from '../pages/AddNewQuiz';
import SavedQuiz from '../pages/SavedQuiz';

export default function QuizRoutes() {
  return (
      <Routes>
        <Route index element={ <QuizList /> }/>
        <Route path='/:name' element={<Quiz />}/>
        <Route path='/' element={<QuizList />}/>
        <Route path='create' element={<AddNewQuiz />}/>
        <Route path='saved' element={<SavedQuiz />}/>
      </Routes>
  );
}
