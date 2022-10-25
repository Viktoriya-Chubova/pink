<template>
  <div class="container">
   <form class="demo" action="/dataCollectionLocation" method="post" autocomplete="on">
      <fieldset >
        <legend>Using aria-labelledby</legend>
        <label id="date-label" for="date">Current Date:</label>
        <input type="date" name="date" id="date" aria-labelledby="date-label date-instructions" />
        <p id="date-instructions">MM/DD/YYYY</p>
      </fieldset>

      <fieldset>
        <legend>Using aria-describedby</legend>
        <label id="dob" for="dob">Date of Birth:</label>
        <input type="date" name="dob" id="dob" aria-describedby="dob-instructions" />
        <p id="dob-instructions">MM/DD/YYYY</p>
      </fieldset>
    </form>   
  </div>
  
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";

.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.form-item {
  margin: 1em auto;
}

.form-item label {
  display: block;
}

button {
  font-size: 1em;
}

fieldset {
  margin: 1em auto;
}
</style>