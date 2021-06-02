<template>
  <div>
    <h1>Select</h1>
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
                  data-collapse-id="collapse1"
                  class="button outset-neomo button-exam collapse"
                >
                  <i class="fas fa-code"></i>
                </button>
              </div>
              <div data-collapse-id="collapse1" class="mt-2 expanded">
                <nuxt-content :document="basicOutset" />
              </div>

              <div style="text-align: center">
                <select class="outset-neomo">
                  <option selected>This is select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <!-- Content-1 Outset end -->

            <!-- Content-1 Inset start -->
            <div class="tab-content--text"><h3>Inset</h3></div>
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
                <nuxt-content :document="basicInset" />
              </div>

              <div style="text-align: center">
                <select class="inset-neomo">
                  <option selected>This is select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
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
                  data-collapse-id="collapse3"
                  class="button outset-neomo button-exam collapse"
                >
                  <i class="fas fa-code"></i>
                </button>
              </div>
              <div data-collapse-id="collapse3" class="mt-2 expanded">
                <nuxt-content :document="color" />
              </div>

              <div style="text-align: center">
                <select class="outset-neomo info">
                  <option selected>This is select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <select class="outset-neomo success">
                  <option selected>This is select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <select class="outset-neomo danger">
                  <option selected>This is select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <select class="outset-neomo warning">
                  <option selected>This is select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <!-- Content-2 Color end -->
        </li>
        <!-- Content-2 end -->

        <!-- Content-3 Start -->
        <li id="content-3" class="tab-content--list">
          <div class="tab-content--title"><h2>Multiple</h2></div>

          <div class="tab-content--text"><h3>Multiple</h3></div>
          <div>
            <!-- Content-3 multiple start -->
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
                <nuxt-content :document="multiple" />
              </div>

              <div style="text-align: center">
                <select multiple class="outset-neomo">
                  <option selected>This is select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <!-- Content-3 multiple end -->
        </li>
        <!-- Content-3 end -->
      </ul>
      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a id="tab-1" class="current">Basic</a></li>
        <li><a id="tab-2">Color</a></li>
        <li><a id="tab-3">Multiple</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const basicOutset = await $content(
      params.slug || "components/select/basic-outset"
    ).fetch();
    const basicInset = await $content(
      params.slug || "components/select/basic-inset"
    ).fetch();
    const color = await $content(
      params.slug || "components/select/color"
    ).fetch();
    const multiple = await $content(
      params.slug || "components/select/multiple"
    ).fetch();

    return {
      basicOutset,
      basicInset,
      color,
      multiple,
    };
  },
};
</script>

<style scoped>
select {
  margin: 0 10px 0 10px;
}
@media screen and (max-width: 750px) {
  select {
    margin-bottom: 5px;
  }
}
</style>
