<template>
    <div :class='{"singleline" : singleLine}' class="katui_list__item_content">
        <slot>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'k-list-item-content',
    props: {
        singleLine: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>
.katui_list__item_content {
    @apply flex-grow border-b p-2
}
.katui_list__item_content.singleline {
    @apply flex
}
.katui_list__item_content > * {
    @apply block
}
.katui_list__item_content.singleline .katui_text:nth-child(2n)::before {
    content: '—';
    @apply inline-block mx-2
}
.katui_list__item:last-child .katui_list__item_content {
    @apply border-none
}
</style>