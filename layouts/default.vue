<template>
  <div>
    <!-- Header Start -->
    <header class="header">
      <!-- Header-logo Start -->
      <div class="ml-1">
        <div style="min-width: 200px; display: flex">
          <div style="max-height: 56px; max-width: 48px">
            <img src="blacklogo2.png" />
          </div>
          <div style="margin: auto; max-height: 48px; max-width: 150px">
            <img src="logoname1.png" />
          </div>
        </div>
      </div>
      <!-- Header-logo End -->

      <!-- Header-version Start -->
      <div style="max-width: 10px; margin: auto; margin-left: 20px">
        <span style="color: grey; font-size: 0.86rem">v0.0.1</span>
      </div>
      <!-- Header-version End -->

      <div class="mr-2" style="display: flex">
        <!-- Header-searchbar Start -->
        <input
          class="input input-inset"
          type="text"
          placeholder="Search Neomo"
          style="padding: 8px; margin: 11px; width: 300px"
        />
        <!-- Header-searchbar End -->
        <hr
          aria-orientation="vertical"
          style="
            border: thin solid rgb(200, 200, 200);
            height: 20px;
            margin-left: 15px;
            margin-right: 15px;
          "
        />
        <!-- Header-menu Start -->
        <a href="/table" class="header-btn"
          ><span class="font-color v-btn__content"> STORE </span></a
        ><a href="/" class="header-btn"
          ><span class="font-color v-btn__content"> TEAM </span></a
        ><a href="/" class="header-btn"
          ><span class="font-color v-btn__content"> OPTION </span></a
        >
        <!-- Header-menu End -->
      </div>
    </header>
    <!-- Header End -->

    <!-- Contents Start -->
    <div id="content-layout" class="pb-0">
      <div style="transform-origin: center top 0">
        <nuxt />
      </div>
    </div>
    <!-- Contents End -->

    <!-- Footer Start -->
    <div></div>
    <!-- Footer End -->
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.header {
  display: flex;
  height: 56px;
  border-bottom: 0.1px solid rgb(233, 233, 233);
  width: 100%;
  position: fixed;
  top: 0;
  background-color: white;
}

.input-inset {
  border: none;
  border-radius: 10px;
  box-shadow: inset 1px 1px 2px #b8b9be, inset -1px -1px 2px #fff;
}

a,
hr {
  margin: auto;
  text-decoration: none;
}

.header-btn {
  color: rgb(179, 179, 179);
  padding: 5px;
  margin-left: 8px;
  margin-right: 8px;
}
#content-layout {
  margin: 56px 350px 250px 350px !important;
}
</style>
