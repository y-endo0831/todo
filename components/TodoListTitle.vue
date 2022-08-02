<template>
  <b-card class="task">
    <!-- TODO チェック後の処理は最後に行う(まずは静的なレイアウトを作成) -->
    <input type="checkbox" class="task-checkbox" />
    <span>{{ task }}</span>
  </b-card>
</template>

<script>
export default {
  name: 'TodoListTile',
  props: {
    task: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.task {
  font-size: 25px;
  width: 1150px;
  height: auto;
  margin-bottom: 8px;
  background: floralwhite;
}
.task-checkbox {
  transform: scale(1.7);
  border-radius: 50%;
  margin: 0 15px 13px 15px;
}
</style>
