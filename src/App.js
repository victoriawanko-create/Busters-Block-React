import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Nav from './components/Nav';
import Movies from './pages/Movies';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="id:" element={<Nav />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
