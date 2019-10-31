<template>
	<button :class="`${styling} ${size}`" @click.prevent="$emit('click')">
		<slot />
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
		color: red;
		font-size: $type-small;
		border-radius: 10px;
		transition: box-shadow 0.1s, background-color 0.2s;

		&:hover {
			-webkit-box-shadow: 1px 4px 4px -1px rgba(0,0,0,0.3);
			-moz-box-shadow: 1px 4px 4px -1px rgba(0,0,0,0.3);
			box-shadow: 1px 4px 4px -1px rgba(0,0,0,0.3);
		}

		&.primary {
			background-color: $color-primary;
			color: $color-white;
			&:hover {
				background-color: darken($color-primary, 5%);
			}
		}
		&.ghost {
			border: solid 2px $color-primary;
			background-color: darken($color-white, 2%);
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

		@media (prefers-color-scheme: dark) {
			&.primary {
				background-color: $color-primary-dark;
				color: $color-white;
				&:hover {
					background-color: darken($color-primary-dark, 10%);
				}
			}
			&.ghost {
				border: solid 2px $color-primary-dark;
				background-color: $color-background-dark;
				color: $color-primary-dark;
				&:hover {
					background-color: lighten($color-background-dark, 10%);
				}
			}
			&.alert {
				background-color: $color-background-dark;
				color: $color-alert-dark;
				border: solid 2px $color-alert-dark;
				&:hover {
					color: $color-white;
					background-color: $color-alert-dark;
				}
			}

			&:hover {
				-webkit-box-shadow: 1px 4px 4px -1px rgba($color-primary-dark ,0.3);
				-moz-box-shadow: 1px 4px 4px -1px rgba($color-primary-dark ,0.3);
				box-shadow: 1px 4px 4px -1px rgba($color-primary-dark,0.3);
				&.alert {
					&:hover {
						-webkit-box-shadow: 1px 4px 4px -1px rgba($color-alert-dark ,0.3);
						-moz-box-shadow: 1px 4px 4px -1px rgba($color-alert-dark ,0.3);
						box-shadow: 1px 4px 4px -1px rgba($color-alert-dark,0.3);
					}
				}
			}
		}

		&.small {
			padding: $size-xsmall;
		}
		&.medium {
			padding: $size-small;
		}
		&.large {
			padding: $size-medium;
		}
	}
</style>
