<template>
    <div :class="['main-wrapper', $style.main]">
        <div>
            <el-row :gutter="28">
                <el-col :span="6" v-for="item in list" :key="item.id" :class="$style.item">
                    <div :class="$style.photo">
                        <img :src="`${imgServer}/${item.cover}`" width="280" height="360">
                        <p class="abs-fullsize flex-center">
                            <router-link :to="`/product/detail/${item.id}`"><span>浏览详细</span></router-link>
                        </p>
                        <span :class="[`status-${item.status}`, $style['status']]"></span>
                    </div>
                    <h5>{{ item.name }}</h5>
                    <span :class="$style.price">{{ item.price | currency('￥', 2) }}</span>
                </el-col>
                <el-col :span="24" v-if="list.length === 0">没有搜索到数据</el-col>
            </el-row>
        </div>
        <div :class="$style.button">
            <span class="more-button" @click="handleMore" v-if="btnMoreVisible">浏览更多商品</span>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import api from '@/api/usr/product';
import config from '@/config';

export default {
    data() {
        return {
            list: [],
            btnMoreVisible: true,
            category: 0,
            p: 1,
            ps: 20,
            q: '',
            imgServer: config.server.img,
        };
    },
    beforeRouteUpdate(to, form, next) {
        next();
        this.init();
    },
    mounted() {
        this.init();
    },
    methods: {
        ...mapMutations(['setState']),

        init() {
            this.setState({ updated: false });
            this.category = this.$route.params.id;
            this.q = this.$route.query.key;
            this.btnMoreVisible = false;
            this.p = 1;

            if (this.category) { this.setBreadcrumb(); }
            this.loadlist();
        },

        // 设置面包屑导航
        setBreadcrumb() {
            const id = this.category;
            const path = `/product/category/${id}`;
            const data = {
                1: { name: '恋爱魔法', path },
                2: { name: '招财魔法', path },
                3: { name: '美容魔法', path },
                4: { name: '驱邪转运', path },
                5: { name: '仪式占卜', path },
            };

            const { childName } = this.$route.query;
            const { fullPath } = this.$route;

            const breadcrumb = [data[id]];
            if (childName) {
                breadcrumb.push({ name: childName, path: fullPath });
            }
            this.setState({ breadcrumb });
        },

        // 列表
        async loadlist() {
            const id = this.category;
            const filters = {
                category: id,
                child: this.$route.query.child,
                p: this.p,
                ps: this.ps,
            };

            if (this.q) {
                delete filters.category;
                delete filters.child;
                filters.q = this.q;
            }
            const res = await api.list(filters);
            if (res && res.list.length > 0) {
                if (this.p === 1) {
                    this.list = [...res.list];
                } else {
                    this.list = [...this.list, ...res.list];
                }
                this.btnMoreVisible = !res.list.length < this.ps;
            } else {
                this.btnMoreVisible = false;
            }
        },

        handleMore() {
            this.p = this.p + 1;
            this.loadlist();
        },
    },
};
</script>

<style lang="less" module>
.main {
    margin-bottom: 40px;
}

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
            width: 100%;
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

.button {
    text-align: center;
}
</style>
