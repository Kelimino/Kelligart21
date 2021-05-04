export const cursor = {
  mounted() {
    let mouseCursor = document.querySelector(".cursor");

    window.addEventListener("mousemove", cursor);

    function cursor(e) {
      mouseCursor.style.top = e.clientY + "px";
      mouseCursor.style.left = e.clientX + "px";
    }

    //EACH LINK
    const link = document.querySelectorAll(".link");

    Array.from(link).forEach(linkElement => {
      linkElement.addEventListener("mouseover", () => {
        mouseCursor.style.transform = "scale(2)";
      });
      linkElement.addEventListener("mouseleave", () => {
        mouseCursor.style.transform = "scale(1)";
      });
    });
    //PAGE LINK FOOTER
    const pageLink = document.querySelectorAll(".pageLink");
    console.log(pageLink);

    Array.from(pageLink).forEach(linkElement => {
      linkElement.addEventListener("mouseover", () => {
        mouseCursor.classList.add("cursorPage");
        console.log("hey");
      });

      linkElement.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("cursorPage");
      });
    });

    //SLIDER PROJECT
    // const slider = document.querySelector(".swiper-wrapper");

    // slider.addEventListener("mouseover", () => {
    //   mouseCursor.classList.add("cursorSlide");
    // });
    // slider.addEventListener("mouseleave", () => {
    //   mouseCursor.classList.remove("cursorSlide");
    // });
  }
};
