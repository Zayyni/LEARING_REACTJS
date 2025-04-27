import React, { useState } from "react";
import TourCard from "./TourCard";
import { TourService } from "../services/TourService";

const TourCardsOptimised = () => {
  const [tours, setTours] = useState(TourService.getAllTours());

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          {tours.length > 0 && tours.map((tour, index) => {
            return (
                <TourCard key={index} imageUrl={tour.imgUrl} name={tour.name}/>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TourCardsOptimised;
