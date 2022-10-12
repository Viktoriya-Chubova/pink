<template>
   <div class="logo">
      <img class="logo__desktop" src="../assets/images/logo/logoDesktopHeader.svg" alt="">
      <img class="logo__tablet" src="../assets/images/logo/logoTabletHeader.svg" alt="">
   </div>
</template>

<script>
   export default {
      
   }
</script>

<style lang="scss" scoped>
.logo {  
   &__tablet {
      display: none;
   }
}

@media screen and (max-width: 767.98px){
.logo {
   &__desktop{
      display: none;
   }

   &__tablet {
      display: block;
   }
}
}
@media screen and (max-width: 479.98px){
.logo {
   position: relative;
   overflow:hidden;
   width: 100px;
   height: 50px;

   &__tablet {
      position: absolute;
      top:0;
      right:25%;              
      object-fit:cover;
   }
}
}
</style>