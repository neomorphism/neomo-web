<template>
  <div>
    <h1>Radio</h1>
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

          <!-- Content-1 Inset start -->
          <div class="card inset-neomo code-exam">
            <div class="mt-2 mb-3" style="display: flow-root">
              <button class="button outset-neomo button-exam">
                <i class="fas fa-code collapse"></i>
              </button>
            </div>

            <div class="mt-2 expanded">
              <nuxt-content :document="basicInset" />
            </div>
            <div style="text-align: center">
              <div>
                <input
                  id="radio3"
                  class="radio-input inset-neomo"
                  type="radio"
                  name="exam-radio2"
                  value=""
                />
                <label class="radio-label" for="radio3"
                  >this is radio. 'option1'</label
                >
              </div>
              <div>
                <input
                  id="radio4"
                  class="radio-input inset-neomo"
                  type="radio"
                  name="exam-radio2"
                  value=""
                />
                <label class="radio-label" for="radio4"
                  >this is radio. 'option2'</label
                >
              </div>
            </div>
          </div>
          <!-- Content-1 Itset end -->

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
    const basicInset = await $content(
      params.slug || "form/radio/basic-inset"
    ).fetch();

    return {
      basicInset,
    };
  },
};
</script>
