import React from 'react';
import { Box, styled } from '@mui/material';

const SavedQuizWrapper = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  height: '100vh',
}));

export default function SavedQuiz() {
  return (
    <SavedQuizWrapper>
      <h2>My Saved Quiz</h2>
    </SavedQuizWrapper>
  );
}
