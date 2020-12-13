<template>
    <div class="katui_list__slot">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'k-list-item-slot'
}
</script>

<style>
.katui_list__slot {
    @apply p-2
}
</style>