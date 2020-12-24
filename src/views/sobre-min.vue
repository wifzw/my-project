<template>
  <v-row class="app-sobre-mim">
    <div class="w-full h-screen bg-gray-900">
      <v-col cols="12">
        <AppMenuTopo />
        <v-col cols="12" class="mt-sm-8" />
        <v-col cols="12" class="mt-sm-12">
          <h1
            class="titulo accent--text text--lighten-2 animate__animated animate__lightSpeedInLeft animate__delay-1s"
          >
            Biográfia - Esse sou eu xD
          </h1>
        </v-col>
        <v-row>
          <!-- Eslint quebrou meu if ternário inline :( -->
          <v-col
            :class="
              !$vuetify.breakpoint.xsOnly
                ? 'flex-grow-0 pt-9 flex-shrink-1 animate__animated animate__flipInX animate__delay-1s'
                : ''
            "
            offset="1"
            offset-sm="3"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                max-width="280px"
                height="156px"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img
                  height="100%"
                  src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg"
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
                            class="accent--text text--lighten-2 font-weight-bold"
                          >
                            Desenvolvedor Junior -
                            <span class="">
                              Front-End
                            </span>
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-img>
              </v-card>
            </v-hover>
            <v-row
              :style="
                $vuetify.breakpoint.xsOnly ? 'width: 95% !important;' : ''
              "
            >
              <v-col cols="3" offset="1">
                <v-btn
                  href="https://github.com/wifzw/"
                  target="_blank"
                  text
                  depressed
                  class="text-capitalize customHover"
                  color="accent lighten-2"
                  :ripple="false"
                  :style="
                    $vuetify.breakpoint.xsOnly ? 'width: 85% !important;' : ''
                  "
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
                  :style="
                    $vuetify.breakpoint.xsOnly ? 'width: 60% !important;' : ''
                  "
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
            :cols="$vuetify.breakpoint.xsOnly ? 12 : 0"
            :class="
              !$vuetify.breakpoint.xsOnly
                ? 'flex-shrink-0 flex-grow-1 d-flex animate__animated animate__fadeInRightBig animate__delay-1s'
                : ''
            "
          >
            <v-row>
              <v-col
                cols="11"
                :class="$vuetify.breakpoint.xsOnly ? 'ml-2' : ''"
              >
                <h1
                  class="accent--text text--lighten-2"
                  :class="
                    $vuetify.breakpoint.xsOnly
                      ? 'text-justify'
                      : ' mt-sm-2 mt-n8'
                  "
                >
                  Olá, me chamo Kauan Motta tenho 16 anos, minha cidade natal é
                  Lages - SC
                </h1>
              </v-col>
              <v-col
                cols="11"
                :class="$vuetify.breakpoint.xsOnly ? 'ml-2' : 'mt-sm-n8'"
              >
                <p
                  class="accent--text text--lighten-2"
                  :class="$vuetify.breakpoint.xsOnly ? 'text-justify' : ''"
                  :style="
                    $vuetify.breakpoint.xsOnly ? 'width: 90% !important;' : ''
                  "
                >
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
  .v-card
    transition: opacity .4s ease-in-out
  .v-card:not(.on-hover)
    opacity: 0.5
  .customHover::before
    background-color: transparent !important
  .btn-active-opacity
    background-color: transparent !important
</style>
