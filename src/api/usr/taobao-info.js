import instance from '@/helper/axios';

const axios = instance();

const base = '/taobao-info';

const list = (params) => axios.get(base, { params });

export default {
    list,
};
