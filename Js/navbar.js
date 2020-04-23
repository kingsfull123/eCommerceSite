function toggleNav() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar__show");
    } else {
      navbar.classList.remove("navbar__show");
    }
  });
}

toggleNav();
