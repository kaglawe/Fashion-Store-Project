import httpClient from "../services/http-common";

const addToWishList = (id, form) => {
    return httpClient.post(`/user/addtowishlist/${id}`, form);
};

const checkOut = () => {
    return httpClient.get('/user/checkout')
}

const removeItem = (id) => {
    return httpClient.post(`/user/removefromwishlist/${id}`)
}

export default { addToWishList, checkOut, removeItem }