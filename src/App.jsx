
import './App.css'
import Rootlayout from './component/Rootlayout'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Product from './pages/Product'

let router = createBrowserRouter(createRoutesFromElements(
<Route element={<Rootlayout/>}>
<>
  <Route index element={<Home/>}></Route>
  <Route path="/Product" element={<Product/>}></Route>
  

  </>

  </Route>


))

function App() {
 

  return (
    <>
    <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
