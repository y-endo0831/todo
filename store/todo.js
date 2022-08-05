export const state = () => ({
    todoList: [],
});

export const mutations = {
    // タスク追加
    addTask(state, newTask) {
        const uid = require("crypto").randomBytes(20).toString("base64").replace(/\W/g, '').substring(0, 20);
        state.todoList.push({
            id: uid,
            title: newTask,
            completion: false,
            checkFlg: false,
            date:'ー',
            time:'ー',
        });
    },
    // タスク フラグチェック処理
    taskCheckFlg(state, { task, flg }) {
        const index = state.todoList.findIndex(e => e.id === task.id)
        if (flg) {
            state.todoList[index].checkFlg = true;
        } else {
            state.todoList[index].checkFlg = false;
        }
    },
    // タスク削除
    deleteTask(state) {
        let i = 0;
        while(i < state.todoList.length) {
            if (state.todoList[i].checkFlg) {
                state.todoList.splice(i, 1);
            }else{
                i++;
            }
        }
    },
    // タスク完了
    compTask(state, todo) {
        const index = state.todoList.findIndex(e => e.id === todo.id);
        state.todoList[index].completion = true;
    },
    // 期限日追加
    addDateLimit(state, date){
        for(let i = 0;i < state.todoList.length;i++){
            if(state.todoList[i].checkFlg){
                state.todoList[i].date = date;
            }
        }
    },
    // 期限時間追加
    addTimeLimit(state, time){
        for(let i = 0;i < state.todoList.length;i++){
            if(state.todoList[i].checkFlg){
                state.todoList[i].time = time;
            }
        }
    }
}