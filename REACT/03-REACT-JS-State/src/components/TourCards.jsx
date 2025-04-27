import React, { useState } from "react";


const TourCards = ()=>{

    const [tours,setTours] = useState([
        {
            sno: "AA001",
            name:"Paris",
            imgUrl:"https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/de/b0/c7.jpg"
        },
        {
            sno: "AA002",
            name:"Singapore",
            imgUrl:"https://media.dpauls.com/drive-server/images/packages/singapore/singapore%20city/merlion-night-view-singapore.jpg"
        },
        {
            sno: "AA003",
            name:"Malaysia",
            imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYeMQNTdw-WffIlZNy8L3am3KTRt_RWY8sdQ&s"
        },
        {
            sno: "AA004",
            name:"Pakistan",
            imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_tXrSjh50HwY2AEfu3q_5oXuNvGjOzGHRQ&s"
        }
    ]);
    
    return(
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col-sm-3">
                <div className="card shadow-lg">
                    <img src={tours[0].imgUrl} alt="" height={200}/>
                    <div className="card-body">
                        <p className="h3">{tours[0].name}</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat expedita repudiandae nemo provident beatae, magni incidunt harum at tempora voluptatum error. Recusandae minima laborum molestias aut officia expedita esse ut.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card shadow-lg">
                    <img src={tours[1].imgUrl} alt="" height={200}/>
                    <div className="card-body">
                        <p className="h3">{tours[1].name}</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat expedita repudiandae nemo provident beatae, magni incidunt harum at tempora voluptatum error. Recusandae minima laborum molestias aut officia expedita esse ut.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card shadow-lg">
                    <img src={tours[2].imgUrl} alt="" height={200}/>
                    <div className="card-body">
                        <p className="h3">{tours[2].name}</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat expedita repudiandae nemo provident beatae, magni incidunt harum at tempora voluptatum error. Recusandae minima laborum molestias aut officia expedita esse ut.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="card shadow-lg">
                    <img src={tours[3].imgUrl} alt="" height={200}/>
                    <div className="card-body">
                        <p className="h3">{tours[3].name}</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat expedita repudiandae nemo provident beatae, magni incidunt harum at tempora voluptatum error. Recusandae minima laborum molestias aut officia expedita esse ut.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
};

export default TourCards;