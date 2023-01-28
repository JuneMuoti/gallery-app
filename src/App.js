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
import Login from './components/Login';
import Landing from './components/Landing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <ResponsiveAppBar />
     <Routes>
     <Route path="/" element={<Landing />}></Route>
      <Route path="Home" element={<Home />}></Route>
      <Route path="Albums" element={<Album />}></Route>
      <Route path="Users" element={<Users />}></Route>
      <Route path="Photo" element={<Photo />}></Route>
      <Route path="Login" element={<Login />}></Route>
      <Route path="Albums/new" render={(props) => <Album {...props}/>}/>
     
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
