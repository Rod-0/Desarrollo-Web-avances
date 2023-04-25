<template>
    <div class="socialMedia">
    <div class="column">
        <p class="title">Copyright © 2023 RESTCountries, inc All rights reserved</p>
       
        
    </div>
    <div  class="column">
        <div class="title">
            <p>Develop by</p>
        </div>
        <div class="subtitle">
            <p>Rodrigo Pozo</p>
            <p>u20181e187</p>
           
        </div>
        
    </div>
   
    <div  class="column">
        <p class="title">To contact us</p>
        <div class="d41">
            <input type="text" placeholder="Your email adress">
            <button class="Sendmail">Submit</button>
        </div>
    </div>
   

</div>
      
    
  </template>
    
    
  <script>
    
    export default {
        name:"footer"
       
  
        
        
  
    }
    
  </script>
    
    
<style scoped>
 .socialMedia {
    margin-top: 50px;
    padding: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.column{
    justify-content: left;
    width: 600px;
    left: 20px;
}


.title{

    font-family: sans-serif;
    font-size: 30px;
    color: #1D3557;
    line-height: 50px;
}
.subtitle{
    color: #181433;
    font-size: 16px;
    line-height: 30px;
}





.Sendmail {

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    cursor:pointer;
    background: #FFA448;
    width:149px;
    border-color: #FFA448;
   
}



.d41 input{
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}

.social {
    height: 3rem;
    margin-bottom: 2rem;
    border-radius: 100%;
}
  
  
    
</style>