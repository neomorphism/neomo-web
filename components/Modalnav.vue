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
          <a id="introduction2" href="/getting_started/introduction"
            >Introduction</a
          >
          <a id="download2" href="/getting_started/download">Download</a>
          <a id="modifiers2" href="/getting_started/modifiers"
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
          <a id="columns2" href="/layout/columns">Columns</a>
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
          <a id="alert2" href="/components/alert">Alert</a>
          <a id="badge2" href="/components/badge">Badge</a>
          <a id="breadcrumb2" href="/components/breadcrumb">Breadcrumb</a>
          <a id="button2" href="/components/button">Button</a>
          <a id="card2" href="/components/card">Card</a>
          <a id="dropdown2" href="/components/dropdown">Dropdown</a>
          <a id="icon2" href="/components/icon">Icon</a>
          <a id="modal2" href="/components/modal">Modal</a>
          <a id="navbar2" href="/components/navbar">Navbar</a>
          <a id="navigation2" href="/components/navigation">Navigation</a>
          <a id="pagination2" href="/components/pagination">Pagination</a>
          <a id="progressbar2" href="/components/progressbar">Progressbar</a>
          <a id="select2" href="/components/select">Select</a>
          <a id="spinner2" href="/components/spinner">Spinner</a>
          <a id="tab2" href="/components/tab">Tab</a>
          <a id="toast2" href="/components/toast">Toast</a>
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
          <a id="table2" href="/content/table">Table</a>
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
          <a id="checkbox2" href="/form/checkbox">Checkbox</a>
          <a id="file2" href="/form/file">File</a>
          <a id="input2" href="/form/input">Input</a>
          <a id="radio2" href="/form/radio">Radio</a>
          <a id="range2" href="/form/range">Range</a>
          <a id="switches2" href="/form/switches">Switches</a>
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
          <a id="coloredLinks2" href="/helpers/coloredLinks">Colored Links</a>
          <a id="typography2" href="/helpers/typography">Typography</a>
        </div>
      </div>
      <!-- Helpers list end -->

      <!-- Template start -->
      <div class="template">
        <a class="template-link" href="/template">Template</a>
      </div>
      <!-- Template end -->
    </div>
  </div>

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
    if (location.href !== "https://neomo-ui.com/") {
      let pageSplit = page.split("/");
      pageSplit = pageSplit[pageSplit.length - 1] + "2";

      if (pageSplit !== "" && pageSplit !== "template2" && pageSplit !== "2") {
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
    }
  },
};
</script>

<style scoped>
/* Left Navigation Start */
.navbar {
  z-index: 1;
  left: 0;
  overflow-x: hidden;
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
.modal {
  width: 100vw;
  z-index: 1;
}

.template {
  margin: 5px 0 0 0;
  padding: 6px 8px 6px 16px;
  border-top: thin solid rgba(0, 0, 0, 0.07);
}
.template-link {
  color: #818181;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
.template-link:hover {
  color: rgb(78, 108, 245) !important;
}
</style>
