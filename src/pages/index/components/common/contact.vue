<template>
    <div :class="$style.main">
        <div :class="[$style.controller, 'flex-center']" @click="handleToggle"><i class="icon icon-wenhao" />咨询我们</div>
        <div :class="$style.form" v-if="formVisible">
            <div :class="$style.content">
                <i class="el-icon-close" @click="handleClose"></i>
                <h3>时环魔法<br><span>微信号：himalayancrystals</span></h3>
                <el-form>
                    <el-form-item>
                        <el-input v-model="content" placeholder="请在此输入留言内容，我们会尽快与您联系。（必填）" size="small" type="textarea" />
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="name" placeholder="姓名（必填）" size="small" />
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="email" placeholder="邮箱（必填）" size="small" />
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="wechat" placeholder="微信（必填）" size="small" />
                    </el-form-item>
                </el-form>
                <div :class="$style.button">
                    <span class="more-button">确认发送</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formVisible: false,
            content: '',
            name: '',
            email: '',
            wechat: '',
        };
    },
    methods: {
        handleToggle() {
            this.formVisible = !this.formVisible;
        },
        handleClose() {
            this.formVisible = false;
        },
    },
};
</script>

<style lang="less" module>
@import '../../../../assets/style/config.less';

.main {
    position: fixed;
    z-index: 10;
    right: 0;
    top: 50%;
    margin-top: -75px;
}

.controller {
    width: 50px;
    height: 150px;
    background-color: @g-color-primary;
    color: #fff;
    writing-mode: tb-rl;
    letter-spacing: 3px;

    i {
        margin-bottom: 8px;
    }
}

.form {
    border: 1px solid #000;
    width: 260px;
    height: 450px;
    background-color: #000;
    position: absolute;
    top: 0;
    right: 50px;
    background-image: url('../../../../assets/img/common/contact-bg.jpg');
    background-position: top center;
    background-size: auto;
    background-repeat: no-repeat;

    i {
        position: absolute;
        color: #fff;
        top: -45px;
        right: 6px;
        font-size: 26px;
    }
}

.content {
    margin-top: 50px;
    padding: 20px;
    box-sizing: border-box;
    position: relative;

    h3 {
        color: @g-color-primary;
        font-weight: normal;
        font-size: 16px;
        margin: 0;

        span {
            font-size: 14px;
        }
    }

    :global(.el-form) {
        margin-top: 20px;
    }
}

.button {
    text-align: center;
}
</style>
