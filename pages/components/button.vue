<template>
  <div>
    <h1>Button</h1>
    <client-only>
      <p class="bottom-border">
        You can easily see and use the color, shadow, border, etc. of the
        buttons.
      </p>
    </client-only>

    <div class="tab">
      <ul class="tab-content outset-neomo">
        <li id="content-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Basic</h2></div>

          <div class="tab-content--text"><h3>Outset</h3></div>
          <!-- Content-1 Start -->
          <div>
            <!-- Content-1 Outset start -->
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button class="button outset-neomo button-exam">
                  <i class="fas fa-code collapse"></i>
                </button>
              </div>
              <div class="mt-2 expanded">
                <nuxt-content :document="basicOutset" />
              </div>
              <div>
                <div class="container" style="background: white">
                  <button class="button outset m-10">default Button</button>
                  <button class="button outset square m-10">
                    Square Button
                  </button>
                </div>
                <div class="container neomo">
                  <button class="button outset-neomo m-10">Neomo Button</button>
                  <button class="button outset-neomo square blue m-10">
                    Neomo Square Button
                  </button>
                </div>
                <div class="container gray">
                  <button class="button outset-gray m-10">Gray Button</button>
                  <button class="button outset-gray square m-10">
                    Gray Square Button
                  </button>
                </div>
                <div class="container dark">
                  <button class="button outset-dark m-10">Dark Button</button>
                  <button class="button outset-dark square m-10">
                    Dark Square Button
                  </button>
                </div>
              </div>
            </div>
            <!-- Content-1 Outset end -->

            <!-- Content-1 Inset start -->
            <div class="tab-content--text"><h3>Inset</h3></div>
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button class="button outset-neomo button-exam">
                  <i class="fas fa-code collapse"></i>
                </button>
              </div>
              <div class="mt-2 expanded">
                <nuxt-content :document="basicInset" />
              </div>

              <div class="container" style="background: white">
                <button class="button inset m-10">default Button</button>
                <button class="button inset square m-10">Square Button</button>
              </div>
              <div class="container neomo">
                <button class="button inset-neomo m-10">Neomo Button</button>
                <button class="button inset-neomo square blue m-10">
                  Neomo Square Button
                </button>
              </div>
              <div class="container gray">
                <button class="button inset-gray m-10">Gray Button</button>
                <button class="button inset-gray square m-10">
                  Gray Square Button
                </button>
              </div>
              <div class="container dark">
                <button class="button inset-dark m-10">Dark Button</button>
                <button class="button inset-dark square m-10">
                  Dark Square Button
                </button>
              </div>
            </div>
          </div>
          <!-- Content-1 Inset end -->
        </li>
        <!-- Content-1 end -->

        <!-- Content-2 Start -->
        <li id="content-2" class="tab-content--list">
          <div class="tab-content--title"><h2>Size</h2></div>

          <div class="tab-content--text"><h3>Size</h3></div>
          <div>
            <!-- Content-2 Size start -->
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button class="button outset-neomo button-exam">
                  <i class="fas fa-code collapse"></i>
                </button>
              </div>
              <div class="mt-2 expanded">
                <nuxt-content :document="size" />
              </div>

              <div>
                <div class="container neomo">
                  <button class="button outset-neomo small m-10">small</button>
                  <button class="button outset-neomo normal m-10">
                    normal
                  </button>
                  <button class="button outset-neomo medium m-10">
                    medium
                  </button>
                  <button class="button outset-neomo large m-10">large</button>
                </div>
              </div>
            </div>
          </div>
          <!-- Content-2 Size end -->
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
    const basicOutset = await $content(
      params.slug || "components/button/basic-outset"
    ).fetch();
    const basicInset = await $content(
      params.slug || "components/button/basic-inset"
    ).fetch();
    const size = await $content(
      params.slug || "components/button/size"
    ).fetch();

    return {
      basicOutset,
      basicInset,
      size,
    };
  },
};
</script>
