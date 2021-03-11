<template>
  <div class="bg-back h-screen w-full flex flex-col justify-center">
    <section class="bienvenue w-8/12 mx-auto">
      <h1 class="font-title flex flex-col line">
        <span class="font-text text-primary text-7xl font-light italic"
          >Directeur Artistique </span
        ><span class="font-title text-primary text-8xl font-extrabold mt-6"
          >&amp; Creative Designer
        </span>
      </h1>
      <p class="font-text text-main text-base mt-6">
        Bonjour, je m’appelle Kellig, un peu comme Kellogg’s©,<br />
        votre bol complet pour la journée ;)
      </p>
    </section>
    <section class="mt-20">
      <div class="pageswiper">
        <h3 class=" w-8/12 mx-auto font-title text-primary text-2xl font-bold">
          Que voulez-vous savoir ?
        </h3>
        <sliderHome />
      </div>
    </section>
  </div>
</template>

<script>
import sliderHome from "/components/sliderHome";

export default {
  components: {
    sliderHome
  },
  data() {
    return {};
  },

  mounted() {}
};
</script>
