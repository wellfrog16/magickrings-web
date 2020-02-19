<template>
    <b-navbar toggleable="lg" type="light" variant="faded" fixed="top">
        <b-navbar-brand :to="{ path: '/' }">
            <img :src="`./src/assets/img/logo.png`" alt="magickrings">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <template v-for="(item, index) in navData">
                    <template v-if="item.children && item.children.length > 0">
                        <b-nav-item-dropdown :key="index" :text="item.name">
                            <b-dropdown-item
                                :to="goPath(item, child)"
                                v-for="(child) in item.children"
                                :key="child.name"
                                target="_blank"
                            >
                                {{ child.name }}
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                    </template>
                    <template v-else>
                        <b-nav-item :to="item.path" :key="index" target="_blank">{{ item.name }}</b-nav-item>
                    </template>
                </template>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto" :class="$style.search">
                <b-nav-form @submit.prevent>
                    <b-form-input v-model="key" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <i class="icon icon-search"></i>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="handleSearch">Search</b-button>
                </b-nav-form>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import navData from './nav';
import api from '@/api/usr/category';

export default {
    data() {
        return {
            navData,
            key: '',
        };
    },
    mounted() {
        this.loadNav();
    },
    methods: {
        loadNav() {
            api.list().then((res) => {
                this.navData.forEach((item) => {
                    if (item.children) {
                        const result = res.list.find((el) => el.id === item.id);
                        if (result) {
                            item.children = [...result.children];
                        }
                    }
                });
            });
        },

        goPath(item, child) {
            return child.path
                ? child.path
                : `/product/category/${item.id}?child=${child.id}&childName=${child.name}`;
        },
        handleSearch() {
            if (this.key) {
                this.$router.push({ path: '/product/search', query: { key: this.key } }).catch(() => {});
            }
        },
    },
};
</script>

<style lang="less" module>
@import '~@/assets/style/usr/index.config.less';

.search form {
    position: relative;

    i {
        position: absolute;
        left: 160px;
    }
}

@media only screen and (max-width: @g-min-width) {
    .search form {
        position: relative;

        i {
            position: absolute;
            top: 3px;
            right: 5px;
            left: auto;
        }
    }
}
</style>
