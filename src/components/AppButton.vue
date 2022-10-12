<template>
   <button class="btn">
      <p class="btn__text">
         <slot>
            
         </slot>
      </p>
   </button>
</template>

<script>
   export default {
      
   }
</script>

<style lang="scss" scoped>
@import "../assets/layouts/index.scss";
.btn{
   border: 3px solid #FFFFFF;
   border-radius: 29px;
   color: $white;
   background-color: rgba(0,0,0,0);
   font-weight: 700;
   font-size: 21px;
   padding: 15px 32px;

   &:hover{
      color: $pink;
      background-color: $white;
   }
   &:active{
      color: rgba($pink,0.3);
   }
}
</style>