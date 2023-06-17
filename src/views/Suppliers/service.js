import axiosWrapper from "config/axios-wrapper";




export const GET = () => {
  return axiosWrapper.get(`supplier/getAll`);
};

export const DELETE = (id) => {
    return axiosWrapper.delete(`supplier/delete?Id=${id}`);
};

export const UPDATE = (id,body)=>{
    return axiosWrapper.put(`supplier/update?Id=${id}`,body)
}

export const CREATE = (body)=>{
    return axiosWrapper.post(`supplier/create`,body)
}
