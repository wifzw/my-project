<template>
  <div class="home-page">
    <!-- ParticlesJS - Config -->
    <AppParticles />
    <!--  /> -->

    <AppMenuTopo />

    <div class="flex justify-center pt-64">
      <h1
        class="text-3xl font-semibold text-gray-200 titulo animate__animated animate__bounceInUp animate__slow"
      >
        Seja muito bem vindo ao meu projeto.
      </h1>
    </div>
    <div class="relative pt-8">
      <h3
        class="flex justify-center mt-4 text-gray-100 subtitulo line-1 anim-typewriter"
      >
        Esse projeto, foi feito para obter novos
        <span class="pl-1 pr-1 font-bold text-teal-500">conhecimentos</span> e
        desenvolver uma página sobre mim.
      </h3>
      <h3 class="pt-10 text-lg text-gray-400 frases line-2 anim-typewriter2">
        "Suba o primeiro degrau com fé. Não é necessário que você veja toda a
        escada, apenas dê o primeiro passo."
      </h3>
    </div>
  </div>
</template>

<script>
import AppMenuTopo from "@/components/menu-topo/AppMenuTopo.vue";
import AppParticles from "@/components/Particles/AppParticles.vue";
export default {
  components: {
    AppMenuTopo,
    AppParticles
  }
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css?family=Dosis:300,400,700,800");
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital@1&display=swap");

.titulo {
  text-align: center;
  font-family: "Dosis", sans-serif;
  font-weight: 800;
}

.subtitulo {
  text-align: center;
  color: #fff;
  font-size: 19px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
}

.line-1 {
  margin: 0 auto;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
}

/* Animation */
.anim-typewriter {
  animation: typewriter 2s steps(44) 1s 1 normal both,
    blinkTextCursor 700ms steps(44) infinite normal;
}
@keyframes typewriter {
  from {
    width: 0%;
  }
  to {
    width: 86%;
    border-right: 0px;
  }
}

.line-2 {
  margin: 0 auto;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
}

/* Animation */
.anim-typewriter2 {
  animation: typewriter2 2s steps(44) 1s 1 normal both,
    blinkTextCursor 700ms steps(44) infinite normal;
}
@keyframes typewriter2 {
  from {
    width: 0%;
  }
  to {
    width: 86%;
    border-right: 0px;
  }
}

.frases {
  font-family: "Merriweather", serif;
}
</style>
