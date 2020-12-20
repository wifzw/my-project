<template>
  <v-row class="app-sobre-mim">
    <div class="w-full h-screen bg-gray-900">
      <v-col cols="12">
        <AppMenuTopo />
        <v-col cols="12" class="mt-12">
          <h1
            class="titulo accent--text text--lighten-2 animate__animated animate__lightSpeedInLeft animate__delay-1s"
          >
            Biográfia - Esse sou eu xD
          </h1>
        </v-col>
        <v-row>
          <v-col
            class="flex-grow-0 pt-9 flex-shrink-1 animate__animated animate__flipInX animate__delay-1s"
            offset="3"
          >
            <v-card max-width="280px" height="156px">
              <v-img
                height="100%"
                src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
              >
                <v-row align="end" class="fill-height">
                  <v-col align-self="start" class="pa-0">
                    <v-avatar class="profile" color="grey" size="100" tile>
                      <v-img src="../assets/imagem/kauan.jpeg"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col class="py-0">
                    <v-list-item dark>
                      <v-list-item-content>
                        <v-list-item-title class="title">
                          Kauan Motta
                        </v-list-item-title>
                        <v-list-item-subtitle
                          >Desenvolvedor Junior -
                          Front-End</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
            <v-row>
              <v-col cols="3" offset="1">
                <v-btn
                  href="https://github.com/wifzw/"
                  target="_blank"
                  text
                  depressed
                  class="text-capitalize customHover"
                  color="accent lighten-2"
                  :ripple="false"
                >
                  <v-icon>
                    mdi-github
                  </v-icon>
                  <span class="pl-1">
                    GitHub
                  </span>
                </v-btn>
              </v-col>
              <v-col cols="3" offset="1" class="pr-3">
                <v-btn
                  href="https://linkedin.com/in/kauan-motta/"
                  target="_blank"
                  text
                  class="text-capitalize customHover"
                  color="accent lighten-2"
                  :ripple="false"
                >
                  <v-icon>
                    mdi-linkedin
                  </v-icon>
                  <span class="pl-1">
                    Linkedin
                  </span>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            class="flex-shrink-0 flex-grow-1 d-flex animate__animated animate__fadeInRightBig animate__delay-1s"
          >
            <v-row>
              <v-col cols="12">
                <h1 class="mt-2 accent--text text--lighten-2 ">
                  Olá, me chamo Kauan Motta tenho 16 anos, minha cidade natal é
                  Lages - SC
                </h1>
              </v-col>
              <v-col cols="11" class="mt-n8">
                <p class="accent--text text--lighten-2">
                  Sou um jovem que gosto muito dessa tecnologia fascinante e
                  tenho muita vontade de aprender para no futuro se tornar um
                  programador Sênior (mestrado). Estudo Programação desde os
                  meus 11 anos e atualmente, estou cursando Ensino Médio com
                  Técnico em Informática. Eu sempre gostei de estudar Pentest
                  desde novo, aprendendo várias vulnerabilidade e exploits.
                  Atualmente estou trabalhando como estágiario em uma empresa
                  que está para mudar o ramo dos veterinários mundialmente,
                  conhecida como Hubvet.
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </div>
  </v-row>
</template>

<script>
import AppMenuTopo from "@/components/menu-topo/AppMenuTopo.vue";
export default {
  components: {
    AppMenuTopo
  },
  data: () => ({
    info: [{}]
  })
};
</script>

<style lang="sass">
.app-sobre-mim
  .titulo
    font-size: 1.7rem !important
  .customHover::before
    background-color: transparent !important
  .btn-active-opacity
    background-color: transparent !important
</style>
