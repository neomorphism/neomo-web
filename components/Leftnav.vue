<template>
  <!-- Left Navigation Start -->
  <div class="navbar">
    <!-- Getting Started list start -->
    <div class="card outset-neomo">
      <div>
        <button class="toggle-button" @click="ToggleIcon">
          Getting Started
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="toggle-content">
          <a id="introduction" href="/getting_started/introduction"
            >Introduction</a
          >
          <a id="download" href="/getting_started/download">Download</a>
          <a id="modifiers" href="/getting_started/modifiers"
            >Modifiers syntax</a
          >
        </div>
      </div>
      <!-- Getting Started list end -->

      <!-- Layout list start -->
      <div>
        <button class="toggle-button" @click="ToggleIcon">
          Layout
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="toggle-content">
          <a id="columns" href="/layout/columns">Columns</a>
        </div>
      </div>
      <!-- Layout list end -->

      <!-- Components list start -->
      <div>
        <button class="toggle-button" @click="ToggleIcon">
          Components
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="toggle-content">
          <a id="alert" href="/components/alert">Alert</a>
          <a id="badge" href="/components/badge">Badge</a>
          <a id="breadcrumb" href="/components/breadcrumb">Breadcrumb</a>
          <a id="button" href="/components/button">Button</a>
          <a id="card" href="/components/card">Card</a>
          <a id="dropdown" href="/components/dropdown">Dropdown</a>
          <a id="icon" href="/components/icon">Icon</a>
          <a id="modal" href="/components/modal">Modal</a>
          <a id="navbar" href="/components/navbar">Navbar</a>
          <a id="navigation" href="/components/navigation">Navigation</a>
          <a id="pagination" href="/components/pagination">Pagination</a>
          <a id="progressbar" href="/components/progressbar">Progressbar</a>
          <a id="select" href="/components/select">Select</a>
          <a id="spinner" href="/components/spinner">Spinner</a>
          <a id="tab" href="/components/tab">Tab</a>
          <a id="toast" href="/components/toast">Toast</a>
        </div>
      </div>
      <!-- Components list end -->

      <!-- Content list start -->
      <div>
        <button class="toggle-button" @click="ToggleIcon">
          Content
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="toggle-content">
          <a id="table" href="/content/table">Table</a>
        </div>
      </div>
      <!-- Content list end -->

      <!-- Form list start -->
      <div>
        <button class="toggle-button" @click="ToggleIcon">
          Form
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="toggle-content">
          <a id="checkbox" href="/form/checkbox">Checkbox</a>
          <a id="file" href="/form/file">File</a>
          <a id="input" href="/form/input">Input</a>
          <a id="radio" href="/form/radio">Radio</a>
          <a id="range" href="/form/range">Range</a>
          <a id="switches" href="/form/switches">Switches</a>
        </div>
      </div>
      <!-- Form list end -->

      <!-- Helpers list start -->
      <div>
        <button class="toggle-button" @click="ToggleIcon">
          Helpers
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="toggle-content">
          <a id="coloredLinks" href="/helpers/coloredLinks">Colored Links</a>
          <a id="typography" href="/helpers/typography">Typography</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Helpers list end -->

  <!-- Left Navigation End-->
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    ToggleIcon() {
      var toggle = document.getElementsByClassName("toggle-button");
      var i;

      if (
        event.target.classList[1] === "fa-caret-down" ||
        event.target.classList[1] === "fa-caret-up"
      ) {
        for (i = 0; i < toggle.length; i++) {
          if (toggle[i] === event.target.parentElement) {
            toggle[i].classList.toggle("active");
            var toggleContent = toggle[i].nextElementSibling;

            if (toggleContent.style.visibility === "visible") {
              toggleContent.style.visibility = "hidden";
              toggleContent.style.maxHeight = "0";
              toggleContent.style.opacity = "0";
            } else {
              toggleContent.style.visibility = "visible";
              toggleContent.style.maxHeight = "100vh";
              toggleContent.style.opacity = "1";
            }
          }

          if (toggle[i] === event.target.parentElement) {
            if (toggle[i].childNodes[1].classList[1] === "fa-caret-down") {
              toggle[i].childNodes[1].className = "fa fa-caret-up";
            } else if (toggle[i].childNodes[1].classList[1] === "fa-caret-up") {
              toggle[i].childNodes[1].className = "fa fa-caret-down";
            }
          }
        }
      } else {
        for (i = 0; i < toggle.length; i++) {
          if (toggle[i] === event.target) {
            if (toggle[i].childNodes[1].classList[1] === "fa-caret-down") {
              toggle[i].childNodes[1].className = "fa fa-caret-up";
            } else if (toggle[i].childNodes[1].classList[1] === "fa-caret-up") {
              toggle[i].childNodes[1].className = "fa fa-caret-down";
            }
          }
        }
      }
    },
  },
  mounted() {
    let page = location.href;
    let pageSplit = page.split("/");
    pageSplit = pageSplit[pageSplit.length - 1];

    if (pageSplit !== "" && pageSplit !== "template") {
      let pageID = document.getElementById(pageSplit);
      let pageContent = pageID.parentElement;
      let pageButton = pageID.parentElement.parentElement.childNodes[0];
      pageButton.childNodes[1].className = "fa fa-caret-up";
      pageButton.classList.toggle("active");
      pageContent.style.visibility = "visible";
      pageContent.style.maxHeight = "100vh";
      pageContent.style.opacity = "1";
      pageID.style.color = "rgb(48, 84, 241)";
    }
  },
};
</script>

<style scoped>
/* Left Navigation Start */
.navbar {
  width: 22vw;
  position: fixed;
  z-index: 1;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  padding-left: 8vw;
  padding-right: 20px;
  height: calc(100vh - 4rem);
}
.navbar .toggle-content a {
  padding-bottom: 10px;
}
.navbar .fa-caret-down {
  float: right;
  padding-right: 8px;
}
.navbar .fa-caret-up {
  float: right;
  padding-right: 8px;
}
.card {
  padding: 10px;
}
</style>
