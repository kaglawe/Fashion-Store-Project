import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import './Header'
import Header from './Header';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <Header/>
            </div>
       
        <div className="home-page">
            <div className="flex-container">
                <div className="flex-item">
                    <img className="image" src={require('./images/women.jpg')} alt="Women" onClick={() => navigate("/women")} />
                    <button className="button" onClick={() => navigate("/women")}>WOMEN</button>
                </div>
                <div className="flex-item">
                    <img className="image" src={require('./images/kid.jpg')} alt="Kid" onClick={() => navigate("/kid")} />
                    <button className="button" onClick={() => navigate("/kid")}>KIDS</button>
                </div>
                <div className="flex-item">
                    <img className="image" src={require('./images/jewellery.jpg')} alt="Accessories" onClick={() => navigate("/accessories")} />
                    <button className="button" onClick={() => navigate("/accessories")}>ACCESSORIES</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default HomePage;
