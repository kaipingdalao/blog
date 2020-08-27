<template lang="pug">
    div#App
        Header.header
        router-view
        Footer
</template>

<script>
    import Header from './components/common/Header'
    import Footer from './components/common/Footer'

    export default {
        name: 'App',
        components: {
            Header,
            Footer
        },
        mounted() {},
        methods: {
            timeToDate(time) {
                var date = new Date(time * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var Y = date.getFullYear();
                var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
                var D = date.getDate();
                // var h = date.getHours() + ':';
                // var m = date.getMinutes() + ':';
                // var s = date.getSeconds();

                const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

                return month[parseInt(M) - 1] + ' ' + D + ', ' + Y;
            }
        }
    }
</script>

<style>
    @import "../public/static/css/reset.css";

    .header {
        height: auto !important;
    }

    #App {
        background-color: #f7f7f7 !important;
    }
    ::selection {
        color: #fff;
        background: #088;
    }
</style>
