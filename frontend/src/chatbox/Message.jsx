// Message.js

import React from "react";

const Message = ({ message }) => {
  const isUserMessage = message.role === "user";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isUserMessage ? "row-reverse" : "row", // Align user messages to the right
        alignItems: "flex-end", // Align messages to the bottom
        marginBottom: "8px", // Add some margin between messages
        marginLeft: isUserMessage ? "0" : "8px", // Add margin to non-user messages for separation
        marginRight: isUserMessage ? "8px" : "0", // Add margin to user messages for separation
        maxWidth: "75%", // Limit the width of the message box
        wordWrap: "break-word", // Break words that exceed the width
        whiteSpace: "pre-line", // Preserve line breaks
        padding: "8px",
        borderRadius: "8px",
        backgroundColor: isUserMessage ? "#5ccc9d" : "#376B7E",
        color: "#fff",
      }}
    >
      {message.content}
    </div>
  );
};

export default Message;
