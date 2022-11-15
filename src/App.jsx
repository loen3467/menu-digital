import { Header } from './components/Header/Header.jsx'
import { LeftContainer } from './components/LeftContainer/LeftContainer.jsx'
import { CenterContainer } from './components/CenterContainer/CenterContainer.jsx'
import { RightContainer } from './components/RightContainer/RightContainer.jsx'
import './App.css'

function App() {
  return (
    <div className='container'>
      <div>
        <Header />
      </div>
      <div className='container-body'>
        <LeftContainer/>
        <CenterContainer/>
        <RightContainer/>
      </div>
    </div>
  )
}

export default App;