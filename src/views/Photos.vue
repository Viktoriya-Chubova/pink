<template>
  <div class="photos" >
    <app-title>Фотографии <br> пользователей</app-title>
    <div class="container">
      <app-subtitle >Взгляните на фотографии, которые выкладывают пользователи! <br> Видите, как не хватает ваших?</app-subtitle>
      <post-list :posts="PostsPhotoData"/>
      <app-subtitle class="photos__subtitle">Затмите их всех! <br> Выкладывайте все, что накопилось в телефоне!</app-subtitle>
      <u-button color="green" @click="AddPost" class="photos__btn">Добавить пост</u-button>
      <u-dialog  v-model:show="showForm">   
        <add-post @toggle-button="toggleButtonHandler" @create="createPost"></add-post>
      </u-dialog>
    </div>
  </div>
</template>

<script>
import AppTitle from '../components/AppTitle.vue'
import AppSubtitle from '../components/AppSubtitle.vue'
import AddPost from '../components/AddPost.vue'

import PostList from '../components/PostList.vue'
import {PostsPhotoData} from '@/data/data.dummy'

  export default {
    components: { 
      AppTitle,
      PostList ,
      AppSubtitle,
      AddPost
    },  
    data(){
      return{
        PostsPhotoData,
        showForm: false,
        
      }
    }  ,
    methods:{
      createPost(post){
        this.PostsPhotoData.push(post);
      },
      AddPost(){
          this.showForm=true;
          return;
      },
      toggleButtonHandler () {
        this.showForm = false
      }    
    }
  }
</script>

<style lang="scss" scoped>
.photos{
  &__subtitle{
    padding: 65px  0 55px;
  }
  &__btn{
    display: block;
    margin: 0 auto;
  }
}
</style>
