import React, { useEffect, useState } from 'react'
import Navbar from './assets/components/navbar/navbar'

const App = () => {
  const current_mode=localStorage.getItem('current_mode');
  const[theme,setTheme]=useState(current_mode?current_mode:'light');
  useEffect(()=>{
    localStorage.setItem('current_mode',theme)
  },[theme])
  return (
    <div className={`main ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
