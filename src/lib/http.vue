<script>
    import axios from 'axios';

    class $http {
        constructor(){}

        baseURL = process.env.VUE_APP_REQUEST_URL
        http = axios.create({
            baseURL: this.baseURL
        })

        get = (url,params)=>{
            params = params || {}
            return new Promise((resolve,reject)=>{
                this.http.get(url,{
                    params,
                }).then(res=>{
                    resolve(res.data)
                }).catch(error=>{
                    reject(error)
                })
            })
        }

        post = (url,params)=>{
            params = params || {}
            return new Promise((resolve,reject)=>{
                this.http.post(url,params).then(res=>{
                    resolve(res.data)
                }).catch(error=>{
                    reject(error)
                })
            })
        }

    }

    export default new $http()
</script>
