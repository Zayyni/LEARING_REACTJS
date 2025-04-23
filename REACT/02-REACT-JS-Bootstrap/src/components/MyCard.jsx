import React from "react";


const MyCard =(props)=>{
    return (
        <>
        <div className="card mt-3 shadow-lg">
            <img src={props.imageSrc} alt="" className="img-fluid"/>
            <div className="card-body">
                <p className="h3">{props.heading}</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt earum saepe totam atque nulla tempore, neque nostrum nam temporibus consequatur eligendi deserunt recusandae veritatis accusamus pariatur ab, libero iusto unde?</p>

            </div>
        </div>
        </>
    )
};
export default MyCard;