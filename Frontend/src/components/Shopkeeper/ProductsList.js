import { useEffect, useState } from 'react';
import productServices from '../../services/product.services';
import { useLocation, useNavigate } from "react-router-dom";
import AddProduct from './AddProduct'
import Header from '../pages/Header';
import toast, { Toaster } from 'react-hot-toast';
import ShopkeeperServices from '../../services/shopkeeper.services';

function ProductsList() {
    const [products, setProducts] = useState([]);
    const [categories, SetCategories] = useState([]);
    const [productId, setProductId] = useState('');
    const [modalId, setModalId] = useState('');
    const [newName, setNewName] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newCat, setNewCat] = useState('');
    const location = useLocation();
    const shopId = location.state.shopId;

    let formdata = new FormData();
    const onFileChange = (e) => {
        console.log(e.target.files[0])
        if (e.target && e.target.files[0]) {
            formdata.append('imgFile', e.target.files[0])
        }
    }

    const handleSubmit = (id) => {

        ShopkeeperServices.addProductImage(formdata, id)
            .then(response => {
                console.log('Image Uploaded', response.data)
                toast.success('Image Uploaded. Auto-Redirecting....',
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    }
                )
                setTimeout(() => {
                    window.location.reload();
                }, 2500)
            })
            .catch(error => {
                console.log("Something went wrong", error)
                toast.error('Something went wrong!',
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
    const navigate = useNavigate();
    const init = () => {
        productServices.getAllProductsByShopId(shopId)
            .then(response => {
                console.log('Printing Products data', response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })

        
    }

    useEffect(() => {
        init();
    }, []);

    const handleDelete = (id) => {
        console.log('Printing id', id);
        productServices.removeProduct(id)
            .then(response => {
                console.log('product deleted successfully', response.data);
                init();
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const updateData = (id) => {
        if (newName === "" || newQuantity === "" || newPrice === "" || newCat === "") {
            console.log("Empty")
            toast.error('Something went wrong!',
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            )
            return;
        }

        formdata.append('productname', newName)
        formdata.append('priceperunit', newPrice)
        formdata.append('quantity', newQuantity)
        formdata.append('catid', newCat)

        ShopkeeperServices.updateProduct(id, formdata)
            .then(response => {
                console.log("Updated", response)
                toast.success('Product Updated. Auto-Redirecting....',
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    }
                )
                setTimeout(() => {
                    window.location.reload();
                }, 2500)

            })
            .catch(error => {
                console.log("Something went wrong", error)
                toast.error('Something went wrong!',
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

    const updateModalData = (id, newName, newQuantity, newPrice, newCat) => {
        setModalId(id)
        setNewName(newName)
        setNewCat(newCat)
        setNewPrice(newPrice)
        setNewQuantity(newQuantity)
    }

    const handleAddNewProduct = () => {
        navigate("/shops/addproduct",{state:{shopId}})
    }


    return (
        <div>
            <Header/>
            {/* <ShopkeeperNavBar /> */}
            <div className="container">
                <h3 className='mt-2'>List of Products</h3>
                <hr />
                <div>
                    {/* Modal Button */}
                    <a className="btn btn-primary mb-3 " data-bs-toggle="modal" onClick={handleAddNewProduct} role="button">Add New Product</a>

                    {/* 1st  Modal Component */}
                    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalToggleLabel">Choose Shopkeeper</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <select className="form-select" aria-label="Default select example" name="id"
                                        onChange={(event) => {
                                            setProductId(event.target.value);
                                            
                                        }}
                                    >
                                        <option value="" defaultValue>Open This Select Menu</option>
                                        {
                                            products.map(f => (
                                                <option key={f.productId} value={f.productId}>{f.firstname + ' ' + f.lastname}</option>
                                            ))
                                        }
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
                                    <AddProduct id={productId} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary mb-3 float-end" onClick={() => { navigate("/shops/getshop") }}>Go To Back Page</button>
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Product Name</th>
                                <th>Product Description</th>
                                <th>Material</th>
                                <th>Quantity</th>
                                <th>Price per Unit</th>
                                <th>Category</th>
                                <th>Images</th>
                                {/* <th className='text-center'>Functions</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(p => (
                                    <tr>
                                      <td>{p.productName}</td>
                                        <td>{p.description}</td>
                                        <td>{p.material}</td>
                                        <td>{p.stock}</td>
                                        <td>{p.price}</td>
                                        <td>{p.category}</td>
                                        <td><button className='btn btn-success' onClick={()=>{navigate("/addimage",{state:{id:p.productId}})}}>Add Images</button></td>
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

export default ProductsList;