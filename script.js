const arrowUp = document.querySelector("a.go-up.hidden");
let scrollTop = 0;

handleScrollArrowUp = () => {
  scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

  if (scrollTop > window.innerHeight / 3) {
    arrowUp.classList.remove("hidden");
  } else {
    arrowUp.classList.add("hidden");
  }
};

document.addEventListener("scroll", handleScrollArrowUp);
