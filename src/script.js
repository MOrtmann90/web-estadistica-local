AOS.init();

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menuLinks = document.querySelectorAll("a.menu-link");

menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};

menuLinks.forEach((menuLinks) => {
  menuLinks.addEventListener("click", () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
  });
});

window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

// Links routing

// Section 1
const boletinesBtn = document.querySelector("#boletines-btn");
const eheBtn = document.querySelector("#ehe-btn");
const informesBtn = document.querySelector("#informes-btn");

boletinesBtn.addEventListener("click", () => {
  window.open("boletines.html", "_blank");
});

eheBtn.addEventListener("click", () => {
  window.open("http://datos.tandil.gov.ar/dataset/ehe", "_blank");
});

informesBtn.addEventListener("click", () => {
  window.open("http://datos.tandil.gov.ar/dataset/informes-varios", "_blank");
});

// Section 2
const autoBtn = document.querySelector("#auto-btn");
const construccionBtn = document.querySelector("#construccion-btn");
const comercioBtn = document.querySelector("#comercio-btn");
const preciosBtn = document.querySelector("#precios-btn");
const turismoBtn = document.querySelector("#turismo-btn");
const industriaBtn = document.querySelector("#industria-btn");

autoBtn.addEventListener("click", () => {
  window.open(
    "http://datos.tandil.gov.ar/dataset/informe-automotriz",
    "_blank"
  );
});

construccionBtn.addEventListener("click", () => {
  window.open("http://datos.tandil.gov.ar/dataset/imac", "_blank");
});

comercioBtn.addEventListener("click", () => {
  window.open(
    "http://datos.tandil.gov.ar/dataset/comercio-minorista",
    "_blank"
  );
});

preciosBtn.addEventListener("click", () => {
  window.open("http://datos.tandil.gov.ar/dataset/precios", "_blank");
});

turismoBtn.addEventListener("click", () => {
  window.open("http://datos.tandil.gov.ar/dataset/turismo", "_blank");
});

industriaBtn.addEventListener("click", () => {
  window.open("http://datos.tandil.gov.ar/dataset/industria", "_blank");
});

// Section 3
const tableroBtn = document.querySelector("#tablero-btn");

tableroBtn.addEventListener("click", () => {
  window.open(
    "http://datos.tandil.gov.ar/dataset/tablero-de-indicadores-economicos",
    "_blank"
  );
});
