<template>
   <section class="carousel">
      <div class="container">
         <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active" v-for="item in data" :key="item">
                  <div class="item">
                     <img class="item__quote" src="../assets/images/quotes.png" alt="">
                     <p class="item__text">{{item.text}}</p>
                     <p class="item__name">{{item.name}}</p>
                     <p class="item__about">{{item.about}}</p>
                  </div>                   
               </div>            
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>            
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
         </div>      
      </div>
   </section>
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

.item {
   padding: 72px 105px 40px;
   text-align: center;

   &__quote{
      margin-bottom: 58px;
   }
   &__text {
      margin-bottom: 50px;
   }

   &__name {
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 17px;
      color: $black;
   }

}
.carousel-control-prev {
   justify-content: flex-start;
}
.carousel-control-next{
   justify-content: flex-end;
}
</style>