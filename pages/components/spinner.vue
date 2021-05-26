<template>
  <div>
    <h1>Spinner</h1>
    <client-only>
      <p class="bottom-border">
        Spinners are used to show you are in the loading state, for example,
        when you are reading database files. You can put them in your button or
        any component you want.
      </p>
    </client-only>

    <div class="tab">
      <ul class="tab-content color-neomo">
        <!-- Content-1 Start -->
        <li id="content-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Border-color</h2></div>

          <div class="tab-content--text"><h3>White</h3></div>
          <div>
            <!-- Content-1 border-white start -->
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  data-collapse-id="collapse1"
                  class="button outset-neomo button-exam collapse"
                >
                  <i class="fas fa-code"></i>
                </button>
              </div>
              <div data-collapse-id="collapse1" class="mt-2 expanded">
                <nuxt-content :document="borderWhite" />
              </div>

              <div class="loader border-white point-purple"></div>
            </div>
            <!-- Content-1 border-white end -->

            <!-- Content-1 border-gray start -->
            <div class="tab-content--text"><h3>Gray</h3></div>
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  data-collapse-id="collapse2"
                  class="button outset-neomo button-exam collapse"
                >
                  <i class="fas fa-code"></i>
                </button>
              </div>
              <div data-collapse-id="collapse2" class="mt-2 expanded">
                <nuxt-content :document="borderGray" />
              </div>

              <div class="loader border-gray point-purple"></div>
            </div>
          </div>
          <!-- Content-1 border-gray end -->
        </li>
        <!-- Content-1 end -->

        <!-- Content-2 Start -->
        <li id="content-2" class="tab-content--list">
          <div class="tab-content--title"><h2>Point-color</h2></div>

          <div class="tab-content--text"><h3>Color</h3></div>
          <div>
            <!-- Content-2 Color start -->
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  data-collapse-id="collapse3"
                  class="button outset-neomo button-exam collapse"
                >
                  <i class="fas fa-code"></i>
                </button>
              </div>
              <div data-collapse-id="collapse3" class="mt-2 expanded">
                <nuxt-content :document="pointColor" />
              </div>

              <div class="loader border-white point-purple"></div>
              <div class="loader border-white point-gray"></div>
              <div class="loader border-white point-blue"></div>
              <div class="loader border-white point-orange"></div>
            </div>
          </div>
          <!-- Content-2 Color end -->
        </li>
        <!-- Content-2 end -->

        <!-- Content-3 Start -->
        <li id="content-3" class="tab-content--list">
          <div class="tab-content--title"><h2>Button</h2></div>

          <div class="tab-content--text"><h3>In button</h3></div>
          <div>
            <!-- Content-3 button start -->
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  data-collapse-id="collapse4"
                  class="button outset-neomo button-exam collapse"
                >
                  <i class="fas fa-code"></i>
                </button>
              </div>
              <div data-collapse-id="collapse4" class="mt-2 expanded">
                <nuxt-content :document="button" />
              </div>

              <div class="container neomo" style="text-align: center">
                <button class="button outset-neomo">
                  <div
                    class="loader border-gray point-purple"
                    style="margin-top: 0"
                  ></div>
                </button>
              </div>
            </div>
          </div>
          <!-- Content-3 button end -->
        </li>
        <!-- Content-3 end -->
      </ul>
      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a id="tab-1" class="current">border</a></li>
        <li><a id="tab-2">Color</a></li>
        <li><a id="tab-3">Button</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const borderWhite = await $content(
      params.slug || "components/spinner/border-white"
    ).fetch();
    const borderGray = await $content(
      params.slug || "components/spinner/border-gray"
    ).fetch();
    const pointColor = await $content(
      params.slug || "components/spinner/point-color"
    ).fetch();
    const button = await $content(
      params.slug || "components/spinner/button"
    ).fetch();

    return {
      borderWhite,
      borderGray,
      pointColor,
      button,
    };
  },
};
</script>

<style scoped>
.loader {
  margin-top: 20px;
}
</style>
