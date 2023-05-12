import axios from "axios";

const http = axios.create({
    baseURL:'http://localhost:3000/api/v1/'
})

export class healthchecksServices{
    getChecks(){
        return http.get('health-checks').then(res=>res.data);
    };
    
    getHealthchecks=()=>{

        return http.get('health-checks')
           

    };
    getgetHealthchecksbyId=(id)=>{

        return http.get('health-checks/'+id);

    };

    postgetHealthchecks=(body)=>{

        return http.post('health-checks',body);

    };

    putgetHealthchecks=(body,id)=>{

        return http.put('health-checks/'+id,body)

    };

    deletegetHealthchecks=(id)=>{

        return http.delete("health-checks/"+id);

    };


}