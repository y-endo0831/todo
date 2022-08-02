<template>
 <div>
  <div class="new-task">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-plus-circle" viewBox="0 0 16 16">
     <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
     <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> 
    </svg>
    <input v-model="newTask" type="text" placeholder="タスクの追加"/>
  </div>
 </div>
</template>

<script>
export default{
  name:'AddTodoTask',
  data(){
    return{
      
    }
  }
}
</script>
<style scoped>
.new-task {
  position: absolute;
  top: 850px;
  width: 1150px;
  height: 50px;
  padding-left: 8px;
  background: white;
}

.new-task input[type='text'] {
  font-size: 20px;
  width: 1100px;
  height: 48px;
  border: none;
  outline: none;
}
</style>