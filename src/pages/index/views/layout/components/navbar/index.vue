<template>
    <b-navbar toggleable="lg" type="light" variant="faded" fixed="top">
        <b-navbar-brand :to="{ path: '/' }">
            <img src="/src/assets/img/logo.png" alt="magickrings">
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
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
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
    },
};
</script>

<style lang="less" module>
</style>
