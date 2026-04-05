window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hide");

    AOS.init({
      duration: 1000,
      once: true,
    });

    AOS.refresh();

  }, 1200);
});


window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  let startScroll = 400;
  let endScroll = 1350;

  let progress = (scrollY - startScroll) / (endScroll - startScroll);
  progress = Math.max(0, Math.min(progress, 1));

  let scale = 1 + progress * 2.7;
  document.querySelector(".main-image img").style.transform =
    `scale(${scale})`;

  let moveX = progress * 800;

  document.querySelector(".left-image-1").style.transform =
    `translateX(-${moveX}px)`;

  document.querySelector(".left-image-2").style.transform =
    `translateX(-${moveX}px)`;

  document.querySelector(".right-image-1").style.transform =
    `translateX(${moveX}px)`;

  document.querySelector(".right-image-2").style.transform =
    `translateX(${moveX}px)`;

  let header = document.querySelector("header");
  let headerMove = progress * 150;

  header.style.transform = `translateY(-${headerMove}px)`;
});