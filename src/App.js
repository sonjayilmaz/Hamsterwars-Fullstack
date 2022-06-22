import { BrowserRouter as Router, Routes, Route }
from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Start from './views/start/Start';
import Battle from './views/battle/Battle';
import Gallery from './views/gallery/Gallery';
import HamsterForm from './views/form/HamsterForm';
import './App.css';





function App() {
  return (
    <>
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Navbar />
          </header>
        
        <main>
        <div className='main-container'>
      <div className='inner'>
     
           <Routes>
    <Route path='/' element={<Start/>}/>
    <Route path='/battle' element={<Battle/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/form' element={<HamsterForm/>}/>
    </Routes>
    </div>

    </div>
        </main>
         
    </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;