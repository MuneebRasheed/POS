import axiosWrapper from "config/axios-wrapper";

export const GET = () => {
  return axiosWrapper.get(`/product`);
};

export const DELETE = (id) => {
    return axiosWrapper.delete(`/product/${id}`);
};

export const UPDATE = (id,body)=>{
    return axiosWrapper.put(`/product/${id}`,body)
}

export const CREATE = (body)=>{
    return axiosWrapper.post(`/product`,body)
}
