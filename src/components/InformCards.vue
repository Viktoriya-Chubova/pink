<template>
   <div class="cards">
      <div class="cards__card" v-for="item in data" :key="item">
         <div class="cards__image">
            <img class="cards__iphone" src="../assets/images/inform/iphone.png" alt="">
            <img class="cards__screen" :src="require(`../assets/images/inform/${item.screen}.jpg`)">
         </div>
         <div class="cards__info">
            <p class="cards__title">{{item.title}}</p>
            <p class="cards__text">{{item.text}}</p>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      props:{
         data:{
            type: Array,
            defaulf: () => []
         }
      }
   }
</script>

<style lang="scss" scoped>
@import "../assets/layouts/index.scss";
.cards {
   display: flex;
   justify-content: space-between;

   &__card {
      text-align: center;
      max-width: 300px;
      height: 580px;
   }

   &__image {
      display: flex;
      transition: all ease .5s;
      position: relative;
      justify-content: center;
      
   }

   &__screen {
      position: absolute;
      bottom: 45px;  
      padding: 0 10px;
      
   }
   &__info{
      position: relative;
      top: -80px;
      border-top:  4px solid transparent;
      border-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #00000067 49.8%, rgba(0, 0, 0, 0) 93.23%);
      border-image-slice: 1;
      
      background-color: $grey;
      padding-top: 59px;
   }
   &__title {
      font-weight: 700;
      font-size: 30px;
      margin-bottom: 35px;      
      padding:0 30px;
      color: $black;
      
   }

   &__text {
      padding: 0 24px;
      
   }
}


</style>