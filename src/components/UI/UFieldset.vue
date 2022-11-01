<template>
   <fieldset>
      <legend>{{legend}}</legend>
      <slot>

      </slot>
   </fieldset>
</template>

<script>
   export default {
      name: 'u-fieldset',
      props: {
         legend: {
            type: String,
            default: ''
         }
      }
   }
</script>

<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";

fieldset {
   margin: 0;
   border: 2px solid #e5e5e5;
   border-radius: 1px;
   padding: 45px 60px;
   width: 100%;
   @media screen and (max-width: 767.98px){
      padding: 45px 30px;
   }
   @media screen and (max-width: 479.98px){
      border: none;
      padding:  0px;
      
   }
}
fieldset#radio {
  padding: 50px 60px 50px;
}
legend {
  color: $pink;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  padding: 0 30px;
  @media screen and (max-width: 479.98px){      
      padding-bottom: 40px;
   }
}
</style>