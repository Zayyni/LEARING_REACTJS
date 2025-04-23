import React from "react";
import "./MyCard.css";

const MyCard =(props)=>{
    console.log(props)
    return (
        <>
        <div className="card">
            <div className="card-body">
                <h3 className="heading">{props.heading}</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus dolor aspernatur totam culpa commodi officiis mollitia magni sequi saepe fugiat voluptatibus necessitatibus numquam, doloremque debitis, repellat iste similique dolore sit.</p>
            </div>
        </div>
        </>
    )
};
export default MyCard;