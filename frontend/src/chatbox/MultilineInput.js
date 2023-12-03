// MultilineInput.js
import React from "react";

const MultilineInput = ({ onSubmit }) => {
  const [inputText, setInputText] = React.useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit(inputText);
      setInputText("");
    }
  };

  return (
    <textarea
      value={inputText}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
      placeholder="Type your message..."
      rows={4} // Adjust the number of rows as needed
    />
  );
};

export default MultilineInput;
