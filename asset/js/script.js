// Load More
document.addEventListener("DOMContentLoaded", () => {
  const loadmore = document.querySelector(".load-more button");
  const spinner = document.querySelector(".loading-spinner");
  const elemenList = document.querySelectorAll(".kegiatan-img img");

  let currentItems = 3;

  elemenList.forEach((img, index) => {
    if (index < currentItems) {
      img.classList.add("show");
    }
  });

  loadmore.addEventListener("click", (e) => {
    e.preventDefault();

    // Hide load more button and show the spinner
    loadmore.style.display = "none";
    spinner.classList.add("show");

    setTimeout(() => {
      const hiddenItems = [...elemenList].slice(currentItems, currentItems + 3);

      hiddenItems.forEach((img, index) => {
        setTimeout(() => {
          img.classList.add("show");
        }, 100 * index);
      });

      currentItems += 3;

      if (currentItems < elemenList.length) {
        loadmore.style.display = "block";
      }

      spinner.classList.remove("show");
    }, 2000);
  });
});

// Animation scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hide");
hiddenElements.forEach((el) => observer.observe(el));

// auto fit href
document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll("nav a[href^='#']");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: "smooth",
        });
      }
    });
  });
});

// Toggle Burger Menu
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector(".menu");

  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Toggle DarkMode
// function toggleDarkMode() {
//   const body = document.body;
//   const iconMoon = document.querySelector(".icon-moon");
//   const iconSun = document.querySelector(".icon-sun");

//   body.classList.toggle("dark-mode");

//   if (body.classList.contains("dark-mode")) {
//     iconMoon.classList.add("hidden");
//     iconSun.classList.remove("hidden");
//   } else {
//     iconMoon.classList.remove("hidden");
//     iconSun.classList.add("hidden");
//   }
// }

// Toggle DarkMode
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const iconMoon = document.querySelector(".icon-moon");
  const iconSun = document.querySelector(".icon-sun");

  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    iconMoon.classList.add("hidden");
    iconSun.classList.remove("hidden");
  }

  const darkModeToggle = document.querySelector(".dark");
  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      iconMoon.classList.add("hidden");
      iconSun.classList.remove("hidden");
    } else {
      localStorage.setItem("darkMode", "disabled");
      iconMoon.classList.remove("hidden");
      iconSun.classList.add("hidden");
    }
  });
});
