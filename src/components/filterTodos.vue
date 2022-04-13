<template>
	<div class="filter">
		Filter Todos:
		<!-- call the filterTodos action and then pass in the event -->
		<select @change="filterTodos($event)">
			<option value="100">100</option>
			<option value="70">70</option>
			<option value="50">50</option>
			<option value="20">20</option>
			<option value="10">10</option>
			<option value="5">5</option>
		</select>
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		name: "filterTodos",
		methods: mapActions(["filterTodos"]),
	};
</script>

<style scoped>
	select {
		margin-top: 20px;
		padding: 6px;
		border: 1px solid rgba(0, 0, 0, 0.234);
		border-radius: 5px;
		font-weight: bold;
	}

	.filter {
		font-weight: bold;
	}
</style>
