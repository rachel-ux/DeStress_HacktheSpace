import React from "react";

import "./styling/LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Happy",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "Sad", handler: () => {}, id: 2 },
    { text: "Moody", handler: () => {}, id: 3 },
    { text: "Angry", handler: () => {}, id: 4 },
    { text: "Tired", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;


