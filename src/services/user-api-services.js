import axios from "axios";

const http = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})

export class userServices{
    getUser=()=>{

        return http.get('users')
           

    };
    getUserbyId=(id)=>{

        return http.get('users'+id);

    };

    postUser=(body)=>{

        return http.post('users',body);

    };

    putUser=(body,id)=>{

        return axios({
            method: 'put',
            url: 'users'+id,
            data:body
            
          })

    };

    deleteuser=(id)=>{

        return axios({
            method: 'delete',
            url: 'users'+id
            
            
          })

    };


}