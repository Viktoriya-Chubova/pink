<template>
  <div class="file">
    <input
      class="file__input"
      type="file"
      :id="id"
      ref="file"
      :accept="accept"
      @change="handleFileUpload"
      
    />
    <label :for="id" class="file__file-button" :class="clas">
      <img
        class="file__file-icon"
        src="../../assets/images/icons/download.svg"
        alt="Выбрать файл"
      />
      <span class="file__file-button-text">Выберите файл</span>
    </label>
    <br /><img :src="imagePreview" v-show="showPreview" class="file__preview" />
    <TransitionGroup>
      <div class="file__error" v-for="element in error" :key="element.$uid">
        <div>{{element.$message}}</div>
      </div>   
   </TransitionGroup>
  </div>
</template>

<script>
export default {
  name: "u-file",
  props: {
    label: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    accept: {
      type: String,
      default: "image/*",
    },
    clas: {
      type: Object,
      
    },
    error:{
      type: Array,
      required: false
    },
    modelValue: String,
  },
  data() {
    return {
      file: "",
      showPreview: false,
      imagePreview: "",
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      let reader = new FileReader(); //FileReader() используется для чтения выбранного пользователем файла и создания предварительного просмотра изображения
      reader.addEventListener("load", () => {
          //load-событие загрузки (если файл завершил загрузку, то показываем)
          this.showPreview = true;
          this.imagePreview = reader.result;
        }, false);
      reader.readAsDataURL(this.file);
      reader.onload = (event) => {
        this.$emit("update:modelValue", event.target.result);
      };
      document.querySelector("#file").value = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";

.file {
  width: 100%;
  position: relative;
  margin: 15px 0;

  &__input {
    display: none;
    position: absolute;
  }
  &__file-button {
    background: $white;
    border: 2px solid $pink;
    color: $pink;
    font-size: 1.125rem;
    font-weight: 700;
    padding: 10px;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    max-width: 300px;
  }
  &__file-icon {
    margin-right: 15px;
    width: 25px;
  }
  &__file-button-text {
    line-height: 1;
    margin-top: 1px;
  }

  &__preview {
    width: 100px;
  }
  &__error {
    width: 200px;
    background: rgb(218, 116, 116);
    margin-top: 0px;
    border-radius: 7px;
    font-size: 13px;
    color: #fff;
    padding: 5px;
    position:absolute;
    top: 55px;
    @media screen and (max-width: 479.98px){
      width: 100%;
    }
  }
}
.invalid{
  border: 2px solid red;  
  color: red;
  box-shadow: 0 0 10px red;
  &:hover {
    border: 2px solid red;
  }
  &:focus {
    outline: none;
    border: 2px solid red;
  }
}
</style>