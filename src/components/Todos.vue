<template>
	<div>
		<h3>Todos</h3>
		<div class="todos">
			<div class="todo" v-for="todo in allTodos" :key="todo.id">
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
			...mapActions(["fetchTodos", "deleteTodo"]),
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
</style>
