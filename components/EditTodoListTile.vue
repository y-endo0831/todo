<template>
  <div>
    <b-card class="edit-task">
      <input 
        type="checkbox" 
        class="edit-checkbox" 
        v-model="check"
        @change="taskCheckFlg(todo)" />

      <input 
        type="text" 
        class="edit-text" 
        :value=todo.title />
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'EditTodoListTile',
  data() {
    return {
      check:false,
    }
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    taskCheckFlg(todo){
      this.$store.commit('todo/taskCheckFlg',{task:todo, flg:this.check});
    }
  },
}
</script>

<style scoped>
.edit-task {
  font-size: 25px;
  background: floralwhite;
  width: 320px;
  margin-bottom: 8px;
}

.edit-checkbox {
  transform: scale(1.7);
  margin: 0 5px 13px 15px;
}

.edit-text {
  width: 275px;
  border: none;
  background: floralwhite;
}
</style>