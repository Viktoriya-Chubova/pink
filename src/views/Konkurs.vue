<template>
   <div class="konkurs">
      <AppTitle>Конкурс на самое безбашенное путешествие с Пинк</AppTitle>      
      <div class="container">
        <app-subtitle> Поделитесь своей историей и получите шанс выиграть ценный приз — 1000 миль на вашу бонусную карту! Пожалуйста, заполните форму ниже:</app-subtitle>
         <FormKonkurs :data="FormData"></FormKonkurs>
      </div>
      
   </div>
</template>

<script>
import AppTitle from "../components/AppTitle.vue";
import AppSubtitle from '../components/AppSubtitle.vue'
import FormKonkurs from "../components/FormKonkurs.vue";
import { FormData} from "@/data/data.dummy";

   export default {
    name: "Konkurs",
    components: { 
      AppTitle, 
      FormKonkurs ,
      AppSubtitle
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

.container{
   padding: 0;

}

</style>