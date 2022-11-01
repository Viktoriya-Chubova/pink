<template>
   <div class="konkurs">
      <AppTitle>Конкурс на самое безбашенное путешествие с Пинк</AppTitle>      
      <div class="container">
         <p class="konkurs__subtitle">Поделитесь своей историей и получите шанс выиграть ценный приз — 1000 миль на вашу бонусную карту! Пожалуйста, заполните форму ниже:</p>
         <FormKonkurs :data="FormData"></FormKonkurs>
      </div>
      
   </div>
</template>

<script>
import AppTitle from "../components/AppTitle.vue";
import FormKonkurs from "../components/FormKonkurs.vue";
import { FormData} from "@/data/data.dummy";

   export default {
    name: "Konkurs",
    components: { 
      AppTitle, 
      FormKonkurs 
   },
  
   data() {
    return {
      FormData: FormData,
      
    };
  },
}
</script>
<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";

.konkurs{
   
   
   &__subtitle{
      margin: 100px 20px 89px;
      text-align: center;
      
      line-height: 30px;
   }
}
@media screen and (max-width: 479.98px){
   .konkurs{
   
   &__subtitle{
      font-size: 14px;
      margin: 55px 20px;
   }
}
   .container{
      padding: 0;

   }
}
</style>