<template>
  <k-container class="min-h-screen">
        <k-appbar>
            <k-text title important>{{$route.meta.name}}</k-text>
        </k-appbar>
        <component :is="$route.meta.component"></component>
  </k-container>
</template>

<script>


export default {
    name: 'components',
    mounted () {
        console.log(this.$route.params.name)
    }
}
</script>

<style>
.token.tag, .token.attr-name, .token.namespace, .token.deleted{
    color: #fe6569
}
.attr-name {
    color: #FF9800 !important
}
.language-html {
    @apply rounded-md bg-gray-8
}
</style>