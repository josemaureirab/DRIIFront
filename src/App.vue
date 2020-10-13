<template>
  <v-app id="inspire" class="Bground">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="goToHome">Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-alarm-light</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Notificaciones</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content @click="goToSelect()">
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="linkeable" @click="goToHome">DRII Project</v-toolbar-title>
    </v-app-bar>

    <v-content > 
      <router-view/> 
    </v-content>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>

import router from "@/router";

  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
    }),
    created () {
      this.$vuetify.theme.dark = false
    },
    methods: {
      goToHome () {
        router.push({name: 'MenuAdministrator'})
      },
      goToSelect () {
        router.push({name: 'Home'})
        this.drawer = false
      }
    }
  }
</script>

<style scoped>
  .Bground {
    background-color:white !important;
  }
</style>

<style>
.linkeable{
  cursor: pointer;
}
</style>