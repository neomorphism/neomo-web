<template>
  <div>
    <h1>Checkbox</h1>
    <client-only>
      <p class="bottom-border">
        Checkbox can also be used as a neomo design. Try using it simply.
      </p>
    </client-only>

    <div class="tab">
      <ul class="tab-content outset-neomo">
        <!-- Content-1 Start -->
        <li id="content-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Basic</h2></div>

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

            <div class="mt-2 expanded">
              <nuxt-content :document="basicOutset" />
            </div>

            <div style="text-align: center">
              <input
                id="check1"
                class="checkbox-input outset-neomo"
                type="checkbox"
                value=""
              />
              <label class="checkbox-label" for="check1"
                >This is checkbox.</label
              >
            </div>
          </div>
          <!-- Content-1 Outset end -->

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
    const basicOutset = await $content(
      params.slug || "form/checkbox/basic-outset"
    ).fetch();

    return {
      basicOutset,
    };
  },
};
</script>
