import httpClient from "../services/http-common";

const productsList = () => {
    return httpClient.get('/product/list');
};

const getAllProductsByShopId = (shopId) => {
    return httpClient.get(`/products/getAllProd/${shopId}`)
};

const removeProduct = (id) => {
    return httpClient.get(`/shopkeeper/removeproduct/${id}`);
};

const addProduct = (data) => {
    return httpClient.post('/shopkeeper/newproduct', data);
};

const updateProduct = (data, productid) => {
    return httpClient.post(`/shopkeeper/updateproduct/${productid}`, data);
};

const getProductDetails = (productid) => {
    return httpClient.get(`/product/productdetails/${productid}`);
};

const getProductList = () => {
    return httpClient.get(`/products/allproducts`);
};

const getSpecificProductDetails = (productid, product) => {
    return httpClient.get(`/product/products/${product}/${product}`);
}

export default { productsList, removeProduct, addProduct, updateProduct, getProductDetails, 
    getProductList, removeProduct, getSpecificProductDetails,getAllProductsByShopId }