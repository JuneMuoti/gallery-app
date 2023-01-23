import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from "./components/Navbar";
import { Route } from 'react-router-dom';
import { Album } from '@mui/icons-material';

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
