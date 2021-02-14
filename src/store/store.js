import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetchUserTodo() {
    const userTodo = localStorage.getItem("userTodos");
    return userTodo != null ? JSON.parse(userTodo) : [];
  },
  fetchUserCate() {
    const categories = localStorage.getItem("categories");
    return categories != null
      ? JSON.parse(categories)
      : [{ title: "기타 ✔", value: 0, backgroundColor: "#ff9f43" }];
  }
};

export const store = new Vuex.Store({
  state: {
    todos: storage.fetchUserTodo(),
    categories: storage.fetchUserCate()
  },
  getters: {
    pendingTodo: state => {
      return state.todos.filter(todo => todo.isDone == false);
    },
    doneTodo: state => {
      return state.todos.filter(todo => todo.isDone == true);
    },
    chartValues: state => {
      let arr = state.categories;

      arr.forEach(el => {
        let cnt = 0;
        for (let i = 0; i < state.todos.length; i++) {
          cnt += el.title == state.todos[i].cate ? 1 : 0;
          el.value = cnt;
        }
      });

      return arr;
    },
    getRatio: state => {
      const arr = state.categories;
      const active_cate_len = arr.filter(el => el.value > 0).length; // 등록된 cate 중 활성화된 영역의 갯수

      let new_arr = [];
      arr.forEach(el => {
        let percentage =
          el.value > 0 ? Math.floor((el.value / active_cate_len) * 100) : 0;
        new_arr.push({ t: el.title, p: percentage });
      });
      return new_arr;
    }
  },
  mutations: {
    addNewCate(state, newCateItem) {
      state.categories.push({
        title: newCateItem.title,
        value: 0,
        backgroundColor: newCateItem.color
      });
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },
    modifyCate(state, payload) {
      const categories = state.categories;
      const index = payload.index;
      const bgColor = payload.backgroundColor;
      const title = payload.title;

      if (bgColor && index) {
        categories[index].backgroundColor = bgColor;
      }
      if (title && index) {
        categories[index].title = title;
      }
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },
    deleteCate(state, index) {
      const categories = state.categories;
      if (index) {
        categories.splice(index, 1);
      }
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },
    addNewTodo(state, todoItem) {
      state.todos.push(todoItem);
      localStorage.setItem("userTodos", JSON.stringify(state.todos));
    },
    removeOneItem(state, index) {
      let userTodos = JSON.parse(localStorage.getItem("userTodos"));
      userTodos.splice(index, 1);
      localStorage.setItem("userTodos", JSON.stringify(userTodos));

      state.todos.splice(index, 1);
    }
  }
});
