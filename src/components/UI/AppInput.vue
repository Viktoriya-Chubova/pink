<template>
  <input class="input" type="text" />
</template>

<script>
export default {
  name: "app-input",
};
</script>

<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";
.input {
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
}
</style>