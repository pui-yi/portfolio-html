import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/home';
import Contact from './containers/contact';
import Projects from './containers/projects';
import Navbar from './components/navBar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='App__main-page-content'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
