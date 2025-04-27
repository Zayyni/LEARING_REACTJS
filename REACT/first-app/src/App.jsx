import React from "react";
import NavBar from "./layout/NavBar";
import Counter from "./components/Counter";


const App = () => {
  return (
    <>
     <NavBar heading={'Bootstrap Styles'} color={'bg-success'}/>
     <Counter/>
     </>
  );
};

export default App;
