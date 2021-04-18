import React from "react";
import PropTypes from "prop-types";
import "./styling/Quiz.css";

function Result(props) {
  return (
    <div className="container-quiz">
      <p id="result-text-1">You did great!</p>
      <p id="result text-2">
        We're so happy that you took the time out to check in with your feelings
        today. According to our assesment, You should{" "}
        <em>{props.quizResult}</em> But dont worry we've got you covered. Check
        out the wide array of resources we provide on our website.{" "}
      </p>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
