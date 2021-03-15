<template>
  <div class="loader fixed w-full h-0 p-0 m-0 z-50 bg-white ">
    <div
      class="content-wrap fixed w-full h-0 bg-primary flex justify-center items-center "
    >
      <div class="countdown flex flex-col justify-center items-center">
        <div class="count text-white font-text">1</div>
        <div class="count text-white font-text">2</div>
        <div class="count text-white font-text">3</div>
        <div class="count w-10 h-10 flex justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#FFF"
          >
            <path
              stroke="#FFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",

  data() {
    return {};
  },

  mounted() {}
};
</script>
