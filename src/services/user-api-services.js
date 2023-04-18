import axios from "axios";

export class userServices{
    getUser=()=>{

        return axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users'
            
          })
           

    };
    getUserbyId=(id)=>{

    };

    postUser=(body)=>{

    };

    putUser=(body,id)=>{

    };

    deleteuser=(id)=>{

    };


}