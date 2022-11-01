<template>
  <form class="form" @submit.prevent>
    <div class="form__row">
      <div class="form__fio">
        <div class="form__input" v-for="item in data.fio" :key="item" >
          <u-input 
            :label="`${item.name}`"
            v-model="item.value"            
            :placeholder="item.placeholder"
            :id="`${item.name}`"
          />      
        </div>        
      </div>   
      <div class="form__radio_mobile">
        <u-fieldset legend="С каким приложением путешествовали?" class="form__radio">
          <div class="form__radio_item" v-for="item in data.app" :key="item">
            <u-radio
              v-model="review.radioApp"
              :value="item.name"            
              :id="`${item.name}`"            
            ></u-radio>
            <label :for="`${item.name}`">{{ item.name }}</label>
          </div>
        </u-fieldset> 
      </div>  
    </div>
    <u-fieldset legend="контактная информация" class="form__contacts">
      <div class="form__contacts_item">
        <u-input
          v-model="review.phone"     
          types="tel"    
          placeholder="Номер, пожалуйста"
          id="phone"
          label="НОМЕР ТЕЛЕФОНА"
        />        
      </div>
      <div class="form__contacts_item ">
        <u-input
          types="email"
          v-model="review.mail"    
          placeholder="Введите почту *"
          id="mail"
          label="АДРЕС ПОЧТЫ"          
        />
        <span v-for="error in v$.review.mail.$errors" :key="error.$uid">
        Поле не заполнено</span>
      </div>
      </u-fieldset>   
      <div class="form__progress_mobile">
        <u-fieldset legend="Ваши безбашенные достижения в путешествии" class="form__progress">
          <div class="form__progress_item" v-for="item in data.progress" :key="item">
            <u-checkbox
              :value="`${item.name}`"
              :id="`${item.name}`"
              :label="`${item.name}`"          
              v-model="review.checkedProgress"
            />
          </div>
        </u-fieldset> 
      </div> 
    
    <u-fieldset legend="ОПИШИТЕ СВОИ ЭМОЦИИ" class="form__textarea">      
      <u-input
        types="textarea"
        v-model="review.message"
        placeholder="Можно прям в красках, не стесняясь в выражениях"
      />
    </u-fieldset>
    <div class="form__btn-row">
      <app-button color="green" @click="createReview"
        >Отправить форму</app-button>
      <p class="form__btn-text">
        <span>*</span> — обязательные для заполнения поля
      </p>
    </div>
    <app-dialog v-model:show="dialogVisible" class="dialog">
      <p class="dialog__title">Ваша заявка отправлена</p>
      <p class="dialog__text">Спасибо за ваше участие, ваша заявка уже поступила к нам. В ближайшее время мы рассмотрим ее и оповестим вас.</p>
      <div class="dialog__btn">
        <app-button class="dialog__app-btn" color="green" @click="dialogVisible=false">ЗАКРЫТЬ ОКНО</app-button> 
      </div>     
    </app-dialog>
    <app-dialog v-model:show="dialogVisibleError"  class="dialog">
      <p class="dialog__title">Что-то пошло не так!</p>
      <p class="dialog__text">Проверьте поля, выделенные красным, скорее всего вы забыли их заполнить</p>
      <div class="dialog__btn">
        <app-button class="dialog__app-btn" color="green" @click="dialogVisibleError=false">ОК</app-button>
      </div>

    </app-dialog>
    
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import UCheckbox from './UI/UCheckbox.vue';

export default {
  name: 'FormKonkurs',
  components: {UCheckbox}, 
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      mail: '',
      v$: useVuelidate(),
      review: {
        fio: {
          surname: "",
          name: "",
          patronymic: "",
        },        
        phone: "",
        mail: "",
        message: "",
        radioApp: '',
        checkedProgress: [],
      },
      dialogVisible: false,
      dialogVisibleError: false
      
    };
  },
  validations: {
    
      mail: {required},
      review: {
        fio: {
          surname: { required },
          name: { required },
          
        },           
        mail: { required, email },         
      },      
    
  },
  methods: {
    createReview() {
      if(!this.review.mail){
        this.dialogVisibleError= true;
        this.v$.$touch();        
      }
      if(this.review.mail){
        this.dialogVisible= true;
        this.review.mail='';
        this.review.phone= "";
        this.review.mail= "";
        this.review.message= "";
        this.review.radioApp= null;
        this.review.checkedProgress=[];
      }
    },    
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";

.form {
  
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 70px;
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 100%;
    row-gap: 70px;
  }

  &__input {
    margin-bottom: 58px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row-reverse;
    gap: 20px;

    &:last-child {
      margin-bottom: 0;
    }
    &_item {
      margin-right: 20px;
    }
  }
  
  &__radio {    
    &_mobile{
      width: 430px;
    }
    &_item {
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &__progress {    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 47px;
    
    &_mobile{
      width: 100%;
    }
    &_item {
      min-width: 260px;
      
    }
  }
  &__contacts {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    padding-bottom: 23px;  
    

    &_item {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
  &__btn-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    text-transform: uppercase;
    & span {
      color: $pink;
    }
  }
}
.dialog {
 
  &__title {
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 37px;
    margin-top: 50px;
    
  }

  &__text {
    margin: 0 auto;
    margin-bottom: 70px;
    max-width: 80%;
  }

  &__btn {
    background: $grey;
    padding: 50px 0;
    
  }
  &__app-btn{   
    max-width: 80%;
  }
}

@media screen and (max-width: 950px){
  .form {
    &__fio{
      width: 100%;
    }
    &__radio {
      &_mobile{
        width: 100%;
      }
    }
    
    &__contacts {    
      &_item {
        width: 100%;
      }
    }
  }

}
@media screen and (max-width: 674px){
  .form {
    &__btn-row {
      justify-content: center;
    }
  }
}
@media screen and (max-width: 479.98px){
  .container{
    padding: 0;
  }
  .form {
    gap: 40px;
    &__row {
      row-gap: 40px;
    }
    &__input {
      margin-bottom: 30px;
      flex-direction: column-reverse;
      align-items: flex-start;
    }
    
    &__radio {
      &_mobile{
        background: $grey;
        padding: 40px 0;        
      }      
    }
    &__contacts{
      &_item {
        flex-direction: column-reverse;
      }
      legend{
        display: none;
      }
    }
    &__progress{
     padding: 0;
     &_mobile{
        background: $grey;
        padding: 40px 0;        
      }
    }
    &__fio,&__progress, &__contacts,  &__btn-row, &__textarea, &__radio {
      padding: 0 20px;
    }
  }
}

</style>