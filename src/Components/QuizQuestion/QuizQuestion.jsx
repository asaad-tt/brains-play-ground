import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import QuizOption from "../QuizOption/QuizOption";
import Swal from "sweetalert2";

const QuizQuestion = ({ questionAnswer }) => {
  //   console.log(questionAnswer);
  const { question, options, correctAnswer } = questionAnswer;

  const eyeHandler = () => {
    Swal.fire({
      title: `correct answer:  ${correctAnswer}`,
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `,
    });
  };

  //   const handleQuestion = () => {};

  return (
    <div className="px-28 mx-28 my-5 border border-purple-400 ">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">Question:{question} </h1>
        <FontAwesomeIcon
          onClick={eyeHandler}
          className="text-purple-800"
          icon={faEye}
        ></FontAwesomeIcon>
      </div>
      <div className="m-5 grid lg:grid-cols-2">
        {options.map((option) => (
          <QuizOption option={option}></QuizOption>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;