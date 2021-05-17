<template>
  <div class="neomo">
    <div class="main-body">
      <!-- Logo Start-->
      <div>
        <img
          lazy-src="mainlogo.png"
          src="mainlogo.png"
          width="350"
          height="350"
        />
      </div>
      <!-- Logo End-->

      <div class="content">
        <span class="font">WELCOME TO</span>
        <p class="font-name">NEOMO</p>
        <div class="mt-10">
          <p class="font-content">
            <strong>NEOMO</strong> is a
            <strong>reactive framework</strong> designed to help developers
            develop web and app designs with <strong>neomorphism</strong>.
          </p>
          <p class="font-content mt-5">
            <strong>Try using it right now.</strong>
          </p>
        </div>
      </div>

      <!-- Button Start -->
      <div>
        <button
          class="button outset-neomo content-btn--outset"
          onclick="location.href='/getting_started/introduction'"
        >
          <span class="ma-0 content-btn--font">GET STARTED</span>
        </button>
        <button
          class="button outset-neomo content-btn--outset"
          onclick="location.href='https://github.com/neomorphism/neomo/archive/refs/tags/v1.0.1.zip'"
        >
          <span class="ma-0 content-btn--font">DOWNLOAD</span>
          <span class="content-btn--version"> v1.0.1 </span>
        </button>
      </div>
      <!-- Button End -->
    </div>
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
          <a class="mt-3" href="https://github.com/neomorphism/neomo">AST </a>
          with the help of
          <a href="https://github.com/neomorphism/neomo">Our Contributors</a>.

          <p class="mt-5">Currently v1.0.1 - beta.</p>
          <p class="pb-10">Released under the <a>MIT License.</a></p>
        </div>
      </div>
    </footer>
    <!-- Footer End -->
  </div>
</template>

<script>
export default {};
</script>

<style>
/* body Custom CSS Start */
.main-body {
  text-align: center;
  height: auto;
  margin: 0;
  background-color: #eff8ff;
  padding: 80px 0 80px 0;
}
.content {
  margin-bottom: 50px;
}

/* font Custom CSS Start */
.font {
  font-size: 2.5rem;
  color: rgb(117, 117, 117);
}
.font-name {
  font-weight: 900;
  font-size: 6rem;
  margin-top: 5px;
  margin-bottom: 0;
}
.font-content {
  font-size: 1.2rem;
  color: black;
}

/* Button Custom CSS Start */
.content-btn--font {
  font-size: 1.2rem;
}
.content-btn--version {
  margin: 7px 0 0 5px;
  font-size: 0.7rem;
  font-weight: 700;
  color: #0063e4 !important;
}
.content-btn--outset {
  width: 230px;
  min-height: 60px;
  margin: 10px 50px 0 50px;
  color: #0063e4 !important;
  border-radius: 100px;
  border: none;
}
.content-btn--outset:focus {
  outline: 0;
}
.content-btn--outset:hover {
  border: none;
  background: var(--neomo);
  box-shadow: inset 5px 5px 9px #cad3da, inset -5px -5px 9px #ebf1f5 !important;
}

/* Footer CSS Start */
.footer {
  background: #212121;
  color: rgb(216, 216, 216);
  text-align: center;
  bottom: 0;
  width: 100%;
}
.footer a {
  color: gray;
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

#main-layout {
  margin: 56px 0 0 0 !important;
}
.main {
  width: 100vw;
  padding: 0;
}
.header-menu--button {
  display: none !important;
}
button:hover {
  color: blue !important;
}
/* Left Navigation Start */
.navbar {
  display: none;
}

/* Lightbar Start */
.right-bar {
  display: none;
}
</style>
