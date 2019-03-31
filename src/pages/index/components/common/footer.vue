<template>
    <footer>
        <el-row :class="[$style.container, 'clear-box']">
            <el-col :span="6">
                <img src="@/assets/img/common/sub-logo.png" alt="">
            </el-col>
            <el-col :span="6">
                <h4>FOLLOW US</h4>
                <ul>
                    <li><a href="#">微博</a></li>
                    <li><a href="#">小红书</a></li>
                    <li><a href="#">公众号</a></li>
                </ul>
                <div :class="$style.rule">
                    <a href="#">隐私条款</a>
                </div>
            </el-col>
            <el-col :span="6">
                <h4>ABOUT US</h4>
                <ul>
                    <li><a href="#">品牌故事</a></li>
                    <li><a href="#">官方商城</a></li>
                </ul>
            </el-col>
            <el-col :span="6">
                <h4>CONTACT</h4>
                <ul>
                    <li>微信客服1: magickrings</li>
                    <li>微信客服2: himalayancrystals</li>
                </ul>
            </el-col>
        </el-row>
        <el-row v-html="copyright" :class="$style.copyright"></el-row>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            copyright: '&copy;2019 你们的域名.com 京ICP备 12003892号-11',
        };
    },
};
</script>

<style lang="less" module>
footer {
    background-color: #000;
}

.container {
    height: 400px;
    color: #fff;
    max-width: 1200px;
    margin: 0 auto;

    :global(.el-col) {
        padding: 30px 0;
    }

    h4 {
        font-size: 18px;
        font-weight: normal;
        letter-spacing: 2px;
    }

    a, li {
        color: #fff;
        font-size: 18px;
        font-weight: lighter;
    }

    ul {
        height: 160px;
        box-sizing: border-box;

        li, a {
            line-height: 32px;
            letter-spacing: 2px;
        }
    }

    .rule {
        display: inline;
        padding-bottom: 4px;
        border-bottom: 1px solid #fff;
    }
}

.copyright {
    background-color: #fff;
    height: 50px;
    text-align: center;
    line-height: 40px;
}
</style>
