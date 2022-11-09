<template>
  <div v-if="types !== 'textarea'" class="input">
      <input      
        :value="modelValue"
        @input="updateInput"
        class="input__text"
        :type="`${types}`"
        :placeholder="placeholder"
        :id="id"
        :class="clas"
      />
    <label  :for="id" class="input__label">{{ label }}</label>    
   <TransitionGroup>
      <div class="input__error" v-for="element in error" :key="element.$uid">
        <div>{{element.$message}}</div>
      </div>   
   </TransitionGroup>
  </div>
  <textarea
    class="textarea"
    v-else
    :value="modelValue"
    @input="updateInput"
    :placeholder="placeholder"
    :id="id" 
  />
</template>

<script>
export default {
  name: "u-input",
  props: { 
    types: {
      type: String,
      default: "text",
      validator: (val) =>
        [
          "text",
          "textarea",
          "password",
          "tel",
          "email",
          "search",
          "textarea",
          "radio",
        ].includes(val),
    },
    label: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    clas: {
      type: Object,
      
    },
    error:{
      type: Array,
      required: false
    },
    modelValue: String,
    placeholder: String,
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";
.input{
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  position: relative;
  &__text {
    width: 336px;
    font-size: 18px;
    
    color: $darkblue;
    border: 2px solid #e5e5e5;
    border-radius: 1px;
    padding: 15px 20px;
    &:hover {
      border: 2px solid $darkblue;
    }
    &:focus {
      outline: none;
      border: 2px solid $pink;
    }
    
    @media screen and (max-width: 950px){
      width: 100%;
    }

  }
  &__label{
    color: $pink;
    font-size: 14px;
    text-transform: uppercase;
    margin-left: 20px;
    margin-top: 20px;
    @media screen and (max-width: 479.98px){
      margin-top: 0;
    }
  }
  &__error {
    width: 336px;
    background: rgb(218, 116, 116);
    margin-top: 4px;
    border-radius: 7px;
    font-size: 13px;
    color: #fff;
    padding: 5px;
    position:absolute;
    top: 55px;
    @media screen and (max-width: 479.98px){
      top: 93px;
      width: 100%;
    }
  }
}


.invalid{
  border: 2px solid red;  
  box-shadow: 0 0 10px red;
  &:hover {
    border: 2px solid red;
  }
  &:focus {
    outline: none;
    border: 2px solid red;
  }
}

.textarea {
  width: 100%;
  height: 125px;
  border: 2px solid #e5e5e5;
  border-radius: 1px;
  padding: 20px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  @media screen and (max-width: 950px){
    height: 190px;
  }
}
input#phone {  
  background: url(../../assets/images/icons/phone.png) no-repeat 95% 50%;
}
input#mail {
  background: url(../../assets/images/icons/mail.png) no-repeat 95% 50%;
  padding-right: 18px;
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>