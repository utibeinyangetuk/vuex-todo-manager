<template>
	<div id="app">
		<div class="container">
			<AddTodo />
			<filterTodos />
			<Todos />
		</div>
	</div>
</template>

<script>
	import Todos from "@/components/Todos";
	import AddTodo from "@/components/addTodo";
	import filterTodos from "@/components/filterTodos";
	export default {
		name: "App",
		components: {
			Todos,
			AddTodo,
			filterTodos,
		},
	};
</script>

<style>
	.container {
		max-width: 1100px;
		margin: auto;
		overflow: hidden;
		padding: 0 2rem;
	}
</style>
