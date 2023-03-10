import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

const QuizDetails = () => {
  const quiz = useLoaderData();
  // console.log(quiz.data.questions);
  const { name } = quiz.data;
  return (
    <div>
      <h1 className="text-3xl text-purple-500 text-center py-10">
        Quiz of {name}
      </h1>
      <div>
        {quiz.data.questions.map((questionAnswer, index) => (
          <QuizQuestion
            key={questionAnswer.id}
            questionAnswer={questionAnswer}
            index={index}
          ></QuizQuestion>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
