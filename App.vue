<template>
  <div id="app" class="h-screen">
    <k-appbar fixed color='indigo'>
      <div class="w-3/12 flex items-center">
        <img src="@/assets/icon.svg" class="w-10 h-10" alt="">
      </div>
      <div class="w-9/12 flex justify-center">
        <k-button v-on:click.stop pill outline color="">Home</k-button>
        <k-button pill flat color="">Components</k-button>
        <k-button pill flat color="">Templates</k-button>
      </div>
      <div class="w-3/12">
      <k-input state='required' hideMessages></k-input>
      </div>
    </k-appbar>
      <!--<k-avatar>
        <img src="https://scontent.fcor2-1.fna.fbcdn.net/v/t1.0-9/129611717_957316471460878_5215968084226502998_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=Uv9TD7MFn_kAX990EYd&_nc_ht=scontent.fcor2-1.fna&oh=eedd1f8a33f119fe26563407e73613dc&oe=5FF4CAF2" alt="">
      </k-avatar>-->
    <div class="flex h-full">
      <k-container color='gray-1' class="w-3/12 h-full p-0">
        <k-appbar>
          <k-input hide-messages>
            <k-icon size='24' slot='after'>bx-search</k-icon>
          </k-input>
        </k-appbar>

        
        <k-list-item class="rounded-none">
          <k-list-item-slot>
            <k-icon>bx-hash</k-icon>
          </k-list-item-slot>
          <k-list-item-content single-line>
            <k-text important bold class="text-primary">Components</k-text>
          </k-list-item-content>
        </k-list-item>

        
      <k-list>
        <router-link replace :key="index" v-for="(component, index) in components"
          :to="{name: component.route }">
          <k-list-item>
            <k-list-item-content>
              <k-text important>{{component.name}}</k-text>
            </k-list-item-content>
          </k-list-item>
        </router-link>
      </k-list>


      </k-container>
      <div class="w-9/12">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      components: [
        {
          name: 'Buttons',
          route: 'button-component'
        },
        {
          name: 'Inputs',
          route: 'input-component'
        },
        {
          name: 'Lists',
          route: 'list-component'
        },
        {
          name: 'Avatars',
          route: 'avatar-component'
        }
      ]
    }
  },
  methods: {
    myFunction() {
      console.log('Alguien le dio click al before')
    }
  }
}
</script>

<style>
@import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');

#app {
}
</style>
