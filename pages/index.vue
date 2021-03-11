<template>
  <div class="bg-back h-screen w-full">
    <section class="bienvenue">
      <h1>
        <span>Directeur artistique</span><span>&amp; creative designer </span>
      </h1>
      <p>
        Bonjour, je m’appelle Kellig, un peu comme Kellogg’s©, votre bol complet
        pour la journée ;)
      </p>
    </section>
    <section>
      <div class="pageswiper">
        <h3>Que voulez-vous savoir ?</h3>
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
