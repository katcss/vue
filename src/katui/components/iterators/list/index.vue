<template>
  <div class="katui_list">
      <slot></slot>
  </div>
</template>

<script>
//STRIPED LISTS
//SIMPLE LISTS



//you can globally configure components and component messages, also you can override global
//configurations passing the CONFIG prop
// NEBULA THEME, BASED ON CYBERPUNK AND KAWAII VSCODE THEME COLOR SCHEME, FUTURISTIC ANIMATIONS
// Animation for data that is currently fetching
// By default this element can iterate, but users can chose to change the default display
// click:item event
//NEBULA THEME IS FREE, IT HAS GLOWING

//2nd version of katui has colored-shadow
export default {
    name: 'k-list',
    data() {
        return {

        }
    }
}
// we need accordion component
</script>

<style>
/** 
}**/
.katui_list {
    @apply px-3
}
.katui_list__title {
    @apply text-gray
}
.katui_list__text {
    @apply text-gray
}
</style>