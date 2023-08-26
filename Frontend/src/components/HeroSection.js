import React from 'react'
import { NavLink, useNavigate, navigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './pages/Header';
import { Button } from "../styles/Button";



const HeroSection = ({ myData }) => {
  const navigate = useNavigate();
  
  const { name } = myData;

  return <Wrapper>
    <Header />
    <div className='container'>
      <div className='grid grid-two-column'>
        <div className='hero-section-data'>
          <p className='intro-data'>Welcome to</p>
          <h1>{name}</h1>
          <p>here you can find all your favorite products in one
            place! We offer a wide selection of high-quality products at competitive prices, from
            fashion. Our easy-to-use website makes it simple to find what you're looking for,
            whether you're browsing by category or searching for a specific
            item. Plus, with our secure checkout process, you can shop with confidence and enjoy fast,
            Start exploring our vast selection today and discover the perfect products
            for you!"</p>
      
     
      <NavLink to="/HomePage"> 
        <Button id='shopnowbutton'>SHOP NOW</Button>
      </NavLink>
  

        </div>
        <div className='hero-section-image'>
          <figure>
            <img src='images/hero.jpg' alt='hero-section-photo' className='img-style' />
          </figure>

        </div>

      </div>

    </div>

  </Wrapper>
};
const Wrapper = styled.section`
  body{
  background-color: #ffddc9db;
}


  .container {
    max-width: 120rem;
    margin: 0 auto;
   
  }

  .grid {
    display: grid;
    gap: 3rem; /* Reduce the gap for a more compact layout */
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); /* Responsive grid */
  }

  .hero-section-data {
    padding: 10vh; /* Add padding for better spacing */
    text-align: center; /* Center align text */
    h1 {
      text-transform: capitalize;
      font-weight: bold;
      font-size: 2.5rem; /* Increase font size */
      margin-bottom: 1rem; /* Adjust spacing */
    }
    p {
      margin: 1rem 0;
      color: #555; /* Adjust text color */
    }
  }

  #shopnowbutton {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
}

  .hero-section-image {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    figure {
      position: relative;
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
      }
    }
    img {
      max-width: 100%;
      height: auto;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Add subtle box shadow */
      border-radius: 10px; /* Add rounded corners */
    }
  }
`;


export default HeroSection
