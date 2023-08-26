import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import shopkeeperServices from "../../services/shopkeeper.services";
import Header from "../pages/Header";
import { useEffect } from "react";

const Shopkeeper = () => {

    const [shops,setShops] = useState([]);
    
    const navigate = useNavigate();
    const init = () => {

        var user = JSON.parse(localStorage.getItem("user"))
        var id = user.userId;
        console.log("userId :",id);
        // farmerServices.getProductList()
        shopkeeperServices.getAllShopsList(id)
            .then(response => {
                console.log('Printing Shops data', response.data);
                // setProducts(response.data);
                setShops(response.data);
                console.log(shops);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })

    }
    const addNewShop = () => {
        console.log("you want to add shop")
        var user = JSON.parse(localStorage.getItem("user"))
        var id = user.userId;
        console.log("user id to add shop",id)
        navigate("/shops/addshop")

    }

    useEffect(() => {
        init();
    }, []);

    const handleDelete = (shopId) => {
        console.log('Printing id', shopId);
        
        shopkeeperServices.deleteShopById(shopId)
            .then(response => {
                console.log('shop deleted successfully', response.data);
                init();
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }
    return (
        
        <div>   
            <Header/>
            {/* <ShopkeeperNavBar /> */}
            <div className="container">
                <h3 className='mt-2'>List of Shops</h3>
                <hr />
                <div>
                    {/* Modal Button */}
                    <a className="btn btn-primary mb-3 " data-bs-toggle="modal" onClick={() => addNewShop() } role="button">Add New Shop</a>

                    {/* 1st  Modal Component */}
                    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalToggleLabel">Choose Shopkeeper</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <select className="form-select" aria-label="Default select example" name="id">
                                        <option value="" defaultValue>Open This Select Menu</option>
                                        {/* {
                                            products.map(f => (
                                                <option key={f.productId} value={f.productId}>{f.firstname + ' ' + f.lastname}</option>
                                            ))
                                        } */}
                                    </select>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Go To Next Step</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2st  Modal Component */}
                    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalToggleLabel2">Add New Product</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {/* <AddProduct id={productId} /> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary mb-3 float-end" onClick={() => { navigate("/shopkeeper") }}>Go To Back Page</button>
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr className="text-center">
                                <th>Shop Name</th>
                                <th>Shop Address</th>
                                <th>Pincode</th>
                                <th>Category</th>
                                <th>Open Shop</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                shops.map(shop => (
                                   <tr>
                                        <td>{shop.shopName}</td>
                                        <td>{shop.shopAddress}</td>
                                        <td>{shop.pincode}</td>
                                        <td>{shop.category}</td>
                                       
                                        <td className='text-center'>
                                            <button type="button" className="btn btn btn-success mx-3" onClick={() =>
                                                navigate(`/products/allproducts`,{state:{shopId:shop.shopId}})}>All Products</button>

                                            <button type="button" className="btn btn btn-danger mx-3" onClick={() =>{
                                                handleDelete(shop.shopId);
                                            }}>Delete Shop</button>
                                                {/* // navigate(`/shops/addproduct/${shop.shopId}`)} */}

                                            {/* <button className="btn btn-danger ml-2" onClick={() => {
                                                handleDelete(f.farmerId);
                                            }}>Delete</button> */}
                                        </td>
                                    </tr>
                                ))
                            }
                             
                        </tbody>
                    </table>

                </div>
                <div className="text-center text-muted" style={{ marginTop: '100px', marginBottom: '35px' }}>
                    Copyright &copy; 2023 &mdash; Local Market
                </div>
            </div>
        </div>
       
    );
}

export default Shopkeeper;