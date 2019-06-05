import instance from '@/helper/axios';

const axios = instance();

const base = '/product';

const list = params => axios.get(base, { params }).then(res => res.data);
const detail = params => axios.get(base, { params }).then(res => res.data);

export default {
    list,
    detail,
};
