<template>
  <div>
    <h1>Navigation</h1>
    <client-only>
      <p class="bottom-border">
        Navigation moves to the address associated with tag a when you click an
        item.<br />
        It can be used alone and can be included in other elements(ex. card).<br />
        Declared display:flex, sorting of the flex property is enabled.
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
                You can use it without the &lt;li&gt; tag.<br />
                You can prevent the use of the element by declaring class
                disable
              </p>
            </client-only>

            <!-- Content-1 With li Tag start -->
            <div class="tab-content--text"><h3>With &lt;li&gt; Tag</h3></div>
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
                <nuxt-content :document="basicWith" />
              </div>
              <ul class="nav">
                <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
            <!-- Content-1 With li Tag end -->

            <!-- Content-1 Without li Tag start -->
            <div class="tab-content--text"><h3>Without &lt;li&gt; Tag</h3></div>
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
                <nuxt-content :document="basicWithout" />
              </div>
              <ul class="nav">
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link disabled">Disabled</a>
              </ul>
            </div>
            <!-- Content-1 Without li Tag end -->
          </div>
        </li>
        <!-- Content-1 end -->

        <!-- Content2 start -->
        <li id="content-2" class="tab-content--list">
          <div class="tab-content--title">Animation</div>
          <div class="tab-content--text">
            <client-only>
              <p>You can animate through nav-link--animation class.</p>
            </client-only>

            <!-- Content-2 Animation start -->
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
                <nuxt-content :document="animation" />
              </div>
              <ul class="nav">
                <a class="nav-link--animation" href="#">Link</a>
                <a class="nav-link--animation" href="#">Link</a>
                <a class="nav-link--animation" href="#">Link</a>
                <a class="nav-link--animation disabled">Disabled</a>
              </ul>
            </div>
            <!-- Content2 Animation end -->
          </div>
        </li>
        <!-- Content-2 end -->

        <!-- Content-3 start -->
        <li id="content-3" class="tab-content--list">
          <div class="tab-content--title">Vertical</div>
          <div class="tab-content--text">
            <client-only>
              <p>You can switch to vertical form through nav-column class.</p>
            </client-only>

            <!-- Content-3 Vertical start -->
            <div class="tab-content--text"><h3>Vertical</h3></div>
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
                <nuxt-content :document="vertical" />
              </div>
              <ul class="nav-column">
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link disabled">Disabled</a>
              </ul>
            </div>
            <!-- Content-3 Vertical end -->
          </div>
        </li>
        <!-- Content-3 end -->
      </ul>

      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a class="current" id="tab-1">Basic</a></li>
        <li><a id="tab-2">Animation</a></li>
        <li style="margin-right: 0"><a id="tab-3">Vertical</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const basicWith = await $content(
      params.slug || "components/navigation/basic-with"
    ).fetch();
    const basicWithout = await $content(
      params.slug || "components/navigation/basic-without"
    ).fetch();
    const animation = await $content(
      params.slug || "components/navigation/animation"
    ).fetch();
    const vertical = await $content(
      params.slug || "components/navigation/vertical"
    ).fetch();

    return {
      basicWith,
      basicWithout,
      animation,
      vertical,
    };
  },
};
</script>
