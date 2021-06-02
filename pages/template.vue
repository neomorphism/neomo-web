<template>
  <div>
    <div class="header-template text-center">
      <p class="title">NEOMO Template</p>
      <client-only>
        <p>You can use a template that is already made!</p>
      </client-only>
    </div>

    <div class="columns text-center">
      <div class="columns just-center">
        <div class="column size-6 text-center p-10">
          <div class="card">
            <div class="card-title p-1 text-center">
              <span>Contact</span>
            </div>
            <div class="card-image">
              <img src="/contact.png" alt="contact page" />
            </div>
            <div class="card-content">
              <button class="button medium card-button">
                <i class="far fa-eye"> Preview</i>
              </button>
              <button class="button medium card-button">
                <i class="fas fa-code"> Source Code</i>
              </button>
            </div>
          </div>
        </div>
        <div class="column size-6 text-center p-10">
          <div class="card">
            <div class="card-title p-1 text-center">
              <span>Landing</span>
            </div>
            <div class="card-image">
              <img src="/landing.png" alt="landing page" />
            </div>
            <div class="card-content">
              <button class="button medium card-button">
                <i class="far fa-eye"> Preview</i>
              </button>
              <button class="button medium card-button">
                <i class="fas fa-code"> Source Code</i>
              </button>
            </div>
          </div>
        </div>
        <div class="column size-6 text-center p-10">
          <div class="card">
            <div class="card-title p-1 text-center">
              <span>Portfolio</span>
            </div>
            <div class="card-image">
              <img src="/portfolio.png" alt="portfolio page" />
            </div>
            <div class="card-content">
              <button class="button medium card-button">
                <i class="far fa-eye"> Preview</i>
              </button>
              <button class="button medium card-button">
                <i class="fas fa-code"> Source Code</i>
              </button>
            </div>
          </div>
        </div>
        <div class="column size-6 text-center p-10">
          <div class="card">
            <div class="card-title p-1 text-center">
              <span>Machine Learning</span>
            </div>
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80  "
                alt="Placeholder image"
              />
            </div>
            <div class="card-content">
              <button class="button medium card-button">
                <i class="far fa-eye"> Preview</i>
              </button>
              <button class="button medium card-button">
                <i class="fas fa-code"> Source Code</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
html {
  background: white !important;
}
.title {
  margin-top: 3.5rem;
  color: rgb(255, 255, 255) !important;
  font-size: 4rem !important;
  font-weight: 700;
}
.header-template p {
  color: rgb(240, 240, 240);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}
.header-template {
  background: rgb(132, 151, 247);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 1rem;
}
.content-btn--outset {
  align-items: center;
  width: 100px;
  min-height: 70px;
  margin: 10px 10px 0 10px;
  border: none;
}
.card-title {
  color: rgb(100, 100, 100);
  font-weight: 900;
  font-size: 1.5rem;
  padding: 2rem 0;
}
.card-button {
  margin: 1rem 3rem;
}
.card-button i {
  color: rgb(82, 82, 82);
  font-size: 0.9rem;
  font-weight: 700;
}
.card-button i:hover {
  color: rgb(97, 97, 255) !important;
}
.card-image > img {
  width: 100%;
  height: auto !important;
}
.main {
  width: 80vw;
  margin-top: 20vh;
  background: white !important;
}
#main-layout {
  background: white !important;
}
/* Left Navigation Start */
.navbar,
.header {
  display: none;
}
</style>
