const arrowUp = document.querySelector("a.go-up.hidden");
const burgerButton = document.querySelector("nav.mobile button.burger");
const mobileNav = document.querySelector("nav.mobile div.mobile-menu");
const mobileLinks = document.querySelectorAll(
  "nav.mobile div.mobile-menu ul li a "
);
const rankingSection = document.querySelector("#ranking");
const newsSection = document.querySelector("#news");
const podcastSection = document.querySelector("#podcast");

const podcastWrap = document.querySelector("section.podcast div.podcast-wrap");
const newsElements = document.querySelectorAll(
  "section.news div.news-panel div.holder div"
);
const rankingBars = document.querySelectorAll(
  "section.ranking div.ranking-wrap ul li div"
);
let scrollTop = 0;

handleArrowUp = () => {
  if (scrollTop < window.innerHeight / 2) {
    arrowUp.classList.add("hidden");
  } else if (
    scrollTop > window.innerHeight / 2 &&
    arrowUp.classList.contains("hidden")
  ) {
    arrowUp.classList.remove("hidden");
  }
};

handleNewsAnimate = () => {
  if (scrollTop > newsSection.offsetTop - window.screen.height / 2) {
    newsElements.forEach(news => news.classList.add("animate"));
  } else if (
    scrollTop === 0 &&
    newsElements.item(0).classList.contains("animate")
  ) {
    newsElements.forEach(news => news.classList.remove("animate"));
  }
};

handlePodcastAnimate = () => {
  if (scrollTop > podcastSection.offsetTop - window.screen.height / 2) {
    podcastWrap.classList.add("animate");
  } else if (
    scrollTop < podcastSection.offsetTop - window.screen.height &&
    podcastWrap.classList.contains("animate")
  ) {
    podcastWrap.classList.remove("animate");
  }
};

handleRankingAnimate = () => {
  if (scrollTop > rankingSection.offsetTop - window.screen.height / 2) {
    rankingBars.forEach(bar => bar.classList.add("animate"));
  } else if (
    scrollTop < rankingSection.offsetTop - window.screen.height &&
    rankingBars.item(0).classList.contains("animate")
  ) {
    rankingBars.forEach(bar => bar.classList.remove("animate"));
  }
};

handleScrollArrowUp = () => {
  scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

  handleArrowUp();
  handleNewsAnimate();
  handlePodcastAnimate();
  handleRankingAnimate();
};

handleBurgerClick = () => {
  burgerButton.classList.toggle("active");
  mobileNav.classList.toggle("active");
};

mobileLinks.forEach(link => link.addEventListener("click", handleBurgerClick));

burgerButton.addEventListener("click", handleBurgerClick);

document.addEventListener("scroll", handleScrollArrowUp);
