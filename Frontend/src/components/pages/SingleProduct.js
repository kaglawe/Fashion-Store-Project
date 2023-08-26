import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useProductContext } from '../context/productcontext';
import PageNavigation from './PageNavigation';
import { Container } from "../../styles/Container";
import Header from './Header';

const API = "http://localhost:8080/products/allproducts";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, SingleProduct } = useProductContext();

  const { id } = useParams();
  // console.log(id);

  const { productId, productName, price, description, stock, categeory } = SingleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${productId}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }


  return (
  <>
  <Header/>
    <Wrapper>
      <PageNavigation title={productName} />
      <Container className="container">
        <div className='grid grid-two-column'>
          
        </div>

      </Container>
    </Wrapper>
  </>
  )
};
const Wrapper = styled.section`
.container {
  padding:9rem 0;
}`;

export default SingleProduct
