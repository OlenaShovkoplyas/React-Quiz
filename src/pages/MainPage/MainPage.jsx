import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/system";
import { quizes } from "../../api";
import QuizCard from "../../components/QuizCard/QuizCard";

const CardWrapper = styled(Box)(() => ({      
    display: 'flex',
    flexWrap: 'wrap', 
    justifyContent: 'center',       
}));

export default function MainPage() {
  const [quizesData, setQuizes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await quizes.fetch();
        setQuizes(data);        
      } catch (error) {
        console.log(error);
    }
    })();
  }, [])

  return (  
    <CardWrapper>
      {quizesData.map(quiz => (
        <QuizCard
          key={quiz.key}
          quizName={quiz.quizName}
          imageSrc={quiz.image}
          description={quiz.description}
          quizTime={quiz.quizTime}
          questionAmount={quiz.questionAmount}
        />
      ))}
    </CardWrapper> 
  );
}
