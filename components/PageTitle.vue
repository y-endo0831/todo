<template>
  <div>
    <div class="title">
      <span 
      v-if="!title.flg"
      v-text="title.value"
      @click="clickTitle(title)"
      ></span>
      
      <input type="text" 
      v-if="title.flg" 
      ref="titleForm"
      v-model="title.value"
      @blur="title.flg = false"
      @keydown.enter="title.flg = false"
      >
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:{
        value:'Title',
        flg:false,
      },
    };
  },
  methods:{
    name: 'PageTitle',
    clickTitle(title){
      title.flg = true;
      this.$nextTick(() => this.$refs.titleForm.focus());
    }
  }
}
</script>

<style scoped>
.title{
  font-size: 80px;
}
.title input{
  font-size: 80px;
  width:1150px;
  height:100px;
}
</style>
