import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/chatbot', { message })
      .then((res) => {
        setResponse(res.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Chatbot</h1>  
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
      <p>{response}</p>
    </div>
  );
};

export default Chatbot;