<template>
   <section class="inform">
      <div class="container">
         <p class="inform__title">Устали от серости мегаполиса? <br> Нам есть, что вам <br>предложить!</p>
         <InformCards :data="InformData"></InformCards>
      </div>
   </section>
</template>

<script>
import InformCards from './InformCards.vue';
import {InformData} from '@/data/data.dummy'
   export default {
    components: 
   { 
      InformCards  
   },
   data(){
    return{
      InformData:InformData
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/layouts/index.scss";
.inform {
   padding: 77px 0 60px;
   background: $grey;
   &__title {
      font-weight: 300;
      font-size: 50px;
      text-align: center;
      padding-bottom: 72px;
     
   }
}


</style>