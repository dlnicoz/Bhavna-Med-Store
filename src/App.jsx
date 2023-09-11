import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Update from './Update'
import Read from './Read'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/Update/:id' element={<Update />}></Route>
        <Route path='/Read/:id' element={<Read />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

