import React, { useState } from "react";
import { ProductService } from "../services/ProductService";

const ProductCart =()=>{

    const [watches,setWatches] = useState(ProductService.getAllProducts());

    const clickIncrQty = (productId) => {
        const theProducts = watches.map(watch =>{
            if(watch.id === productId){
                return{
                    ...watch,
                    qty : watch.qty + 1
                }
            }
            return watch;
        });
        setWatches(theProducts);
    };


    const clickDecrQty = (productId) => {
        const theProducts = watches.map(watch =>{
            if(watch.id === productId){
                return{
                    ...watch,
                    qty : watch.qty - 1 > 0 ? watch.qty -1 : 1
                }
            }
            return watch;
        });
        setWatches(theProducts);
    };


    return (
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <p className="h3 text-success">Watch Kart</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vitae earum itaque quia minus amet suscipit quaerat illo quis, veritatis totam harum libero iste quisquam dolore est consectetur natus! Distinctio.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-striped table-hover text-center shadow-lg">
                        <thead className="bg-light text-dark">
                        <tr>
                            <th>Sno</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                watches.map((watch,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{watch.id}</td>
                                            <td>
                                                <img src={watch.imgUrl} width={50} height={50} alt="" />
                                            </td>
                                            <td>{watch.name}</td>
                                            <td>
                                                <i onClick={()=>clickDecrQty(watch.id)} className="bi bi-dash-circle-fill me-2 text-success"></i>
                                                {watch.price}
                                                <i onClick={()=>clickIncrQty(watch.id)} className="bi bi-plus-circle-fill m-2 text-success"></i>
                                                </td>
                                            <td>{watch.qty}</td>
                                            <td>{watch.price * watch.qty}</td>

                                            <td>
                                                <button className="btn btn-danger">
                                                    <i className="bi bi-trash-fill"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
};
export default ProductCart;