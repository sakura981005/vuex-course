import Vue from 'vue'
import Vuex from 'vuex'
import { toUnicode } from 'punycode';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, title: "item1", completed: false },
      { id: 2, title: "item2", completed: false },
      { id: 3, title: "item3", completed: false },
    ]
  },
  getters: {
    count: state => state.count,
    completedTodos: state => state.todos.filter(todo => todo.completed),
    completedTodosCount: (state, getter) => getters.completedTodos.length,
    getTodosById: state => id => state.todos.find(todo => todo.id == id)
  },
  mutations: {
    incrementCount: state => state.count++,
    decrementCount: (state, n) => state.count -= n,
  },
  actions: {

  }
})
