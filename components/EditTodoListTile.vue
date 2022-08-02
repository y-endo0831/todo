<template>
  <div>
      <b-card class="menu-task">
        <input type="checkbox" class="task-checkbox"/>
        {{ task }}
      </b-card>
  </div>
</template>

<script>
export default {
  name: 'EditTodoListTile',
  props: {
    task: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>
.menu-task {
  font-size: 25px;
  background: floralwhite;
  width: 320px;
  margin-bottom: 8px;
}
.task-checkbox {
  transform: scale(1.7);
  border-radius: 50%;
  margin: 0 15px 13px 15px;
}
</style>