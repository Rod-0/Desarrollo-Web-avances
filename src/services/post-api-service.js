import axios from "axios";


const http = axios.create({
    baseURL:'http://localhost:5001/api/',
    headers:{
        Authorization:"Bearer "+ window.localStorage.getItem("jwt")
    }
})
export class PostsApiService {

    getAll() {
        return http.get('Post')
    }

    getPostById(id){
        return http.get('Post?userId='+id)
    };
    createPost(body){
        return http.post('Post',body)
    }

    udapte(id,body){
        return http.patch('posts/'+id,body)
    }

    delete(id){
        return http.delete("posts/"+id)
    }

}