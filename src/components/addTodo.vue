<template>
	<div>
		<h3>Add Todo</h3>
		<div class="add">
			<form>
				<input type="text" placeholder="Add Todo..." v-model="title" />
				<button @click="createtodo">submit</button>
			</form>
		</div>
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		name: "AddTodo",
		data() {
			return {
				title: "",
			};
		},
		methods: {
			...mapActions(["addTodo"]),
			//  method to add the todo to the array
			createtodo(e) {
				e.preventDefault();
				this.addTodo(this.title);
			},
		},
	};
</script>

<style scoped>
	form {
		display: flex;
		gap: 5px;
	}

	input[type="text"] {
		flex: 10;
		background: #fff;
		padding: 10px;
		border: 1px solid rgba(0, 0, 0, 0.377);
		letter-spacing: 2px;
		border-radius: 5px;
	}
	button {
		flex: 2;
		letter-spacing: 2px;
		font-weight: bold;
		text-transform: uppercase;
		border: 1px solid rgba(0, 0, 0, 0.282);
		background: #41b88377;
		border-radius: 5px;
		cursor: pointer;
	}
	button:hover {
		background: rgba(0, 128, 128, 0.457);
	}
</style>
