import React from "react";
import NavBar from "./layout/NavBar";
import Counter from "./components/Counter";
import MobileCounter from "./components/MobileCounter";


const App = () => {
  return (
    <>
     <NavBar heading={'Bootstrap Styles'} color={'bg-success'}/>
     {/* <Counter/> */}
     <MobileCounter/>
     </>
  );
};

export default App;
