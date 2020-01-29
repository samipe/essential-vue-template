<template>
	<div class="container">
		<div class="row padding-bottom-small margin-bottom-xlarge">
			<div class="col-lg-3 text-align-right border-right-dark">
				<h1>Style Guide</h1>
			</div>
			<div class="col-md-9 padding-left-xsmall">
				<div class="card">
					This pages showcase most of the default components and styles.
					Be sure to tune your colors, spacings, sizes etc. in the index.scss-file!
				</div>
			</div>
		</div>
		<div class="row margin-bottom-large">
			<div class="col-lg-3 col-md-12 text-align-right border-right-dark">
				<h2>Typography</h2>
			</div>
			<div class="col-lg-3 padding-left-xsmall">
				<div class="card">
					<div class="margin-bottom-xsmall type-smallest" style="border: 1px solid #aaa;">
						type-smallest
					</div>
					<div class="margin-bottom-xsmall type-small" style="border: 1px solid #aaa;">
						type-small
					</div>
					<div class="margin-bottom-xsmall type-body" style="border: 1px solid #aaa;">
						type-body
					</div>
					<div class="margin-bottom-xsmall type-large" style="border: 1px solid #aaa;">
						type-large
					</div>
					<div class="margin-bottom-xsmall type-largest" style="border: 1px solid #aaa;">
						type-largest
					</div>
				</div>
			</div>
			<div class="col-lg-3 padding-left-xsmal">
				<div class="card">
					<div class="margin-bottom-xsmall type-light" style="border: 1px solid #aaa;">
						type-light
					</div>
					<div class="margin-bottom-xsmall type-normal" style="border: 1px solid #aaa;">
						type-normal
					</div>
					<div class="margin-bottom-xsmall type-semi-bold" style="border: 1px solid #aaa;">
						type-semi-bold
					</div>
					<div class="margin-bottom-xsmall type-bold" style="border: 1px solid #aaa;">
						type-bold
					</div>
					<div class="margin-bottom-xsmall type-black" style="border: 1px solid #aaa;">
						type-black
					</div>
				</div>
			</div>
			<div class="col-lg-3 padding-left-xsmal">
				<div class="card">
					<div class="margin-bottom-xsmall text-align-left" style="border: 1px solid #aaa;">
						text-align-left
					</div>
					<div class="margin-bottom-xsmall text-align-center" style="border: 1px solid #aaa;">
						text-align-center
					</div>
					<div class="margin-bottom-xsmall text-align-right" style="border: 1px solid #aaa;">
						text-align-right
					</div>
					<div class="margin-bottom-xsmall type-uppercase" style="border: 1px solid #aaa;">
						type-uppercase
					</div>
				</div>
			</div>
		</div>
		<div class="row margin-bottom-large">
			<div class="col-lg-3 text-align-right border-right-dark">
				<h2>Headers</h2>
			</div>
			<div class="col-lg-3 padding-left-xsmall">
				<div class="card">
					<h1 class="margin-bottom-xsmall" style="border: 1px solid #aaa;">Header 1</h1>
					<h2 class="margin-bottom-xsmall" style="border: 1px solid #aaa;">Header 2</h2>
					<h3 style="border: 1px solid #aaa;">Header 3</h3>
				</div>
			</div>
		</div>
		<div class="row margin-bottom-large">
			<div class="col-lg-3 text-align-right border-right-dark">
				<h2>Buttons</h2>
			</div>
			<div class="col-lg-3 padding-left-xsmall">
				<base-button
					:styling="'primary'"
					:size="'large'"
					:label="'primary L'"
					@click="exampleMethod()">
					primary large
				</base-button>
			</div>
			<div class="col-lg-3 padding-left-xsmall">
				<base-button
					:styling="'ghost'"
					:size="'medium'"
					:label="'ghost M'">
					ghost medium
				</base-button>
			</div>
			<div class="col-lg-3 padding-left-xsmall">
				<base-button
					:styling="'alert'"
					:size="'small'"
					:label="'alert S'">
					alert small
				</base-button>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-3 text-align-right border-right-dark" style="border: 1px solid #aaa;">
				<h2>Grid</h2>
				<h3>col-lg-3</h3>
			</div>
			<div class="col-lg-9 padding-small" style="border: 1px solid #aaa;">
				<h3>col-lg-9</h3>
			</div>
		</div>
		<div class="row type-small text-align-center">
			<div
				class="col-lg-2 col-md-2 col-sm-2 col-xs-12 padding-xsmall"
				style="border: 1px solid #aaa;">
				<div>col-lg-2</div>
				<div>col-md-2</div>
				<div>col-sm-2</div>
				<div>col-xs-12</div>
			</div>
			<div
				class="col-lg-2 col-md-4 col-sm-10 col-xs-12 padding-xsmall"
				style="border: 1px solid #aaa;">
				<div>col-lg-2</div>
				<div>col-md-4</div>
				<div>col-sm-10</div>
				<div>col-xs-12</div>
			</div>
			<div
				class="col-lg-2 col-md-6 col-sm-12 col-xs-12 padding-xsmall"
				style="border: 1px solid #aaa;">
				<div>col-lg-2</div>
				<div>col-md-6</div>
				<div>col-sm-12</div>
				<div>col-xs-12</div>
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
