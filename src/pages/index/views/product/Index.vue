<template>
    <b-container class="pb-3">
        <div class="row">
            <div class="col-xl-3 col-md-4 col-sm-6 col-12" v-for="item in list" :key="item.id" :class="$style.item">
                <div :class="$style.photo">
                    <img :src="`${imgServer}/${item.cover}`">
                    <p class="abs-fullsize flex-center">
                        <router-link :to="`/product/detail/${item.id}`" target="_blank"><span>浏览详细</span></router-link>
                    </p>
                    <span :class="[`status-${item.status}`, $style['status']]"></span>
                </div>
                <h5>{{ item.name }}</h5>
                <span :class="$style.price">{{ item.price | currency('￥', 2) }}</span>
            </div>
            <!-- <el-col :span="24" v-if="list.length === 0">没有搜索到数据</el-col> -->
        </div>
        <div v-show="btnMoreVisible" class="flex-center">
            <span class="more-button" @click="handleMore">浏览更多商品</span>
        </div>
    </b-container>
</template>

<script>
import { mapMutations } from 'vuex';
import product from '#index/helper/product';
import api from '@/api/usr/product';
import config from '@/config';

export default {
    data() {
        return {
            filters: {
                category: 0,
                child: 0,
                p: 1,
                ps: 16,
            },
            imgServer: config.server.img,
            btnMoreVisible: true,
            list: [],
        };
    },
    mounted() {
        this.setBreadcrumb();
        this.loadlist();
    },
    beforeRouteUpdate(to, form, next) {
        next();
        this.setBreadcrumb();
        this.loadlist();
    },
    methods: {
        ...mapMutations(['setState']),

        setBreadcrumb() {
            const { id } = this.$route.params;
            const title = product.category[id].name;
            const { child, childName } = this.$route.query;

            // 设置查询参数
            this.filters.category = id;
            this.filters.child = child;

            // 设置面包屑
            const breadcrumb = [
                { meta: { title }, path: '' },
                { meta: { title: childName }, path: '' },
            ];
            this.$nextTick(() => this.setState({ routesMatched: breadcrumb }));
        },

        // 列表
        async loadlist() {
            // if (this.q) {
            //     delete filters.category;
            //     delete filters.child;
            //     filters.q = this.q;
            // }
            const res = await api.list(this.filters);
            if (res && res.list.length > 0) {
                if (this.filters.p === 1) {
                    this.list = [...res.list];
                } else {
                    this.list = [...this.list, ...res.list];
                }
                this.btnMoreVisible = this.list.length < res.total;
            } else {
                this.btnMoreVisible = false;
            }
        },

        handleMore() {
            this.filters.p += 1;
            this.loadlist();
        },
    },
};
</script>

<style lang="less" module>
.item {
    text-align: center;
    height: 480px;

    .price {
        color: #a57f50;
    }

    .photo {
        position: relative;
        font-size: 0;
        width: 100%;

        img {
            width: 280px;
            height: 360px;
            object-fit: contain;
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

        .status {
            position: absolute;
            top: -15px;
            right: -15px;
        }
    }

    h5 {
        margin-top: 20px;
        margin-bottom: 5px;
        font-size: 14px;
    }
}
</style>
