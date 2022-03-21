import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Contacto from "./Pages/Contacto";
import Previaje from "./Pages/PreViaje";
import Nosotros from "./Pages/Nosotros";
import Not from "./Pages/NotFound"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/previaje' element={<Previaje/>} />
        <Route path='*' element={<Not/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
