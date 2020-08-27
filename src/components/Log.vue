<template lang="pug">
    div#Log
        div.log_box
            div.log_page_title
            ul.log_list
                //li.log_item(v-for="(item,year) in log_data")
                    div.log_year
                        span {{year}}
                        div.log_month(v-for="(i,month) in item")
                            span {{month}}月
                            div.log_day(v-for="log in i")
                                span {{log.day}}日
                                div.log_content
                                    div {{log.content}}

                li.log_item(v-for="item in year")
                    div.log_year
                        span {{item}}
                        div.log_month(v-for="i in month(item)")
                            span {{i}}
                            div.log_day(v-for="log in log_data[item][i]")
                                span {{log.day}}
                                div.log_content
                                    mavon-editor(
                                        :toolbars="markdownOption"
                                        :subfield= "false"
                                        :boxShadow= "false"
                                        :toolbarsFlag= "false"
                                        :defaultOpen= "'preview'"
                                        :value = "log.content"
                                        :previewBackground="'#f1f1f1'"
                                    )

</template>

<script>
    import lodash from 'lodash'

    export default {
        name: "Log",
        components: {
            lodash
        },
        watch: {
            inpp: function () {
                this.debouncedGetAnswer()
            }
        },
        computed: {
            year () {
                return Object.keys(this.log_data).reverse()
            },
            month () {
                return function (m) {
                    return Object.keys(this.log_data[m]).reverse()
                }
            }
        },
        data() {
            return {
                log_data: [],
                inpp: '',
                markdownOption: {
                    scrollStyle: true, // 滚动条
                    transition: true, // 过渡动画
                    codeStyle: 'github', // 样式
                    ishljs: true, //代码高亮
                },
            }
        },
        mounted() {
            this.getLog()
            this.debouncedGetAnswer = lodash.debounce(this.test, 500)
        },
        methods: {
            async getLog() {
                this.log_data = await this.$request.getLog()
            },
            test() {
                alert('11')
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../public/static/css/Log.less";
</style>