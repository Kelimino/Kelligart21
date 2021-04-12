export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Kelligart, Directeur Artistique & Creative Designer",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,400;1,600;1,800;1,900&display=swap"
      }
    ]
  },
  router: {
    routes: [
      {
        name: "index",
        path: "/",
        component: "pages/index.vue"
      },
      {
        name: "projets",
        path: "/projets",
        component: "pages/projets/index.vue"
      },
      {
        name: "laforet",
        path: "/projets/laforet",
        component: "pages/projets/laforet.vue"
      },
      {
        name: "spall",
        path: "/projets/spall",
        component: "pages/projets/spall.vue"
      },
      {
        name: "graphisme",
        path: "/projets/graphisme",
        component: "pages/projets/graphisme.vue"
      },
      {
        name: "lamotte",
        path: "/projets/lamotte",
        component: "pages/projets/lamotte.vue"
      },
      {
        name: "logo",
        path: "/projets/logo",
        component: "pages/projets/logo.vue"
      },
      {
        name: "robodico",
        path: "/projets/robodico",
        component: "pages/projets/robodico.vue"
      },
      {
        name: "stars",
        path: "/projets/stars",
        component: "pages/projets/stars.vue"
      },
      {
        name: "theatre",
        path: "/projets/theatre",
        component: "pages/projets/theatre.vue"
      }
    ],

    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop + window.innerHeight,
          behavior: "smooth"
        });
      }
      return window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // resest css meyerweb
    "@/assets/css/reset.css",
    // gobal css compile
    "@/assets/css/main.css",
    // main css file sass
    "@/assets/css/main.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/locomotive.js",
      mode: "client"
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/tailwindcss"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["gsap"],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue|ts)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        });
      }
    }
  }
};
