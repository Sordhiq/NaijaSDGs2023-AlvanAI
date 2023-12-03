// in ActionProvider.jsx
import React from 'react';
import { createClientMessage, createCustomMessage } from 'react-chatbot-kit'

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
}) => {

  const handleSend = () => {
    const botMessage = createChatBotMessage(
      "Hello Mosope, just to be sure, you want to send 5, 000.00 Naira to this GTBank account number: 0160665812",
      {
        widget: "confirmMsg",
        withAvatar: false,
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleYes = () => {
    const botMessage = createChatBotMessage(
      "I thought as much! just give me a second while I validate the account number",
      { withAvatar: false }
    );
    const botMessage1 = createChatBotMessage(
      "Validation successful! can you verify the account name: Micheal Mosope Cooker?",
      {
        widget: "validateMsg",
        withAvatar: false,
        delay: 3000,
      }
    );
    const userMsg = createClientMessage('Yes')
    // const botInfo = createCustomMessage(
    //   "Validation successful! can you verify the account name: Micheal Mosope Cooker?",
    //   {
    //     widget: "validateMsg",
    //     withAvatar: false,
    //     delay: 1000,
    //   }
    // );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMsg, botMessage, botMessage1],
    }));
  };

  const handleCorrect = () => {
    const botMessage = createChatBotMessage('Great! Please enter your pin to complete the transaction!', {
      withAvatar: false,
    })
    const userMsg = createClientMessage("correct");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMsg, botMessage],
    }));
  }

  const handlePin = () => {
    const botMessage = createChatBotMessage(
      "Validating PIN...",
      {
        withAvatar: false,
      }
    );
    const botMessage1 = createChatBotMessage(
      "Alrighty! Sending in 3..2..1!",
      {
        withAvatar: false,
        delay: 2000
      }
    );
    const botMessage2 = createChatBotMessage("Sending 5,000 to Michael Mosope Cooker...", {
      withAvatar: false,
      delay: 3000
    });
    const botMessage3 = createChatBotMessage("Transaction successful! Would you like to do anything else?", {
      withAvatar: false,
      delay: 4000
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, botMessage1,botMessage2, botMessage3],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleSend,
            handleYes,
            handleCorrect,
            handlePin
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
