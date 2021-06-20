<template>
  <div>
    <h1>Floating label</h1>
    <client-only>
      <p class="bottom-border">
        You can implement floating label with neomo design. Try another design
        for the label.
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
                data-collapse-id="collapse1"
                class="button outset-neomo button-exam collapse"
                aria-label="code button"
              >
                <i class="fas fa-code"></i>
              </button>
            </div>

            <div data-collapse-id="collapse1" class="mt-2 expanded">
              <nuxt-content :document="basic" />
            </div>
            <div class="columns just-center">
              <div class="floatinglabel-field">
                <input
                  id="fullname"
                  type="text"
                  name="fullname"
                  placeholder="Your Name"
                  class="floatinglabel-input inset-neomo"
                />
                <label for="fullname" class="floatinglabel-label font-size-6"
                  >Your Name</label
                >
              </div>
            </div>
          </div>
          <!-- Content-1 Outset end -->

          <!-- Content-1 end -->
        </li>
      </ul>

      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a id="tab-1" class="current content-tab--only">Basic</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const basic = await $content(
      params.slug || "form/floatinglabel/basic"
    ).fetch();

    return {
      basic,
    };
  },
};
</script>
