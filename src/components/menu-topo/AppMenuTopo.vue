<template>
  <v-row
    class="inset-x-0 top-0 flex items-center mt-2 text-gray-200 bg-gray-900 border-b-2 border-gray-800 app-menu-topo animate__animated animate__bounceInDown animate__slow"
  >
    <v-col cols="12">
      <v-row no-gutters>
        <v-col class="justify-end ml-6 flex-grow-1 flex-shrink-1 d-flex">
          <v-btn
            v-for="(itemMenu, indice) in itensMenu"
            :key="indice"
            class="ml-6 mt-n3 text-capitalize accent--text text--lighten-2 customHover"
            :class="itemMenu.pulse ? 'animate-pulse' : ''"
            :href="itemMenu.link"
            text
          >
            {{ itemMenu.nome }}
          </v-btn>
        </v-col>
      </v-row>
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
        icon: " mdi-badge-account-alert-outline"
      },
      { nome: "Quem sou eu ?", link: "http://localhost:8080/#/sobre" },
      { nome: "Certificados / Cursos", link: "http://localhost:8080/#/cursos" },
      { nome: "Contato", link: "http://localhost:8080/#/contatos" },
      { nome: "Hubvet", link: "https://dev.hubvet.app" }
    ]
  }),
  methods: {
    object(item) {
      console.log(item);
    }
  }
};
</script>

<style lang="sass">
.app-menu-topo
  .customHover::before
    background-color: transparent !important
  .btn-active-opacity
    background-color: transparent !important
</style>
