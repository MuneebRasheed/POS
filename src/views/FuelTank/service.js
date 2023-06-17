import axiosWrapper from "config/axios-wrapper";

export const GET = () => {
  return axiosWrapper.get(`tank/getAll`);
};

export const DELETE = (id) => {
    return axiosWrapper.delete(`tank/delete?Id=${id}`);
};

export const UPDATE = (id,body)=>{
    return axiosWrapper.put(`tank/update?Id=${id}`,body)
}

export const CREATE = (body)=>{
    return axiosWrapper.post(`tank/create`,body)
}
