<template>
	<div class="nav-panel row end-xs padding--right-medium">
		<router-link
			v-for="item in items"
			:key="item.name"
			:to="item.route"
			class="padding--small">
			{{ item.name }}
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'NavPanel',
	props: {
		items: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style scoped>
	.nav-panel {
		position: sticky;
		top: 0;
	}
</style>
