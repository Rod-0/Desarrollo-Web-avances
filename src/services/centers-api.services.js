import axios from "axios";

const http = axios.create({
    baseURL:'http://localhost:3000/api/v1/'
})

export class centersServices{
    
    getCenters=()=>{

        return http.get('centers')
           

    };
    getCentersbyId=(id)=>{

        return http.get('centers/'+id);

    };

    postCenters=(body)=>{

        return http.post('centers',body);

    };

    putCenters=(body,id)=>{

        return http.put('centers/'+id,body)

    };

    deleteCenters=(id)=>{

        return http.delete("centers/"+id);

    };


}