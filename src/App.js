import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import Catalogue from './Pages/Catalogue'
import About from './Pages/About'
import Registration from './Pages/Registration'
import Info from './Pages/Info'
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  element={<Registration/>} path="/registration" />
        <Route element={<ProtectedRoute/>}>
          <Route  element={<Home/>} path="/" />
          <Route  element={<Catalogue/>} path="/Catalogue" />
          <Route  element={<About/>} path="/about" />
          <Route  element={<Info/>} path="/info" />
        </Route>      
      </Routes>
      
    </div>
  );
}

export default App;
