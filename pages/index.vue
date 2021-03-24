<template>
  <div class="h-screen w-full flex flex-col justify-around ">
    <section class="bienvenue w-8/12 mx-auto">
      <h1 class="font-title flex flex-col justify-center items-center">
        <span class="font-text text-primary text-7xl font-light italic"
          >Directeur Artistique </span
        ><span class="font-title text-primary text-8xl font-extrabold mt-6"
          >&amp; Creative Designer
        </span>
      </h1>
      <p
        class="font-text text-main text-base mt-6 flex justify-end flex-col items-center text-center"
      >
        Bonjour, je m’appelle Kellig, un peu comme Kellogg’s©,<br />
        votre bol complet pour la journée ;)
        <img
          src="@/assets/icons/cereal.svg"
          alt="bol de céreales "
          class="h-6 mt-3"
        />
      </p>
    </section>
    <section>
      <div class="pageswiper">
        <sliderHome />
      </div>
    </section>
  </div>
</template>

<script>
import sliderHome from "/components/sliderHome";

export default {
  name: "Accueil",
  components: {
    sliderHome
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>
