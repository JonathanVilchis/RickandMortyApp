
import './App.css'
import Portal from './components/Portal'
import Header from './components/Header'
import Carousel from './components/Carousel'
import CharacterInfo from './components/CharacterInfo'
import { useState } from 'react'



function App() {
 
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <div className="App">
     <Header/>
     <Portal/>
    
    
    </div>
  )
}

export default App
