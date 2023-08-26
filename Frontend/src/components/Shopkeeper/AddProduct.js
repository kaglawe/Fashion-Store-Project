import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {toast} from 'react-toastify';
import Header from '../pages/Header';
import shopkeeperServices from '../../services/shopkeeper.services';

function AddProduct() {
    const [productName, setProductName] = useState('');
    const [material, setMaterial] = useState('');
    const [stock,setStock] = useState('');
    const [price, setPrice] = useState('');
    const [description,setDescription] = useState('');
    const [image,setImage] = useState('');
    const [category, setCategory] = useState('');
    const { shopId } = useParams();
    const [categories, SetCategories] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    const sshopId = location.state.shopId;


    var id;
    const addProduct = (event) => {
        event.preventDefault();

        const product = { productName, material, stock,description,image, price, category }
        
        console.log(product)
        
        shopkeeperServices.addProduct(sshopId,product)
            .then(response => {
                console.log('Product added', response.data)
                toast.success('Product Added. Auto-Redirecting....',
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    }
                    )
                    navigate("/products/allproducts")
                setTimeout(() => {
                    if (shopId) {
                        navigate('/products/allproducts')
                    } else {
                        window.location.reload();
                    }
                }, 2500)
            })
            .catch(error => {
                console.log('Something went wrong', error)
                toast.success('Product Added Successfully',
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    }
                )
            })
    }
    return (
        <div>
            <Header />
            <div className="container h-120 mt-4">
                <div className="row justify-content-sm-center h-100">
                    <div className="col-xxl-6 col-xl-10 col-lg-10 col-md-7 col-sm-9">
                        <div className="card shadow-lg ">
                            <div className="card-body px-5 pt-5">
                                <h1 className="fs-4 card-title fw-bold mb-4">Add New Product</h1>

                                <form onSubmit={(e) => addProduct(e)}>

                                    <div className="row g-3">
                                        <div className="col mb-3">        
                                            <input id="stockItem" type="text" className="form-control" name="productName" required autoFocus
                                                value={productName} placeholder="Enter Product Name"
                                                onChange={(e) => setProductName(e.target.value)}
                                            />
                                        </div>
                                        <div className="col mb-3">
                                            <input id="productMaterial" type="text" className="form-control" name="productMaterial" required autoFocus
                                                value={material} placeholder="Enter Product Material"
                                                onChange={(e) => setMaterial(e.target.value)}
                                            />
                                        </div>

                                        <div className="col mb-3">
                                            <input id="quantity" type="number" className="form-control" name="stock" required
                                                value={stock} placeholder="Enter Available Quantity"
                                                onChange={(e) => setStock(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="row g-3">
                                        <div className="col mb-3">
                                            <label className="mb-2 text-muted" htmlFor="pricePerUnit">Price Per Unit</label>
                                            <input id="price" type="number" className="form-control" name="price" required
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                            />
                                        </div>
                                        {/* <div className="col mb-3">
                                            <label className="mb-2 text-muted" htmlFor="description">Product Image</label>
                                            <input id="image" type="file" className="form-control" name="image"
                                                value={image}
                                                onChange={(e) => setImage(e.target.value)}
                                            />
                                        </div> */}

                                        <div className="col mb-3">

                                            <label className="mb-2 text-muted" htmlFor="categoryData">Select Category</label>
                                            <select className="form-select" aria-label="Default select example" name="categoryData"
                                                onChange={(event) => {
                                                    setCategory(event.target.value);
                                                    console.log(event.target.value);
                                                }}
                                            >
                                                <option value="" defaultValue>select category</option>
                                                <option value="Male" defaultValue>Male</option>
                                                <option value="Female" defaultValue>Female</option>
                                                <option value="Kids" defaultValue>Kids</option>
                                                {
                                                    categories.map(c => (
                                                        <option key={c.categoryId} value={c.categoryId}>{c.categoryName}</option>
                                                    ))
                                                }
                                            </select>

                                        </div>
 
                                    </div>
                                    <div className="col mb-3">
                                            <label className="mb-2 text-muted" htmlFor="description">Product Dscription</label>
                                            <input id="description" type="textarea" className="form-control" name="description" required
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                            />
                                        </div>
                                    <div className="align-items-center d-flex">
                                        <button type="submit" className="btn btn-primary">
                                            Add New Product
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div className="text-center mt-4 text-muted">
                            Copyright &copy; 2023 &mdash; Local Market
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;