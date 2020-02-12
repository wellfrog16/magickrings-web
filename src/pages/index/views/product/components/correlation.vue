<template>
    <div :class="[$style.main]">
        <h2>必备搭配</h2>
        <div class="row">
            <div class="col-sm-3 col-xs-12" v-for="item in list" :key="item.id" :class="$style.item">
                <div :class="$style.photo">
                    <img :src="`${imgServer}/${item.cover}`" />
                    <p class="abs-fullsize flex-center">
                        <router-link :to="`/product/detail/${item.id}`"><span>浏览详细</span></router-link>
                    </p>
                </div>
                <h5 class="font-weight-bold">{{ item.name }}</h5>
                <span :class="$style.price">{{ item.price | currency('￥', 2) }}</span>
                <div><a :class="$style.button" :href="item.url" target="_blank">即刻购买</a></div>
            </div>
        </div>
    </div>
</template>

<script>
import config from '@/config';

export default {
    props: {
        list: {
            type: Array,
        },
    },
    data() {
        return {
            imgServer: config.server.img,
        };
    },
};
</script>

<style lang="less" module>
@import '~@/assets/style/usr/index.config.less';

.main {
    margin-bottom: 80px;

    h2 {
        margin: 0;
        line-height: 50px;
        border-bottom: 1px solid @g-color-primary;
        margin-bottom: 25px;
        text-align: center;
        font-size: 16px;
        letter-spacing: 3px;
    }
}

.item {
    text-align: center;
    height: 520px;

    .price {
        color: #a57f50;
    }

    .photo {
        position: relative;
        font-size: 0;
        width: 100%;

        img {
            width: 100%;
            object-fit: cover;
        }

        p span {
            color: #fff;
            font-size: 18px;
            padding-bottom: 4px;
            display: inline-block;
            border-bottom: 1px solid #fff;
        }

        p {
            opacity: 0;
            margin: 0;
            transition: all 0.3s ease-in;

            &:hover {
                opacity: 1;
                background-color: rgba(0, 0, 0, 0.6);
            }
        }
    }

    h5 {
        margin-top: 20px;
        margin-bottom: 5px;
        font-size: 14px;
    }

    .button {
        border: 1px solid #000;
        border-radius: 4px;
        text-align: center;
        display: inline-block;
        width: 100px;
        height: 40px;
        line-height: 40px;
        margin-top: 30px;
        font-size: 14px;
        color: #000;
    }
}
</style>
