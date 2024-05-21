import { BrowserRouter } from "react-router-dom"
import { Experience, Hero, NavBar, Projects } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-secondary'>
        <NavBar />
        <Hero />
        <Experience />
        <Projects />
      </div>
    </BrowserRouter>
  )
}

export default App;