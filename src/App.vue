<template>
    <div id="app">
		<nav-panel :items="[{route: '/', name: 'Home'}, {route: '/about', name: 'About'}]" />
		<router-view class="margin--top-2xlarge"/>
    </div>
</template>

<script>
import NavPanel from './components/NavPanel.vue'

export default {
	name: 'app',
	components: {
		NavPanel
	}
}
</script>
