(function IIFEinit() {
  window.addEventListener("load", documentLoaded);

  AOS.init();

  let wWidth = window.innerWidth;

  function documentLoaded() {
    if (wWidth < 768) {
      menuFunc();
    }

    animations();
  }

  // Make the functionality of the menu on the mobile
  function menuFunc() {
    let humIcon = document.querySelector(".hum-icon");
    let nav = document.querySelector("nav");

    humIcon.addEventListener("click", humIconClicked);

    function humIconClicked() {
      if (humIcon.classList.contains("close")) {
        humIcon.classList.remove("close");
        nav.classList.remove("show");
      } else {
        humIcon.classList.add("close");
        nav.classList.add("show");
      }
    }
  }

  // Make Animations needed using anime.js
  function animations() {
    let alreadyDone = false;

    let secondSecRatingNum = document.querySelector(".second__rating__number");

    let secondSecClientsNum = document.querySelector(
      ".second__clients__number"
    );

    makeTheAnimations();

    window.addEventListener("scroll", makeTheAnimations);

    function makeTheAnimations() {
      if (
        isInViewport(secondSecRatingNum) &&
        isInViewport(secondSecClientsNum) &&
        !alreadyDone
      ) {
        alreadyDone = true;

        let values = {
          rating: 0,
          clients: 0,
        };

        anime({
          targets: values,
          rating: 99,
          clients: 5000,
          easing: "linear",
          round: 1,
          duration: 2000,
          update: () => {
            secondSecRatingNum.innerHTML = values.rating + "%";
            secondSecClientsNum.innerHTML = values.clients + "+";
          },
        });
      } else if (
        !isInViewport(secondSecRatingNum) &&
        !isInViewport(secondSecClientsNum)
      ) {
        alreadyDone = false;
      }
    }
  }

  // Check if an element is visible on the viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
})();
