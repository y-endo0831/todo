<template>
  <div>
    <!--タイトル-->
    <div class="page-title">
      <PageTitle />
    </div>
    <!--メニュー-->
    <div class="hamburger-menu">
      <input id="menu-btn-check" type="checkbox" />
      <label for="menu-btn-check" class="menu-btn" @click="menuFlg = !menuFlg">
        <span></span>
      </label>
      <div v-if="menuFlg">
        <div class="menu-content">
          <div>タスク編集</div>
          <!--カレンダー-->
          <button type="button" class="calendar-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-calendar3"
              viewBox="0 0 16 16">
              <path
                d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
              <path
                d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </button>
          <!--ゴミ箱-->
          <button type="button" class="delete-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash"
              viewBox="0 0 16 16">
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg>
          </button>
          <EditTodoListTile v-for="task in taskList" :key="task" :task="task" />
        </div>
      </div>
    </div>
    <!--タスク一覧-->
    <div class="task-list">
      <TodoListTitle v-for="task in taskList" :key="task" :task="task" />
    </div>
    <!--完了済みタスクボタン-->
    <div class="comp-btn">
      <b-button @click="compFlg = !compFlg">
        <!--閉じる-->
        <svg v-if="!compFlg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-chevron-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
        </svg>
        <!--開く-->
        <svg v-if="compFlg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-chevron-up" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
        </svg>
        完了済みタスク
      </b-button>
    </div>
    <!--完了済みタスク一覧-->
    <div v-if="compFlg" class="comp-list">
      <CompletedTodoDrawer v-for="compTask in compList" :key="compTask" :compTask="compTask" />
    </div>
    <!--タスク追加-->
    <div class="add-todo">
      <AddTodoTask />
    </div>
  </div>
</template>

<script>
import TodoListTitle from '../components/TodoListTitle.vue'
import PageTitle from '../components/PageTitle.vue'
import CompletedTodoDrawer from '../components/CompletedTodoDrawer.vue'
import AddTodoTask from '../components/AddTodoTask.vue'
import EditTodoListTile from '../components/EditTodoListTile.vue'
export default {
  name: 'IndexPage',
  components: { TodoListTitle, PageTitle, CompletedTodoDrawer, AddTodoTask, EditTodoListTile },
  data() {
    return {
      taskList: ["ほげほげする", "ふがふがする",],
      compList: ["ぴよぴよする", "ぱたぱたする"],
      compFlg: false,
      menuFlg: false,
    }
  },
  methods: {

  },
}
</script>

<style>
body {
  width: 1200px;
  margin: 0 auto;
  background: lightpink;
}

.menu-btn {
  position: fixed;
  height: 50px;
  width: 50px;
  z-index: 2;
  justify-content: center;
  align-items: center;
  top: 15px;
  right: 5px;
  background: floralwhite;
}

.menu-btn span,
.menu-btn span:before,
.menu-btn span:after {
  content: '';
  display: block;
  position: absolute;
  height: 3px;
  width: 25px;
  border-radius: 3px;
  background-color: black;
}

.menu-btn span {
  margin: 23px 0px 0px 13px;
}

.menu-btn span:before {
  bottom: 8px;
}

.menu-btn span:after {
  top: 8px;
}

#menu-btn-check:checked~.menu-btn span {
  background-color: rgba(255, 255, 255, 0);
}

#menu-btn-check:checked~.menu-btn span::before {
  bottom: 0;
  transform: rotate(45deg);
}

#menu-btn-check:checked~.menu-btn span::after {
  top: 0;
  transform: rotate(-45deg);
}

#menu-btn-check {
  display: none;
}

.menu-content {
  overflow-y: scroll;
  width: 350px;
  height: 890px;
  position: fixed;
  top: 15px;
  right: 0;
  z-index: 1;
  font-size: 20px;
  padding: 5px;
  background-color: floralwhite;
}

.task-list {
  overflow-y: scroll;
  height: 700px;
}

.card-body {
  padding: 0 0 0 0;
}

.bi,
.bi-plus-circle {
  margin-bottom: 6px;
}

.comp-btn {
  position: absolute;
  top: 75px;
  left: 10px;
}

.comp-list {
  position: absolute;
  overflow-y: scroll;
  background: floralwhite;
  top: 120px;
  left: 10px;
  width: 330px;
  height: 780px;
}

.delete-btn {
  background: floralwhite;
}

.calendar-btn {
  background: floralwhite;
  margin: 10px 20px 13px 5px;
}
</style>
