<template>
  <div class="neomo">
    <div class="main-body">
      <!-- Logo Start-->
      <div>
        <img
          lazy-src="mainlogo3.png"
          src="mainlogo3.png"
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
            Neomo is a reactive framework designed to help developers develop
            web and app designs with neomorphism.
          </p>
          <p class="font-content mt-5">Try using it right now.</p>
        </div>
      </div>

      <!-- Button Start -->
      <div>
        <button class="button outset-neomo content-btn--outset" to="/table">
          <span class="ma-0 content-btn--font">GET STARTED</span>
        </button>
        <button class="button outset-neomo content-btn--outset">
          <span class="ma-0 content-btn--font">DOWNLOAD</span>
          <span class="content-btn--version"> v0.0.1 </span>
        </button>
      </div>
      <!-- Button End -->
    </div>
  </div>
</template>

<script>
export default {}
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
  font-size: 1.3rem;
}
.content-btn--version {
  margin: 7px 0 0 5px;
  font-size: 0.7rem;
  color: grey;
}
.content-btn--outset {
  width: 250px;
  min-height: 70px;
  margin: 10px 50px 0 50px;
  color: #747373 !important;
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

#main-layout {
  margin: 56px 0 0 0 !important;
}
</style>
