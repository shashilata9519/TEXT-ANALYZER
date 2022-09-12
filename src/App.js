import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  const [mode,setMode]=useState('light')

  const toggleMode=()=>{
    if(mode==='dark')
    {
      setMode('light')
      document.body.style.background='lightBlue'
      document.title='TEXT ANALYZER (Light mode)'
    }
    else{
      setMode('dark')
      document.body.style.background='#5867769e'
      document.title='TEXT ANALYZER (Dark mode)'
    }
  }
  return (
    <>
      <Navbar title="website" mode={mode} toggleMode={toggleMode}/>
      <TextForm />
    </>
  );
}

export default App;
