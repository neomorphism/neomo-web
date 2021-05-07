<template>
  <div>
    <h1>Typography</h1>
    <client-only>
      <p class="bottom-border">
        Neomo gives you some nice tools for making your text styles
      </p>
    </client-only>

    <div class="tab">
      <ul class="tab-content outset-neomo">
        <!-- Content-1 Start -->
        <li id="content-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Font</h2></div>

          <!-- Content-1 Size start -->
          <div class="tab-content--text"><h3>font-size</h3></div>
          <div>
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  class="button outset-neomo button-exam"
                  onclick="ContentToggle()"
                >
                  <i class="fas fa-code collapse"></i>
                </button>

                <div class="mt-2 expanded">
                  <nuxt-content :document="fontSize" />
                </div>
              </div>
              <p class="font-size-1">This is font-size-1</p>
              <p class="font-size-2">This is font-size-2</p>
              <p class="font-size-3">This is font-size-3</p>
              <p class="font-size-4">This is font-size-4</p>
              <p class="font-size-5">This is font-size-5</p>
              <p class="font-size-6">This is font-size-6</p>
            </div>
            <!-- Content-1 size end -->

            <!-- Content-1 style start -->
            <div class="tab-content--text"><h3>font-style</h3></div>

            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  class="button outset-neomo button-exam"
                  onclick="ContentToggle()"
                >
                  <i class="fas fa-code collapse"></i>
                </button>

                <div class="mt-2 expanded">
                  <nuxt-content :document="fontStyle" />
                </div>
              </div>

              <p class="font-size-2 font-style-normal">
                This is font-style-normal
              </p>
              <p class="font-size-2 font-style-italic">
                This is font-style-italic
              </p>
              <p class="font-size-2 font-style-oblique">
                This is font-style-oblique
              </p>
            </div>
            <!-- Content-1 style end -->

            <!-- Content-1 transform start -->
            <div class="tab-content--text"><h3>font-transform</h3></div>

            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  class="button outset-neomo button-exam"
                  onclick="ContentToggle()"
                >
                  <i class="fas fa-code collapse"></i>
                </button>

                <div class="mt-2 expanded">
                  <nuxt-content :document="fontTrans" />
                </div>
              </div>
              <p class="font-size-2 font-transform-lowercase">
                font-transform-lowercase
              </p>
              <p class="font-size-2 font-transform-uppercase">
                font-transform-uppercase
              </p>
              <p class="font-size-2 font-transform-capitalize">
                font-transform-capitalize
              </p>
            </div>
            <!-- Content-1 transform end -->
          </div>

          <!-- Content-1 end -->

          <!-- Content-2 Start -->
        </li>

        <li id="content-2" class="tab-content--list">
          <div class="tab-content--title"><h2>Text</h2></div>

          <div class="tab-content--text"><h3>text-align</h3></div>
          <div>
            <!-- Content-2 text start -->
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  class="button outset-neomo button-exam"
                  onclick="ContentToggle()"
                >
                  <i class="fas fa-code collapse"></i>
                </button>

                <div class="mt-2 expanded">
                  <nuxt-content :document="text" />
                </div>
              </div>
              <p class="font-size-3 text-left">This is text-left</p>
              <p class="font-size-3 text-center">This is text-center</p>
              <p class="font-size-3 text-right">This is text-right</p>
            </div>
          </div>
          <!-- Content-2 text end -->
        </li>
        <!-- Content-2 end -->
      </ul>
      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a id="tab-1" class="current">Font</a></li>
        <li><a id="tab-2">Text</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const fontSize = await $content(
      params.slug || "helpers/typography/font-size"
    ).fetch();
    const fontStyle = await $content(
      params.slug || "helpers/typography/font-style"
    ).fetch();
    const fontTrans = await $content(
      params.slug || "helpers/typography/font-transform"
    ).fetch();
    const text = await $content(
      params.slug || "helpers/typography/text"
    ).fetch();

    return {
      fontSize,
      fontStyle,
      fontTrans,
      text,
    };
  },
};
</script>
