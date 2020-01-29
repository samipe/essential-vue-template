<template>
	<div class="container">
		<div class="row padding-bottom-small margin-bottom-large">
			<div class="col-xs-12 col-md-4 margin-bottom-small text-align-right">
				<h1>Style Guide</h1>
			</div>
			<div class="col-xs-12 col-md-8 border-bottom-dark padding-bottom-small">
				This pages showcase most of the default components and styles.
				Be sure to tune your colors, spacings, sizes etc. in the index.scss-file!
			</div>
		</div>
		<div class="row padding-bottom-large margin-bottom-large">
			<div class="col-md-4 margin-bottom-small text-align-right">
				<h2>Text</h2>
			</div>
			<div class="col-xs-12 col-md-7">
				<h3>Type scales</h3>
				<div class="col-xs-6">
				</div>
				<div class="col-xs-6">
				</div>
				<h1>Header 1</h1>
				<h2>Header 2</h2>
				<h3>Header 3</h3>
			</div>
		</div>
		<div class="row padding-bottom-large margin-bottom-large">
			<div class="col-md-4 margin-bottom-small text-align-right">
				<h2>Headers</h2>
			</div>
			<div class="col-xs-12 col-md-7">
				<h1>Header 1</h1>
				<h2>Header 2</h2>
				<h3>Header 3</h3>
			</div>
		</div>
		<div class="row padding-bottom-2xlarge">
			<div class="col-xs-12 border-bottom">
				<h1>Header 1</h1>
				<h2>Header 2</h2>
				<h3>Header 3</h3>
			</div>
			<div class="col-xs-2 type-smallest">
				text smallest
			</div>
			<div class="col-xs-2">
				text regular
			</div>
			<div class="col-xs-2 type-bold">
				text bold
			</div>
			<div class="col-xs-2 type-large">
				text large
			</div>
			<div class="col-xs-2 type-large">
				<a href="/">link text</a>
			</div>
			<div class="col-xs-12 margin-top-large">
				<div class="row">
					<div class="col-xs-2">
						<base-button
							:styling="'primary'"
							:size="'small'"
							:label="'primary S'"
							@click="exampleMethod()">
							primary S
						</base-button>
					</div>
					<div class="col-xs-2">
						<base-button
							:styling="'ghost'"
							:size="'medium'"
							:label="'ghost M'">
							ghost M
						</base-button>
					</div>
					<div class="col-xs-3">
						<base-button
							:styling="'alert'"
							:size="'large'"
							:label="'alert L'">
							alert L
						</base-button>
					</div>
				</div>
			</div>
			<div class="col-xs-12 margin-top-large">
				<div class="row">
					<div class="col-xs-3 col-xs-offset-2 elevation-25 padding-small">
						col-xs-3 col-xs-offset-2 elevation-25 padding-small
					</div>
				</div>
				<div class="row end-xs">
					<div class="col-xs-3 elevation-50 padding-large">
						col-xs-3 elevation-50 padding-large
					</div>
				</div>
				<div class="row margin-top-medium">
					<div
						class="col-xs-12 elevation-25 text-align-center padding-large margin-bottom-large">
						col-xs-12 elevation-25 text-align-center padding-large
					</div>
					<div class="col-xs-12 col-md-6 col-lg-3 elevation-25 padding-small">
						col-xs-12 elevation-25 text-align-center padding-large
					</div>
					<div class="col-xs-12 col-md-6 col-lg-3 elevation-25 padding-small">
						col-xs-12 elevation-25 text-align-center padding-large
					</div>
					<div class="col-xs-12 col-md-6 col-lg-3 elevation-25 padding-small">
						col-xs-12 elevation-25 text-align-center padding-large
					</div>
					<div class="col-xs-12 col-md-6 col-lg-3 elevation-25 padding-small">
						col-xs-12 elevation-25 text-align-center padding-large
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
