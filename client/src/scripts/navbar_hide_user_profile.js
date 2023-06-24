function navbarHideUserProfile() {
  const userMenuButton = document.getElementById("user-menu-button");
  const userMenu = document.getElementById("user-menu");

  userMenuButton.addEventListener("click", () => {
    if (userMenu.style.visibility === "hidden") {
      userMenu.style.visibility = "visible";
    } else {
      userMenu.style.visibility = "hidden";
    }
  });
}
export default navbarHideUserProfile;