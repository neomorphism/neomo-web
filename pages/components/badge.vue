<template>
  <div>
    <h1>Badge</h1>
    <client-only>
      <p class="bottom-border">
        By using the example code, you can use the alarm message quickly and
        easily.
      </p>
    </client-only>

    <div class="tab">
      <ul class="tab-content outset-neomo">
        <!-- Content-1 Start -->
        <li id="content-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Basic</h2></div>

          <div class="tab-content--text"><h3>Outset</h3></div>
          <div>
            <!-- Content-1 Outset start -->
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  data-collapse-id="collapse1"
                  class="button outset-neomo button-exam collapse"
                  aria-label="code button"
                >
                  <i class="fas fa-code"></i>
                </button>
              </div>
              <div data-collapse-id="collapse1" class="mt-2 expanded">
                <nuxt-content :document="basicOutset" />
              </div>

              <div style="text-align: center">
                <span class="badge outset-neomo">NEOMO</span>
              </div>
            </div>
            <!-- Content-1 Outset end -->

            <!-- Content-1 Inset start -->
            <div class="tab-content--text"><h3>Inset</h3></div>
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  data-collapse-id="collapse2"
                  class="button outset-neomo button-exam collapse"
                  aria-label="code button"
                >
                  <i class="fas fa-code"></i>
                </button>
              </div>
              <div data-collapse-id="collapse2" class="mt-2 expanded">
                <nuxt-content :document="basicInset" />
              </div>

              <div style="text-align: center">
                <span class="badge inset-neomo">NEOMO</span>
              </div>
            </div>
          </div>
          <!-- Content-1 Inset end -->
        </li>
        <!-- Content-1 end -->

        <!-- Content-2 Start -->
        <li id="content-2" class="tab-content--list">
          <div class="tab-content--title"><h2>Color</h2></div>

          <div class="tab-content--text"><h3>Color</h3></div>
          <div>
            <!-- Content-2 Color start -->
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  data-collapse-id="collapse3"
                  class="button outset-neomo button-exam collapse"
                  aria-label="code button"
                >
                  <i class="fas fa-code"></i>
                </button>
              </div>
              <div data-collapse-id="collapse3" class="mt-2 expanded">
                <nuxt-content :document="color" />
              </div>

              <div style="text-align: center">
                <span class="badge outset-neomo info">NEOMO</span>
                <span class="badge outset-neomo success">NEOMO</span>
                <span class="badge outset-neomo danger">NEOMO</span>
                <span class="badge outset-neomo warning">NEOMO</span>
              </div>
            </div>
          </div>
          <!-- Content-2 Color end -->
        </li>
        <!-- Content-2 end -->

        <!-- Content-3 Start -->
        <li id="content-3" class="tab-content--list">
          <div class="tab-content--title"><h2>Size</h2></div>

          <div class="tab-content--text"><h3>Size</h3></div>
          <div>
            <!-- Content-3 size start -->
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  data-collapse-id="collapse4"
                  class="button outset-neomo button-exam collapse"
                  aria-label="code button"
                >
                  <i class="fas fa-code"></i>
                </button>
              </div>
              <div data-collapse-id="collapse4" class="mt-2 expanded">
                <nuxt-content :document="size" />
              </div>

              <div style="text-align: center">
                <span class="badge outset-neomo badge-sm">NEOMO</span>
                <span class="badge outset-neomo badge-md">NEOMO</span>
                <span class="badge outset-neomo badge-rg">NEOMO</span>
              </div>
            </div>
          </div>
          <!-- Content-3 size end -->
        </li>
        <!-- Content-3 end -->
      </ul>
      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a id="tab-1" class="current">Basic</a></li>
        <li><a id="tab-2">Color</a></li>
        <li><a id="tab-3">Size</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const basicOutset = await $content(
      params.slug || "components/badge/basic-outset"
    ).fetch();
    const basicInset = await $content(
      params.slug || "components/badge/basic-inset"
    ).fetch();
    const color = await $content(
      params.slug || "components/badge/color"
    ).fetch();
    const size = await $content(params.slug || "components/badge/size").fetch();

    return {
      basicOutset,
      basicInset,
      color,
      size,
    };
  },
};
</script>
