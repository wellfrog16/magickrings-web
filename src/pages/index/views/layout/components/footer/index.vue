<template>
    <div :class="[$style.main, 'main-wrapper']">
        <b-container>
            <div class="row" :class="$style.container">
                <div class="py-4 col-xl-3 col-sm-12 d-flex align-items-center">
                    <b-img src="/src/assets/img/sub-logo.png" width="120" />
                </div>
                <div class="py-4 col-xl-3 col-sm-12">
                    <h4>FOLLOW US</h4>
                    <ul>
                        <li><a href="#">微博</a></li>
                        <li><a href="#">小红书</a></li>
                        <li><a href="#">公众号</a></li>
                    </ul>
                    <div :class="$style.rule">
                        <router-link to="/clause">隐私条款</router-link>
                    </div>
                </div>
                <div class="py-4 col-xl-3 col-sm-12">
                    <h4>ABOUT US</h4>
                    <ul>
                        <li><router-link to="/story">品牌故事</router-link></li>
                        <li><a href="#">官方商城</a></li>
                    </ul>
                </div>
                <div class="py-4 col-xl-3 col-sm-12">
                    <h4>CONTACT</h4>
                    <ul>
                        <li>
                            <span>微信客服1: <span id="magickrings">magickrings</span></span>

                            <b-tooltip target="magickrings" triggers="hover blur" :custom-class="$style.tips">
                                <img src="/src/assets/img/qr/magickrings.jpg" class="qr">
                            </b-tooltip>
                        </li>
                        <li>
                            <span>微信客服2: <span id="himalayancrystals">himalayancrystals</span></span>

                            <b-tooltip target="himalayancrystals" triggers="hover blur" :custom-class="$style.tips">
                                <img src="/src/assets/img/qr/himalayancrystals.jpg" class="qr">
                            </b-tooltip>
                        </li>
                    </ul>
                    <div :class="$style.share">
                        <span id="weibo"><i class="icon icon-weibo"></i></span>
                        <span id="wechat"><i class="icon icon-wechat"></i></span>
                        <span id="xiaohongshu"><i class="icon icon-xiaohongshu"></i></span>
                        <span id="douyin"><i class="icon icon-douyin"></i></span>
                    </div>

                    <b-tooltip target="weibo" triggers="hover blur" :custom-class="$style.tips">
                        <img src="/src/assets/img/qr/weibo.jpg" class="qr">
                    </b-tooltip>

                    <b-tooltip target="wechat" triggers="hover blur" :custom-class="$style.tips">
                        <img src="/src/assets/img/qr/wechat.jpg" class="qr">
                    </b-tooltip>

                    <b-tooltip target="xiaohongshu" triggers="hover blur" :custom-class="$style.tips">
                        <img src="/src/assets/img/qr/xiaohongshu.jpg" class="qr">
                    </b-tooltip>

                    <b-tooltip target="douyin" triggers="hover blur" :custom-class="$style.tips">
                        <img src="/src/assets/img/qr/douyin.jpg" class="qr">
                    </b-tooltip>
                </div>
            </div>
        </b-container>
        <div>
            <div v-html="copyright" :class="$style.copyright"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            copyright: '&copy;2019 magickglobal.com <a href="http://www.beian.miit.gov.cn" target="_blank">京ICP备 12003892号-11</a>',
        };
    },
};
</script>

<style lang="less" module>
@import '~@/assets/style/usr/index.config.less';

.main {
    background-color: #000;
}

.container {
    color: #fff;

    h4 {
        font-size: 16px;
        font-weight: normal;
        letter-spacing: 2px;
        margin: 1.3em 0;
    }

    a, li {
        color: #fff;
        font-size: 16px;
        font-weight: lighter;
    }

    ul {
        height: 160px;
        box-sizing: border-box;
        list-style: none;
        padding: 0;

        li, a {
            line-height: 32px;
            letter-spacing: 2px;
        }
    }

    .rule {
        display: inline;
        padding-bottom: 4px;
        border-bottom: 1px solid #fff;

        a {
            text-decoration: none;
        }
    }
}

.share {
    span {
        display: inline-block;
    }

    span + span {
        margin-left: 15px;
    }
}

.copyright {
    background-color: #fff;
    height: 50px;
    text-align: center;
    line-height: 40px;
}

.tips {
    :global(.tooltip-inner) {
        img {
            width: 180px;
            height: 180px;
        }
    }

    :global(.arrow::before) {
        border-top-color: #fff;
    }
}

@media only screen and (max-width: @g-min-width) {
    .container {
        ul {
            height: auto;
        }
    }
}
</style>
