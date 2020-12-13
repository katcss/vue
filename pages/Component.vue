<template>
  <k-container class="h-screen">
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

</style>