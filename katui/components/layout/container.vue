<template>
  <div :class='styles' class="katui_container">
      <slot/>
  </div>
</template>

<script>
export default {
    name: 'k-container',
    props: {
        color: {
            type: String,
            default: 'white'
        },
        transparent: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {

        }
    },
    computed: {
        styles() {
            let background = this.color
            if (this.transparent) background = 'transparent'
            return [`bg-${background}`]
        }
    }
}
</script>

<style>
.katui_container {
    paddingLeft: 6px;
    @apply p-10
}
</style>