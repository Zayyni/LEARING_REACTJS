import React from "react";
import MyCard from "./components/MyCard";

const App = () => {
  return (
    <>
        <h1>App Component</h1>
        <MyCard heading="Good Morning"/>
        <MyCard heading="Good Afternoon"/>
        <MyCard heading="Good Evening"/>
    </>
  );
};

export default App;
