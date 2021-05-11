<template>
  <div>
    <h1>Alert</h1>
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
                  class="button outset-neomo button-exam"
                  onclick="ContentToggle()"
                >
                  <i class="fas fa-code collapse"></i>
                </button>
              </div>
              <div id="myInpu" class="mt-2 expanded">
                <nuxt-content :document="basicOutset" />
              </div>

              <div class="alert outset-neomo" role="alert">This is alert!</div>
            </div>
            <!-- Content-1 Outset end -->

            <!-- Content-1 Inset start -->
            <div class="tab-content--text"><h3>Inset</h3></div>
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
                <nuxt-content :document="basicInset" />
              </div>

              <div class="alert inset-neomo" role="alert">This is alert!</div>
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
                  class="button outset-neomo button-exam"
                  onclick="ContentToggle()"
                >
                  <i class="fas fa-code collapse"></i>
                </button>
              </div>
              <div class="mt-2 expanded">
                <nuxt-content :document="color" />
              </div>

              <div class="alert outset-neomo info" role="alert">
                This color is info!
              </div>
              <div class="alert outset-neomo success" role="alert">
                This color is success!
              </div>
              <div class="alert outset-neomo danger" role="alert">
                This color is danger!
              </div>
              <div class="alert outset-neomo warning" role="alert">
                This color is warning!
              </div>
            </div>
          </div>
          <!-- Content-2 Color end -->
        </li>
        <!-- Content-2 end -->

        <!-- Content-3 Start -->
        <li id="content-3" class="tab-content--list">
          <div class="tab-content--title"><h2>dismissing</h2></div>

          <div class="tab-content--text"><h3>dismissing</h3></div>
          <div>
            <!-- Content-3 dismissing start -->
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
                <nuxt-content :document="dismissing" />
              </div>

              <div id="Alt" class="outset-neomo alert">
                <span
                  ><strong>Well done!</strong> You successfully read this
                  important alert message.</span
                >
                <span class="alt-close">X</span>
              </div>
              <div id="Alt" class="outset-neomo alert info">
                <span
                  ><strong>Well done!</strong> You successfully read this
                  important alert message.</span
                >
                <span class="alt-close">X</span>
              </div>
              <div id="Alt" class="outset-neomo alert success">
                <span
                  ><strong>Well done!</strong> You successfully read this
                  important alert message.</span
                >
                <span class="alt-close">X</span>
              </div>
              <div id="Alt" class="outset-neomo alert danger">
                <span
                  ><strong>Well done!</strong> You successfully read this
                  important alert message.</span
                >
                <span class="alt-close">X</span>
              </div>
              <div id="Alt" class="outset-neomo alert warning">
                <span
                  ><strong>Well done!</strong> You successfully read this
                  important alert message.</span
                >
                <span class="alt-close">X</span>
              </div>
            </div>
          </div>
          <!-- Content-3 dismissing end -->
        </li>
        <!-- Content-3 end -->
      </ul>
      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a id="tab-1" class="current">Basic</a></li>
        <li><a id="tab-2">Color</a></li>
        <li><a id="tab-3">Dismissing</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const basicOutset = await $content(
      params.slug || "components/alert/basic-outset"
    ).fetch();
    const basicInset = await $content(
      params.slug || "components/alert/basic-inset"
    ).fetch();
    const color = await $content(
      params.slug || "components/alert/color"
    ).fetch();
    const dismissing = await $content(
      params.slug || "components/alert/dismissing"
    ).fetch();

    return {
      basicOutset,
      basicInset,
      color,
      dismissing,
    };
  },
};
</script>

<style scoped>
.alert {
  margin: 10px 0 10px 0;
}
</style>
