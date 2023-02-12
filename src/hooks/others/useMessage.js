import { useState } from 'react';

const useMessage = messageState => {
  const [messages, setMessages] = useState(messageState);

  const resetMessages = () => {
    setMessages(messageState);
  };

  return {
    messages,
    setMessages,
    resetMessages,
  };
};

export default useMessage;
