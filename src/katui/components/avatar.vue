<template>
  <div :class='styles' class="katui_avatar">
      <slot></slot> {{text}}
  </div>
</template>

<script>
export default {
    name: 'k-avatar',
    props: {
        color: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            text: ''
        }
    },
    computed: {
        //use the latest version of boxicons, use the last version of tailwindcss
        //add text modifier
        styles() {
            let text = 'gray-8'
            let background = 'accent'
            if (this.color) text = 'white'
            if (this.color) background = this.color
            return [`text-${text}`, `bg-${background}`]
        }
    },
    mounted () {
        if (this.$el.innerText) {
            if (this.$el.innerText.length > 4) this.$el.innerText = this.$el.innerText.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'').substring(0,3)
        }
    }
}
</script>

<style>
.katui_avatar {
    @apply h-12 w-12 rounded-full flex items-center justify-center border-2 border-transparent overflow-hidden
}
.katui_avatar img{
    @apply w-full h-full object-cover
}
</style>