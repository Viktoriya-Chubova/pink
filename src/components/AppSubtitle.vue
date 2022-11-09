<template>
   <div class="subtitle">
      <slot></slot>
   </div>
</template>

<script>
   export default {
      
   }
</script>

<style lang="scss" scoped>
.subtitle{
   margin: 0 auto;
   padding: 100px 0 89px;
   text-align: center;      
   line-height: 30px;
}

@media screen and (max-width: 479.98px){
   .subtitle{
      font-size: 14px;      
      padding: 55px 20px;
   }
}
</style>