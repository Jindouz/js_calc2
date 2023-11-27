const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "assets/SunIcon.svg";
const moonIcon = "assets/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");


// Swaps the stylesheet to achieve dark mode.
function changeTheme() {
  const theme = document.getElementById("theme");
  setTimeout(() => {
    toast.innerHTML = "Calculator";
  }, 1500);
  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);
    themeIcon.setAttribute("src", sunIcon);

  } else {
    theme.setAttribute("href", lightTheme);
    themeIcon.setAttribute("src", moonIcon);

  }
}
