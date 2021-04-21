/* eslint-disable */
/* Alert function start */
document.addEventListener("DOMContentLoaded", function () {
  var alt = document.querySelector("alt-close");

  if (alt !== null) {
    alt.addEventListener("click", function () {
      alt.parentElement.style.display = "none";
    });
  }
});
/* Alert function end */

/* Dropdown function start */
function DropdownToggle() {
  var dropdown = document.getElementsByClassName("dropdown-toggle--button");
  var dropdown_content = document.getElementsByClassName(
    "dropdown-toggle--content"
  );
  var i;
  for (i = 0; i < dropdown.length; i++) {
    if (
      event.target === dropdown[i] ||
      event.target === dropdown[i].childNodes[1]
    ) {
      dropdown_content[i].style.display = "block";
    }
  }
}
/* Dropdown function end */

/* File function start */
document.addEventListener("DOMContentLoaded", function () {
  var file = document.querySelectorAll(".file .file-hidden");

  file.forEach(function (element) {
    element.addEventListener("change", function () {
      if (window.FileReader) {
        var filename = this.files[0].name;
      }
      this.parentNode.getElementsByClassName("file-name")[0].value = filename;
    });
  });
});
/* File function end */

/* Modal function start */
function ModalOpen() {
  var modal = document.getElementById("Modal");
  var btn = document.getElementById("ModalBtn");
  var span = document.getElementsByClassName("modal-close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
/* Modal function end */

/* Tab function starzt */
function TabToggle() {
  $("ul.tab-list li").click(function () {
    var activeTab = $(this).attr("data-tab");
    $("ul.tab-list li").removeClass("current");
    $(".tab-content").removeClass("current");
    $(this).addClass("current");
    $("#" + activeTab).addClass("current");
  });
}
/* Tab function end */

/* navbarToggle end */
function NavbarToggle() {
  var toggle = document.getElementsByClassName("toggle-button");
  var i;
  console.log(event.target);
  for (i = 0; i < toggle.length; i++) {
    if (toggle[i] === event.target) {
      toggle[i].classList.toggle("active");
      var toggleContent = toggle[i].nextElementSibling;
      if (toggleContent.style.display === "block") {
        toggleContent.style.display = "none";
      } else {
        toggleContent.style.display = "block";
      }
    }
  }
}
/* navbarToggle end */
