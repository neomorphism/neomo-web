<template>
  <div>
    <h1>Template</h1>
    <client-only>
      <p class="bottom-border">You can use a template that is already made!</p>
    </client-only>

    <div class="columns">
      <div class="column">
        <div>
          <a href="#">
            <img
              src="https://onepagelove.imgix.net/2020/01/opl-master-15-04-23-435.jpg?w=360&max-h=480&fit=crop&fp-y=0&auto=compress"
              style="width: 360px; height: 480px"
            />
          </a>
        </div>
        <div>
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

      <div class="column">
        <div>
          <a href="#">
            <img
              src="https://onepagelove.imgix.net/2020/01/opl-master-15-04-23-435.jpg?w=360&max-h=480&fit=crop&fp-y=0&auto=compress"
              style="width: 360px; height: 480px"
            />
          </a>
        </div>
        <div>
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
  width: 150px;
  min-height: 70px;
  margin: 10px 50px 0 0;
  color: #747373 !important;
  border: none;
}
</style>
