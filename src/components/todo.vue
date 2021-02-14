<template>
  <main class="container flex flex-col p-8">
    <TodoControl />
    <input
      v-model.trim="newTodo"
      type="text"
      class="p-6 h-8 text-base rounded border border-solid border-primary-lightgray text-primary-darkgray mb-5 focus:outline-none"
      placeholder="What is today's priority?"
      @keyup.enter="addTodo()"
      autofocus
    />
    <section class="flex flex-col md:flex-row lg:flex-row justify-between">
      <ul
        class="rounded border border-solid border-primary-lightgray text-primary-darkgray w-full p-2"
      >
        <h3 class="text-left text-bold">🎯 Today's Todo</h3>
        <li
          class="flex justify-between items-center cursor-pointer"
          style="padding: 12px 20px;"
          v-for="(todo, index) in pendingTodo"
          :key="index"
          @click="checkDone(todo)"
        >
          <ul
            class="w-full flex flex-row justify-between items-center list-none p-0 m-0"
          >
            <select
              name="test"
              id="test"
              @click.stop="$event.stopPropagation()"
              v-model="todo.cate"
              @change="handleOption(todo, $event)"
            >
              <option
                v-for="(item, index) in categories"
                :key="index"
                :value="item.title"
                >{{ item.title }}</option
              >
            </select>
            <li
              v-if="!todo.isEditable"
              class="h-auto box-border flex items-center text-left"
              :class="{ done: todo.isDone }"
            >
              {{ todo.title }}
            </li>
            <input
              class="outline-none border-b border-primary-lightgray w-3/5 pointer-events-auto"
              ref="title"
              v-else
              type="text"
              :value="todo.title"
              @input="handleChange(todo, $event)"
              @keyup.enter="modifyTodo(todo)"
              @click.stop="$event.stopPropagation()"
            />
            <li class="btns flex">
              <font-awesome-icon
                icon="edit"
                class="edit"
                @click.stop="handleEdit(todo)"
              />
            </li>
          </ul>
        </li>
        <li>
          <h2 class="p-8" v-if="pendingTodo.length < 1">
            There is no todos yet! 🎈
          </h2>
        </li>
      </ul>

      <!-- done todos -->
      <ul
        class="rounded border border-solid border-primary-lightgray text-primary-darkgray w-full p-2 mt-8 sm:ml-0 md:ml-8 md:mt-0 lg:ml-8 lg:mt-0"
      >
        <h3 class="text-left text-bold ">✨ Completed!</h3>
        <li
          class="flex justify-between items-center cursor-pointer"
          style="padding: 12px 20px;"
          v-for="(todo, index) in doneTodo"
          :key="index"
          @click="checkDone(todo)"
        >
          <ul
            class="w-full flex flex-row justify-between items-center list-none p-0 m-0"
          >
            <li
              v-if="!todo.isEditable"
              class="h-auto box-border flex items-center text-left"
              :class="{ done: todo.isDone }"
            >
              {{ todo.title }}
            </li>
            <input
              class="outline-none border-b border-primary-lightgray w-3/5"
              ref="title"
              v-else
              type="text"
              :value="todo.title"
              @input="handleChange(todo, $event)"
              @keyup.enter="modifyTodo(todo)"
            />
            <li class="btns flex">
              <font-awesome-icon
                icon="trash"
                class="delete"
                @click.stop="handleDelete(index)"
              />
            </li>
          </ul>
        </li>
        <li>
          <h2 class="p-8" v-if="doneTodo.length < 1">
            There is no done todos yet! Keep working hard 👍
          </h2>
        </li>
      </ul>
    </section>
  </main>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import TodoControl from "./TodoControl.vue";

interface AppState {
  newTodo: string;
  todos: Todo[];
  newCat: string;
  isClicked: boolean;
  categories: Category[];
}

interface Todo {
  title: string;
  isDone: boolean;
  isEditable: boolean;
  cate: string;
  createdAt: Date;
  completedAt?: Date;
}

interface Category {
  title: string;
  value: number;
  backgroundColor: string;
}

export default Vue.extend({
  components: {
    TodoControl
  },
  data() {
    const initialState: AppState = {
      newTodo: "",
      todos: [],
      newCat: "기타 ✔",
      isClicked: false,
      categories: this.$store.state.categories
    };
    return initialState;
  },
  created() {
    this.init();
  },
  computed: {
    todoLength(): number {
      return this.todos.length;
    },
    pendingTodo(): Todo[] {
      return this.$store.getters.pendingTodo;
    },
    doneTodo(): Todo[] {
      return this.$store.getters.doneTodo;
    }
  },
  methods: {
    init() {
      this.todos = this.$store.state.todos || [];
    },
    setTodos() {
      localStorage.setItem("userTodos", JSON.stringify(this.todos));
    },
    addTodo() {
      const todoItem = this.newTodo;
      if (!todoItem) return;

      const newTodoItem = {
        title: todoItem,
        isDone: false,
        isEditable: false,
        cate: this.newCat,
        createdAt: new Date()
      };
      this.$store.commit("addNewTodo", newTodoItem);
      this.newTodo = "";
    },
    checkDone(todo: Todo) {
      todo.isDone = !todo.isDone;
      if (todo.isDone === true) {
        todo.completedAt = new Date();
      }
      if (todo.isDone === false && todo.completedAt) {
        delete todo.completedAt;
      }

      this.setTodos();
    },
    handleEdit(todo: Todo) {
      todo.isEditable = !todo.isEditable;
    },
    handleChange(todo: Todo, event: any) {
      todo.title = event.target.value;
    },
    handleOption(todo: Todo, event: any) {
      todo.cate = event.target.value;
      this.setTodos();
    },
    modifyTodo(todo: Todo) {
      todo.isEditable = false;
      todo.isDone = false;
      this.setTodos();
    },
    handleDelete(index: number) {
      if (index >= this.todoLength) {
        throw new Error(
          `Index deletion at ${index} greater then ${this.todoLength}`
        );
      }
      const deleteItem = this.$store.getters.doneTodo[index];
      const realIndex = this.todos.indexOf(deleteItem);
      if (realIndex > -1) {
        this.$store.commit("removeOneItem", realIndex);
      }
    }
  }
});
</script>
