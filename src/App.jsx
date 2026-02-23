import './App.css'
import { Navbar } from './components/Navbar'
import Pepe from './components/Pepe'
import Sobre from './components/Sobre'
import SocialProof from './components/SocialProof'
function App() {

  return (
    <>
    <Navbar/>
      <div>
      <Pepe/>

      <Sobre/>

      <SocialProof/>
      </div>
    </>
  )
}

export default App
