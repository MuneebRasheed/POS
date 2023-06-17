import axiosWrapper from "config/axios-wrapper";

export const GET = () => {
  return axiosWrapper.get(`salesman/getAll`);
};

export const DELETE = (id) => {
    return axiosWrapper.delete(`salesman/delete?Id=${id}`);
};

export const UPDATE = (id,body)=>{
    return axiosWrapper.put(`salesman/update?Id=${id}`,body)
}

export const CREATE = (body)=>{
    return axiosWrapper.post(`salesman/create`,body)
}
