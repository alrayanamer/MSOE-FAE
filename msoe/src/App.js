import Contact from './pages/Contact';
import Home from './pages/Home';
import Sponsors from './pages/Sponsors';
import Gallery from './pages/Gallery'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/sponsors' element={<Sponsors/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
