import { useEffect, useState } from 'react';
import productServices from '../../services/product.services';
import { useLocation, useNavigate } from "react-router-dom";
import AddProduct from './AddProduct'
import Header from '../pages/Header';
import toast, { Toaster } from 'react-hot-toast';
import ShopkeeperServices from '../../services/shopkeeper.services';

function ShopProducts() {
    const [products, setProducts] = useState([]);
    const [categories, SetCategories] = useState([]);
    const [productId, setProductId] = useState('');
    const [modalId, setModalId] = useState('');
    const [newName, setNewName] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newCat, setNewCat] = useState('');

    const location = useLocation();
    const shopId = location.state.id;
    console.log(shopId);

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

    return (
        <div>
            <Header/>
            <div className="container">
                <h3 className='mt-2'>List of Products</h3>
                <hr />
                <div>
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
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <AddProduct id={productId} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary mb-3 float-end" onClick={() => { navigate("/shops") }}>Go To Back Page</button>
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Product Name</th>
                                <th>Product Description</th>
                                <th>Material</th>
                                <th>Quantity</th>
                                <th>Price per Unit</th>
                                <th>Category</th>
                                <th>Show Image</th>
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
                                        <td>{p.stocks}</td>
                                        <td>{p.price}</td>
                                        <td>{p.category}</td>
                                        <td><button className='btn btn-success' onClick={()=>{navigate("/showimage",{state:{p}})}}>Show Image</button></td>
                                        {/* <td>
                                            <figure>
                                                <img src={`http://localhost:8080/products/shopkeeper/${p.id}`} alt='productImage' width={75} />
                                                <figcaption> {p.imagePath} </figcaption>
                                            </figure>
                                        </td> */}
                                        {/* <td className='text-center'> */}


                                            {/* Modal Trigger for product update */}
                                            {/* <button type="button" className="btn btn-info mx-1" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal1" onClick={() => updateModalData(p.id, p.stockItem, p.quantity, p.pricePerUnit, p.category.categoryId)}>Update
                                            </button> */}

                                            {/* Modal Component for product update */}
                                            {/* <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Update Product</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">



                                                            <div className="row mb-3">
                                                                <div className="col">
                                                                    <input type="text" className="form-control" placeholder="New product name" aria-label="New Product Name"
                                                                        value={newName}
                                                                        onChange={(e) => setNewName(e.target.value)}
                                                                    />
                                                                </div>
                                                                <div className="col">
                                                                    <input type="number" className="form-control" placeholder="New product quantity" aria-label="New Product Quantity"
                                                                        value={newQuantity}
                                                                        onChange={(e) => setNewQuantity(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <input type="text" className="form-control" placeholder="New Price" aria-label="New Price"
                                                                        value={newPrice}
                                                                        onChange={(e) => setNewPrice(e.target.value)}
                                                                    />
                                                                </div>
                                                                <div className="col">

                                                                    <select className="form-select" aria-label="Default select example" name="categoryData" value={newCat}
                                                                        onChange={(event) => {
                                                                            setNewCat(event.target.value);
                                                                        }}
                                                                    >
                                                                        {
                                                                            categories.map(c => (
                                                                                <option key={c.categoryId} value={c.categoryId}>{c.categoryName}</option>
                                                                            ))
                                                                        }
                                                                    </select>


                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-primary" onClick={() => updateData(modalId)}>Save Data</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

                                            {/* Modal Trigger for add image */}
                                            {/* <button type="button" className="btn btn-success mx-3" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal" onClick={() => setModalId(p.id)}>Add Image
                                            </button> */}

                                            {/* Modal Component  for add image */}
                                            {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Add Image</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">

                                                            <form>
                                                                <div className="mb-3">
                                                                    <input className="form-control" type="file" id="formFile" onChange={onFileChange} />
                                                                </div>
                                                            </form>

                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-primary" onClick={() => handleSubmit(modalId)}>Upload Image</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

                                            {/* <button className="btn btn-danger ml-2" onClick={() => {
                                                handleDelete(p.id);
                                            }}>Delete</button> */}
                                        {/* </td> */}
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

export default ShopProducts;