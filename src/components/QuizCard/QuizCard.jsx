import React, { Component, useState } from "react";
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

export default class QuizCard extends Component {
  state = {
    showModal: false,
    alertShow: false,
    completed: false
  }

  constructor() {
    super();
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);    
  }

  handleOpenModal() {
    this.setState({ ...this.state, showModal: true });
  }

  handleCloseModal() {
    this.setState({ ...this.state, showModal: false });
  }

  render() {
    const { imageSrc, quizName, description, quizTime, questionAmount } = this.props;
        
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
          <Button size='small' onClick={ this.handleOpenModal }>Learn More</Button>
          <Button size='small'>Start Quiz</Button>
        </CardActions>
      </Card>
      <CreateModal    
        open={ this.state.showModal }
        handleClose={ this.handleCloseModal }
        imageSrc={imageSrc}
        quizName={quizName}
        description={description}
        quizTime={quizTime}
        questionAmount={questionAmount}
      />
      </>
    )
  }   
} 