import './App.css'
import Home from './Components/Home'
import Movies from './Components/Movies'
import SingleMovie from './Components/SingleMovie'
import Error from './Components/Error'
import { Routes, Route } from 'react-router-dom'
import MovieInfo from './Components/MovieInfo'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie/:id' element={<MovieInfo />} />
        <Route path='*' element={<Error></Error>}></Route>
        <Route path='/movieInfo' element={<MovieInfo />}></Route>
      </Routes>
    </>
  )
}

export default App
