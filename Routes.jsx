import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './src/layouts/DefaultLayou'
import { Detail } from './src/pages/Projetos/Detail'
import Home from './src/pages/Home'

export function Router() {
 return (
  <>
   <Routes>
    <Route path='/' element={<DefaultLayout/>}>
     <Route path='/' element={<Home/>}/>
     {/* <Route path='/projects/1' element={</>}/>
     <Route path='/projects/3' element={</>}/>
     <Route path='/projects/4' element={</>}/>
     <Route path='/projects/5' element={</>}/> */}
    </Route>
   </Routes>
  </>
 )
}