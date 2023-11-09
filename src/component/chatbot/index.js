import React, { useState } from "react";
// import { Configuration, OpenAIApi } from "openai";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
  MainContainer,
  ChatContainer,
  ConversationHeader,
  Avatar,
  MessageList,
  Message,
  MessageInput,
  InfoButton,
  TypingIndicator
} from "@chatscope/chat-ui-kit-react";




export default function App() {
  const [typing, setTyping] = useState(false);
  const [messageInputValue, setMessageInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      model: {
        message: "Hello, I am ChatGPT",
        sender: "ChatGPT",
        direction: "incoming",
        position: "normal"
      },
      avatar: (
        <Avatar
          src={require("../../assest/download.png")}
          name="Zoe"
        />
      )
    }
  ]);

  const handleUserSendMessage = () => {
    const userMessage = {
      model: {
        message: messageInputValue,
        sender: "Pengguna",
        direction: "outgoing",
        position: "normal"
      },
      avatar: (
        <Avatar
          src={require("../../assest/download.png")}
          name="Pengguna"
        />
      )
    };

    setMessages([...messages, userMessage]);
    setMessageInputValue("");
    setTyping(true);
    sendToChatbot([...messages, userMessage]);
  };

  const sendToChatbot = async (chatMsgs) => {
    try {
        const userMessage = chatMsgs[chatMsgs.length - 1].model.message; // Mendapatkan pesan terbaru dari pengguna
        const response = await fetch('http://localhost:5000/chatbot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userMessage })
        });

        const data = await response.json();

        const chatbotMessage = {
            model: {
                message: data.response,
                sender: 'ChatBot',
                direction: 'incoming',
                position: 'normal'
            },
            avatar: (
                <Avatar
                    src={require("../../assest/download.png")}
                    name="ChatBot"
                />
            ),
        };

        setMessages([...chatMsgs, chatbotMessage]);
    } catch (error) {
        console.error('Error:', error);
    }
    setMessageInputValue("");
};


  return (
    <div
      style={{
        height: "600px",
        position: "relative",
        top: "100px"
      }}
    >
      <MainContainer responsive>
        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar
              src={require("../../assest/download.png")}
              name="Zoe"
            />
            <ConversationHeader.Content
              userName="ChatBot"
              info="Active 10 mins ago"
            />
            <ConversationHeader.Actions>
              <InfoButton />
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList>
            {messages.map((message, index) => (
              <Message key={index} model={message.model} avatar={message.avatar} />
            ))}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            value={messageInputValue}
            onChange={(val) => setMessageInputValue(val)}
            onSend={handleUserSendMessage}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}
