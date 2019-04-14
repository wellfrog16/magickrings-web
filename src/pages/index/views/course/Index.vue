<template>
    <div :class="['main-wrapper', $style.main]">
        <el-tabs v-model="activeName" :class="$style.tabs">
            <el-tab-pane label="灵气课程" name="first"></el-tab-pane>
            <el-tab-pane label="通灵课程" name="second"></el-tab-pane>
            <el-tab-pane label="草药学科" name="third"></el-tab-pane>
            <el-tab-pane label="美容魔法课" name="fourth"></el-tab-pane>
        </el-tabs>
        <div :class="$style.wrapper">
            <el-row :gutter="20">
                <el-col :span="12" v-for="item in list" :key="item.id">
                    <div :class="$style.item">
                        <div :class="[$style.photo, 'flex-center']">
                            <div :style="{backgroundImage:'url(' + $store.state.publicPath + '/src/assets/img/usr/course/' + item.photo}"></div>
                        </div>
                        <div :class="$style.info">
                            <h5>{{ item.username }}</h5>
                            <ul>
                                <li v-for="child in item.skills" :key="child">{{ child }}</li>
                            </ul>
                            <div :class="$style.level">
                                <i class="icon icon-star" v-for="child in item.level" :key="child"></i>
                            </div>
                        </div>
                        <div :class="$style.description">简介：<p>{{ item.description }}</p></div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div :class="$style.button">
            <span class="more-button">更多学员</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'first',
            list: [
                {
                    id: 1, username: 'Weining Kan', photo: 'photo1.jpg', level: 3, skills: ['灵气课程', '通灵课程'], description: '描述描述描述描述',
                },
                {
                    id: 2, username: 'Weining Kan', photo: 'photo2.jpg', level: 3, skills: ['灵气课程', '通灵课程', '草药学课'], description: '描述描述描述描述',
                },
                {
                    id: 3, username: 'Weining Kan', photo: 'photo1.jpg', level: 2, skills: ['灵气课程'], description: '描述描述描述描述',
                },
                {
                    id: 4, username: 'Weining Kan', photo: 'photo2.jpg', level: 4, skills: ['灵气课程', '通灵课程'], description: '描述描述描述描述',
                },
                {
                    id: 5, username: 'Weining Kan', photo: 'photo1.jpg', level: 5, skills: ['灵气课程', '通灵课程', '草药学课'], description: '描述描述描述描述',
                },
                {
                    id: 6, username: 'Weining Kan', photo: 'photo2.jpg', level: 1, skills: ['灵气课程', '通灵课程', '草药学课'], description: '描述描述描述描述',
                },
            ],
        };
    },
};
</script>

<style lang="less" module>
.main {
    margin-bottom: 40px;
}

.tabs {
    :global(.el-tabs__nav) {
        width: 100%;
    }

    :global(.el-tabs__item) {
        width: 25%;
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-size: 16px;
        color: #000;
    }

    :global(.el-tabs__active-bar) {
        background-color: #535353;
    }
}

.wrapper {
    padding: 10px;
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
