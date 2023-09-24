
import './App.css'
import Carousel from './components/Carousel'
import Header from './components/Header'
import CharacterInfo from './components/CharacterInfo'
import { useState } from 'react'

function App() {
  const [characterId, setCharacterId] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="App">

     <Header/>
     
     <Carousel setShowInfo={setShowInfo} setCharacterId={setCharacterId}/>
  
     {showInfo?<CharacterInfo character={characterId}/> : null }

    </div>
  )
}

export default App
