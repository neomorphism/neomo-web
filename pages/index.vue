<template>
  <div class="neomo">
    <div class="main-body" style="padding: 80px 0 80px 0">
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

      <div style="margin-bottom: 50px">
        <span class="font" style="width: 100vw">WELCOME TO</span>
        <p
          style="
            font-weight: 900;
            font-size: 6rem;
            margin-top: 5px;
            margin-bottom: 0;
          "
        >
          NEOMO
        </p>
        <div style="margin-top: 30px">
          <p>
            Neomo is a reactive framework designed to help developers develop
            web and app designs with neomorphism.
          </p>
          <p style="margin-top: 10px">Try using it right now.</p>
        </div>
      </div>

      <!-- Button Start -->
      <div>
        <button class="button outset-neomo index-btn" to="/table">
          <span class="ma-0 button-font">GET STARTED</span>
        </button>
        <button class="button outset-neomo index-btn">
          <span class="ma-0 button-font">DOWNLOAD</span>
          <span style="margin: 7px 0 0 5px; font-size: 0.7rem; color: grey">
            v0.0.1
          </span>
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
  width: 100vw;
  background-color: #eff8ff;
}
/* body Custom CSS End */

/* font Custom CSS Start */
.font {
  font-size: 2.5rem;
  color: rgb(117, 117, 117);
}
/* font Custom CSS End */

/* Button Custom CSS Start */
.button-font {
  font-size: 1.3rem;
}

.index-btn {
  width: 250px;
  min-height: 70px;
  margin: 10px 50px 0 50px;
  color: #747373 !important;
  border-radius: 100px;
  border: none;
}

.index-btn:focus {
  outline: 0;
}

.index-btn:hover {
  border: none;
  background: var(--neomo);
  box-shadow: inset 5px 5px 9px #cad3da, inset -5px -5px 9px #ebf1f5 !important;
}
/* Button Custom CSS End */

#content-layout {
  margin: 56px 0 210px 0 !important;
}
</style>
