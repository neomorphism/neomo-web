<template>
  <div>
    <h1>Pagination</h1>
    <client-only>
      <p class="bottom-border">You can move the page through pagination.</p>
    </client-only>

    <div class="tab">
      <ul class="tab-content outset-neomo">
        <!-- Content-1 start -->
        <li id="content-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Basic</h2></div>
          <div class="tab-content--text">
            <client-only>
              <p>By using disabled classes, you can't click pagination list.</p>
            </client-only>

            <!-- Content-1 Basic start -->
            <div class="tab-content--text"><h3>Basic</h3></div>
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button class="button outset-neomo button-exam">
                  <i class="fas fa-code collapse"></i>
                </button>
              </div>

              <div class="mt-2 expanded">
                <nuxt-content :document="basic" />
              </div>
              <div style="text-align: center">
                <ul class="pagination">
                  <li><a href="#">Previous</a></li>
                  <li><a href="#">1</a></li>
                  <li><a href="#" class="active">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">6</a></li>
                  <li><a href="#">Next</a></li>
                </ul>
              </div>
            </div>
            <!-- Content-1 Basic end -->

            <!-- Content-1 Disabled start -->
            <div class="tab-content--text"><h3>Disabled</h3></div>
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button class="button outset-neomo button-exam">
                  <i class="fas fa-code collapse"></i>
                </button>
              </div>

              <div class="mt-2 expanded">
                <nuxt-content :document="basicDisabled" />
              </div>
              <div style="text-align: center">
                <ul class="pagination">
                  <li><a href="#" class="disabled">Previous</a></li>
                  <li><a href="#">1</a></li>
                  <li><a href="#" class="active">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">6</a></li>
                  <li><a href="#">Next</a></li>
                </ul>
              </div>
            </div>
            <!-- Content-1 Disabled end -->
          </div>
        </li>
        <!-- Content-1 end -->

        <!-- Content2 start -->
        <li id="content-2" class="tab-content--list">
          <div class="tab-content--title">Icon</div>
          <div class="tab-content--text">
            <client-only>
              <p>
                You can use icons at the beginning and the end of the
                pagination.
              </p>
            </client-only>

            <!-- Content-2 Centered start -->
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button class="button outset-neomo button-exam">
                  <i class="fas fa-code collapse"></i>
                </button>
              </div>

              <div class="mt-2 expanded">
                <nuxt-content :document="icon" />
              </div>
              <div style="text-align: center">
                <div style="text-align: center">
                  <ul class="pagination">
                    <li>
                      <a href="#"
                        ><span class="fas fa-angle-double-left"></span
                      ></a>
                    </li>
                    <li><a href="#">1</a></li>
                    <li><a href="#" class="active">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                    <li>
                      <a href="#"
                        ><span class="fas fa-angle-double-right"></span
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Content2 centered end -->
          </div>
        </li>
        <!-- Content-2 end -->

        <!-- Content-3 start -->
        <li id="content-3" class="tab-content--list">
          <div class="tab-content--title">Round</div>
          <div class="tab-content--text">
            <client-only>
              <p>
                You can use round pagination using a pagination-round class.
              </p>
            </client-only>

            <!-- Content-3 Round start -->
            <div class="tab-content--text"><h3>Round</h3></div>
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button class="button outset-neomo button-exam">
                  <i class="fas fa-code collapse"></i>
                </button>
              </div>

              <div class="mt-2 expanded">
                <nuxt-content :document="round" />
              </div>
              <div style="text-align: center">
                <ul class="pagination-round">
                  <li>
                    <a href="#"
                      ><span class="fas fa-angle-double-left"></span
                    ></a>
                  </li>
                  <li><a href="#">1</a></li>
                  <li><a href="#" class="active">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">6</a></li>
                  <li>
                    <a href="#"
                      ><span class="fas fa-angle-double-right"></span
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Content-3 Round end -->
          </div>
        </li>
        <!-- Content-3 end -->
      </ul>

      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a id="tab-1" class="current">Basic</a></li>
        <li><a id="tab-2">Icon</a></li>
        <li style="margin-right: 0"><a id="tab-3">Rouond</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const basic = await $content(
      params.slug || "components/pagination/basic"
    ).fetch();
    const basicDisabled = await $content(
      params.slug || "components/pagination/basic-disabled"
    ).fetch();
    const icon = await $content(
      params.slug || "components/pagination/icon"
    ).fetch();
    const round = await $content(
      params.slug || "components/pagination/round"
    ).fetch();

    return {
      basic,
      basicDisabled,
      icon,
      round,
    };
  },
};
</script>
