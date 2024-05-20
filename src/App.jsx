import { BrowserRouter } from "react-router-dom"
import { NavBar } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <NavBar />
      </div>
    </BrowserRouter>
  )
}

export default App;