import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import ShowsSearch from './components/ShowsSearch'
import ShowPage from './components/ShowPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowsSearch />} />
        <Route path='/show/:showId' element={<ShowPageFromRoute />} />
      </Routes>
    </BrowserRouter>
  )
}

function ShowPageFromRoute() {
  let { showId } = useParams()
  return <ShowPage showId={parseInt(showId)} />
}

export default App
