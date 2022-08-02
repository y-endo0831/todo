<template>
  <div>
    <b-card class="comp-task">
      <span>・{{ compTask }}</span>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CompletedTodoDrawer',
  props: {
    compTask: {
      type: String,
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