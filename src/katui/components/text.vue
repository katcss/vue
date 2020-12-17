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
        },
        dark: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        styles () {
            let textSize = 'base'
            let textColor = this.dark? 'white' : 'gray'
            let fontWeight = 'normal'
            let lineHeight = ''

            if (this.heading) {
                textSize = '5xl'
                lineHeight = 'loose'
            }
            if (this.subheading) {
                textSize = '4xl'
                lineHeight = 'loose'
            }
            if (this.title) {
                textSize = '2xl'
                lineHeight = 'relaxed'
            }
            if (this.important) {
                textColor = this.dark? 'white' : 'black'
            }
            if (this.second) {
                textColor = this.dark? 'gray-4' : 'gray-6'
            }
            if (this.last) {
                textColor = this.dark? 'gray-5' : 'gray-3'
            }
            if (this.bold) {
                fontWeight = 'bold'
            }
            if (this.light) {
                fontWeight = 'light'
            }
            return [`text-${textSize}`, `text-${textColor}`, `font-${fontWeight}`, `leading-${lineHeight}`]
        }
    }
}
</script>

<style>
.katui_text {
    @apply inline
}
</style>