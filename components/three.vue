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
      const star = loader.load("~/assets/icons/flake.png");

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
      const particlesCnt = 5000;
      const posArray = new Float32Array(particlesCnt * 3);

      for (let i = 0; i < particlesCnt * 3; i++) {
        // posArray[i] = Math.random();
        // posArray[i] = Math.random() - 0.5;
        posArray[i] = (Math.random() - 0.5) * 5;
        posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
      }
      particlesGeometry.setAttribute(
        "position",
        new Three.BufferAttribute(posArray, 3)
      );

      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);

      // Materials

      const particlesMaterial = new Three.PointsMaterial({
        size: 0.005,
        map: star,
        transparent: true,
        // blendding: THREE.AdditiveBlending
        color: "white"
      });

      let material = new Three.MeshNormalMaterial();
      // Mesh

      this.mesh = new Three.Mesh(geometry, material);
      this.particles = new Three.Points(particlesGeometry, particlesMaterial);
      this.scene.add(this.mesh, this.particles);

      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>
