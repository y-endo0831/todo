<template>
  <div class="task">
    <input 
      :checked="todo.completion" 
      type="checkbox" 
      class="task-checkbox"
      @change="compTask(todo)" />

    <span class="title">{{ todo.title }}</span>
    <span class="limit">
      期限日：{{todo.date}}&emsp;
      時間：{{todo.time}}
    </span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TodoListTile',
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods:{
    ...mapMutations('todo',['compTask']),
  }
}
</script>

<style scoped>
.task {
  display: flex;
  width: 1150px;
  height: 43px;
  margin-bottom: 8px;
  background: floralwhite;
}
.task-checkbox {
  margin-right: auto;
  transform: scale(1.7);
  margin: 12px 15px 13px 15px;
}
.title{
  display: inline-block;
  margin-right: auto;
  font-size: 25px;
}
.limit{
  font-size: 15px;
  margin-top: 20px;
}
</style>
