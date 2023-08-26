import { useEffect, useState } from 'react';
import ShopkeeperServices from '../../Services/Shopkeeper.services';
import { useNavigate} from "react-router-dom";

function ShopkeepersList() {

    const [Shopkeepers, setShopkeepers] = useState([]);
    const navigate = useNavigate();

    const init = () => {
        ShopkeeperServices.ShopkeepersList()
            .then(response => {
                console.log('Printing Shopkeepers data', response.data);
                setShopkeepers(response.data);
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
        ShopkeeperServices.removeShopkeeper(id)
            .then(response => {
                console.log('employee deleted successfully', response.data);
                init();
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    return (
        <div>
            <div className="container">
                <h3 className='mt-2'>List of Shopkeepers</h3>
                <hr />
                <div>

                    <button type="button" className="btn btn-primary mb-3" onClick={() => navigate('/Shopkeeper/addnewShopkeeper')}>Add New Shopkeeper</button>
                    <button type="button" className="btn btn-primary mb-3 float-end" onClick={() => { navigate("/Shopkeeper") }}>Go To Back Page</button>
                    <table className="table table-bordered table-striped text-center">
                        <thead className="thead-dark">
                            <tr>
                                <th>Shopkeeper Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone No.</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th className='text-center'>Functions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Shopkeepers.map(f => (
                                    <tr key={f.ShopkeeperId}>
                                        <td>{Shopkeepers.indexOf(f) + 1}</td>
                                        <td>{f.firstname}</td>
                                        <td>{f.lastname}</td>
                                        <td>{f.phoneNo}</td>
                                        <td>{f.email}</td>
                                        <td>{f.address}</td>
                                        <td className='text-center'>
                                            <button type="button" className="btn btn-info mx-1" onClick={() =>
                                                navigate(`/Shopkeeper/updateShopkeeper/${f.ShopkeeperId}`)}>Update</button>

                                            <button type="button" className="btn btn btn-success mx-3" onClick={() =>
                                                navigate(`/Shopkeeper/addproduct/${f.ShopkeeperId}`)}>Add Product</button>

                                            <button className="btn btn-danger ml-2" onClick={() => {
                                                handleDelete(f.ShopkeeperId);
                                            }}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </div>
            <div className="text-center  text-muted" style={{marginTop: '100px', marginBottom: '35px'}}>
                Copyright &copy; 2023 &mdash; Local Market
            </div>
        </div>
    );
}

export default ShopkeepersList;