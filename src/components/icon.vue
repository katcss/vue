<template>
  <div class="katui_icon">
    <i :style='{fontSize: `${this.size}px`}' class='bx' :class='styles'><slot></slot></i>
  </div>
</template>

<script>
export default {
    name: 'kicon',
    props: {
        color: {
            type: String,
            default: 'gray'
        },
        size: {
            type: [String, Number],
            default: 16
        }
        
    },
    data() {
        return {
            icon: 'bx-file-blank'
        }
    },
    computed: {
        styles() {
            return [this.icon, `text-${this.color}`]
        }
    },
    mounted() {
        this.icon = this.$el.children[0].innerText
        this.$el.children[0].innerText = ''
    }
}
</script>

<style>
.katui_icon {
    @apply flex items-center
}
</style>