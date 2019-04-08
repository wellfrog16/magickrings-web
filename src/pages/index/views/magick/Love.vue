<template>
    <div :class="['main-wrapper', $style.main]">
        <div>
            <el-row :gutter="28">
                <el-col :span="6" v-for="item in list" :key="item.id" :class="$style.item">
                    <div :class="$style.photo">
                        <img :src="`${$store.state.publicPath}/src/assets/img/usr/magick/${item.photo}`">
                        <p class="abs-fullsize flex-center"><span>浏览详细</span></p>
                    </div>
                    <h5>{{ item.name }}</h5>
                    <span>{{ item.price | currency('￥', 2) }}</span>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    id: 1, name: '产品名称', photo: 'photo1.jpg', price: '100', status: '',
                },
                {
                    id: 2, name: '产品名称', photo: 'photo2.jpg', price: '100', status: '',
                },
                {
                    id: 3, name: '产品名称', photo: 'photo3.jpg', price: '100', status: '',
                },
                {
                    id: 4, name: '产品名称', photo: 'photo4.jpg', price: '100', status: '',
                },
                {
                    id: 5, name: '产品名称', photo: 'photo5.jpg', price: '100', status: '',
                },
                {
                    id: 6, name: '产品名称', photo: 'photo6.jpg', price: '100', status: '',
                },
                {
                    id: 7, name: '产品名称', photo: 'photo7.jpg', price: '100', status: '',
                },
                {
                    id: 8, name: '产品名称', photo: 'photo8.jpg', price: '100', status: '',
                },
                {
                    id: 9, name: '产品名称', photo: 'photo9.jpg', price: '100', status: '',
                },
                {
                    id: 10, name: '产品名称', photo: 'photo10.jpg', price: '100', status: '',
                },
                {
                    id: 11, name: '产品名称', photo: 'photo11.jpg', price: '100', status: '',
                },
                {
                    id: 12, name: '产品名称', photo: 'photo12.jpg', price: '100', status: '',
                },
                {
                    id: 13, name: '产品名称', photo: 'photo13.jpg', price: '100', status: '',
                },
                {
                    id: 14, name: '产品名称', photo: 'photo14.jpg', price: '100', status: '',
                },
                {
                    id: 15, name: '产品名称', photo: 'photo15.jpg', price: '100', status: '',
                },
                {
                    id: 16, name: '产品名称', photo: 'photo16.jpg', price: '100', status: '',
                },
            ],
        };
    },
};
</script>

<style lang="less" module>
.main {
    font-weight: 100;
}

.item {
    text-align: center;
    height: 480px;

    span {
        color: #a57f50;
    }

    .photo {
        position: relative;
        font-size: 0;
        width: 100%;

        img {
            width: 100%;
        }

        span {
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
    }

    h5 {
        margin-top: 20px;
        margin-bottom: 5px;
        font-size: 14px;
    }
}
</style>
