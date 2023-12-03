import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import CustomMessage from "../../components/ConfirmWidget.jsx";
import DogPicture from "../../components/DogPicture.jsx";
import ValidWidget from "../../components/ValidWidget.jsx";
import Header from "../../components/Header.jsx";

const botName = 'Alvan AI'

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}`, {
      withAvatar: false,
    }),
    // createChatBotMessage(
    //   "First things first, which airport are you looking for information from?",
    //   {
    //     widget: "confirmMsg",
    //     delay: 500,
    //   }
    // ),
    // createCustomMessage('Validation successful! can you verify the account name: Micheal Mosope Cooker?', "custom"),
  ],
  state: {
    yes: false,
    no: false,
    correct: false,
    wrong: false,
  },
  customMessages: {
    custom: (props) => <ValidWidget {...props} />,
  },
  customComponents: {
    // Replaces the default header
    header: () => (
      <Header />
    ),
  },
  widgets: [
    {
      widgetName: "confirmMsg",
      widgetFunc: (props) => <CustomMessage {...props} />,
      props: {},
      mapStateToProps: ["yes", "no"],
    },
    {
      widgetName: "validateMsg",
      widgetFunc: (props) => <ValidWidget {...props} />,
      props: {},
      mapStateToProps: ["correct", "wrong"],
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
