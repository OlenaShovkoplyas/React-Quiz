import React, { useState } from "react";
import './QuizCard.css';
import { 
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
}  from '@mui/material';
import CreateModal from "../Dialogs/MainModal";

export default function QuizCard({
  imageSrc,
  quizName,
  description,
  quizTime,
  questionAmount 
}) {
  const [open, setOpenModal] = useState(false);
  
  return (
    <>
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageSrc}
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
        <Button size='small'>Start Quiz</Button>
      </CardActions>
    </Card>
    <CreateModal    
      open={open}
      handleOnClose={() => setOpenModal(false)}
      imageSrc={imageSrc}
      quizName={quizName}
      description={description}
      quizTime={quizTime}
      questionAmount={questionAmount}
    />
    </>
    
    
  );
}