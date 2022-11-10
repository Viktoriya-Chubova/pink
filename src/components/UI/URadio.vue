<template>
   <input        
      type="radio"
      :id="id"
      :value="value" 
      :checked="value === modelValue" 
      @change="updateRadio"
    /><!-- чекбокс будет активен если его значение содержится в modelValue -->
    <label :for="id">{{label}}</label>
</template>

<script>
   export default {
      name: "u-radio",
      props:{             
         id: {
            type: String,
            default: '',            
         },
         value: {
            type: String,
            default: '',            
         },
         label: {
            type: String,
            default: '',            
         },
         modelValue: {
            type:String,
            default: ''
         }
      },
      methods: {
         updateRadio(event){
            this.$emit('update:modelValue', event.target.value)
         }
      },      
   }
</script>

<style lang="scss" scoped>
input{
   display: none;
} 
label{
   cursor: pointer;
}
label:before {
   cursor: pointer;
   content: " ";
   display: inline-block;
   margin-right: 22px;
   width: 37px;
   height: 37px;
   vertical-align: middle;
   background: #ffffff;
   border: 2px solid #e5e5e5;
   border-radius: 50%;
   }
:checked + label:before {
   content: " ";
   background: url(../../assets/images/icons/Ellipse.png) no-repeat center;
}
</style>