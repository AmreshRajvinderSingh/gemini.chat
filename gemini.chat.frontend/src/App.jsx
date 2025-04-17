import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatInput from './components/chatInput'
import ChatResponse from './components/chatResposne'
import { FetchChatResponse } from './services/api'

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading]= useState(null);
  const handleQuestionSubmit= async(question) =>{
    setLoading(true);
    setResponse(null);
    try{
      const apiResponse = await FetchChatResponse(question);
      setResponse(apiResponse);
    }catch(error){
      alert("failed to get resposne");
    } finally{
      setLoading(false);
    }
  }
  return (
    <>
    <div className='App'>
      <header className='bg-primary text-white text-center'>
        <h1> Gemini Chat</h1>
      </header>
      <ChatInput onSubmit={handleQuestionSubmit} />
      <ChatResponse response={response}/>
            </div>
    </>
  )
}

export default App
