<template>
    <div :class="[$style.main, 'flex-center', 'main-wrapper']">
        <h4>查找执证学员资质</h4>
        <p>在MagickRings学习并获取证书者，可在官网查询到。</p>
        <div :class="[$style.form, 'flex-center']">
            <input type="text" placeholder="请输入姓名" :class="$style.text">
            <input type="button" :class="$style.button" value="搜索">
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" module>
.main {
    height: 180px;
    background-color: #000;
    margin: 0 auto 80px auto;
    color: #fff;
    text-align: center;
    flex-direction: column;

    h4 {
        text-align: center;
        margin: 0;
        letter-spacing: 2px;
        font-weight: 100;
    }

    p {
        margin: 10px 0 15px 0;
        letter-spacing: 2px;
        font-weight: 100;
        font-size: 14px;
    }
}

.form {
    text-align: center;
}

.text {
    width: 250px;
    height: 40px;
    outline: none;
    border: 0;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
    box-sizing: border-box;
    border-radius: 3px;
}

.button {
    width: 80px;
    height: 40px;
    outline: none;
    background-color: #a57f50;
    border: 0;
    font-size: 14px;
    box-sizing: border-box;
    padding-left: 10px;
    margin-left: 10px;
    border-radius: 3px;
    color: #fff;
    font-weight: bold;
    letter-spacing: 4px;
}
</style>
