<template>
  <div>
    <h1>Icon</h1>
    <client-only>
      <p class="bottom-border">
        Icon is a container that can hold any icon font type.
      </p>
    </client-only>

    <div class="tab">
      <ul class="tab-content outset-neomo">
        <!-- Content-1 start -->
        <li id="content-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Basic</h2></div>
          <div class="tab-content--text">
            <client-only>
              <p>
                By default, rectangular containers have a Neomophism effect.<br />
                You can use circular container by using icon-circle class.
              </p>
            </client-only>

            <!-- Content-1 Square start -->
            <div class="tab-content--text"><h3>Square</h3></div>
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
                <nuxt-content :document="basicSquare" />
              </div>
              <div class="icon" style="margin: 0 auto">
                <i class="fas fa-home"></i>
              </div>
            </div>
            <!-- Content-1 Square end -->

            <!-- Content-1 Circle start -->
            <div class="tab-content--text"><h3>Circle</h3></div>
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
                <nuxt-content :document="basicCircle" />
              </div>
              <div class="icon-circle" style="margin: 0 auto">
                <i class="fas fa-home"></i>
              </div>
            </div>
            <!-- Content-1 Circle end -->
          </div>
        </li>
        <!-- Content-1 end -->

        <!-- Content2 start -->
        <li id="content-2" class="tab-content--list">
          <div class="tab-content--title">Size</div>
          <div class="tab-content--text">
            <client-only>
              <p>There are 3 sizes including basic. small, basic, large.</p>
            </client-only>

            <!-- Content-2 Small start -->
            <div class="tab-content--text"><h3>Small</h3></div>
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
                <nuxt-content :document="sizeSmall" />
              </div>
              <div class="icon-sm" style="margin: 0 auto">
                <i class="fas fa-home"></i>
              </div>
            </div>
            <!-- Content2 Small end -->

            <!-- Content-2 Large start -->
            <div class="tab-content--text"><h3>Large</h3></div>
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
                <nuxt-content :document="sizeLarge" />
              </div>
              <div class="icon-lg" style="margin: 0 auto">
                <i class="fas fa-home"></i>
              </div>
            </div>
          </div>
          <!-- Content-2 Large end -->
        </li>
        <!-- Content-2 end -->
      </ul>

      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a id="tab-1" class="current">Basic</a></li>
        <li><a id="tab-2">Size</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const basicSquare = await $content(
      params.slug || "components/icon/basic-square"
    ).fetch();
    const basicCircle = await $content(
      params.slug || "components/icon/basic-circle"
    ).fetch();
    const sizeSmall = await $content(
      params.slug || "components/icon/size-small"
    ).fetch();
    const sizeLarge = await $content(
      params.slug || "components/icon/size-large"
    ).fetch();

    return {
      basicSquare,
      basicCircle,
      sizeSmall,
      sizeLarge,
    };
  },
};
</script>
