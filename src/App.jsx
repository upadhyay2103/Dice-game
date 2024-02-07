import { useState } from 'react'
import './App.css'
import Start from './components/Start'
import Page2 from './components/Page2'

function App() {
  let [playing,setPlaying]=useState(false)
  return (
    <>
      {playing?<Page2/>:<Start setPlaying={setPlaying}></Start>}
    </>
  )
}

export default App
