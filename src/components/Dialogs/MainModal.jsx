import { Component } from 'react';
import {
    Dialog,
    DialogActions,
    Card,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material';

export default class CreateModal extends Component {
  constructor() {
    super();
  }

  render() {
    const { open, handleClose, imageSrc, quizName, description, quizTime, questionAmount } = this.props;
    
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <Card className="card" sx={{ width: '80%' }}>
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
                {description}
              </Typography>
              <Typography variant='body2' color='text.main'>
                Time for Quiz: {quizTime}
              </Typography>
              <Typography variant='body2' color='text.main'>
                Amount of questions: {questionAmount}
              </Typography>
            </CardContent>          
          </Card>
  
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>          
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
