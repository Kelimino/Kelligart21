// import {
//   gsap
// } from 'gsap'
// import {
//   ScrollTrigger
// } from 'gsap/ScrollTrigger'

// import LocomotiveScroll from 'locomotive-scroll'
// gsap.registerPlugin(ScrollTrigger)

// export default {
//   data() {
//     return {
//       x: 0
//     }
//   },
//   watch: {
//     $route() {
//       this.lmS.update()
//     }
//   },
//   mounted() {
//     this.$nextTick(
//       function () {
//         this.lmS = new LocomotiveScroll({
//           el: document.querySelector('.smooth-scroll'),
//           smooth: true /* if false disable overflow: hidden on html, body */
//         })
//         this.lmS.on('scroll', ScrollTrigger.update)

//         ScrollTrigger.scrollerProxy('.smooth-scroll', {
//           scrollTop(value) {
//             return arguments.length ?
//               this.lmS.scrollTo(value, 0, 0) :
//               this.lmS.scroll.instance.scroll.y
//           },
//           getBoundingClientRect() {
//             return {
//               top: 0,
//               left: 0,
//               width: window.innerWidth,
//               height: window.innerHeight
//             }
//           },
//           pinType: document.querySelector('.smooth-scroll').style.transform ?
//             'transform' :
//             'fixed'
//         })
//         ScrollTrigger.addEventListener('refresh', () => this.lmS.update())
//         ScrollTrigger.refresh()
//       }.bind(this)
//     )
//   },

//   beforeDestroyed() {
//     this.lmS.destroy()
//   }
// }
