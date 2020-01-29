<template>
	<button
		type="button"
		class="hover-elevation-25"
		:class="[
			styling,
			size
		]"
		@click.prevent="$emit('click')">
		{{ label }}
	</button>
</template>

<script>
export default {
	name: 'BaseButton',
	props: {
		styling: {
			type: String,
			default: 'primary'
		},
		size: {
			type: String,
			default: 'small'
		},
		label: {
			type: String,
			default: ''
		}
	}
}
</script>

<style scoped lang="scss">
@import '../../assets/css/variables.scss';
	button {
		width: 100%;
		text-align: center;
		display: block;
		font-size: $type-small;
		text-transform: uppercase;
		font-weight: $weight-semi-bold;
		border-radius: $border-radius-rounded;
		transition: box-shadow 0.1s, background-color 0.2s;

		&:hover {
			font-weight: $weight-bold;
		}

		&.primary {
			background-color: $color-primary;
			color: $color-white;
			&:hover {
				background-color: $color-primary-dark;
			}
			&:focus {
				background-color: $color-primary;
			}
		}
		&.ghost {
			border: solid 2px $color-primary;
			background-color: $color-white-opacity;
			color: $color-primary;
			&:hover {
				background-color: $color-white;
			}
		}
		&.alert {
			background-color: $color-white;
			color: $color-alert;
			border: solid 2px $color-alert;
			&:hover {
				color: $color-white;
				background-color: $color-alert;
			}
		}

		&.small {
			padding: $size-2xsmall;
		}
		&.medium {
			padding: $size-xsmall;
		}
		&.large {
			padding: $size-small;
		}
	}
</style>
