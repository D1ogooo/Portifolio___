import { BrowserRouter } from 'react-router-dom'
import { Router } from '../Routes'
import { GlobalStyle } from './style/GlobalStyle'

function App() {
  return (
   <>
    <BrowserRouter>
     <Router />
     <GlobalStyle/>
    </BrowserRouter>
   </>
  )
}

export default App
