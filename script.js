const themeButton = document.getElementById("theme-btn");

if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.toggle("dark-mode");
  themeButton.classList.replace("uil-moon", "uil-sun");
} else {
  themeButton.classList.replace("uil-sun", "uil-moon");
}

themeButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");

  localStorage.setItem("dark-mode", isDarkMode ? "true" : "false");

  themeButton.classList.toggle("uil-sun", isDarkMode);
  themeButton.classList.toggle("uil-moon", !isDarkMode);
});

const menuButton = document.querySelectorAll("#menubar");
const sideMenu = document.getElementById("sidemenu");

menuButton.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("hello");
    sideMenu.classList.toggle("hidden");
  });
});

if (window.innerWidth >= 992) {
  sideMenu.style.display = "flex";
} else {
  sideMenu.style.display = "none";
}
