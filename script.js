const arrowUp = document.querySelector("a.go-up.hidden");
const rankingSection = document.querySelector("#ranking");
const newsSection = document.querySelector("#news");

const newsElements = document.querySelectorAll(
  "section.news div.news-panel div.holder div"
);
const rankingBars = document.querySelectorAll(
  "section.ranking div.ranking-wrap ul li div"
);
let scrollTop = 0;

handleArrowUp = () => {
  console.log(scrollTop);
  if (scrollTop < window.innerHeight / 3) {
    arrowUp.classList.add("hidden");
  } else if (
    scrollTop > window.innerHeight / 3 &&
    arrowUp.classList.contains("hidden")
  ) {
    arrowUp.classList.remove("hidden");
  }
};

handleNewsAnimate = () => {
  if (scrollTop > newsSection.offsetTop - window.screen.height / 3) {
    newsElements.forEach(news => news.classList.add("animate"));
  } else if (
    scrollTop === 0 &&
    newsElements.item(0).classList.contains("animate")
  ) {
    newsElements.forEach(news => news.classList.remove("animate"));
  }
};

handleRankingAnimate = () => {
  if (scrollTop > rankingSection.offsetTop - window.screen.height / 3) {
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
  handleRankingAnimate();
};

document.addEventListener("scroll", handleScrollArrowUp);
