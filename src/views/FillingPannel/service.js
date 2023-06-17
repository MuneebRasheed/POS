import axiosWrapper from "config/axios-wrapper";

export const GET = () => {
  return axiosWrapper.get(`dispenser/getAll`);
};

export const DELETE = (id) => {
    return axiosWrapper.delete(`dispenser/delete?Id=${id}`);
};

export const UPDATE = (id,body)=>{
    return axiosWrapper.put(`dispenser/update?Id=${id}`,body)
}

export const CREATE = (body)=>{
    return axiosWrapper.post(`dispenser/create`,body)
}
