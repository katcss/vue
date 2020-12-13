<template>
  <div>
    <k-button outline>Outline</k-button>
    <k-button flat>Flat</k-button>
    <k-button pill color='indigo'>Pill</k-button>
    <k-button>Default</k-button>
    <p class="text-xl">Button Actions</p>
    <k-button outline>
      <k-icon slot='before'>bx-chevron-left</k-icon>
      Outline
      <k-icon slot='after'>bx-chevron-right</k-icon>
    </k-button>
    <k-button flat>
      <k-icon slot='before'>bx-chevron-left</k-icon>
      Flat
      <k-icon slot='after'>bx-chevron-right</k-icon>
    </k-button>
    <k-button pill color='indigo'>
      <k-icon slot='before'>bx-chevron-left</k-icon>
      Pill
      <k-icon slot='after'>bx-chevron-right</k-icon>
    </k-button>
    <k-button>
      <k-icon slot='before'>bx-chevron-left</k-icon>
      Default
      <k-icon slot='after'>bx-chevron-right</k-icon>
    </k-button>
  </div>
</template>

<script>
export default {
    name: 'button-component'
}
</script>

<style>

</style>