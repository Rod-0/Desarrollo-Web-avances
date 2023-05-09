import axios from "axios";


const http = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})
export class CommentsApiService {

    getAll() {
        return http.get('comments')
    }

    getPostById(id){
        return http.get('comments/'+id)
    };
    createPost(body){
        return http.post('comments',body)
    }

    udapte(id,body){
        return http.patch('comments/'+id,body)
    }

    delete(id){
        return http.delete("comments/"+id)
    }

}