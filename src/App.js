
import './App.css';
import {Route,Routes} from "react-router-dom"
import {Box} from "@mui/material"
import Home from "./pages/Home"
import ExersciseDetail from './pages/ExersciseDetail'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/exercise/:id" element={<ExersciseDetail/>}/>

      </Routes>
      <Footer/>

    </Box>

  );
}

export default App;
