import instance from '@/helper/axios';

const axios = instance();

const base = '/product';

const list = (params) => axios.get(base, { params });
const detail = (id) => axios.get(`${base}/${id}`);

export default {
    list,
    detail,
};
