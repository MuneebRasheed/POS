import axiosWrapper from "config/axios-wrapper";

export const GET = () => {
  return axiosWrapper.get(`product/getProducts`);
};

export const DELETE = (id) => {
    return axiosWrapper.delete(`product/delete?Id=${id}`);
};

export const UPDATE = (id,body)=>{
    return axiosWrapper.put(`product/update?Id=${id}`,body)
}

export const CREATE = (body)=>{
    return axiosWrapper.post(`product/create`,body)
}
