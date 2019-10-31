<template>
	<div class="container">
		<div class="row padding--bottom-2xlarge">
			<div class="col-xs-12">
				<h1>Header 1</h1>
				<h2>Header 2</h2>
				<h3>Header 3</h3>
			</div>
			<div class="col-xs-2 type--small">
				text small
			</div>
			<div class="col-xs-2">
				text regular
			</div>
			<div class="col-xs-2 type--bold">
				text bold
			</div>
			<div class="col-xs-2 type--large">
				text large
			</div>
			<div class="col-xs-2 type--large">
				<a href="/">link text</a>
			</div>
			<div class="col-xs-12 margin--top-large">
				<div class="row">
					<div class="col-xs-2">
						<base-button
							:styling="'primary'"
							:size="'small'"
							@click="exampleMethod()">
							primary S
						</base-button>
					</div>
					<div class="col-xs-2">
						<base-button
							:styling="'ghost'"
							:size="'medium'">
							ghost M
						</base-button>
					</div>
					<div class="col-xs-3">
						<base-button
							:styling="'alert'"
							:size="'large'">
							alert L
						</base-button>
					</div>
				</div>
			</div>
			<div class="col-xs-12 margin--top-large">
				<div class="row">
					<div class="col-xs-3 col-xs-offset-2 elevation--25 padding--small">
						col-xs-3 col-xs-offset-2 elevation--25 padding--small
					</div>
				</div>
				<div class="row end-xs">
					<div class="col-xs-3 elevation--50 padding--large">
						col-xs-3 elevation--50 padding--large
					</div>
				</div>
				<div class="row margin--top-medium">
					<div
						class="col-xs-12 elevation--25 text--align-center padding--large margin--bottom-large">
						col-xs-12 elevation--25 text--align-center padding--large
					</div>
					<div class="col-xs-12 col-md-6 col-lg-3 elevation--25 padding--small">
						col-xs-12 elevation--25 text--align-center padding--large
					</div>
					<div class="col-xs-12 col-md-6 col-lg-3 elevation--25 padding--small">
						col-xs-12 elevation--25 text--align-center padding--large
					</div>
					<div class="col-xs-12 col-md-6 col-lg-3 elevation--25 padding--small">
						col-xs-12 elevation--25 text--align-center padding--large
					</div>
					<div class="col-xs-12 col-md-6 col-lg-3 elevation--25 padding--small">
						col-xs-12 elevation--25 text--align-center padding--large
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import BaseButton from '../components/commons/BaseButton.vue'

export default {
	name: 'About',
	components: {
		BaseButton
	},
	methods: {
		exampleMethod() {
			alert('example function @click of button')
		}
	}
}
</script>
