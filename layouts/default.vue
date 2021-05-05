<template>
  <div>
    <!-- Header Start -->
    <header class="header neomo">
      <!-- Header-logo Start -->
      <div class="ml-1">
        <a class="header-logo" href="/">
          <div class="header-logo--icon">
            <img src="~/static/blacklogo.png" />
          </div>
          <div class="header-logo--name">
            <img src="~/static/logoname.png" />
          </div>
        </a>
      </div>
      <!-- Header-logo End -->

      <!-- Header-version Start -->
      <div class="header-version">
        <span>v1.0.0</span>
      </div>
      <!-- Header-version End -->

      <div class="mr-2" style="display: flex">
        <!-- Header-searchbar Start -->
        <input
          class="input header-searchbar inset-neomo"
          type="text"
          placeholder="Search Neomo"
        />
        <!-- Header-searchbar End -->
      </div>
    </header>
    <!-- Header End -->

    <div id="main-layout" class="colunm neomo">
      <!-- Left Navigation Start -->
      <div id="main-leftnav" class="container content-nav"><Leftnav /></div>
      <!-- Left Navigation End -->

      <!-- main Start -->
      <main class="pb-0 main-border">
        <div class="main">
          <nuxt />
        </div>
      </main>
      <!-- Contents End -->
    </div>
  </div>
</template>

<script>
import Leftnav from "@/components/Leftnav.vue";

export default {
  data() {
    return {
      components: {
        Leftnav,
      },
    };
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  margin: 0;
  max-width: 100%;
}
html {
  height: 100%;
  scroll-behavior: smooth;
  background: var(--neomo);
}
body {
  margin: 0;
  height: 100%;
}
/* Header CSS Start */
.header {
  display: flex;
  height: 56px;
  border-bottom: 0.1px solid rgb(233, 233, 233);
  width: 100%;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 2;
  padding-left: 7vw;
  padding-right: 7vw;
}
.header-logo {
  padding: 4px 0 0 4px;
  min-width: 200px;
  display: flex;
  height: 48px;
}
.header-logo--icon {
  margin: auto;
  max-height: 48px;
  max-width: 48px;
}
.header-logo--name {
  margin: 5px 0 0 2px;
  max-height: 48px;
  max-width: 150px;
}
.header-version {
  max-width: 10px;
  margin: auto;
  margin-left: 20px;
  color: grey;
  font-size: 0.86rem;
}
.header-searchbar {
  border: none;
  border-radius: 10px;
  box-shadow: inset -3px -3px 7px #ffffffe5,
    inset 3px 3px 5px rgba(25, 99, 228, 0.288);
  padding: 8px;
  margin: 11px;
  width: 300px;
}

/* Content CSS Start */
#main-layout {
  margin: 56px 0 0 0 !important;
  height: 100vh;
  flex: 1 1 auto;
  max-width: 100%;
}
.main {
  width: 55vw;
  margin: auto;
  padding: 20px 50px 50px 50px;
  height: 100%;
}

#main-leftnav {
  left: 0;
}

a,
a:link,
a:visited,
a:active,
a:hover,
hr {
  margin: auto;
  text-decoration: none;
}

.container {
  margin-top: 0;
}

h1 {
  font-size: 3rem;
  font-weight: 100;
  padding-top: 30px;
  padding-bottom: 20px;
  background: linear-gradient(
    90deg,
    rgba(113, 132, 255, 1) 15%,
    rgba(47, 25, 255, 0.9192051820728291) 45%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
p {
  line-height: 1.4;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #696969;
}
h2 {
  margin-top: 20px;
  margin-bottom: 20px;
  color: #575757;
}
li {
  line-height: 25px;
}
.bottom-border {
  padding-bottom: 50px;
  margin-bottom: 50px;
  border-bottom: thin solid rgba(0, 0, 0, 0.07);
}
.text-strong {
  background: none;
  padding: 0;
  color: rgb(95, 95, 95);
  font-weight: bold;
}
.nuxt-content pre {
  margin: 0;
  border: none;
  background: var(--neomo);
}

.code-exam {
  padding: 10px 80px 40px 80px !important;
  margin-bottom: 40px;
}
.expanded {
  display: none;
}
.button i {
  padding: 10px;
}
.button-exam {
  float: right;
  padding: 0;
  border-radius: 100%;
}

@media screen and (max-width: 1400px) {
  .content-nav {
    display: none !important;
  }
  .main {
    width: 100%;
  }
}
</style>
