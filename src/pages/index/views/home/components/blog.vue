<template>
    <div :class="[$style.main, 'container']">
        <h3>BLOG 买家秀</h3>
        <div class="row">
            <div :class="$style.item" class="col-xl-4 col-sm-12" v-for="item in list" :key="item.id">
                <div>
                    <b-img rounded fluid-grow :class="$style.photo" :src="`${imgServer}/${item.photo}`"></b-img>
                </div>
                <div :class="$style.content">
                    <span>@{{ item.author }}</span>
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.message }}</p>
                </div>
                <div :class="$style.more"><a :href="item.url" target="_blank">查看更多 <i class="el-icon-d-arrow-right" /></a></div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/usr/taobao-info';
import config from '@/config';

export default {
    data() {
        return {
            list: [],
            imgServer: config.server.img,
        };
    },
    mounted() {
        this.loadlist();
    },
    methods: {
        async loadlist() {
            const res = await api.list({ p: 1, ps: 3 });
            if (res) {
                this.list = res.list;
            }
        },
    },
};
</script>

<style lang="less" module>
.main {
    margin: 80px auto 0 auto;

    h3 {
        line-height: 40px;
        text-align: center;
        margin-bottom: 30px;
        letter-spacing: 2px;
        font-weight: normal;
    }

    .photo {
        object-fit: cover;
        height: 380px;
        width: 380px;
    }

    .item {
        margin-bottom: 50px;
    }
}

.content {
    margin-top: 20px;
    height: 180px;

    span {
        font-size: 16px;
        display: block;
    }

    h5 {
        font-size: 16px;
        font-weight: 100;
        color: #a3a3a3;
        margin: 10px auto 20px auto;
    }

    p {
        color: #a3a3a3;
        letter-spacing: 2px;
        font-size: 14px;
        text-align: justify;
    }
}

.more {
    text-align: right;

    a {
        color: #a57f50;
    }
}
</style>
