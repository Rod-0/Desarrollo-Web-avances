import axios from "axios";

const http = axios.create({
    baseURL:'http://localhost:3000/api/v1/'
})

export class treadmillsServices{
    
    getTreadmills=()=>{

        return http.get('treadmills')
           

    };
    getTreadmillsbyId=(id)=>{

        return http.get('treadmills/'+id);

    };

    postTreadmills=(body)=>{

        return http.post('treadmills',body);

    };

    putTreadmills=(body,id)=>{

        return http.put('treadmills/'+id,body)

    };

    deleteTreadmills=(id)=>{

        return http.delete("treadmills/"+id);

    };


}