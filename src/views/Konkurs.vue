<template>
   <div class="konkurs">
      <AppTitle>Конкурс на самое безбашенное путешествие с Пинк</AppTitle>
      <FormKonkurs></FormKonkurs>
   </div>
</template>

<script>
import AppTitle from "../components/AppTitle.vue";
import FormKonkurs from "../components/FormKonkurs.vue";

   export default {
    name: "Konkurs",
    components: { AppTitle, FormKonkurs }
}
</script>

<style scoped>

</style>