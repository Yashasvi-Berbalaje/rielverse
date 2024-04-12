import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import diamond from "./Reilverse_Assets/Logo Vector (3).svg";
import vector1 from "./Reilverse_Assets/Vector.svg";
import vector2 from "./Reilverse_Assets/Vector (1).svg";
import vector3 from "./Reilverse_Assets/Vector (2).svg";
import CarBrand from "./pages/CarBrand/CarBrand";
import Driver_info from "./pages/Driver_info/Driver_info";

function App() {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])
    return (
        <div className="App">
            <Header/>
            <div className={'w-full h-auto min-h-[500px] flex flex-col items-center relative overflow-x-clip'}>

                <div className={'w-full h-[900px] absolute top-0 left-0 bg-gradient-to-b from-[#c3e45e] to-transparent -z-0'}></div>
                <img data-aos="zoom-in" className={'object-contain w-auto h-[750px] absolute -top-9 left-0 z-0'}
                     src={diamond} alt={'Railverse logo vector'}/>
                <img data-aos="zoom-in" className={'object-contain w-auto h-[400px] absolute top-32 right-0 -z-10'}
                     src={vector1} alt={'Railverse logo vector'}/>
                <img data-aos="zoom-in" className={'object-contain w-auto h-[400px] absolute top-10 right-0 -z-20'}
                     src={vector2} alt={'Railverse logo vector'}/>
                <img data-aos="zoom-in" className={'object-contain w-auto h-[400px] absolute -top-10 -right-32 -z-30'}
                     src={vector3} alt={'Railverse logo vector'}/>

                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    {/*<Route path={'/car_brand'} element={<CarBrand/>}/>*/}
                    {/*<Route path={'/driver_info'} element={<Driver_info/>}/>*/}
                </Routes>

            </div>
        </div>
    );
}

export default App;
