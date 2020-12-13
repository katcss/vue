<template>
  <div :style='layout' class="katui_appbar">
      <div :class="[{'fixed z-50': fixed}, styles]" class="katui_appbar__main">
          <slot></slot>
      </div>
      <div v-if='fixed' class="katui_appbar__ghost"></div>
  </div>
</template>

<script>
export default {
    name: 'k-appbar',
    props: {
        fixed: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'frosty'
        }
    },
    data() {
        return {
            layout: {
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0
            }
        }
    },
    computed: {
        styles() {
            let background = `bg-${this.color}`
            let textColor = 'text-gray'
            return [background, textColor]
        }
    },
    mounted() {
        //This component wont update, cause it is not using computed styles.
        let parentStyle = window.getComputedStyle(this.$el.parentNode, null)
        this.layout = {
            marginLeft: '-' + parentStyle.paddingLeft,
            marginRight: '-' + parentStyle.paddingRight,
            marginTop: ''
        }
        if (this.$el.parentNode.firstChild == this.$el) console.log('is the first child')
        if(this.$el.parentNode.firstChild == this.$el) this.layout.marginTop = '-' + parentStyle.paddingTop

    }
}
</script>

<style>
.katui_appbar {
    @apply relative block
}
.katui_appbar__ghost, .katui_appbar__main {
    @apply h-14 w-full
}
.katui_appbar__main {
    @apply border-b border-gray-3 flex items-center px-5
}
.bg-frosty {
    background-color: rgba(255, 255, 255, 70%);
    backdrop-filter: blur(40px)
}
</style>