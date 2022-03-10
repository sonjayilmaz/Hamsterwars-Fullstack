import { BrowserRouter as Router, Routes, Route }
from 'react-router-dom'
import Navbar from './components/Navbar'
import Start from './views/start/Start';
import Battle from './views/battle/Battle';
import Gallery from './views/gallery/Gallery';





function App() {
  return (
    <>
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Navbar />
          </header>
        
        <main>

           <Routes>
    <Route path='/' element={<Start/>}/>
    <Route path='/battle' element={<Battle/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    </Routes>
        </main>
    </div>
    </Router>
    </>
  );
}

export default App;