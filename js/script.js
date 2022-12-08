//Pojawianie się Profile

let profile = document.querySelector(".header .flex .profile");

document.querySelector("#user-btn").onclick = () => {
  profile.classList.toggle("active");
  navbar.classList.remove("active");
};

//Pojawianie się nawigacji

let navbar = document.querySelector(".header .flex .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  profile.classList.remove("active");
};

//Jedno okno, albo profile, albo navbar

window.onscroll = () => {
  profile.classList.remove("active");
  navbar.classList.remove("active");
};
