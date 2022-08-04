<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      clipped-left
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>


</v-app-bar>

  <v-navigation-drawer 
      app
      clipped
      permanent
      >
      <ConfigBar/>
   </v-navigation-drawer>

    <v-main>
      <MainPage/>
    </v-main>
  
  
  </v-app>
</template>

<script>
import MainPage from './components/MainPage';
import ConfigBar from "./components/ConfigBar";

export default {
  name: 'App',

  components: {
    MainPage,
    ConfigBar,
  },

  data: () => ({
    //
  }),
};
</script>
