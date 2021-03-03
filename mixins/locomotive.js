
export default {

    watch: {
      $route() {
        this.lmS.update();
      }
    },
    mounted() {
      this.$nextTick(
        function() {
    this.lmS = new this.locomotiveScroll({
            el: document.querySelector(".smooth-scroll"),
            smooth: true
          });
        }.bind(this)
      );
      
    },
    destroyed() {
      this.lmS.destroy();
    },
  
  };
