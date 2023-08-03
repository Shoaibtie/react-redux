import React,{useState} from 'react';
import Navigation from "./src/screens/Navigation";
import SplashScreen from "./src/splash/SplashScreen";


const App = () =>{

  const [isLoad ,setIsLoad] =useState(true);
  
  setTimeout(()=>{
    setIsLoad(false)
  },2000)

  return(
    <>
   {
     isLoad ? <SplashScreen/> : <Navigation/>
  
  }
  </>
  )

}
export default App;
