import { createStore } from "vuex";
import axios from "axios";

export default createStore({
	state: {
		todos: [],
	},
	getters: {
		allTodos: (state) => {
			return state.todos;
		},
	},
	mutations: {
		setTodos: (state, todos) => {
			// Takes  state.todos and set it to the todos that are passed in
			state.todos = todos;
		},
		newTodo: (state, todo) => {
			// add the new todo to the start of the todos array
			state.todos.unshift(todo);
		},
		deleteTodo: (state, id) => {
			state.todos = state.todos.filter((todo) => todo.id != id);
		},
	},
	actions: {
		// use axios to make a get request
		async fetchTodos({ commit }) {
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/todos"
			);

			// call a commit or mutation
			// First param is the mutation and second is what you want to pass in
			commit("setTodos", response.data);
		},
		// use axios to make a post request
		async addTodo({ commit }, title) {
			const response = await axios.post(
				"https://jsonplaceholder.typicode.com/todos",
				{ title, completed: false }
			);
			commit("newTodo", response.data);
		},
		// delete request
		// At the end of the link, add the id parameter
		async deleteTodo({ commit }, id) {
			await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
			commit("deleteTodo", id);
		},
	},
	modules: {},
});
