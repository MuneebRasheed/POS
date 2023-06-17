import axiosWrapper from "config/axios-wrapper";

export const GET = () => {
  return axiosWrapper.get(`nozel/getAll`);
};

export const DELETE = (id) => {
    return axiosWrapper.delete(`nozel/delete?Id=${id}`);
};

export const UPDATE = (id,body)=>{
    return axiosWrapper.put(`nozel/update?Id=${id}`,body)
}

export const CREATE = (body)=>{
    return axiosWrapper.post(`nozel/create`,body)
}
