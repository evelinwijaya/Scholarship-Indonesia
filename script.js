// // class active
// const navbarNav = document.querySelector(".navbar-nav");

// // saat hamburger menu diclick
// document.querySelector("#hamburger-menu");
// onclick = () => {
//   navbarNav.classList.toggle("active");
// };

const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const dropdownToggle = document.querySelector(".dropdown-toggle");

hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};

dropdownToggle.onclick = (e) => {
  e.preventDefault();
  const dropdown = e.currentTarget.closest(".dropdown");
  dropdown.classList.toggle("active");
};

feather.replace();
