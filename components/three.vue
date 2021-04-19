<template>
  <div id="container" class="fixed top-0 left-0 w-full h-full"></div>
</template>

<script>
import * as Three from "three";

export default {
  name: "ThreeTest",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    };
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    init: function() {
      // Canvas
      let container = document.getElementById("container");

      //Texture Loader
      const loader = new Three.TextureLoader();
      const flake = loader.load(require("~/assets/icons/flake.png"));

      //Camera
      this.camera = new Three.PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        0.01,
        10
      );
      this.camera.position.z = 1;

      // Scene
      this.scene = new Three.Scene();

      // Objects
      const particlesGeometry = new Three.BufferGeometry();
      const particlesCnt = 500;
      const posArray = new Float32Array(particlesCnt * 4);

      for (let i = 0; i < particlesCnt * 4; i++) {
        // posArray[i] = Math.random();
        // posArray[i] = Math.random() - 0.5;
        posArray[i] = (Math.random() - 0.5) * 5;
        posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
      }
      particlesGeometry.setAttribute(
        "position",
        new Three.BufferAttribute(posArray, 3)
      );

      // Materials

      const particlesMaterial = new Three.PointsMaterial({
        size: 0.07,
        sizeAttenuation: true,
        map: flake,
        alphaTest: 0.5,
        transparent: true
        // blendding: THREE.AdditiveBlending
      });

      // Mesh

      this.particles = new Three.Points(particlesGeometry, particlesMaterial);
      this.scene.add(this.particles);

      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.setClearColor(new Three.Color("#F3F5FB"), 1);
      container.appendChild(this.renderer.domElement);
      //   this.renderer.setClearColor(new Three.Color("#F3F5FB"), 1);
    },
    animate: function() {
      requestAnimationFrame(this.animate);

      document.addEventListener("mousemove", animatePartciles);

      let mouseX = 0;
      let mouseY = 0;

      function animatePartciles(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }

      const clock = new Three.Clock();

      const tick = () => {
        const elapsedTime = clock.getElapsedTime();
        this.particles.rotation.x = -mouseY * (elapsedTime * 0.00008);
        this.particles.rotation.y = -mouseX * (elapsedTime * 0.00008);

        window.requestAnimationFrame(tick);
      };

      tick();

      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>
