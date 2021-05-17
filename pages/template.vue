<template>
  <div>
    <h1>Template</h1>
    <client-only>
      <p class="bottom-border">You can use a template that is already made!</p>
    </client-only>

    <div class="columns text-center">
      <div class="column card outset-neomo m-1">
        <div>
          <a href="https://neomorphism.github.io/">
            <img src="~static/template1.png" />
          </a>
        </div>
        <div class="pb-2" style="background-color: white">
          <p>Template1</p>
          <button
            class="button outset-neomo content-btn--outset"
            onclick="location.href='https://neomorphism.github.io/'"
          >
            <span class="ma-0 content-btn--font">Preview</span>
          </button>
          <button
            class="button outset-neomo content-btn--outset"
            onclick="location.href='https://github.com/neomorphism/neomorphism.github.io/archive/refs/heads/main.zip'"
          >
            <span class="ma-0 content-btn--font">Download</span>
          </button>
        </div>
      </div>

      <div class="column card outset-neomo m-1">
        <div>
          <a href="#">
            <img src="~static/template1.png" />
          </a>
        </div>
        <div class="pb-2" style="background-color: white">
          <p>Template2</p>
          <button
            class="button outset-neomo content-btn--outset"
            onclick="location.href='#'"
          >
            <span class="ma-0 content-btn--font">Preview</span>
          </button>
          <button
            class="button outset-neomo content-btn--outset"
            onclick="location.href='#'"
          >
            <span class="ma-0 content-btn--font">Download</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.content-btn--outset {
  align-items: center;
  width: 100px;
  min-height: 70px;
  margin: 10px 10px 0 10px;
  border: none;
}
</style>
