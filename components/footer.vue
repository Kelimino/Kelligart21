<template>
  <div
    class="footer w-full h-1/6 flex flex-row justify-around items-center py-10 border-t border-solid border-primary"
  >
    <div class="hi flex flex-row justify-center">
      <img src="@/assets/icons/hello.svg" alt="Hello" class="w-8 mr-2" />
      <h2 class="text-2xl font-bold text-primary">Say Hi !</h2>
    </div>
    <div>
      <a class="font-text text-md text-primary">bonjour[a]kelligart.com</a>
    </div>
    <ul class="flex justify-items-center items-center mt-3">
      <li class="closeNav mr-3 font-title font-bold text-xl text-primary">
        <a
          href="https://www.facebook.com/kelligart/"
          target="_blank"
          alt="facebook"
          >Fb</a
        >
      </li>
      <li class="closeNav mr-3 font-title font-bold text-xl text-primary">
        <a
          href="https://www.linkedin.com/in/kelligart"
          target="_blank"
          alt="Linkedin"
          >In</a
        >
      </li>
      <li class="closeNav mr-3 font-title font-bold text-xl text-primary">
        <a
          href="https://www.behance.net/kelligart"
          target="_blank"
          alt="Behance"
          >Be</a
        >
      </li>
      <li class="closeNav mr-3 font-title font-bold text-xl text-primary">
        <a href="https://dribbble.com/Kelligart" target="_blank" alt="Dribbble"
          >Dr</a
        >
      </li>
      <li class="closeNav mr-3 font-title font-bold text-xl text-primary">
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
</template>

<script>
export default {
  name: "Footer"
};
</script>
