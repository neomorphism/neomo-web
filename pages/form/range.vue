<template>
  <div>
    <h1>Range</h1>
    <client-only>
      <p class="bottom-border">
        Radio can also be used as a neomo design. Try using it simply.
      </p>
    </client-only>

    <div class="tab">
      <ul class="tab-content outset-neomo">
        <!-- Content-1 Start -->
        <li id="content-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Basic</h2></div>

          <!-- Content-1 Basic start -->
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
              <nuxt-content :document="basic" />
            </div>

            <input
              data-range-id="range"
              type="range"
              min="0"
              max="100"
              class="range-round inset-neomo myRange"
            />
            <p>Value: <span data-range-id="range" class="demo"></span></p>
          </div>
          <!-- Content-1 Basic end -->

          <!-- Content-1 end -->
        </li>
      </ul>

      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a id="tab-1" href="#" class="current">Basic</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const basic = await $content(params.slug || "form/range/basic").fetch();

    return {
      basic,
    };
  },
};
</script>
