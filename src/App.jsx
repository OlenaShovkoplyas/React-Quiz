import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import NotFound from './pages/MainPage/NotFound';
import GridTemplate from './components/Templates/GridTemplate';
import QuizRoutes from './components/QuizRoutes';

export default function App() {
  return (
    <div className="App">
      <GridTemplate>
      <BrowserRouter>
        <Routes>
          <Route index path='/mainpage' element={<MainPage />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/quiz/*' element={<QuizRoutes />} />
        </Routes>
      </BrowserRouter>
      </GridTemplate>
  </div>
  );
}
