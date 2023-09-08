import { createContext, useState } from 'react'
import './App.css';
import './App.css'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadPage from './pages/UploadPage';
import Home from './pages/Home';
import ResultPage from './pages/ResultPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export const AppContext = createContext(null)

function App() {
  const [result, setResult] = useState()
  const [upimg, setUpImg] = useState()
  return (
    <Router>
      <AppContext.Provider value={{ result, setResult, upimg, setUpImg }}>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/upload' element={<UploadPage />} />
            <Route path='/result' element={<ResultPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
