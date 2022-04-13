import { createStore } from "vuex";
import axios from "axios";

export default createStore({
	state: {
		todos: [
			{
				id: 1,
				title: "Todo one",
			},
			{
				id: 2,
				title: "Todo two",
			},
			{
				id: 3,
				title: "Todo three",
			},
		],
	},
	getters: {
		allTodos: (state) => {
			return state.todos;
		},
	},
	mutations: {},
	actions: {},
	modules: {},
});
