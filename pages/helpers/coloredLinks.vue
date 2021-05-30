<template>
  <div>
    <h1>Colored Links</h1>
    <client-only>
      <p class="bottom-border">
        Neomo offers four colors for your hyperlinks based on specific usages.
      </p>
    </client-only>

    <div class="tab">
      <ul class="tab-content outset-neomo">
        <!-- Content-1 Start -->
        <li id="content-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Link</h2></div>

          <!-- Content-1 Size start -->
          <div class="tab-content--text"><h3>Color</h3></div>
          <div>
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
                <nuxt-content :document="link" />
              </div>

              <div style="text-align: center">
                <p>
                  <a href="https://www.google.co.kr" class="link-info"
                    >Info Link</a
                  >
                </p>
                <p>
                  <a href="https://www.google.co.kr" class="link-success"
                    >Success Link</a
                  >
                </p>
                <p>
                  <a href="https://www.google.co.kr" class="link-danger"
                    >Danger Link</a
                  >
                </p>
                <p>
                  <a href="https://www.google.co.kr" class="link-warning"
                    >Warning Link</a
                  >
                </p>
              </div>
            </div>
            <!-- Content-1 color end -->
          </div>
          <!-- Content-1 end -->
        </li>
      </ul>

      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a id="tab-1" class="current content-tab--only">Link</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const link = await $content(
      params.slug || "helpers/coloredLinks/link"
    ).fetch();

    return {
      link,
    };
  },
};
</script>
