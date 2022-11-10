<template>
   <input        
      type="checkbox"
      :id="id"
      :value="value" 
      :checked="modelValue.includes(value)" 
      @change="evt=> updateCheck(evt.target.value)"
    /><!-- чекбокс будет активен если его значение содержится в modelValue -->
    <label :for="id">{{label}}</label>
</template>

<script>
   export default {
      name: "u-checkbox",
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
            type:Array,
            default: ()=>[]
         }
      },
      methods: {
         updateCheck(value){
            //если чекбокс активен, то эмитим новый modelValue в котором значения нет
            if (this.modelValue.includes(this.value)) this.$emit('update:modelValue', this.modelValue.filter(cv => cv!==value))
            //иначе добавляем новое значение
            else this.$emit('update:modelValue', this.modelValue.concat(value))
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
      width: 35px;
      height: 35px;
      vertical-align: middle;
      background: #ffffff;
      border: 2px solid #e5e5e5;
      border-radius: 1px;
   }
   [type="checkbox"]:checked + label:before {
      content: "";
      background: url(../../assets/images/icons/tick.png) no-repeat center;
   }

</style>