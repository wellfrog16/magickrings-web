<template>
    <div :class="$style.main">
        <div :class="$style.logo">
            <a href="#"><img src="@/assets/img/usr/logo.png" ></a>
        </div>
        <div :class="$style.search">
            <div>
                <input type="text" placeholder="Search">
                <i class="icon"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" module>
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

    input {
        width: 250px;
        height: 40px;
        outline: none;
        border: 1px solid #000;
        padding-left: 10px;
        padding-right: 40px;
        font-size: 14px;
        box-sizing: border-box;
    }
}
</style>
