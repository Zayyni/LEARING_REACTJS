import React from "react";

const TourCard =(props)=>{
    return (
        <div className="col-sm-3">
                  <div className="card shadow-lg">
                    <img src={props.imageUrl} alt="" height={200} />
                    <div className="card-body">
                      <p className="h3">{props.name}</p>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repellat expedita repudiandae nemo provident
                        beatae, magni incidunt harum at tempora voluptatum
                        error. Recusandae minima laborum molestias aut officia
                        expedita esse ut.
                      </p>
                    </div>
                  </div>
                </div>
    )
};
export default TourCard;