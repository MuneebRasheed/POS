import axiosWrapper from "config/axios-wrapper";

export const GET = () => {
  return axiosWrapper.get(`employee/getAll`);
};

export const DELETE = (id) => {
    return axiosWrapper.delete(`employee/delete?Id=${id}`);
};

export const UPDATE = (id,body)=>{
    return axiosWrapper.put(`employee/update?Id=${id}`,body)
}

export const CREATE = (body)=>{
    return axiosWrapper.post(`employee/create`,body)
}
