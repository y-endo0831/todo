<template>
  <div>
    <b-card class="comp-task">
      <span>・{{ todo.title }}</span>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CompletedTodoDrawer',
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.comp-task{
  background: floralwhite;
  font-size: 20px;
}
</style>