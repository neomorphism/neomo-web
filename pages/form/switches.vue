<template>
  <div>
    <h1>Switches</h1>
    <client-only>
      <p class="bottom-border">
        Switches are very convenient for you to handle some events like on-off
        transitions. Neomo switches don’t require JavaScript. You can simply
        apply the animation by CSS.
      </p>
    </client-only>

    <div class="tab">
      <ul class="tab-content outset-neomo">
        <!-- Content-1 Start -->
        <li id="content-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Color</h2></div>

          <!-- Content-1 color start -->
          <div class="card inset-neomo code-exam">
            <div class="mt-2 mb-3" style="display: flow-root">
              <button
                class="button outset-neomo button-exam"
                onclick="ContentToggle()"
              >
                <i class="fas fa-code collapse"></i>
              </button>
            </div>

            <div class="mt-2 expanded">
              <nuxt-content :document="color" />
            </div>

            <div class="container column size-2 p-5" style="background: white">
              <label class="switch-label">
                <input type="checkbox" />
                <span class="switch"></span>
              </label>
            </div>
            <div class="container neomo column size-2 p-5">
              <label class="switch-label">
                <input type="checkbox" />
                <span class="switch outset-neomo"></span>
              </label>
            </div>
            <div class="container gray column size-2 p-5">
              <label class="switch-label">
                <input type="checkbox" />
                <span class="switch outset-gray"></span>
              </label>
            </div>

            <div class="container dark column size-2 p-5">
              <label class="switch-label">
                <input type="checkbox" />
                <span class="switch outset-dark"></span>
              </label>
            </div>
          </div>

          <!-- Content-1 color end -->

          <!-- Content-1 end -->
        </li>
      </ul>

      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a id="tab-1" class="current">Color</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const color = await $content(params.slug || "form/switches/color").fetch();

    return {
      color,
    };
  },
};
</script>
