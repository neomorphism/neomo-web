<template>
  <div>
    <h1>BreadCrumb</h1>
    <client-only>
      <p class="bottom-border">
        Breadcrumb is useful on layered pages.<br />
        Similar to the path display of the folder structure, it shows the parent
        page in turn until it reaches its current location
      </p>
    </client-only>

    <div class="tab">
      <ul class="tab-content outset-neomo">
        <!-- Content-1 start -->
        <li id="content-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Basic</h2></div>
          <div class="tab-content--text">
            <client-only>
              <p style="margin-bottom: 80px">
                breadcrumb is used to declare classes in nav tags. You can use
                it as a way to configure subul tags and li tags. You can also
                display the current page by giving the li-tag the is-active
                option.
              </p>
            </client-only>

            <!-- Content-1 Outset start -->
            <div class="tab-content--text"><h3>Outset</h3></div>
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
              <nav class="breadcrumb outset-neomo p-1">
                <ul>
                  <li>
                    <a href="#">
                      <span>Neomo</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Documentation</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Components</span>
                    </a>
                  </li>
                  <li class="is-active">
                    <a href="#" aria-current="page">
                      <span>Breadcrumb</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- Content-1 Outset end -->

            <!-- Content-1 Inset start -->
            <div class="tab-content--text"><h3>Inset</h3></div>
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
                <nuxt-content :document="basicInset" />
              </div>
              <nav class="breadcrumb inset-neomo p-1">
                <ul>
                  <li>
                    <a href="#">
                      <span>Neomo</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Documentation</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Components</span>
                    </a>
                  </li>
                  <li class="is-active">
                    <a href="#" aria-current="page">
                      <span>Breadcrumb</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- Content-1 Inset end -->
          </div>
        </li>
        <!-- Content-1 end -->

        <!-- Content2 start -->
        <li id="content-2" class="tab-content--list">
          <div class="tab-content--title">Justify</div>
          <div class="tab-content--text">
            <client-only>
              <p style="margin-bottom: 80px">
                Breadcrumb has three sorting options When used exclusively in
                nav tags, add left-aligned, centered classes, add right classes
                and right-aligned options.
              </p>
            </client-only>

            <!-- Content-2 Centered start -->
            <div class="tab-content--text"><h3>Centered</h3></div>
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
                <nuxt-content :document="justifyCentered" />
              </div>
              <nav
                class="breadcrumb centered inset-neomo p-1"
                aria-label="breadcrumbs"
              >
                <ul>
                  <li>
                    <a href="#">
                      <div class="icon-circle--sm" style="margin-right: 10px">
                        <i
                          class="fas fa-home fa-sm"
                          style="font-size: 0.4em"
                        ></i>
                      </div>
                      <span>Neomo</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="icon-circle--sm" style="margin-right: 10px">
                        <i
                          class="fas fa-file-alt fa-sm"
                          style="font-size: 0.4em"
                        ></i>
                      </div>
                      <span>Documentation</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="icon-circle--sm" style="margin-right: 10px">
                        <i
                          class="fas fa-database fa-sm"
                          style="font-size: 0.4em"
                        ></i>
                      </div>
                      <span>Components</span>
                    </a>
                  </li>
                  <li class="is-active">
                    <a href="#" aria-current="page">
                      <div class="icon-circle--sm" style="margin-right: 10px">
                        <i
                          class="fas fa-bread-slice fa-sm"
                          style="font-size: 0.4em"
                        ></i>
                      </div>
                      <span>Breadcrumb</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- Content2 centered end -->

            <!-- Content-2 Right start -->
            <div class="tab-content--text"><h3>Right</h3></div>
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
                <nuxt-content :document="justifyRight" />
              </div>
              <nav
                class="breadcrumb right inset-neomo p-1"
                aria-label="breadcrumbs"
              >
                <ul>
                  <li>
                    <a href="#">
                      <div class="icon-circle--sm" style="margin-right: 10px">
                        <i
                          class="fas fa-home fa-sm"
                          style="font-size: 0.4em"
                        ></i>
                      </div>
                      <span>Neomo</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="icon-circle--sm" style="margin-right: 10px">
                        <i
                          class="fas fa-file-alt fa-sm"
                          style="font-size: 0.4em"
                        ></i>
                      </div>
                      <span>Documentation</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="icon-circle--sm" style="margin-right: 10px">
                        <i
                          class="fas fa-database fa-sm"
                          style="font-size: 0.4em"
                        ></i>
                      </div>
                      <span>Components</span>
                    </a>
                  </li>
                  <li class="is-active">
                    <a href="#" aria-current="page">
                      <div class="icon-circle--sm" style="margin-right: 10px">
                        <i
                          class="fas fa-bread-slice fa-sm"
                          style="font-size: 0.4em"
                        ></i>
                      </div>
                      <span>Breadcrumb</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <!-- Content-2 Right end -->
        </li>
        <!-- Content-2 end -->

        <!-- Content-3 start -->
        <li id="content-3" class="tab-content--list">
          <div class="tab-content--title">Separator</div>
          <div class="tab-content--text">
            <client-only>
              <p style="margin-bottom: 80px">
                You can select one of three options: the page separator icon in
                the breadcrumb. By default, it's a slash-shaped separator, and
                each time you add a direction class and arrow class, it's a
                differential. It changes to that shape.
              </p>
            </client-only>

            <!-- Content-3 Direction start -->
            <div class="tab-content--text"><h3>Direction</h3></div>
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
                <nuxt-content :document="separatorDirection" />
              </div>
              <nav
                class="breadcrumb centered direction inset-neomo p-1"
                aria-label="breadcrumbs"
              >
                <ul>
                  <li>
                    <a href="#">
                      <div class="icon-circle--sm" style="margin-right: 10px">
                        <i
                          class="fas fa-home fa-sm"
                          style="font-size: 0.4em"
                        ></i>
                      </div>
                      <span>Neomo</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="icon-circle--sm" style="margin-right: 10px">
                        <i
                          class="fas fa-file-alt fa-sm"
                          style="font-size: 0.4em"
                        ></i>
                      </div>
                      <span>Documentation</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="icon-circle--sm" style="margin-right: 10px">
                        <i
                          class="fas fa-database fa-sm"
                          style="font-size: 0.4em"
                        ></i>
                      </div>
                      <span>Components</span>
                    </a>
                  </li>
                  <li class="is-active">
                    <a href="#" aria-current="page">
                      <div class="icon-circle--sm" style="margin-right: 10px">
                        <i
                          class="fas fa-bread-slice fa-sm"
                          style="font-size: 0.4em"
                        ></i>
                      </div>
                      <span>Breadcrumb</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- Content-3 Direction end -->

            <!-- Content-3 Arrow start -->
            <div class="tab-content--text"><h3>Aroow</h3></div>
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
                <nuxt-content :document="separatorAllow" />
              </div>
              <nav
                class="breadcrumb centered arrow inset-neomo p-1"
                aria-label="breadcrumbs"
              >
                <ul>
                  <li>
                    <a href="#">
                      <div class="icon-circle--sm" style="margin-right: 10px">
                        <i
                          class="fas fa-home fa-sm"
                          style="font-size: 0.4em"
                        ></i>
                      </div>
                      <span>Neomo</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="icon-circle--sm" style="margin-right: 10px">
                        <i
                          class="fas fa-file-alt fa-sm"
                          style="font-size: 0.4em"
                        ></i>
                      </div>
                      <span>Documentation</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="icon-circle--sm" style="margin-right: 10px">
                        <i
                          class="fas fa-database fa-sm"
                          style="font-size: 0.4em"
                        ></i>
                      </div>
                      <span>Components</span>
                    </a>
                  </li>
                  <li class="is-active">
                    <a href="#" aria-current="page">
                      <div class="icon-circle--sm" style="margin-right: 10px">
                        <i
                          class="fas fa-bread-slice fa-sm"
                          style="font-size: 0.4em"
                        ></i>
                      </div>
                      <span>Breadcrumb</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- Content-3 Arrow end -->
          </div>
        </li>
        <!-- Content-3 end -->
      </ul>

      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a id="tab-1" class="current">Basic</a></li>
        <li><a id="tab-2">Justify</a></li>
        <li style="margin-right: 0"><a id="tab-3">Separator</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const basicOutset = await $content(
      params.slug || "components/breadcrumb/basic-outset"
    ).fetch();
    const basicInset = await $content(
      params.slug || "components/breadcrumb/basic-inset"
    ).fetch();
    const justifyCentered = await $content(
      params.slug || "components/breadcrumb/justify-centered"
    ).fetch();
    const justifyRight = await $content(
      params.slug || "components/breadcrumb/justify-right"
    ).fetch();
    const separatorDirection = await $content(
      params.slug || "components/breadcrumb/separator-direction"
    ).fetch();
    const separatorAllow = await $content(
      params.slug || "components/breadcrumb/separator-arrow"
    ).fetch();

    return {
      basicOutset,
      basicInset,
      justifyCentered,
      justifyRight,
      separatorDirection,
      separatorAllow,
    };
  },
};
</script>
