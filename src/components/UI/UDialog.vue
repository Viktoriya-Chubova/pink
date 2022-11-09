<template>
   <div class="dialog" v-if="show" @click.stop="hideDialog">
      <div @click.stop class="dialog__content">
         <slot></slot>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'u-dialog',
      props: {
         show: {
            type: Boolean,
            default: false
         }
      },
      methods:{
         hideDialog(){
            this.$emit('update:show', false)
         }
      }
   }
</script>

<style lang="scss" scoped>
.dialog {
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   background: rgba($color: #000000, $alpha: 0.5);
   position: fixed;
   display: flex;
   &__content {
      margin: auto;
      background: white;
      border-radius: 5px;
      width: 780px;
      
      text-align: center;
      @media screen and (max-width: 991.98px){
         width: 80%;
}
   }
}

</style>