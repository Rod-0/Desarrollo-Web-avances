import axios from "axios";

const http = axios.create({
    baseURL:'https://restcountries.com/v3.1/name/'
})

export class userServices{
    getUser=()=>{

        return http.get('peru')
           

    };
    getUserbyId=(id)=>{

        return http.get('peru'+id);

    };

    postUser=(body)=>{

        return http.post('peru',body);

    };

    putUser=(body,id)=>{

        return axios({
            method: 'put',
            url: 'peru'+id,
            data:body
            
          })

    };

    deleteuser=(id)=>{

        return axios({
            method: 'delete',
            url: 'peru'+id
            
            
          })

    };


}