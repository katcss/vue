<template>
  <div @mouseenter="hover = true" @mouseleave="hover = false" class="katui_button" :class="styles">
    <div @click="fireClickEvent('before')" :class="actionsStyles" class="katui_button__action">
          <slot name='before'></slot>
    </div>
    <div class="katui_button__main"><slot>Submit</slot></div>
    <div @click="fireClickEvent('after')" :class="actionsStyles" class="katui_button__action">
          <slot name='after'></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'kbutton',
    data(){
        return {
            hover: false
        }
    },
    props: {
        color: {
            type: String,
            default: 'primary'
        },
        outline: {
            type: Boolean,
            default: false
        },
        flat: {
            type: Boolean,
            default: false
        },
        pill: {
            type: Boolean,
            default: false
        },
        darkText: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        styles(){
            let background = `bg-${this.color}`
            let hover = `hover:border-${this.color}-accent`
            let border = `border-${this.color}`
            let text = ''
            let fontWeight = ''
            let borderRadius = ''

            if (this.flat){
                hover = `hover:bg-${this.color}-accent`
                border = 'border-transparent'
                fontWeight = 'font-medium'
                text = `text-${this.color}`
                background = 'bg-transparent'
            }else if(this.outline){
                hover = `hover:bg-${this.color} hover:text-white`
                text = `text-${this.color}`
                background = 'bg-transparent'
            }

            if (this.pill) borderRadius = 'rounded-xl'
            if (this.darkText) text = 'text-gray-8'

            let styles = [
                background,
                hover,
                border,
                text,
                fontWeight,
                borderRadius
            ]
            return styles
        },
        actionsStyles() {
            let borderRadius = 'rounded-md'
            let background = 'bg-relief'

            if (this.pill) borderRadius = 'rounded-xl'
            if (this.outline) background = `bg-${this.color}-accent`
            if (this.flat) background = `bg-transparent`
            if (this.hover){
                if (this.flat) background = `bg-${this.color} text-white`
                if (this.outline) background = `bg-relief`
            }
            let styles = [
                borderRadius,
                background
            ]
            return styles
        }
    },
    methods: {
        fireClickEvent(element) {
            this.$emit(`click${element}`)
        }
    }
}
//future update: on hover do not lighten, instead shadow
</script>

<style>
.katui_button{
    user-select: none;
    @apply rounded text-white m-1 px-2 py-1 inline-flex items-center justify-center
    text-center self-center border cursor-pointer box-border
}
.katui_button__main{
    @apply px-5 inline-block
}
.katui_button__action{
    @apply inline-flex w-7 h-7 items-center justify-center text-2xl
}
.katui_button__action:empty{
    display:none
}
[class^="katui_button__"]:active {
    transform: scale3d(.9, .9, .9);
}
.katui_button:active {
    filter: brightness(.9);
}
</style>