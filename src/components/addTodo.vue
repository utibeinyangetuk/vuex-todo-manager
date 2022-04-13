<template>
	<div>
		<h3>Add Todo</h3>
		<div class="add">
			<form>
				<input type="text" placeholder="Add Todo..." v-model="title" />
				<button>submit</button>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "AddTodo",
		data() {
			return {
				title: "",
			};
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
		background: #41b88377;
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
	}
</style>
