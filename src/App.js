import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Nav from './components/Nav';
import Movies from './pages/Movies';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="id:" element={<Nav />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/footer" element={<Footer />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
