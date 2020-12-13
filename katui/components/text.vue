<template>
  <p class='katui_text' :class="styles"><slot></slot></p>
</template>

<script>
export default {
    name: 'k-text',
    props: {
        heading: {
            type: Boolean,
            default: false
        },
        subheading: {
            type: Boolean,
            default: false
        },
        title: {
            type: Boolean,
            default: false
        },
        important: {
            type: Boolean,
            default: false
        },
        second: {
            type: Boolean,
            default: false
        },
        last: {
            type: Boolean,
            default: false
        },
        bold: {
            type: Boolean,
            default: false
        },
        light: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        styles () {
            let textSize = 'base'
            let textColor = 'gray'
            let fontWeight = 'normal'


            if (this.heading) {
                textSize = '5xl'
            }
            if (this.subheading) {
                textSize = '4xl'
            }
            if (this.title) {
                textSize = '2xl'
            }
            if (this.important) {
                textColor = 'black'
            }
            if (this.second) {
                textColor = 'gray-6'
            }
            if (this.last) {
                textColor = 'gray-3'
            }
            if (this.bold) {
                fontWeight = 'bold'
            }
            if (this.light) {
                fontWeight = 'light'
            }
            return [`text-${textSize}`, `text-${textColor}`, `font-${fontWeight}`]
        }
    }
}
</script>

<style>
.katui_text {
    @apply flex
}
</style>