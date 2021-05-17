<template>
  <div>
    <h1>Navbar</h1>
    <client-only>
      <p class="bottom-border">
        Navbar can also be used as a neomo design. Try using it simply.
      </p>
    </client-only>

    <div class="tab">
      <ul class="tab-content outset-neomo">
        <!-- Content-1 Start -->
        <li id="content-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Basic</h2></div>
          <div class="tab-content--text">
            <client-only>
              <p>By default, navbar classes support animation.</p>
            </client-only>
          </div>

          <!-- Content-1 Basic start -->
          <div class="card inset-neomo code-exam">
            <div class="mt-2 mb-3" style="display: flow-root">
              <button class="button outset-neomo button-exam">
                <i class="fas fa-code collapse"></i>
              </button>
            </div>

            <div class="mt-2 expanded">
              <nuxt-content :document="basic" />
            </div>
            <div class="navbar" style="margin: 0 auto">
              <div>
                <button class="toggle-button">List1</button>
                <div class="toggle-content">
                  <a href="#">Link1</a>
                  <a href="#">Link2</a>
                  <a href="#">Link3</a>
                </div>
              </div>

              <div>
                <button class="toggle-button">List2</button>
                <div class="toggle-content">
                  <a href="#">Link1</a>
                  <a href="#">Link2</a>
                  <a href="#">Link3</a>
                </div>
              </div>

              <div>
                <button class="toggle-button">List3</button>
                <div class="toggle-content">
                  <a href="#">Link1</a>
                  <a href="#">Link2</a>
                  <a href="#">Link3</a>
                </div>
              </div>
            </div>
          </div>
          <!-- Content-1 Basic end -->
        </li>
        <!-- Content-1 end -->
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
    const basic = await $content(
      params.slug || "components/navbar/basic"
    ).fetch();

    return {
      basic,
    };
  },
};
</script>
