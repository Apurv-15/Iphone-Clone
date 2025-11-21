import { useState } from 'react'
// import './App.css'
import NavBar from './componets/NavBar'
import Hero from './componets/Hero'
import { HighLight } from './componets/HighLight'
import GsapScrollTrigger from './GsapTutorial/GsapScrollTrigger'
import GsapTo from './GsapTutorial/GsapTo'
import GsapFrom from './GsapTutorial/GsapFrom'




function App() {
  const [count, setCount] = useState(0)

  return (
  
    <main className='bg-black'>
      <NavBar />
      <Hero />
      <HighLight />
      
  
    </main>
  )
}

export default App
