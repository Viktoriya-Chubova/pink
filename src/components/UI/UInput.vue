<template>
  <input
    v-if="types !== 'textarea'"
    :value="modelValue"
    @input="updateInput"
    class="text"
    :type="`${types}`"
    :placeholder="placeholder"
    :id="id"
  />
  <label v-if="types !== 'textarea'" :for="id" class="label">{{ label }}</label>
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
.text {
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
.label{
  color: $pink;
  font-size: 14px;
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
</style>