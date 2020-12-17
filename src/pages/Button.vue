<template>
  <div>
    <k-text subheading important>Introduccion</k-text>
    <k-container>
    <div class="bg-indigo shadow-indigo border-indigo p-3 rounded-sm">
      <div class="text-white flex">
        <div class="pr-3">
          <k-icon color='white'>bx-info-circle</k-icon>
        </div>
        <div class="flex-grow">
          <k-text dark bold>Version BETA</k-text>
        </div>
      </div>
      <k-text dark light>
        Muchos features pueden no funcionar a su debido modo y la documentacion aun no esta completa, estamos trabajando para brindarte una libreria de tu talla 🤩
      </k-text>
    </div>
    </k-container>
    <k-text important class="my-2">
      Los botones son unos de los principales componentes de una aplicacion, mediante este un usuario puede realizar acciones.
      El buen uso de los mismos en la aplicacion, puede mejorar la experiencia del usuario, por esa misma razon,
      en <b class="text-indigo">-</b>, tenemos una amplia variedad de botones para su <a class="text-indigo">uso adecuado</a>.
    </k-text>
    <div>
      <k-container class="justify-center flex">
        <k-button outline>Outline</k-button>
        <k-button flat>Flat</k-button>
        <k-button pill color='indigo'>Pill</k-button>
        <k-button>Default</k-button>
      </k-container>
      <k-container class="px-0">
        <k-text important subheading>Slots</k-text>
        <k-text class="block">
          Los botones cuentan con dos slots adicionales, <b class="text-indigo">before</b> y <b class="text-indigo">after</b> que estan principalmente pensados
          para poner iconos relacionados a su accion, aunque funcionan perfectamente como activadores de dropdowns e incluso
          botones de paginacion.
        </k-text>
      </k-container>
    </div>
      <k-tabs :items='tabs'>
        <k-container color='gray-8' class='px-1 py-2 rounded-lg'>
          <prism language='html'>
            {{snipet1}}
          </prism>
        </k-container>
        <k-container class='justify-center'>
          <div class='mx-auto'>
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
        </k-container>
      </k-tabs>
      <k-container class='px-0'>
        <k-text subheading important>Eventos</k-text>
        <k-text class='block'>Los componentes tienen dos eventos para sus respectivos slots.</k-text>
        <k-text class='block text-indigo' bold>click-before</k-text>
        <k-text class='block text-indigo' bold>click-after</k-text>
      </k-container>
      <k-container class='px-0'>
        <k-text subheading important>Props</k-text>
        <k-list>
          <k-list-item :key='index' v-for="(prop, index) in buttonProps">
            <k-list-item-content>
              <k-text class='text-primary'>
                {{prop.title}}
              </k-text>
              <k-text>
                {{prop.description}}
              </k-text>
            </k-list-item-content>
          </k-list-item>
        </k-list>
      </k-container>
  </div>
</template>

<script>
export default {
  name: 'button-component',
  data: () => ({
    tabs: [
      {name: 'Code'},
      {name: 'Preview'}
    ],
    buttonProps: [
      {
        title: 'Color (Color de Tailwind)',
        description: 'Define el color del boton'
      },
      {
        title: 'Outline (Booleano)',
        description: 'Quita el background del boton y le agrega bordes del color elegido'
      },
      {
        title: 'Flat (Booleano)',
        description: 'Quita el background y los bordes del boton'
      },
      {
        title: 'Pill (Booleano)',
        description: 'Cambia el border-radius del boton y sus slots a XL'
      },
    ],
    snipet1:
`<k-button outline>
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
  </k-button>`
    })
}
</script>

<style>

</style>