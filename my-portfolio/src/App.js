// import logo from './logo.svg';
// import './App.css';

import React, {useEffect} from "react";
import Portfolio from "./components/Portfolio";

function App() {

    useEffect(()=>{
      if(!document.querySelector("#root").classList.contains("container")) { //prevents infinite loading
        document.querySelector("#root").classList.add("container")
      }
     }, [])
     
  return <Portfolio />
}

export default App;
