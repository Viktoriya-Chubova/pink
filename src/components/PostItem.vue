<template>
  <div class="post">
    <img class="post__image" :src="post.image" />

    <div class="post__info">
      <div>
        <p class="post__name">{{ post.name }} <span class="post__time">({{ago}})</span></p>
        <p class="post__text">{{ post.text }}</p>
      </div>
      <div class="post__likes">
        <div>Нравится: {{likes}}</div>
        <img v-if="!hasBeenLiked"
          class="post__like"
          src="../assets/images/icons/heart.svg"
          alt="like"
          @click="like"
        />
        <img v-if="hasBeenLiked"
          class="post__like"
          src="../assets/images/icons/heart-like.svg"
          alt="like"
          @click="like"
        />
      </div>
    </div>
  </div>
  
</template>

<script>
import moment from 'moment';
export default {
  name: "post-item",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      image1:  "https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg",
      likes: this.post.likes,
      hasBeenLiked: false,
      ago: '',
    };    
  },
  methods:{
    like(){
      this.hasBeenLiked ? this.likes-- : this.likes++;
      this.hasBeenLiked = !this.hasBeenLiked; 
    }
  },
  created() {
    moment.locale('ru');
    setInterval(()=>{
      this.ago = moment(this.post.time).fromNow();
      return  this.ago
    }, 100)
  },

};
</script>

<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";

.post {
  width: 300px;
  background: $grey;
  position: relative;

  &__info {
    padding: 30px 27px 66px;
    font-size: 14px;
    color: $darkblue;
  }
  &__image {
    display: block;
    width: 100%;
    height: 400px;
  }
  &__name {
    font-weight: 700;
    margin-bottom: 15px;
  }
  &__time{
    font-weight: 300;
    font-size: 12px;
    text-transform: uppercase;
  }
  &__likes {
    position: absolute;
    bottom: 27px;
    text-transform: uppercase;
    color: $pink;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    
    
  }
  &__like{
    cursor: pointer;
  }
  
}
</style>