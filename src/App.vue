<template>
    <div id="app">
        <el-container class="app-Out-Pannel">
            <el-header class="sys-header">山手線総合評価システム</el-header>
            <el-container class="app-Content-Pannel">
                <el-aside class="sys-menu">
                    <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo"
                        @select="handleMenuSelect"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        :collapse="true"
                    >
                        <el-menu-item index="1">
                            <i class="el-icon-monitor"></i>
                            <span slot="title">MAP</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-picture-outline"></i>
                            <span slot="title">CHARTS</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main class="sys-content">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
    methods: {
        handleMenuSelect(index) {
            if (index === '1') {
                //跳转到map界面
                this.$router.push('/');
            } else if (index === '2') {
                //跳转到charts界面
                this.$router.push('/charts');
            }
        },
    },
};
</script>

<style>
html,
body,
#app {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
}
.app-Out-Pannel,
.app-Content-Pannel {
    height: 100%;
}
.sys-header {
    background-color: #67c23a;
    line-height: 60px;
    color: #ffffff;
    font-size: 20px;
}
.sys-menu {
    background-color: #545c64;
    width: 64px !important;
    overflow: hidden !important;
}
.sys-content {
    padding: 0px !important;
}
</style>
