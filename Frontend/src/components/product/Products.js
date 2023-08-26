import React from 'react'
import Header from '../pages/Header';
import styled from 'styled-components';
import FilterSection from './FilterSection';
import Sort from './Sort';
import ProductList from './ProductList';
import { useFilterContext } from '../context/filter_context';

const Products = () => {
    const {filter_products} = useFilterContext();
    console.log(filter_products,"filter products");
    return (
        <>
            <Header />
            <Wrapper>
                <div className="container grid-filter-column">
                    <div>
                        <FilterSection />
                    </div>

                    <section className='product-view--sort '>
                        <div className="sort-filter">
                            <Sort />
                        </div>
                        <div className="main-product">
                            <ProductList />
                        </div>
                    </section>
                </div>

            </Wrapper>
        </>
    );
};
const Wrapper = styled.section`
.grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
}
.product-view--sort {
    padding :20px;
}
.container {
    max-width: 120rem;
    margin: 0 auto;
  }


`;
export default Products
