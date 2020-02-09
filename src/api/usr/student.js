import instance from '@/helper/axios';

const axios = instance();

const base = '/student';

const list = (params) => axios.get(base, { params });

export default {
    list,
};
