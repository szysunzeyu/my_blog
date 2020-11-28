 <template>
  <main>
    <div class="todo">
      <h1>欢迎使用Todo待办事项!</h1>
      <div class="input-add">
          <input v-model="newtodolist.todo" type="text" name="todo" placeholder="请输入待办项"/>
          <button><a class="plus" @click="add"></a></button>
      </div>
      <div class="filters">
          <span class="filter active">全部</span>
          <!-- <span class="filter">已完成</span>
          <span class="filter">未完成</span> -->
      </div>
      <div class="todo-list" :key="item.id" v-for="(item,id) of todolist">
          <table>
            <tr>
              <td> {{ item.todo }} </td>
              <el-button @click="done(id)">完成!</el-button>
            </tr>
          </table>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Todo',
  data () {
    return {
      newtodolist: {
        todo: ''
      },
      todolist: [
        { id: '1', todo: '抢火车票' },
        { id: '2', todo: '抢汽车票' }
      ]
    }
  },
  methods: {
    add () {
      var newobj = {
        todo: this.newtodolist.todo
      }
      this.todolist.push(newobj)
    },
    done (id) {
      this.todolist.splice(id, 1)
    }
  }
}
</script>

 <style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
main {
  width: 100vw;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
}
.todo {
  width: 60%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: #f4f4f4;
}
h1 {
  margin: 20px 0;
  font-size: 20px;
  color: #414873;
}
.input-add {
  position: relative;
  display: flex;
  align-items: center;
}
.input-add input {
  padding: 16px 52px 16px 18px;
  border-radius: 48px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
  width: 100%;
  font-size: 16px;
  color: #626262;
}
.input-add button {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(#c0a5f3, #7f95f7);
  border: none;
  color: white;
  position: absolute;
  right: 0px;
}
.input-add .plus {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;
}
.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;
}
.filters .filter {
  margin-right: 14px;
  transition: 0.8s;
}
.filters .filter.active {
  color: #6b729c;
  transform: scale(1.2);
}
</style>
