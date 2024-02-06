import './App.css';
import Aboutus from './components/Router/Aboutus';
import Header from './components/Router/Header';
import Home from './components/Router/Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div>
       <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
