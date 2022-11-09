<template>
   <div class="posts">
      <post-item v-for="post in posts" :key="post" :post="post"></post-item>
   </div>
</template>

<script>
import PostItem from '../components/PostItem.vue'

   export default {
      name: 'post-list',
      components: { 
         PostItem
      },  
      props: { 
         posts: {
            type: Array,
            required: true, 
         },
      },
   }
</script>

<style lang="scss" scoped>
.posts{
   margin: 0 auto;
   display: flex;
   row-gap: 55px;
   column-gap: 20px;
   flex-wrap: wrap;
   
   @media screen and (max-width: 979.98px){
      row-gap: 20px;
      max-width: 700px;  
      justify-content: space-between;    
   }
   @media screen and (max-width: 659.98px){
      justify-content: center;    
   }
}
</style>