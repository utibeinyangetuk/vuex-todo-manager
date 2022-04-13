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
			// Takes the state.todos and set it to the todos that are passed in
			state.todos = todos;
		},
	},
	actions: {
		// use axios to fetch mock data
		async fetchTodos({ commit }) {
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/todos"
			);
			// First param is the mutation and second is what you want to pass in
			commit("setTodos", response.data);
		},
	},
	modules: {},
});
