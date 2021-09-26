(function IIFEinit() {
  window.addEventListener("load", documentLoaded);

  AOS.init();

  let wWidth = window.innerWidth;

  function documentLoaded() {
    menuFunc();

    animations();

    popupShowHideAndThemeChangeFunc();
  }

  // Theme popup show/hide and theme change functionality
  function popupShowHideAndThemeChangeFunc() {
    let popupBox = document.querySelector(".theme-mode-popup");
    let popupBodyBgc = document.querySelector(".popup-bgc-body");
    let popupInput = document.querySelector(".theme-mode-input");
    let closePopupIcon = document.querySelector(".close-popup");

    popupInput.addEventListener("click", changeTheme);
    closePopupIcon.addEventListener("click", function () {
      popupBox.style.display = "none";
      popupBodyBgc.style.display = "none";
    });

    let id = setTimeout(() => {
      popupBodyBgc.style.display = "block";
      popupBox.style.top = "40px";
      clearTimeout(id);
    }, 3000);

    function changeTheme() {
      if (popupBox.classList.contains("on")) {
        popupBox.classList.remove("on");
        document.body.className = "dark-mode";
      } else {
        popupBox.classList.add("on");
        document.body.className = "light-mode";
      }
    }
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
          duration: 1400,
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
