<template>
   <div class="title">
      <div class="container title__text">
         <slot>
   
         </slot>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'app-title'
   }
</script>

<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";

   .title{
      background: url(../assets/images/intro-image.jpg) no-repeat ;
      background-size: 100%;
      
      font-size: 50px;
      color: $white;
      height: auto;
      text-align: center;
      padding: 170px 0 104px;
      font-weight: 300;
      line-height: 68px;
   }
   @media screen and (max-width: 790px){
      .title{
         padding: 170px 0 74px;
      }
   }
   @media screen and (max-width: 660px){
      .title{
         padding-top: 120px;
         font-size: 40px;
      }
   }
   @media screen and (max-width: 479.98px){
      .title{
         font-size: 24px;
         line-height: 33px;
         padding: 100px 0 0;
         &__text{
            padding-bottom: 40px;
         }
      }
   }
</style>