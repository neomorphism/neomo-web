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
        <span style="color: grey; font-size: 0.86rem">v1.0.0</span>
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

    <!-- Contents Start -->
    <main id="content-layout" class="pb-0">
      <div style="transform-origin: center top 0">
        <nuxt />
      </div>
    </main>
    <!-- Contents End -->

    <!-- Footer Start -->
    <footer class="footer">
      <div>
        <div class="footer-icon">
          <a href="https://github.com/neomorphism/neomo">
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a href="/"><i class="fab fa-facebook fa-2x ml-10 mr-10"></i></a>
          <a href="/"><i class="fab fa-instagram fa-2x"></i></a>
        </div>

        <div class="mb-0 footer-font">
          Designed and built with all the love in the world by the
          <a
            class="mt-3"
            href="https://github.com/neomorphism/neomo"
            style="color: grey"
            >AST
          </a>
          with the help of
          <a href="https://github.com/neomorphism/neomo" style="color: grey"
            >Our Contributors</a
          >.

          <p class="mt-5">Currently v1.0.0 - beta.</p>
          <p class="pb-10">
            Released under the <a style="color: grey">MIT License.</a>
          </p>
        </div>
      </div>
    </footer>
    <!-- Footer End -->
  </div>
</template>

<script>
export default {}
</script>

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
a:link,
a:visited,
a:active,
a:hover,
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
  margin: 56px 350px 0 350px !important;
}

.footer {
  background: #212121;
  color: rgb(216, 216, 216);
  text-align: center;
  width: 100%;
}
.footer p {
  margin-bottom: 5px;
}
.footer-icon {
  display: inline-block;
  margin-top: 40px;
  margin-bottom: 40px;
}
.footer-icon > a {
  color: rgb(209, 209, 209);
}
</style>
