import axiosWrapper from "config/axios-wrapper";

export const GET = () => {
  return axiosWrapper.get(`customer/getAll`);
};

export const DELETE = (id) => {
    return axiosWrapper.delete(`customer/delete?Id=${id}`);
};

export const UPDATE = (id,body)=>{
    return axiosWrapper.put(`customer/update?Id=${id}`,body)
}

export const CREATE = (body)=>{
    return axiosWrapper.post(`customer/create`,body)
}
