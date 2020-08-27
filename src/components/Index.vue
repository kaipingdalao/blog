<template lang="pug">
    div#Index
        div.index_box
            div.article_list
                div.article_list_item(v-for="article in article_list" @click="$router.push('/article/' + article.id)")
                    div.article_img(:style="{backgroundImage:'url('+ getArticleImg(article.img, article.category_title) +')'}")
                        div.article_item_img_hover
                            div.article_item_section
                                a(:href="'/article/' + article.id") {{article.content}}
                        div.article_item_img_cover
                    a(:href="'/article/' + article.id") {{article.title}}
                    div.article_item_cat_box
                        a(:href="'/category/' + article.category_id") {{article.category_title}}
                        img(:src="'/static/img/icon/'+ article.category_title + '_icon.svg'")

        Loading(v-show="isLoading")

        div(v-show="isBottom").loading_done 到底啦...

</template>

<script>
    import Loading from './common/Loading.vue'
    import {getScrollHeight,getScrollTop,getWindowHeight} from '../../public/static/js/screen'

    export default {
        name: "Index",
        components: {
            Loading
        },
        data() {
            return {
                isLoading: true,
                isBottom: false,
                article_list: [],
                now_page: 1,
                article_count: 0,
                page_count: 0

            }
        },
        mounted() {
            this.getArticleList()
            this.getArticleImg()
            window.addEventListener('scroll', this.load);
            document.title = 'Home'

        },
        // 生命周期 销毁
        destroyed(){
            window.removeEventListener('scroll', this.load, false);
        },
        methods: {
            async getArticleList(page = 1) {
                this.isLoading = true

                const articleListData = await this.$request.getArticleList(page)

                this.article_count = articleListData.article_count
                this.page_count = (this.article_count + (9 - 1)) / 9

                // 数组合并
                this.article_list.length > 0 ? (
                    this.article_list.push.apply(this.article_list, articleListData.article_list)
                ) : (
                    this.article_list = articleListData.article_list
                )

                this.isLoading = false
            },
            getArticleImg(img, category) {
                const isNull = !!img
                return isNull ? (`./static/img/article_img/${img}`) : (`./static/img/article_default_img/${category}.jpg`)
            },
            //无限滚动加载
            load(){
                (getScrollTop() + getWindowHeight() >= getScrollHeight()) && (
                    this.now_page < this.page_count && (this.now_page++ && this.getArticleList(this.now_page))
                )
                this.isBottom = this.now_page == this.page_count
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../public/static/css/index.less";
</style>
