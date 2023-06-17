import axiosWrapper from "config/axios-wrapper";

export const GET = () => {
  return axiosWrapper.get(`carriage/getAll`);
};

export const DELETE = (id) => {
    return axiosWrapper.delete(`carriage/delete?Id=${id}`);
};

export const UPDATE = (id,body)=>{
    return axiosWrapper.put(`carriage/update?Id=${id}`,body)
}

export const CREATE = (body)=>{
    return axiosWrapper.post(`carriage/create`,body)
}
