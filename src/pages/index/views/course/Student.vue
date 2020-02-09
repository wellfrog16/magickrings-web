<template>
    <b-container>
        <b-tabs v-model="tabIndex">
            <b-tab title="灵气课程"></b-tab>
            <b-tab title="通灵课程"></b-tab>
            <b-tab title="花精课程"></b-tab>
            <b-tab title="美容魔法课"></b-tab>
        </b-tabs>
        <div :class="[$style.wrapper, 'row']">
            <div class="col-xl-6 col-12" v-for="item in list" :key="item.id">
                <div :class="$style.item">
                    <div :class="[$style.photo, 'flex-center']">
                        <div :style="{backgroundImage:'url(' + imgServer + '/' + item.photo}"></div>
                    </div>
                    <div :class="$style.info">
                        <h5>{{ item.name }}</h5>
                        <ul>
                            <li v-for="child in item.course" :key="child">{{ child }}</li>
                        </ul>
                        <div :class="$style.level">
                            <i class="icon icon-star" v-for="child in item.level" :key="child"></i>
                        </div>
                    </div>
                    <div :class="$style.description">简介：<p>{{ item.message }}</p></div>
                </div>
            </div>
        </div>
        <div :class="$style.button" v-show="btnMoreVisible">
            <span class="more-button" @click="loadMore">更多学员</span>
        </div>
    </b-container>
</template>

<script>
import api from '@/api/usr/student';
import config from '@/config';

export default {
    data() {
        return {
            tabIndex: 0,
            btnMoreVisible: false,
            activeName: '灵气课程',
            filters: {
                p: 1,
                ps: 10,
                course: [],
            },
            imgServer: config.server.img,
            list: [],
            category: [
                { index: 0, name: '灵气课程' },
                { index: 1, name: '通灵课程' },
                { index: 2, name: '花精课程' },
                { index: 3, name: '美容魔法课' },
            ],
        };
    },
    watch: {
        tabIndex(val) {
            const course = this.category.find((t) => t.index === val).name;
            this.setActive(course);
        },
    },
    mounted() {
        this.setActive('灵气课程');
    },
    methods: {
        setActive(course) {
            this.filters.course = [course];
            this.filters.p = 1;
            this.list = [];
            this.btnMoreVisible = false;
            this.loadList();
        },

        async loadList() {
            const res = await api.list(this.filters);
            if (res && res.list.length > 0) {
                const [activeName] = this.filters.course;
                this.activeName = activeName;
                this.list = [...this.list, ...res.list];
                this.btnMoreVisible = this.list.length < res.total;
            } else {
                this.btnMoreVisible = false;
            }
        },

        loadMore() {
            this.filters.p += 1;
            this.loadList();
        },
    },
};
</script>

<style lang="less" module>
.wrapper {
    padding: 10px;
    min-height: 600px;
}

.item {
    height: 220px;
    background-color: #000;
    padding: 40px;
    box-sizing: border-box;
    display: flex;
    margin-bottom: 20px;

    .photo {
        width: 120px;

        > div {
            background-size: contain;
            height: 120px;
            width: 120px;
            border-radius: 100%;
        }
    }

    .info {
        width: 200px;
        margin-left: 15px;
        padding: 15px 0;
        box-sizing: border-box;

        h5 {
            color: #a57f50;
            font-size: 16px;
            margin: 0;
            font-weight: normal;
        }

        ul {
            margin: 20px 0;
            padding: 0;
            list-style: none;
            height: 40px;

            li {
                display: inline-block;
                background-color: #a57f50;
                color: #fff;
                border-radius: 4px;
                padding: 3px 5px;
                margin-right: 10px;
                margin-bottom: 10px;
                font-size: 12px;
            }
        }
    }

    .description {
        padding: 15px 0;
        box-sizing: border-box;
        flex-grow: 1;
        color: #b0b0b0;
    }
}

.button {
    text-align: center;
}
</style>
