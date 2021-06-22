const d = document;
//Menu Navegacion
function hamburguerMenu(btnMenu, listContainer, listItems) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".btn-nav *")) {
      d.querySelector(btnMenu).classList.toggle("is-active");
      d.querySelector(listContainer).classList.toggle("active");
    }

    if (e.target.matches(listItems)) {
      d.querySelectorAll(listItems).forEach((el) => {
        el.classList.remove("active");
      });
      e.target.classList.add("active");
    }
  });
}

hamburguerMenu(
  ".btn-nav",
  ".nav .list-container",
  ".nav .list-container .list li a"
);
//Menu Navegacion

//goTop y Esconder Menu
function scrollEvents() {
  const goTop = d.querySelector(".go-top"),
    nav = d.querySelector(".nav");

  let pageY = window.pageYOffset;
  window.addEventListener("scroll", (e) => {
    if (window.pageYOffset <= 700) {
      goTop.style.right = "-4rem";
    } else {
      goTop.style.right = "0";
    }

    if (pageY > window.pageYOffset) {
      nav.style.top = "-70px";
    } else {
      nav.style.top = "0";
      nav.style.borderBottom = "2px solid var(--first-color)";
    }
    pageY = pageYOffset;
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(".go-top *")) {
      //console.log(window);
      window.scrollTo({
        top: 0,
      });
    }
  });
}
scrollEvents();
