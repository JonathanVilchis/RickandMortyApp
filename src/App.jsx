
import './App.css'
import Portal from './components/Portal'
import Header from './components/Header'
import SoundBoard from './components/SoundBoard'
import CharacterInfo from './components/CharacterInfo'
import { useState } from 'react'







function App() {
  const [characterId, setCharacterId] = useState(2)
  const [showInfo, setShowInfo] = useState(false);

  const info = () => {
 
    setShowInfo(true);
    
    }


  return (
    <div className="App">

     <Header/>
     <Portal characterId={characterId} setCharacterId={setCharacterId} info={info}/>
     {showInfo?<CharacterInfo character={characterId} /> : null }
     <SoundBoard/>

    </div>
  )
}

export default App
