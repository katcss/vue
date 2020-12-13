<template>
    <div class="katui_list__item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'k-list-item'
}
</script>

<style>
.katui_list__item {
    @apply flex items-center cursor-pointer overflow-hidden rounded;
    user-select: none
}
.katui_list__item:hover {
    @apply bg-accent text-primary
}
.katui_list__item:active {
    transform: scale3d(1, .9, .3);
}
</style>