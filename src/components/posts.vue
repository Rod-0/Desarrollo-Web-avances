<template>
    <div class="posts">
        <div v-for="post in posts" >
            
                <!-- <div v-if="(post.id)==2">
                    post {{post.id}} User id: {{post.userId }} {{post.title}} 
                  
                    <pv-button label="delete" @click="deletePost(post.id)" />
                </div -->
            
              
            
              
             <pv-button label="Get" @click="GetPost(post.userId)"/> 
             <pv-button label="delete" @click="deletePost(post.id)"/>
            
        </div>
        <!-- <div v-for="comments in comment" >
            <div v-if="(comments.postId)==2">
                comment {{comments.name }} {{ comments.email }} {{ comments.postId }}
            </div>
           

        </div> -->
            

        
    </div>
</template>

<script>
import {PostsApiService} from "@/services/post-api-service";
// import {CommentsApiService} from "@/services/comment-api-service";
export default {
    name: "posts",
    data(){
        return{
            posts :[],
      
            // comment:[],
            postService : new PostsApiService()
            // commentservice:new CommentsApiService()
        }
    },
    methods:{
        GetPost(id){
            this.postService.getPostById(id).then((response)=>{
                this.posts = response.data;
               
                
            })
            /*this.commentservice.getAll().then((response)=>{
                this.comment = response.data;
            }) */
        },
        deletePost(id){
            this.postService.delete(id).then((response)=>{
                if(response.status === 200){
                    alert("post deleted")
                    this.getAll()
                }
                else(
                    alert("error deleting user")
                )
            })
        }
    }
    
}
</script>

<style scoped>
.posts{
    display:flex;
    flex-direction: column;
    gap: 1px;
}
</style>