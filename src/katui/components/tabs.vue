<template>
    <div class='katui_tabs'>
        <div class="katui_tabs__options">
            <div ref="katui_tabs__options" class="z-50">
                <k-button :color="currentTab == key ? 'white' : 'gray'"
                    v-on:click.native='setCurrentTab($event, key)' pill flat
                    v-for="(tab, key) in items" :key='key'>
                        {{tab.name}}
                </k-button>
            </div>
            <k-text v-if='!items'>There are no tabs</k-text>
            <div class='katui_tabs__slider shadow-primary'
                :style='sliderStyles'>
            </div>
        </div>
        <div ref='katui_tabs__content' class='katui_tabs__content'>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'k-tabs',
    props: {
        items: {
            type: [Array, Object],
            default: () => new Object(),
        },
        currentTabMODEL: {
            type: Number,
            default: 0
        }
    },
    computed: {
        sliderStyles() {
            return {
                zIndex: 1,
                left: this.currentTabPosition.left,
                width: this.currentTabPosition.width,
                height: this.currentTabPosition.height
            }
        }
    },
    data() {
        return {
            mounted: false,
            currentTabPosition: {},
            currentTab: 1
        }
    },
    created() {
      //We need to check whenever the window resizes, so our ghost background matches the current
      window.addEventListener("resize", this.setCurrentTab);
    },
    mounted() {
        this.mounted = true
        this.setCurrentTab()
    },
    methods: {
      setCurrentTab(event, key = 0/*prop DEFAULT GOES HERE*/) {
        if (!this.mounted) return false
        let oldTab = this.currentTab
        this.currentTab = key


        this.currentTabPosition = this.mounted? this.offset(this.$refs.katui_tabs__options.children[key]) : {}
        for (let i in this.$refs.katui_tabs__content.children) {
            if (i == 'length') return false
            let tab = this.$refs.katui_tabs__content.children[i] || this.$refs.katui_tabs__content.children[0]
            if (key == i) {
                if (oldTab < this.currentTab) {
                    tab.classList.add('katui_animation__slide-right')
                }else {
                    tab.classList.add('katui_animation__slide-left')
                }
                tab.classList.add('shown')
            } else {
                tab.classList.remove('shown')
            }
        }


        if (event) {
            console.log('fired from click')
            this.currentTabPosition = this.offset(event.currentTarget)
          return false
        }
        //instead of reference, check for the FIRST child or the DEFAULT element KEY
      },
      offset(el) {
        var rect = el.getBoundingClientRect()

        //scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        //scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
          //top: `${rect.top - el.style.marginTop}px`, REUSE THESE STYLES FOR DROPDOWN AND MENUS
          left: `${rect.left - el.style.marginLeft}px`,
          //,
          //scrollLeft,
          //margin: el.style.padding,
          width: `${rect.width}px`,
          height: `${rect.height}px`
        }
      }
    }
}
</script>

<style>
.katui_tabs__options {
    @apply inline-flex bg-accent rounded-xl items-center justify-center px-2 py-1 my-1
}
.katui_tabs__slider {
    z-index: -1;
    @apply absolute bg-primary transition-all block rounded-xl
}
.katui_tabs__content {
    @apply overflow-x-hidden
}
.katui_tabs__content > *{
    @apply hidden transition-all delay-300;
    opacity: 0
    /*add animation so it doesnt hide instantly */
}
.katui_tabs__content > .shown{
    @apply block;
    opacity: 1
    /*add animation so it doesnt hide instantly */
}
.katui_animation__slide-right{
    animation: tabs__animation_slide-right .5s ease-in-out !important
}
.katui_animation__slide-left{
    animation: tabs__animation_slide-left .5s ease-in-out !important
}

@keyframes tabs__animation_slide-right
{
    0% {
        transform: translateX(100%)
    }
}
@keyframes tabs__animation_slide-left
{
    0% {
        transform: translateX(-100%)
    }
}
</style>