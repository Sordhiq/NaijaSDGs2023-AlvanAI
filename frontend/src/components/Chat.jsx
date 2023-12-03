import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from '../chatbox/config/config.jsx';
import MessageParser from '../chatbox/MessageParser.jsx';
import ActionProvider from '../chatbox/ActionProvider.jsx';
import '../app.css'
import Message from "../chatbox/Message.jsx";

const Chat = () => {
  return (
    <div className="absolute top-[26em] w-full z-10 bg-[#00000040] motion">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        components={{
          message: Message, // Use your custom Message component
        }}
        placeholderText="Enter a prompt here"
      />
    </div>
  );
};

export default Chat;
