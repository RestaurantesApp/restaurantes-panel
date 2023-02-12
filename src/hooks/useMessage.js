import { useState } from 'react'

export const useMessage = messageState => {
  const [messages, setMessages] = useState(messageState)

  const resetMessages = () => {
    setMessages(messageState)
  }

  return {
    messages,
    setMessages,
    resetMessages,
  }
}
