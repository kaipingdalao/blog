<script>
    import $http from './http.vue'
    
    export class request {
        constructor(){}

        getArticleList(page = 1) {
            return $http.get('/api/article_list', {page: page})
        }

        getCategoryList() {
            return $http.get('/api/category_list')
        }

        getArticle(article_id) {
            return $http.get(`/api/article/${article_id}`)
        }

        getCategoryArticle(category_id) {
            return $http.get(`/api/cat_article_list/${category_id}`)
        }

        SearchKeyword(keyword) {
            return $http.get(`/api/search/${keyword}`)
        }
        
        getLog() {
            return $http.get(`/api/log`)
        }

    }

    export default new request()
    
</script>