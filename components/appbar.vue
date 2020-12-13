<template>
  <div class="katui_appbar">
      <div class="katui_appbar__main fixed frosty">
          <slot></slot>
      </div>
      <div class="katui_appbar__ghost"></div>
  </div>
</template>

<script>
export default {
    name: 'kappbar',
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
.frosty {
    background-color: rgba(255, 255, 255, 70%);
    backdrop-filter: blur(40px)
}
</style>