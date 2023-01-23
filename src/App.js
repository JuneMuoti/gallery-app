import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router";
import ResponsiveAppBar from "./components/Navbar";
// import { Route } from 'react-router-dom';
import Album  from './components/Album';
import Dashboard from './components/Users';
import Photo from './components/Photo';
import Users from './components/Users';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <ResponsiveAppBar />
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="Albums" element={<Album />}></Route>
      <Route path="Users" element={<Users />}></Route>
      <Route path="Photo" element={<Photo />}></Route>
     </Routes>
    </div>
  );
}

export default App;
