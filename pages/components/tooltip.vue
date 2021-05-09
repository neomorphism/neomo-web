<template>
  <div>
    <h1>Tooltip</h1>
    <client-only>
      <p class="bottom-border"></p>
    </client-only>

    <div class="tab">
      <ul class="tab-content outset-neomo">
        <!-- Content-1 Start -->
        <li id="content-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Basic</h2></div>

          <div class="tab-content--text"><h3>Outset</h3></div>
          <div>
            <!-- Content-1 Color start -->
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
                <nuxt-content :document="basicOutset" />
              </div>

              <div class="container p-10" style="background: white">
                <div class="tooltip">
                  <span>Hover here!</span>
                  <div class="tooltip-content top">
                    <p>tooltip!</p>
                  </div>
                </div>
              </div>
              <div class="container neomo p-10">
                <div class="tooltip neomo">
                  <span>Hover here!</span>
                  <div class="tooltip-content outset-neomo top">
                    <p>tooltip!</p>
                  </div>
                </div>
              </div>
              <div class="container gray p-10">
                <div class="tooltip gray">
                  <span>Hover here!</span>
                  <div class="tooltip-content outset-gray top">
                    <p>tooltip!</p>
                  </div>
                </div>
              </div>
              <div class="container dark p-10">
                <div class="tooltip dark">
                  <span>Hover here!</span>
                  <div class="tooltip-content outset-dark top">
                    <p>tooltip!</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Content-1 Color end -->
          </div>
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
                  class="button outset-neomo button-exam"
                  onclick="ContentToggle()"
                >
                  <i class="fas fa-code collapse"></i>
                </button>
              </div>
              <div class="mt-2 expanded">
                <nuxt-content :document="color" />
              </div>

              <div class="container m-10 p-10">
                <div class="container">
                  <div class="tooltip neomo">
                    <span>Top</span>
                    <div class="tooltip-content outset-neomo top">
                      <p>tooltip!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tooltip neomo">
                <span>Bottom</span>
                <div class="tooltip-content outset-neomo bottom">
                  <p>tooltip!</p>
                </div>

                <div class="tooltip neomo">
                  <span>left</span>
                  <div class="tooltip-content outset-neomo left">
                    <p>tooltip!</p>
                  </div>
                </div>

                <div class="tooltip neomo">
                  <span>Right</span>
                  <div class="tooltip-content outset-neomo right">
                    <p>tooltip!</p>
                  </div>
                </div>
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
                  class="button outset-neomo button-exam"
                  onclick="ContentToggle()"
                >
                  <i class="fas fa-code collapse"></i>
                </button>
              </div>
              <div class="mt-2 expanded">
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
