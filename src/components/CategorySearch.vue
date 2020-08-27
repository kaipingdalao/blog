<template lang="pug">
    div#CategorySearch
        div.box(v-show="!isLoading")
            div.top_title
                i {{now_page}} : {{page_title}}
            div.category_list_box
                div.category_list
                    div.category_list_item(v-for="article in article_list")
                        div.category(@click="$router.push('/article/' + article.id)")
                            div.category_inside
                                a(:href="'/article/' + article.id") {{article.title}}
                                div
                                    i {{$parent.timeToDate(article.input_time)}}
                                    div(:style="'background: url(' + '/static/img/icon/'+ article.category_title + '_icon.svg' + ') 0% 0% / 40px no-repeat;'")
        Loading(v-show="isLoading")

</template>

<script>
    import Loading from './common/Loading'

    export default {
        name: "CategorySearch",
        components: {
            Loading
        },
        data() {
            return {
                now_page: this.$router.currentRoute.name,
                page_title: '',
                article_list: [],
                isLoading: true

            }
        },
        mounted() {
            (this.$router.currentRoute.name == 'Category' && (
                this.getCategoryArticle(this.$route.params.category_id)
            )) || (this.$router.currentRoute.name == 'Search' && (
                this.search(this.$route.params.keyword)
            ))
            document.title = this.now_page

        },
        methods: {
            async getCategoryArticle(category_id) {
                this.article_list = (await this.$request.getCategoryArticle(category_id)).article_list
                this.page_title = this.article_list[0].category_title
                this.isLoading = false
            },
            async search(keyword) {
                this.article_list = (await this.$request.SearchKeyword(keyword)).article_list
                this.page_title = keyword
                this.isLoading = false
            },
        }
    }
</script>

<style scoped lang="less">
    @import "../../public/static/css/CategorySearch";
</style>