<template>
	<div>
		<h3>Todos</h3>
		<div class="todos">
			<div class="todo" v-for="todo in allTodos" :key="todo.id">
				{{ todo.title }}
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	export default {
		name: "Todos",
		methods: {
			...mapActions(["fetchTodos"]),
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
</style>
