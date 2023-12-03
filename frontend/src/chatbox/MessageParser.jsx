// in MessageParser.js
import React from "react";

const MessageParser = ({ children, actions }) => {

  const parse = (message) => {
  console.log(message);

    if (message.includes("yes")) {
      actions.handleYes();
    }
    if (message.includes("0160665812 GTB 5k")) {
      actions.handleSend();
    }
    if (message.includes("correct")) {
      actions.handleCorrect();
    }
    if (message.includes("****")) {
      actions.handlePin();
    }


  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
