
document.addEventListener("DOMContentLoaded", function () {
  const iframe = document.querySelector("iframe");
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const src = this.getAttribute("data-src");
      iframe.src = src;
    });
  });
});