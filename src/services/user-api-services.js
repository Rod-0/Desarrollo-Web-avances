import axios from "axios";

const http = axios.create({
    baseURL:'http://localhost:5001/api/User'
})

export class userServices{
    login=(body)=>{
        return http.post('login',body)
    };

    getUser=()=>{

        return http.get('users')
           

    };
    getUserbyId=(id)=>{

        return http.get('users/'+id);

    };

    postUser=(body)=>{

        return http.post('users',body);

    };

    putUser=(body,id)=>{

        return http.put('users/'+id,body)

    };

    deleteUser=(id)=>{

        return http.delete("users/"+id);

    };


}