import React from "react";
import NavBar from "./layout/NavBar";
import MyCard from "./components/MyCard";
import cardImg1 from "./assets/img/peakpx.jpg"
import cardImg2 from "./assets/img/peakpx (1).jpg"
import cardImg3 from "./assets/img/peakpx (2).jpg"
import cardImg4 from "./assets/img/peakpx (3).jpg"

const App = () => {
  return (
    <>
     <NavBar heading={'Our Bootstrap Styles'}/>
     <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <MyCard imageSrc={cardImg1} heading="Dark Moon" />
        </div>
        <div className="col-sm-4">
          <MyCard imageSrc={cardImg2} heading="Purple Moon"/>
        </div>
        <div className="col-sm-4">
          <MyCard imageSrc={cardImg3} heading="Horror"/>
        </div>
        <div className="col-sm-4">
          <MyCard imageSrc={cardImg4} heading="GHG"/>
        </div>
      </div>
     </div>
     
    </>
  );
};

export default App;
