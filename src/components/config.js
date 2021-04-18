import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./LearningOptions";
import LinkList from "./LinkList";

const config = {
    width: "400px",
  height: "500px",
  floating: true,
  botName: "Alisha",
  initialMessages: [
    createChatBotMessage("Hi, I'm Alisha. How do you feel today?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
    widgets: [
    {
     	widgetName: "learningOptions",
    	widgetFunc: (props) => <LearningOptions {...props} />,
     },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Joke 1",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Joke 2",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Joke 3",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;