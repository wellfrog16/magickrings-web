import instance from '@/helper/axios';

const axios = instance();

const base = '/story';

const detail = () => axios.get(base).then(res => res.data);

export default {
    detail,
};
