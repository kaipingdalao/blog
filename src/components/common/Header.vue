<template lang="pug">
    Headroom(:downTolerance="0" :upTolerance="0")
        header#Header
            div.more(:class="{'more_open': more_switch, 'more_close': !more_switch}")
                div.more_box(ref="more")
                    ul
                        li(v-for="item in category_list" @click="gotoCategory(item.id)") {{item.title}}
                        li
                            a(href='/log') Log

            div.header_box
                div.header_left
                    span(@click="gotoHome()") Home
                div.header_right
                    div.header_more
                        i.category_icon(@click="openHeaderMore()")
                    div.header_search
                        i.header_search_icon(@click="gotoSearch(keyword)")
                        input(
                            placeholder="Search..."
                            v-model="keyword"
                            @keyup.enter="gotoSearch(keyword)"
                            @blur="closeSearch()"
                        )
                        //div.header_search_result(v-show="search_result.length")
                            span Article
                            div(v-for="article in search_result") {{article.title}}

</template>

<script>
    import {headroom} from 'vue-headroom'
    import lodash from 'lodash'

    export default {
        name: "Header",
        components: {
            Headroom: headroom,
            lodash
        },
        watch: {
            keyword: function (oldValue, newValue) {
                if (newValue !== '') {
                    this.debouncedGetSearch()
                }

            }
        },
        data() {
            return {
                more_switch: false,
                category_list: {},
                keyword: '',
                search_result: []
            }
        },
        mounted() {
            this.getCategoryList()
            this.debouncedGetSearch = lodash.debounce(this.search, 200)
        },
        methods: {
            async getCategoryList() {
                this.category_list = await this.$request.getCategoryList()
            },
            openHeaderMore() {
                // 获取这个元素的高度
                const open_height = this.$refs.more.offsetHeight + "px";
                // 设置css变量
                document.body.style.setProperty('--more_height', open_height)
                this.more_switch = !this.more_switch
            },

            // header引入不是在内容组件中，所以不能用 $router.push('/')
            gotoHome() {
                window.location.href = `/`
            },
            gotoSearch(keyword) {
                const isNull = !!keyword
                isNull && (window.location.href = `/search/${keyword}`)
            },
            gotoCategory(category_id) {
                window.location.href = `/category/${category_id}`
            },
            closeSearch() {
                this.search_result = []
            },
            async search() {
                if (this.keyword == '' || !this.keyword) return
                this.search_result = (await this.$request.SearchKeyword(this.keyword)).article_list
            }
        }
    }
</script>

<style lang="less">
    @import "../../../public/static/css/Header.less";
</style>
