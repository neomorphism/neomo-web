<template>
  <!-- Left Navigation Start -->
  <div class="left-nav">
    <!-- Overview list start -->
    <button class="toggle-button" @click="LeftNavToggle">
      Overview
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="toggle-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
    <!-- Overview list end -->

    <!-- Customize list start -->
    <button class="toggle-button" @click="LeftNavToggle">
      Customize
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="toggle-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
    <!-- Customize list end -->

    <!-- Columns list start -->
    <button class="toggle-button" @click="LeftNavToggle">
      Columns
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="toggle-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
    <!-- Columns list start -->

    <!-- Element list start -->
    <button class="toggle-button" @click="LeftNavToggle">
      Element
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="toggle-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
    <!-- Element list end -->

    <!-- Components list start -->
    <button class="toggle-button" @click="LeftNavToggle">
      Components
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="toggle-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
    <!-- Components list start -->

    <!-- Form list start -->
    <button class="toggle-button" @click="LeftNavToggle">
      Form
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="toggle-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
    <!-- Form list start -->

    <!-- Layout list start -->
    <button class="toggle-button" @click="LeftNavToggle">
      Layout
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="toggle-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
    <!-- Layout list start -->

    <!-- Helpers list start -->
    <button class="toggle-button" @click="LeftNavToggle">
      Helpers
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="toggle-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
    <!-- Helpers list start -->
  </div>
  <!-- Left Navigation End-->
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    LeftNavToggle() {
      var toggle = document.getElementsByClassName('toggle-button')
      var i

      for (i = 0; i < toggle.length; i++) {
        if (toggle[i] === event.target) {
          toggle[i].classList.toggle('active')
          var toggleContent = toggle[i].nextElementSibling
          if (toggleContent.style.display === 'block') {
            toggleContent.style.display = 'none'
          } else {
            toggleContent.style.display = 'block'
          }
        }
      }
    },
  },
}
</script>

<style>
/* Left Navigation Start */
.left-nav {
  width: 200px;
  height: 100%;
  z-index: 1;
  top: 56px;
  bottom: 600px;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
}
.left-nav .toggle-button {
  margin-top: 5px;
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 1rem;
  color: #818181;
  display: block;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  outline: none;
}
.left-nav .toggle-button:hover {
  color: rgb(48, 84, 241);
}
.active {
  border: none;
  border-radius: 10px;
  box-shadow: inset 3px 3px 5px #b8b9be, inset -3px -3px 5px #fff !important;
}
.left-nav .toggle-content {
  display: none;
  padding-left: 30px;
}
.left-nav .toggle-content a {
  text-decoration: none;
  font-size: 0.9rem;
  display: block;
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding-bottom: 5px;
  color: #818181;
}
.left-nav .toggle-content a:hover {
  color: rgb(48, 84, 241);
}
.left-nav .fa-caret-down {
  float: right;
  padding-right: 8px;
}
</style>
