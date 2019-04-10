<template>
    <div :class="[$style.main, 'flex-center']">
        <div :class="$style.logo">
            <a href="#"><img src="@/assets/img/common/logo.png" ></a>
        </div>
        <div :class="[$style.nav, 'clear-box']">
            <ul>
                <li v-for="(item, index) in navData" :key="index">
                    <span v-if="item.children">{{ item.name }}<i class="el-icon-arrow-down"></i></span>
                    <span v-else><a href="#">{{ item.name }}</a></span>
                    <ul v-if="item.children">
                        <li v-for="child in item.children" :key="child.name">
                            <a href="#">{{ child.name }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div :class="$style.search">
            <div>
                <input type="text" placeholder="Search">
                <i class="icon icon-search"></i>
            </div>
        </div>
    </div>
</template>

<script>
import navData from '@/helper/nav';

export default {
    data() {
        return {
            navData,
        };
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
        width: 250px;
        height: 40px;
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
            width: 120px;
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
</style>
