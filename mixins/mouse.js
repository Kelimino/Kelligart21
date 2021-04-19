export const cursor = {
  mounted() {
    let mouseCursor = document.querySelector(".cursor");

    window.addEventListener("mousemove", cursor);

    function cursor(e) {
      mouseCursor.style.top = e.clientY + "px";
      mouseCursor.style.left = e.clientX + "px";
    }

    const link = document.querySelectorAll(".link");

    Array.from(link).forEach(linkElement => {
      linkElement.addEventListener("mouseover", () => {
        mouseCursor.style.transform = "scale(2)";
      });
      linkElement.addEventListener("mouseleave", () => {
        mouseCursor.style.transform = "scale(1)";
      });
    });
  }
};
