import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
    useEffect(()=>{
        Aos.init({duration:1000});
    },[])
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
