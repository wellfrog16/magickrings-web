<template>
    <footer>
        <el-row :class="[$style.container, 'clear-box']">
            <el-col :span="6" :class="$style.logo">
                <img src="@/assets/img/common/sub-logo.png" width="120" alt="">
            </el-col>
            <el-col :span="6">
                <h4>FOLLOW US</h4>
                <ul>
                    <li><a href="#">微博</a></li>
                    <li><a href="#">小红书</a></li>
                    <li><a href="#">公众号</a></li>
                </ul>
                <div :class="$style.rule">
                    <router-link to="/clause">隐私条款</router-link>
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
                    <li>
                        <span>微信客服1: </span>
                        <el-tooltip placement="top" effect="light">
                            <div slot="content">
                                <img :src="`${$store.state.publicPath}/src/assets/img/usr/qr/magickrings.jpg`" class="qr">
                            </div>
                            <span>magickrings</span>
                        </el-tooltip>
                    </li>
                    <li>
                        <span>微信客服2: </span>
                        <el-tooltip placement="top" effect="light">
                            <div slot="content">
                                <img :src="`${$store.state.publicPath}/src/assets/img/usr/qr/himalayancrystals.jpg`" class="qr">
                            </div>
                            <span>himalayancrystals</span>
                        </el-tooltip>
                    </li>
                </ul>
                <div :class="$style.share">
                    <el-tooltip placement="top" effect="light">
                        <div slot="content">
                            <img :src="`${$store.state.publicPath}/src/assets/img/usr/qr/weibo.jpg`" class="qr">
                        </div>
                        <span><i class="icon icon-weibo"></i></span>
                    </el-tooltip>
                    <el-tooltip placement="top" effect="light">
                        <div slot="content">
                            <img :src="`${$store.state.publicPath}/src/assets/img/usr/qr/wechat.jpg`" class="qr">
                        </div>
                        <span><i class="icon icon-wechat"></i></span>
                    </el-tooltip>
                    <el-tooltip placement="top" effect="light">
                        <div slot="content">
                            <img :src="`${$store.state.publicPath}/src/assets/img/usr/qr/xiaohongshu.jpg`" class="qr">
                        </div>
                        <span><i class="icon icon-xiaohongshu"></i></span>
                    </el-tooltip>
                    <el-tooltip placement="top" effect="light">
                        <div slot="content">
                            <img :src="`${$store.state.publicPath}/src/assets/img/usr/qr/douyin.jpg`" class="qr">
                        </div>
                        <span><i class="icon icon-douyin"></i></span>
                    </el-tooltip>
                </div>
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

    .logo img {
        margin-top: 70px;
    }

    h4 {
        font-size: 16px;
        font-weight: normal;
        letter-spacing: 2px;
    }

    a, li {
        color: #fff;
        font-size: 16px;
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

    .share {
        display: flex;
        align-items: center;

        :global(.el-tooltip) + :global(.el-tooltip) {
            margin-left: 15px;
        }
    }
}

.copyright {
    background-color: #fff;
    height: 50px;
    text-align: center;
    line-height: 40px;
}
</style>
