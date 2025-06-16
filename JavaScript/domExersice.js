function activities(active) {
  game = document.querySelector(".game");
  music  = document.querySelector(".music");
  tech = document.querySelector(".tech");

  if (active === "gaming") {
    game.classList.add("active-1");
    music.classList.remove("active-2");
    tech.classList.remove("active-3");
  }
  else if (active === "music") {
    game.classList.remove("active-1");
    music.classList.add("active-2");
    tech.classList.remove("active-3");
  }
  else if (active === "tech") {
    game.classList.remove("active-1");
    music.classList.remove("active-2");
    tech.classList.add("active-3");
  }
}  