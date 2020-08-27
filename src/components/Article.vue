<template lang="pug">
    div#Article
        div.article_box(v-show="!isLoading")
            div.article_title#article_title
                h1 {{article.title}}
                i Published on {{$parent.timeToDate(article.input_time)}}
                span
                    a(:href="'/category/' + article.category_id") {{article.category_title}}
                div
            div.navigation_box(:class="{'navigation_display':navigation_switch, 'navigation_box_hidden':!navigation_switch}")
                div.navigation
                    ul.test
                        li(v-for="(i,index) in title_data")
                            i(@click="goto(index)")
                                a {{i}}

            mavon-editor.article_editor(
                :toolbars="markdownOption"
                :subfield= "false"
                :boxShadow= "false"
                :toolbarsFlag= "false"
                :defaultOpen= "'preview'"
                :previewBackground="'#f7f7f7'"
                v-model="article.content"
            )

        Loading(v-show="isLoading")

        headroom(:downTolerance="0" :upTolerance="0" :footroom="true")
            div#bottom_bar.bottom_bar_box
                div.bottom_bar
                    div.share_bar
                        i Share :
                        span.facebook_icon
                            a facebook
                        span.Twitter_icon
                            a Twitter
                        span.weibo_icon
                            a weibo
                    div.controller_bar
                        span
                            a(@click="goBack()") ←
                        span
                            a(:href="'/article/' + (article.id + 1)") →
                        span
                            a(@click="TopOrBottom('bottom')") ↓
                        span
                            a(@click="TopOrBottom('article_title')") ↑
        i#bottom



</template>

<script>
    import Loading from './common/Loading.vue'
    import {headroom} from 'vue-headroom'

    export default {
        name: "Article",
        components: {
            Loading,
            headroom
        },
        data() {
            return {
                article: {},
                markdownOption: {
                    scrollStyle: true, // 滚动条
                    transition: true, // 过渡动画
                    codeStyle: 'github', // 样式
                    ishljs: true, //代码高亮
                },
                once: true,
                title_data: [],
                navigation_switch: false,
                bottom_bar_switch: true,
                isLoading: true
            }
        },
        mounted() {
            this.getArticle(this.$route.params.article_id)
            window.addEventListener('scroll', this.watchScroll)
        },
        methods: {
            async getArticle(article_id) {
                this.article = await this.$request.getArticle(article_id)
                this.isLoading = false
                document.title = this.article.title
            },

            watchScroll() {
                // 监听滚动条，大于70时，获取目录，且只获取一次
                this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
                this.scroll> 70 ? (
                    this.navigation_switch = true,
                        this.once && (
                            this.once = false,
                            this.getArticleTitle()
                        )
                ) : (this.navigation_switch = false)

            },
            getArticleTitle() {
                const show_element = document.getElementsByClassName('scroll-style-border-radius')[0].getElementsByTagName('h3')
                for (var ele = 0; ele < show_element.length; ele++) {
                    const title = show_element[ele].innerText
                    show_element[ele].setAttribute("id", '#'+ele)

                    title !== undefined && this.title_data.push(title)
                }
            },
            getTop(e){
                // 获取元素位置 减去30码
                var offset=e.offsetTop;
                e.offsetParent != null && (offset += this.getTop(e.offsetParent))
                return offset - 30;
            },
            goto(i) {
                const el = document.getElementById('#' + i)
                // 滚动到指定位置
                window.scrollTo({
                    top: this.getTop(el),
                    behavior: 'smooth' //  smooth(平滑滚动),instant(瞬间滚动),默认auto
                });
            },
            TopOrBottom(i) {
                const el = document.getElementById(i)
                // 滚动到指定位置
                window.scrollTo({
                    top: this.getTop(el),
                    behavior: 'smooth' //  smooth(平滑滚动),instant(瞬间滚动),默认auto
                });
            },
            goBack() {
                window.history.go(-1)
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../public/static/css/Article.less";
</style>