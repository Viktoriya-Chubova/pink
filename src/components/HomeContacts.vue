<template>
   <div class="contacts">
      <div class="container">
         <div class="contacts__content">
            <p class="contacts__title">Остались вопросы? <br>Свяжитесь с нами!</p>
            <div class="contacts__cards">               
                  <div class="contacts__card">
                     <p class="contacts__text">Звоните:</p>
                     <p><a class=contacts__item href="tel:+7 (812) 555-66-66">+7 (812) 555-66-66</a></p>
                  </div>
                  <div class="contacts__card">
                     <p class="contacts__text">Приезжайте в гости:</p>
                     <p class="contacts__item">ул. Большая Конюшенная, 19/8</p>
                  </div>
                  <div class="contacts__card">
                     <p class="contacts__text">Пишите:</p>
                     <p><a class=contacts__item href="mailto:mail@htmlacademy.ru">mail@htmlacademy.ru</a></p>
                  </div>              
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      
      
   }
</script>

<style lang="scss" scoped>
@import "../assets/layouts/index.scss";

.contacts {
   padding-top: 75px;
   &__content {
      text-align: center;
   }

   &__title {
      font-weight: 300;
      font-size: 50px;
      padding-bottom: 60px;
   }

   &__cards {
      display: flex;
      justify-content: space-between;
   }

   &__card {
      max-width: 241px;
   }

   &__text {
      font-weight: 700;
      margin-bottom: 34px;
      line-height: 25px;
   }

   &__item {
      font-weight: 300;
      font-size: 24px;
      color: $pink;
      text-decoration: none;
      line-height: 33px;
   }
}


</style>