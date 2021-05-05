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
      <div class="columns">
        <div class="column size-12">
          <ul class="tab-content outset-neomo">
            <!-- content-1 start -->
            <li id="content-1" class="tab-content--list">
              <div class="tab-content--title">Basic</div>
              <div class="tab-content--text">
                <client-only>
                  <p style="margin-bottom: 80px">
                    breadcrumb is used to declare classes in nav tags. You can
                    use it as a way to configure subul tags and li tags. You can
                    also display the current page by giving the li-tag the
                    is-active option.
                  </p>
                </client-only>

                <!-- content-1 outset start -->
                <h4 class="mt-5 mb-5">Outset</h4>
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
                <div class="mt-2">
                  <nuxt-content :document="basicOutset" />
                </div>
                <!-- content-1 outset end -->

                <!-- content-1 inset start -->
                <h4 class="mt-5 mb-5">Inset</h4>
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
                <div class="mt-2">
                  <nuxt-content :document="basicInset" />
                </div>
                <!-- content-1 inset end -->
              </div>
            </li>
            <!-- content-1 end -->

            <!-- content2 start -->
            <li id="content-2" class="tab-content--list">
              <div class="tab-content--title">Justify</div>
              <div class="tab-content--text">
                <client-only>
                  <p style="margin-bottom: 80px">
                    Breadcrumb has three sorting options When used exclusively
                    in nav tags, add left-aligned, centered classes, add right
                    classes and right-aligned options.
                  </p>
                </client-only>

                <!-- content2 centered start -->
                <h4 class="mt-5 mb-5">centered</h4>
                <nav
                  class="breadcrumb centered inset-neomo p-1"
                  aria-label="breadcrumbs"
                >
                  <ul>
                    <li>
                      <a href="#">
                        <div
                          class="icon-circle icon-sm"
                          style="width: 30px; height: 30px; margin-right: 10px"
                        >
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
                        <div
                          class="icon-circle icon-sm"
                          style="width: 30px; height: 30px; margin-right: 10px"
                        >
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
                        <div
                          class="icon-circle icon-sm"
                          style="width: 30px; height: 30px; margin-right: 10px"
                        >
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
                        <div
                          class="icon-circle icon-sm"
                          style="width: 30px; height: 30px; margin-right: 10px"
                        >
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
                <div class="mt-2">
                  <nuxt-content :document="justifyCentered" />
                </div>
                <!-- content2 centered end -->

                <!-- content2 right start -->
                <h4 class="mt-5 mb-5">right</h4>
                <nav
                  class="breadcrumb right inset-neomo p-1"
                  aria-label="breadcrumbs"
                >
                  <ul>
                    <li>
                      <a href="#">
                        <div
                          class="icon-circle icon-sm"
                          style="width: 30px; height: 30px; margin-right: 10px"
                        >
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
                        <div
                          class="icon-circle icon-sm"
                          style="width: 30px; height: 30px; margin-right: 10px"
                        >
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
                        <div
                          class="icon-circle icon-sm"
                          style="width: 30px; height: 30px; margin-right: 10px"
                        >
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
                        <div
                          class="icon-circle icon-sm"
                          style="width: 30px; height: 30px; margin-right: 10px"
                        >
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
                <div class="mt-2">
                  <nuxt-content :document="justifyRight" />
                </div>
              </div>
              <!-- content2 right end -->
            </li>
            <!-- content-2 outset end -->

            <!-- content-3 start -->
            <li id="content-3" class="tab-content--list">
              <div class="tab-content--title">Separator</div>
              <div class="tab-content--text">
                <client-only>
                  <p style="margin-bottom: 80px">
                    You can select one of three options: the page separator icon
                    in the breadcrumb. By default, it's a slash-shaped
                    separator, and each time you add a direction class and arrow
                    class, it's a differential. It changes to that shape.
                  </p>
                </client-only>

                <!-- content-3 direction start -->
                <h4 class="mt-5 mb-5">direction</h4>
                <nav
                  class="breadcrumb centered direction inset-neomo p-1"
                  aria-label="breadcrumbs"
                >
                  <ul>
                    <li>
                      <a href="#">
                        <div
                          class="icon-circle icon-sm"
                          style="width: 30px; height: 30px; margin-right: 10px"
                        >
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
                        <div
                          class="icon-circle icon-sm"
                          style="width: 30px; height: 30px; margin-right: 10px"
                        >
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
                        <div
                          class="icon-circle icon-sm"
                          style="width: 30px; height: 30px; margin-right: 10px"
                        >
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
                        <div
                          class="icon-circle icon-sm"
                          style="width: 30px; height: 30px; margin-right: 10px"
                        >
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
                <div class="mt-2">
                  <nuxt-content :document="separatorDirection" />
                </div>
                <!-- content-3 direction end -->

                <!-- content-3 arrow start -->
                <h4 class="mt-5 mb-5">arrow</h4>
                <nav
                  class="breadcrumb centered arrow inset-neomo p-1"
                  aria-label="breadcrumbs"
                >
                  <ul>
                    <li>
                      <a href="#">
                        <div
                          class="icon-circle icon-sm"
                          style="width: 30px; height: 30px; margin-right: 10px"
                        >
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
                        <div
                          class="icon-circle icon-sm"
                          style="width: 30px; height: 30px; margin-right: 10px"
                        >
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
                        <div
                          class="icon-circle icon-sm"
                          style="width: 30px; height: 30px; margin-right: 10px"
                        >
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
                        <div
                          class="icon-circle icon-sm"
                          style="width: 30px; height: 30px; margin-right: 10px"
                        >
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
                <div class="mt-2">
                  <nuxt-content :document="separatorAllow" />
                </div>
                <!-- content-3 arrow end -->
              </div>
            </li>
            <!-- content-3 end -->
          </ul>
        </div>
      </div>

      <!-- tab list start -->
      <ul class="tab-list" style="float: right">
        <li><a class="current" id="tab-1">Basic</a></li>
        <li><a id="tab-2">Justify</a></li>
        <li style="margin-right: 0"><a id="tab-3">Separator</a></li>
      </ul>
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
