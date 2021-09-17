(function IIFEinit() {
  window.addEventListener("load", documentLoaded);

  let wWidth = window.innerWidth;

  function documentLoaded() {
    if (wWidth < 768) {
      menuFunc();
    }
  }

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
})();
