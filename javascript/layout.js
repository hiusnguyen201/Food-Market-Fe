window.onscroll = () => {
  const btn = document.querySelector(".backToTop-btn");

  if(window.scrollY >= 100) {
    btn.classList.add("show");

    btn.addEventListener("click", () => {
      btn.style.overflow = "auto";
      window.scrollTo(0, 0);
    }, false); 
  } else {
    btn.classList.remove("show");
  }
}

window.onload = async () => {
  // Check Url
  let urlHeader, urlFooter;
  if (location.pathname.includes("parts")) {
    urlHeader = "../layout/header.html";
    urlFooter = "../layout/footer.html";
  } else {
    urlHeader = "./layout/header.html";
    urlFooter = "./layout/footer.html";
  }

  // Load Header
  const header = document.getElementById("header");
  const resHeader = await fetch(urlHeader);
  try {
    header.innerHTML = await resHeader.text();
  } catch (err) {
    console.log("Error: ", err);
  }

  // Load Footer
  const footer = document.getElementById("footer");
  const resFooter = await fetch(urlFooter);
  try {
    footer.innerHTML = await resFooter.text();
  } catch (err) {
    console.log("Error: ", err);
  }
};

var openSlideNav = () => {
  if (window.innerWidth > 900) {
    return;
  }
  const navbar = document.getElementById("navbar");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  navbar.classList.add("show");
};

var closeSlideNav = () => {
  if (window.innerWidth > 900) {
    return;
  }
  const navbar = document.getElementById("navbar");
  const overlay = document.getElementById("overlay");
  const productMenu = document.getElementById("product-menu");
  const productBtn = document.getElementById("product-btn");

  overlay.style.display = "none";
  navbar.classList.remove("show");
  productMenu.style.display = "none";
  productBtn.classList.remove("active");
};

var openProductMenu = () => {
  if (window.innerWidth > 900) {
    return;
  } else {
  }
  const productMenu = document.getElementById("product-menu");
  const productBtn = document.getElementById("product-btn");
  const sortBtn = document.querySelector("i.fa-solid.fa-caret-right.sort-icon");

  if (productMenu.style.display === "block") {
    productMenu.style.display = "none";
    sortBtn.classList.remove("active");
    productBtn.classList.remove("active");
  } else {
    productMenu.style.display = "block";
    sortBtn.classList.add("active");
    productBtn.classList.add("active");
  }
};

var openTypeProduct = () => {
  if (window.innerWidth > 900) {
    return;
  }
  const typeList = document.getElementById("type-list");
  const typeBtn = document.getElementById("type-btn");

  if (typeList.style.display === "block") {
    typeList.style.display = "none";
    typeBtn.classList.remove("active");
  } else {
    typeList.style.display = "block";
    typeBtn.classList.add("active");
  }
};
var addColor = () => {
  if (window.innerWidth < 900) {
    return;
  }
  const productMenu = document.getElementById("product-menu");
  const productBtn = document.getElementById("product-btn");
  const sortBtn = document.querySelector("i.fa-solid.fa-caret-right.sort-icon");

  sortBtn.classList.add("active");
  productBtn.classList.add("active");
  productMenu.classList.add("d-block");
};

var removeColor = () => {
  if (window.innerWidth < 900) {
    return;
  }
  const productMenu = document.getElementById("product-menu");
  const productBtn = document.getElementById("product-btn");
  const sortBtn = document.querySelector("i.fa-solid.fa-caret-right.sort-icon");

  sortBtn.classList.remove("active");
  productBtn.classList.remove("active");
  productMenu.classList.remove("d-block");
};

var addSubColor = () => {
  if (window.innerWidth < 900) {
    return;
  }
  const typeList = document.getElementById("type-list");
  const typeBtn = document.getElementById("type-btn");

  typeBtn.classList.add("active");
  typeList.classList.add("d-block");
};

var removeSubColor = () => {
  if (window.innerWidth < 900) {
    return;
  }
  const typeList = document.getElementById("type-list");
  const typeBtn = document.getElementById("type-btn");

  typeBtn.classList.remove("active");
  typeList.classList.remove("d-block");
};