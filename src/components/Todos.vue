<template>
	<div>
		<h3>Todos</h3>
		<div class="legend">
			<span>Double click to mark as complete</span>

			<span> <span class="incomplete-box" /> incomplete </span>
			<span> <span class="complete-box" /> complete </span>
		</div>
		<div class="todos">
			<div
				v-bind:class="{ 'is-complete': todo.completed }"
				class="todo"
				v-for="todo in allTodos"
				:key="todo.id"
				@dblclick="ondblclick(todo)"
			>
				{{ todo.title }}
				<i class="fas fa-trash-alt" @click="deleteTodo(todo.id)" />
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	export default {
		name: "Todos",
		methods: {
			...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
			ondblclick(todo) {
				const updatetodo = {
					id: todo.id,
					title: todo.title,
					completed: !todo.completed,
				};
				this.updateTodo(updatetodo);
			},
		},
		computed: {
			...mapGetters(["allTodos"]),
		},
		// As soon as the component is created it calls the fetchTodos action
		created() {
			this.fetchTodos();
		},
	};
</script>

<style scoped>
	.todos {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5px;
	}
	.todo {
		border: 1px solid rgba(0, 0, 0, 0.187);
		background: #41b883;
		padding: 1rem;
		border-radius: 5px;
		text-align: center;
		position: relative;
		cursor: pointer;
		letter-spacing: 1px;
		text-transform: capitalize;
	}
	i {
		position: absolute;
		bottom: 10px;
		right: 5px;
		cursor: pointer;
	}
	i:hover {
		color: rgb(143, 5, 5);
	}
	.legend {
		display: flex;
		justify-content: space-around;
		margin-bottom: 1rem;
	}

	.complete-box {
		display: inline-block;
		width: 13px;
		height: 13px;
		background: gray;
	}
	.incomplete-box {
		display: inline-block;
		width: 13px;
		height: 13px;
		background: #41b883;
	}
	span {
		display: flex;
		align-items: center;
		font-weight: bold;
		letter-spacing: 1px;
		gap: 2px;
		border-radius: 3px;
	}

	@media (max-width: 760px) {
		.todos {
			grid-template-columns: 1fr;
		}
	}

	.is-complete {
		background: #35495e;
		color: #fff;
	}
</style>
