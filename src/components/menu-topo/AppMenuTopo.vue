<template>
  <v-row
    class="inset-x-0 top-0 flex items-center mt-0 text-gray-200 bg-gray-900 app-menu-topo"
    :class="
      !$vuetify.breakpoint.smAndDown
        ? 'inset-x-0 top-0 flex items-center mt-0 text-gray-200 bg-gray-900 border-b-2 border-gray-800  animate__animated animate__bounceInDown animate__slow'
        : ''
    "
  >
    <v-col cols="12" class="mt-2">
      <template>
        <v-row no-gutters>
          <v-col
            v-if="!$vuetify.breakpoint.smAndDown"
            class="justify-end ml-6 flex-grow-1 flex-shrink-1 d-flex"
          >
            <v-btn
              v-for="(itemMenu, indice) in itensMenu"
              :key="indice"
              class="ml-2 mt-n3 text-capitalize accent--text text--lighten-2 customHover"
              :class="itemMenu.pulse ? 'animate-pulse' : ''"
              :href="itemMenu.link"
              text
              :target="itemMenu.target"
            >
              <v-icon left>
                {{ itemMenu.icon }}
              </v-icon>
              {{ itemMenu.nome }}
            </v-btn>
          </v-col>
        </v-row>
      </template>
      <v-col v-if="$vuetify.breakpoint.smAndDown" cols="4">
        <v-btn icon @click="abreMenu = !abreMenu" color="accent lighten-2">
          <v-icon>
            mdi-menu
          </v-icon>
        </v-btn>
        <template v-if="abreMenu">
          <v-btn
            v-for="(itemMenu, indice) in itensMenu"
            :key="indice"
            class="mt-2 ml-2 text-capitalize accent--text text--lighten-2 customHover"
            :class="itemMenu.pulse ? 'animate-pulse' : ''"
            :href="itemMenu.link"
            outlined
          >
            <v-icon left>
              {{ itemMenu.icon }}
            </v-icon>
            {{ itemMenu.nome }}
          </v-btn>
        </template>
      </v-col>
    </v-col>
  </v-row>
  <!-- </div> -->
</template>

<script>
export default {
  data: () => ({
    itensMenu: [
      {
        nome: "Kauan Motta",
        link: "/#/",
        pulse: true,
        icon: "mdi-home-circle-outline"
      },
      {
        nome: "Quem sou eu ?",
        link: "http://localhost:8080/#/sobre",
        icon: "mdi-badge-account-alert-outline"
      },
      {
        nome: "Certificados / Cursos",
        link: "http://localhost:8080/#/cursos",
        icon: "mdi-certificate-outline"
      },
      {
        nome: "Contato",
        link: "http://localhost:8080/#/contatos",
        icon: "mdi-account-box-outline"
      },
      {
        nome: "Hubvet",
        link: "https://dev.hubvet.app",
        icon: "mdi-school-outline",
        target: "_blank"
      }
    ],
    abreMenu: false
  })
};
</script>

<style lang="sass">
.app-menu-topo
  .customHover::before
    background-color: transparent !important
  .btn-active-opacity
    background-color: transparent !important
</style>
