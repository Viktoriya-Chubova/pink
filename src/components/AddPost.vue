<template>
   <form @submit.prevent class="form">
      <div class="form__row">
         <div class="form__col">
            <u-input
               class="form__input"
               v-model="post.name"               
               placeholder="Укажите ваше имя"
               id="Имя"
               :clas="{ invalid: v$.post.name.$error }"
               :error="v$.post.name.$errors"
            />
            <u-input
               class="form__input"
               v-model="post.text"               
               placeholder="Введите описание"
               id="Описание"
            />
         </div>
         <div class="form__col">
            <u-file 
               id="file" 
               v-model="post.image" 
               ref="imgUpload" 
               :clas="{ invalid: v$.post.image.$error }"
               :error="v$.post.image.$errors"
            />
         </div>
      </div>
      <div >
        <u-button class="form__btn" color="green" @click="createPost">Отправить</u-button>
      </div>
   </form>
  
</template>

<script>
import { required, helpers,  } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export default {
  name: "add-post",
  data() {
    return {
      v$: useVuelidate(),
      post: {
        name: "",
        text: "",
        image: "",
        likes:0,
        time: null
      },
      
    };
  },
  validations: {
   post: {
      name: {
        required: helpers.withMessage("Обязательно для заполнения", required),
      },
      image: {
        required: helpers.withMessage("Прикрепите фото", required),
      },
    },
  },
  methods: {
    createPost() {
      this.v$.$touch();
      if (this.v$.$error) {
        return;
      }
      this.$emit('showForm',)
      this.v$.$reset();
      this.post.id = Date.now();
      this.post.time = new Date();
      this.$emit("create", this.post);
      this.$emit('toggle-button');
      this.post = {
        name: "",
        text: "",
        image: "",
        likes:0,
        time: null
      };
      this.$refs.imgUpload.showPreview = "";
      
    },
    uploadImage(event) {
      const files = event.target.files;
      if (!files.length) return;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (event) => {
        this.post.image = event.target.result;
      };
      // Чтобы включить повторную загрузку одних и тех же файлов в Chrome
      document.querySelector("#file").value = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  padding: 40px 20px;
   &__row{
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 30px;
   }
   &__input{
      margin-bottom: 30px;
      &:last-child{
         margin-bottom: 0;
      }
   }
   
  &__imagePreview {
    width: 100px;
  }
}
@media screen and (max-width: 479.98px){
.form{
  
  &__btn{
    width: 100%;
  }
}
}
</style>