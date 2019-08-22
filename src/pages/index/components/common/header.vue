<template>
    <div :class="[$style.main, 'flex-center']">
        <div :class="$style.logo">
            <router-link to="/home"><img src="@/assets/img/common/logo.png" ></router-link>
        </div>
        <div :class="[$style.nav, 'clear-box']" v-show="navVisible">
            <ul>
                <li v-for="(item, index) in navData" :key="index">
                    <span v-if="item.children" :class="$style.name">{{ item.name }}<i class="el-icon-arrow-down"></i></span>
                    <!-- 无children -->
                    <span v-else><router-link :to="item.path" target="_blank">{{ item.name }}</router-link></span>
                    <!-- 有children -->
                    <ul v-if="item.children">
                        <li v-for="child in item.children" :key="child.name">
                            <router-link v-if="child.path" :to="child.path" target="_blank">{{ child.name }}</router-link>
                            <router-link
                                v-else
                                target="_blank"
                                :to="`/product/category/${item.id}?child=${child.id}&childName=${child.name}`"
                            >
                                {{ child.name }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div :class="$style.search">
            <div>
                <input type="text" v-model="key" placeholder="Search" @keyup.enter="handleSearch">
                <i class="icon icon-search"></i>
            </div>
        </div>
        <div :class="$style.button" @click="handleNav">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
import { $ } from '@/utils/cdn';
import api from '@/api/usr/category';
import navData from '@/helper/nav';

export default {
    data() {
        return {
            key: '',
            navData,
            navVisible: $.browser.desktop,
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.loadNav();
            // if ($.browser.mobile) {
            //     console.log('手机');
            //     $(`.${this.$style.name}`).hammer().bind('tap', function tap() {
            //         $(this).parent().find('ul').toggle();
            //     });
            // }
        },
        async loadNav() {
            const res = await api.list();
            if (res) {
                this.navData.forEach((item) => {
                    if (item.children) {
                        const result = res.list.find(el => el.id === item.id);
                        if (result) {
                            item.children = [...result.children];
                        }
                    }
                });
            }
        },
        handleNav() {
            this.navVisible = !this.navVisible;
        },

        handleSearch() {
            if (this.key) {
                this.$router.push({ path: '/product/search', query: { key: this.key } });
            }
        },
    },
};
</script>

<style lang="less" module>
@import '../../../../assets/style/config.less';

.main {
    height: 110px;
    background-color: #fff;
    position: relative;
}

.logo {
    position: absolute;
    left: 78px;
    top: 35px;

    img {
        width: 200px;
    }
}

.search {
    position: absolute;
    right: 80px;
    top: 40px;

    div {
        position: relative;
        height: 100%;
        width: 100%;
    }

    input {
        width: 180px;
        height: 30px;
        outline: none;
        border: 1px solid #000;
        padding-left: 10px;
        padding-right: 50px;
        font-size: 14px;
        box-sizing: border-box;
    }

    i {
        position: absolute;
        top: 4px;
        right: 12px;
    }
}

.nav {
    background-color: #fff;

    .name {
        display: inline;
    }

    > ul > li {
        display: inline;
        margin-right: 20px;
        position: relative;
        // font-weight: bold;
        font-size: 16px;

        ul {
            display: none;
            position: absolute;
            z-index: 10;
            left: -5px;
            width: 150px;
            padding: 10px 0;
            background-color: #fff;
            // font-weight: normal;
            font-size: 14px;
        }

        ul > li a {
            display: block;
            height: 37px;
            line-height: 37px;
            padding-left: 17px;
        }

        &:hover {
            span {
                // cursor: pointer;
                color: @g-color-primary;
            }

            ul {
                display: block;
            }
        }
    }
}

.button {
    display: none;
}

@media only screen and (max-width: @g-mwidth) {
    .main {
        height: 50px;
    }

    .logo {
        position: initial;
        height: 30px;

        img {
            height: 100%;
        }
    }

    .search {
        line-height: 1em;
        display: none;
    }

    .button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        height: 34px;
        width: 44px;
        background-color: #333;
        top: 8px;
        left: 8px;
        box-sizing: border-box;
        border-radius: 4px;

        span {
            display: inline-block;
            width: 22px;
            height: 2px;
            background-color: #fff;
            margin: 3px 0;
        }
    }

    .nav {
        // display: none;
        position: absolute;
        width: 100%;
        top: 50px;
        padding: 5px 0;
        border-top: 1px solid #333;
        background-color: #fff;
        z-index: 10;

        .name {
            display: block;
        }

        > ul > li {
            display: block;
            margin-right: 0;
            position: relative;
            line-height: 40px;
            padding: 0 20px;

            ul {
                display: none;
                position: initial;
            }
        }
    }
}
</style>
