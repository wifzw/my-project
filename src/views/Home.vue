<template>
  <div class="home-page">
    <Particles
      id="particles"
      :options="{
        // background: {
        //  color: {
        //    value: '#000'
        // }
        // },
        fpsLimit: 60,
        particles: {
          number: {
            value: 550,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#5e4f70'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: '',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 4,
              size_min: 0.3,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: '#518a8e',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false,
              mode: 'bubble'
            },
            onclick: {
              enable: false,
              mode: 'repulse'
            },
            resize: false
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }"
    />
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
export default {
  components: {
    AppMenuTopo
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
