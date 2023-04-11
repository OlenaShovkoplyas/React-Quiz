import React, { useState } from 'react';
import './QuizCard.css';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import CreateModal from '../Dialogs/MainModal';

export default function QuizCard({
  image,
  quizName,
  description,
  quizTime,
  questionAmount,
}) {
  const [open, setOpenModal] = useState(false);
  const pathToQuiz = quizName.split(' ').join('_').toLowerCase();

  return (
    <>
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={quizName}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
            {quizName}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description.slice(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions className="position">
        <Button size='small' onClick={() => setOpenModal(true)}>Learn More</Button>
        <Button size='small'>
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to={`/quiz/${pathToQuiz}`}
          >
            Open Quiz
          </Link>
        </Button>
      </CardActions>
    </Card>
    <CreateModal
      open={open}
      handleOnClose={() => setOpenModal(false)}
      image={image}
      quizName={quizName}
      description={description}
      quizTime={quizTime}
      questionAmount={questionAmount}
    />
    </>
  );
}
