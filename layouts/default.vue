<template>
  <div>
    <!-- Header Start -->
    <header class="header">
      <!-- Header-logo Start -->
      <div class="ml-1">
        <div class="header-logo">
          <div class="header-logo--icon">
            <img src="~/static/blacklogo2.png" />
          </div>
          <div class="header-logo--name">
            <img src="~/static/logoname1.png" />
          </div>
        </div>
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
          class="input header-searchbar"
          type="text"
          placeholder="Search Neomo"
        />
        <!-- Header-searchbar End -->
        <hr class="header-hr" />
        <!-- Header-menu Start -->
        <a href="/table" class="header-btn"
          ><span class="font-color btn__content"> STORE </span></a
        ><a href="/" class="header-btn"
          ><span class="font-color btn__content"> TEAM </span></a
        ><a href="/" class="header-btn"
          ><span class="font-color btn__content"> OPTION </span></a
        >
        <!-- Header-menu End -->
      </div>
    </header>
    <!-- Header End -->

    <div id="main-layout" class="colunm neomo" style="display: flex">
      <!-- Left Navigation Start -->
      <div id="main-leftnav" class="container content-nav"><Leftnav /></div>
      <!-- Left Navigation End -->

      <!-- main Start -->
      <main class="pb-0 main-border">
        <div class="main">
          <nuxt />
        </div>
      </main>
      <div class="container content-nav"><Lightbar /></div>
      <!-- Contents End -->
    </div>
  </div>
</template>

<script>
import Leftnav from "@/components/Leftnav.vue";
import Lightbar from "@/components/Lightbar.vue";

export default {
  data() {
    return {
      components: {
        Leftnav,
        Lightbar,
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
  min-width: 200px;
  display: flex;
}
.header-logo--icon {
  max-height: 56px;
  max-width: 48px;
}
.header-logo--name {
  margin: auto;
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
  box-shadow: inset 1px 1px 2px #b8b9be, inset -1px -1px 2px #fff;
  padding: 8px;
  margin: 11px;
  width: 300px;
}
.header-hr {
  border: thin solid rgb(200, 200, 200);
  height: 20px;
  margin-left: 15px;
  margin-right: 15px;
}
.header-btn {
  color: rgb(179, 179, 179);
  padding: 5px;
  margin-left: 12px !important;
  margin-right: 12px !important;
}

/* Content CSS Start */
#main-layout {
  margin: 56px 0 0 0 !important;
  height: 100%;
  flex: 1 1 auto;
  max-width: 100%;
}
.main {
  width: 55vw;
  margin: auto;
  padding: 20px 50px 50px 50px;
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
  color: #414141;
}
p {
  line-height: 1.4;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #696969;
}
h2 {
  margin-top: 100px;
  margin-bottom: 20px;
  color: #414141;
}
li {
  line-height: 25px;
}
.bottom-border {
  padding-bottom: 50px;
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
  border-radius: 10px;
  background: var(--neomo);
  box-shadow: inset -3px -3px 7px #ffffffe5,
    inset 3px 3px 5px rgba(88, 100, 121, 0.288);
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
