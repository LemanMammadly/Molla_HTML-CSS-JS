window.addEventListener("load", function () {
  openTab(event, "tab1");
});


function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.querySelectorAll(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots:false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  $(".menu-bar-icon").click(function () {
    $(".menu-mobile-sidebar").animate({ left: "0" }, 500);
  });

  $(".x-logo").click(function () {
    $(".menu-mobile-sidebar").animate({ left: "-45vh" }, 500);
  });

  $(".left-bottom-header").hover(
    function () {
      $(this).css({
        "background-color": "#FCB941",
        color: "#fff",
        transition: "0.5s",
      });
      $(".bars-bottom-header").attr(
        "class",
        "fa-solid fa-xmark bars-bottom-header ms-3"
      );
      $(".bars-bottom-header").css({
        "font-size": "25px",
      });
      $(".dropdown-content-header").show(300);
    },
    function () {
      $(this).css({
        "background-color": "#fff",
        color: "black",
        transition: "0.3s",
      });
      $(".bars-bottom-header").attr(
        "class",
        "fa-solid fa-bars bars-bottom-header ms-3"
      );
      $(".bars-bottom-header").css({
        "font-size": "20px",
      });
      $(".dropdown-content-header").hide(300);
    }
  );
});

let homedropdownContent = document.querySelector(".all-home-drop-down-all");

let homeDropdown = document.querySelector(".center-bottom-header-txt");
homeDropdown.addEventListener("mouseenter", function () {
  homedropdownContent.style.display = "block";
});

let isDropdownHovered = false;

homeDropdown.addEventListener("mouseenter", function () {
  homedropdownContent.style.display = "block";
});

homeDropdown.addEventListener("mouseleave", function () {
  setTimeout(function () {
    if (!isDropdownHovered) {
      homedropdownContent.style.display = "none";
    }
  }, 100);
});

homedropdownContent.addEventListener("mouseenter", function () {
  isDropdownHovered = true;
});

homedropdownContent.addEventListener("mouseleave", function () {
  isDropdownHovered = false;
  homedropdownContent.style.display = "none";
});

let shopDropdown = document.querySelector(".shop-li");
let shopDropDownContent = document.querySelector(".all-shop-drop-down-all");

shopDropdown.addEventListener("mouseenter", function () {
  shopDropDownContent.style.display = "block";
});

shopDropdown.addEventListener("mouseleave", function () {
  setTimeout(function () {
    if (!isDropdownHovered) {
      shopDropDownContent.style.display = "none";
    }
  }, 100);
});

shopDropDownContent.addEventListener("mouseenter", function () {
  isDropdownHovered = true;
});

shopDropDownContent.addEventListener("mouseleave", function () {
  isDropdownHovered = false;
  shopDropDownContent.style.display = "none";
});

let prodDropdown = document.querySelector(".prod-li");
let prodDropDownContent = document.querySelector(".all-prod-drop-down-all");

prodDropdown.addEventListener("mouseenter", function () {
  prodDropDownContent.style.display = "block";
});

prodDropdown.addEventListener("mouseleave", function () {
  setTimeout(function () {
    if (!isDropdownHovered) {
      prodDropDownContent.style.display = "none";
    }
  }, 100);
});

prodDropDownContent.addEventListener("mouseenter", function () {
  isDropdownHovered = true;
});

prodDropDownContent.addEventListener("mouseleave", function () {
  isDropdownHovered = false;
  prodDropDownContent.style.display = "none";
});

let pagesDropdown = document.querySelector(".pages-li");
let pagesDropDownContent = document.querySelector(".all-pages-drop-down-all");

pagesDropdown.addEventListener("mouseenter", function () {
  pagesDropDownContent.style.display = "block";
});

pagesDropdown.addEventListener("mouseleave", function () {
  setTimeout(function () {
    if (!isDropdownHovered) {
      pagesDropDownContent.style.display = "none";
    }
  }, 100);
});

pagesDropDownContent.addEventListener("mouseenter", function () {
  isDropdownHovered = true;
});

pagesDropDownContent.addEventListener("mouseleave", function () {
  isDropdownHovered = false;
  pagesDropDownContent.style.display = "none";
});

let blogDropdown = document.querySelector(".blog-li");
let blogDropDownContent = document.querySelector(".all-blog-drop-down-all");

blogDropdown.addEventListener("mouseenter", function () {
  blogDropDownContent.style.display = "block";
});

blogDropdown.addEventListener("mouseleave", function () {
  setTimeout(function () {
    if (!isDropdownHovered) {
      blogDropDownContent.style.display = "none";
    }
  }, 100);
});

blogDropDownContent.addEventListener("mouseenter", function () {
  isDropdownHovered = true;
});

blogDropDownContent.addEventListener("mouseleave", function () {
  isDropdownHovered = false;
  blogDropDownContent.style.display = "none";
});

let elemDropdown = document.querySelector(".elem-li");
let elemDropDownContent = document.querySelector(".all-elements-drop-down-all");

elemDropdown.addEventListener("mouseenter", function () {
  elemDropDownContent.style.display = "block";
});

elemDropdown.addEventListener("mouseleave", function () {
  setTimeout(function () {
    if (!isDropdownHovered) {
      elemDropDownContent.style.display = "none";
    }
  }, 100);
});

elemDropDownContent.addEventListener("mouseenter", function () {
  isDropdownHovered = true;
});

elemDropDownContent.addEventListener("mouseleave", function () {
  isDropdownHovered = false;
  elemDropDownContent.style.display = "none";
});

let li = document.querySelectorAll(".bottom-header-ul li");
li.forEach((item) => {
  item.addEventListener("click", function () {
    li.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});


window.addEventListener("load", function () {
  openTab1(event, "tabs1");
});

function openTab1(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks-featured");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


window.addEventListener("load", function () {
  openTab2(event, "tab11");
});

function openTab2(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent-trending");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks-trend");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}