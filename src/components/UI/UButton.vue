<template>
   <button class="btn" :class="{
      'btn__pink': color === 'pink',
      'btn__green': color === 'green'
   }">
      <p class="btn__text">
         <slot>
            
         </slot>
      </p>
   </button>
</template>

<script>
   export default {
      name: 'u-button',
      props: {
         color: {
            type: String,
            default: 'pink'
         }
      }
   }
</script>

<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";
.btn{
   &__pink{
      border: 3px solid #FFFFFF;
      width: 300px;
      border-radius: 29px;
      color: $white;
      background-color: rgba(0,0,0,0);
      font-weight: 700;
      font-size: 21px;
      padding: 15px 0;

      &:hover{
         color: $pink;
         background-color: $white;
      }
      &:active{
         color: rgba($pink,0.3);
      }
   }
   &__green{
      width: 300px;
      border: 2px solid $green;
      border-radius: 1px;
      color: $white;
      background: $green;
      text-transform: uppercase;
      font-weight: 700;
      padding: 17px 0;
      font-size: 18px;
      line-height: 30px;
      &:hover{
         background-color: $darkgreen;
         border: 2px solid $darkgreen;
      }
      &:active{
         color: rgba($white, 0.3);
      }
      &:disabled{
         background: #E5E5E5;
         border: 2px solid #E5E5E5;
         border-radius: 1px;
      }
   }
}
</style>