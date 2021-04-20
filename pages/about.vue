<template>
  <div>
    <h1>À propos</h1>
    <p>Directeur artistique &amp; creative Designer</p>
    <div class="contactnav mt-10 flex flex-row justify-center">
      <div>
        <a class="font-text text-md text-main">bonjour[a]kelligart.com</a>
      </div>
      <ul class="flex justify-items-center items-center mt-3">
        <li class="closeNav mr-3 font-title font-bold text-xl text-main">
          <a
            href="https://www.facebook.com/kelligart/"
            target="_blank"
            alt="facebook"
            >Fb</a
          >
        </li>
        <li class="closeNav mr-3 font-title font-bold text-xl text-main">
          <a
            href="https://www.linkedin.com/in/kelligart"
            target="_blank"
            alt="Linkedin"
            >In</a
          >
        </li>
        <li class="closeNav mr-3 font-title font-bold text-xl text-main">
          <a
            href="https://www.behance.net/kelligart"
            target="_blank"
            alt="Behance"
            >Be</a
          >
        </li>
        <li class="closeNav mr-3 font-title font-bold text-xl text-main">
          <a
            href="https://dribbble.com/Kelligart"
            target="_blank"
            alt="Dribbble"
            >Dr</a
          >
        </li>
        <li class="closeNav mr-3 font-title font-bold text-xl text-main">
          <a
            href="https://codepen.io/kelligart"
            target="_blank"
            alt="Codepen"
            class="border border-transparent hover:outline-none hover:ring-2 hover:ring-purple-600 hover:border-transparent"
            >Co</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  head() {
    return {
      titleTemplate: "%s - À propos",
      meta: [
        {
          name: "À propos",
          content:
            "Kelligart, kellig jourdren, Directeur Artistique & Creative Designer basé à Rennes "
        }
      ]
    };
  }
};
</script>
