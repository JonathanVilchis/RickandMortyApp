
import './App.css'
import Portal from './components/Portal'
import Header from './components/Header'

import { useState } from 'react'
import SoundBoard from './components/SoundBoard'




function App() {
 
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <div className="App">
     <Header/>
     <Portal/>
    <SoundBoard/>


    </div>
  )
}

export default App
