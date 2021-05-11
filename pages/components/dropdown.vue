<template>
  <div>
    <h1>Dropdown</h1>
    <client-only>
      <p class="bottom-border">
        Dropdown can be useful when you want to spread menus below the button.
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
                You can open a dropdown menu by hovering the button.<br />
                Also, you can add content via dropdown-content--item.
              </p>
            </client-only>

            <!-- Content-1 Hover start -->
            <div class="tab-content--text"><h3>Hover</h3></div>
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
                <nuxt-content :document="basicHover" />
              </div>
              <div style="text-align: center">
                <div class="dropdown">
                  <button class="dropdown-button outset-neomo">
                    Dropdown
                    <i class="fa fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                    <a href="#">HTML</a>
                    <a href="#">CSS</a>
                    <a href="#">JAVA</a>
                    <a href="#">C++</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Content-1 Outset end -->

            <!-- Content-1 Content start -->
            <div class="tab-content--text"><h3>Content</h3></div>
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
                <nuxt-content :document="basicContent" />
              </div>
              <div style="text-align: center">
                <div class="dropdown">
                  <button class="dropdown-button outset-neomo">
                    Dropdown Content
                    <i class="fa fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                    <div class="dropdown-content--item">
                      <p>
                        You can insert any type of content with
                        dropdown-content--item class.
                      </p>
                    </div>
                    <a href="#">HTML</a>
                    <a href="#">CSS</a>
                    <a href="#">JAVA</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Content-1 Content end -->
          </div>
        </li>
        <!-- Content-1 end -->

        <!-- Content2 start -->
        <li id="content-2" class="tab-content--list">
          <div class="tab-content--title">Toggle</div>
          <div class="tab-content--text">
            <client-only>
              <p>You can open a dropdown menu by clicking the button.<br /></p>
            </client-only>

            <!-- Content-2 Toggle start -->
            <div class="tab-content--text"><h3>Toggle</h3></div>
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
                <nuxt-content :document="toggle" />
              </div>
              <div style="text-align: center">
                <div class="dropdown-toggle">
                  <button
                    onclick="DropdownToggle()"
                    class="dropdown-toggle--button outset-neomo"
                  >
                    Toggle
                    <i class="fa fa-caret-down"></i>
                  </button>
                  <div class="dropdown-toggle--content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Content2 Toggle end -->
          </div>
        </li>
        <!-- Content-2 end -->
      </ul>

      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a id="tab-1" class="current">Basic</a></li>
        <li><a id="tab-2">Toggle</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const basicHover = await $content(
      params.slug || "components/dropdown/basic-hover"
    ).fetch();
    const basicContent = await $content(
      params.slug || "components/dropdown/basic-content"
    ).fetch();
    const toggle = await $content(
      params.slug || "components/dropdown/toggle"
    ).fetch();

    return {
      basicHover,
      basicContent,
      toggle,
    };
  },
};
</script>

<style scoped>
.tab ul.tab-content li.tab-content--list {
  overflow: visible;
}
</style>
