<template>
    <div>
        <!--タイトル-->
        <h1><input type="text" v-model="title" class="title"></h1>
        <!--メニュー-->
        <div class="hamburger-menu">
            <input type="checkbox" id="menu-btn-check">
            <label for="menu-btn-check" class="menu-btn"><span></span></label>
            <div class="menu-content">
                <div class="menuTask">
                    <span class="task-edit">タスク編集</span><hr style="margin:10px 0 35px 0;color:black">
                    <!--タスク一覧-->
                    <b-card v-for="(task,index) in menuTaskList" :key="task" class="menu-task">
                        <!--期限日の追加ボタン-->
                        <input type="date" v-model="date" class="date" @change="addDeadLine(index)"> 
                        <!--タスク変更-->
                        <input type="text" v-model="taskList[index]" class="menu-task">
                        <!--ゴミ箱ボタン-->
                        <button type="button" class="delete-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"
                            @click="deleteTask(index)">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                        </button>
                    </b-card>
                </div>    
            </div>
        </div>
        <!--タスク一覧-->
        <div class="task-list">
            <b-card v-for="(task,index) in taskList" :key="task" class="task">
                <input type="checkbox" class="task-check-box" @click="checkTask(index)">
                <span>{{task}}</span>
            </b-card>
        </div>
        <!--完了済みタスクボタン-->
        <button type="button" class="comp" @click="compTaskView">{{compTaskBtn}}</button>
        <!--完了済みタスク一覧-->
        <div v-if="flg" class="comp-task-field">
            <span v-for="compTask in compList" :key="compTask">
                ・{{compTask}}
                <hr style="margin:5px">
            </span>
        </div>
        <!--タスク追加-->
        <div class="newTask">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            <input type="text" v-model="newTask" @keyup.enter="addTask(newTask)" placeholder="タスクの追加" >
        </div>
    </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      title: "Title",
      flg: false,
      taskList: [],
      compList: [],
      menuTaskList: [],
      compTaskBtn: "⇩完了済みタスク",
      date: null
    }
  },
  methods: {
    addTask(newTask) {
      if (newTask === "") {
        return;
      }
      this.taskList.unshift(newTask);
      this.menuTaskList.unshift(newTask);
      this.newTask = "";
    },
    checkTask(index) {
      this.compList.push(this.taskList[index]);
      this.menuTaskList.splice(index, 1);
      this.taskList.splice(index, 1);
    },
    compTaskView() {
      if (this.flg) {
        this.flg = false;
        this.compTaskBtn = "⇩完了済みタスク";
        return;
      }
      this.flg = true;
      this.compTaskBtn = "⇧完了済みタスク"
    },
    addDeadLine(index) {
      this.taskList[index] =
        this.taskList[index] + "  :  " + this.date;
    },
    deleteTask(index) {
      const result = confirm("「 " + this.taskList[index] + " 」を削除しますか？")
      if (result) {
        this.taskList.splice(index, 1);
        this.menuTaskList.splice(index, 1);
      }
    },
  }
}

</script>

<style>
body {
  width: 1200px;
  margin: 0 auto;
  background: gray;
}

.title {
  background: gray;
  font-size: 80px;
  border: none;
  outline: none;
  width: 1150px;
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
  right: -350px;
  z-index: 1;
  border: 3px solid floralwhite;
  background-color: floralwhite;
  transition: all 0.3s;
}

#menu-btn-check:checked~.menu-content {
  right: 0%;
}

.menu-task {
  background: floralwhite;
  width: 320px;
  margin-bottom: 8px;
}

.menuTask input[type=text] {
  width: 230px;
  font-size: 20px;
  border: none;
  background: floralwhite
}

.task {
  font-size: 25px;
  width: 1150px;
  height: auto;
  margin-bottom: 8px;
  background: floralwhite;
}

.task-edit {
  font-size: 25px;
}

.task-list {
  overflow-y: scroll;
  height: 725px;
}

.card-body {
  padding: 0 0 0 0;

}

input[type=checkbox] {
  transform: scale(1.7);
  border-radius: 50%;
  margin: 0 15px 13px 15px;
}

.newTask {
  position: absolute;
  top: 850px;
  width: 1150px;
  height: 50px;
  padding-left: 8px;
  background: white;
}

.newTask input[type=text] {
  font-size: 20px;
  width: 1100px;
  height: 48px;
  border: none;
  outline: none;
}

.comp {
  position: absolute;
  left: 10px;
  top: 15px;
  border: none;
  width: 190px;
  font-size: 22px;
  border-radius: 5px;
  background: floralwhite;
}

.comp-task-field {
  overflow-y: scroll;
  position: absolute;
  left: 10px;
  top: 55px;
  height: 850px;
  width: 320px;
  font-size: 20px;
  border-radius: 5px;
  background: floralwhite;
}

.bi,
.bi-plus-circle {
  margin-bottom: 6px;
}

.delete-btn {
  border: none;
  background: floralwhite;
}

.date {
  text-align: right;
  font-size: 30px;
  width: 35px;
  height: 30px;
  border: none;
  background: floralwhite;
}
</style>