import httpClient from "../services/http-common";

const login = (data) => {
  return httpClient.post('/home/login', data);
};

const register = (data) => {
  return httpClient.post('/home/register', data);
};

const forgetPassword = (data) => {
  return httpClient.post('/forget/verify',data);
};

const verifyOTP = (data) => {
  return httpClient.post(`/forget/otp/${data}`);
};

const changePassword = (data) =>{
  return httpClient.put('/forget/newpass',data)
}

const deleteShopById = (shopId) => {
  return httpClient.delete(`/shops/delete/${shopId}`)
};

const addShopById = (userId,data) => {
  return httpClient.post(`/shops/addshop/${userId}`,data);
}
const getAllShopById = (pincode) =>{
  return httpClient.get(`/shops/getallshop/${pincode}`);

}

const getCategory = () => {
  return httpClient.get('/shopkeeper');
}

const removeCategory = (categoryid) => {
  return httpClient.get(`/shopkeeper/removecategory/${categoryid}`);
}

const addCategory = (categoryName) => {
  return httpClient.get(`/shopkeeper/addcategory/${categoryName}`);
}

const addProduct = (shopId,data) => {
  return httpClient.post(`/products/addproduct/${shopId}`, data)
}

const addProductImage = (file, id) => {
  return httpClient.post(`/shopkeeper/${id}/image`, file);
};

const updateProduct = (id, form) => {
  return httpClient.put(`/shopkeeper/updateproduct/${id}`, form)
}

const orderDetails = () => {
  return httpClient.get('/shopkeeper/allorders');
}

const getUsersList = () => {
  return httpClient.get('/shopkeeper/allusers');
}

const getSpecificUserDetails = id => {
  return httpClient.get(`/shopkeeper/userdetails/${id}`)
}

const updateUser = (id, data) => {
  return httpClient.post(`/shopkeeper/updateuser/${id}`, data)
}
const getAllShopsList = (id) => {
  return httpClient.get(`/shops/getshop/${id}`)
}

export default { login, register, getCategory, removeCategory, addCategory, addProduct, addProductImage, updateProduct, orderDetails,
                 getUsersList, getSpecificUserDetails, updateUser ,getAllShopsList,addShopById,forgetPassword,verifyOTP,deleteShopById
                 ,getAllShopById,changePassword
                }