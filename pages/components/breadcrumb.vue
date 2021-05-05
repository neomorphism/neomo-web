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
            <li id="content-1" class="tab-content--list">
              <div class="tab-content--title">Basic</div>
              <div class="tab-content--text">
                <client-only>
                  <p>
                    breadcrumb is used to declare classes in nav tags. You can
                    use it as a way to configure subul tags and li tags. You can
                    also display the current page by giving the li-tag the
                    is-active option.
                  </p>
                </client-only>

                <nav class="breadcrumb inset-neomo">
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
                  <nuxt-content :document="basic" />
                </div>
              </div>
            </li>

            <li id="content-2" class="tab-content--list">
              <div class="tab-content--title">Justify</div>
              <div class="tab-content--text">
                <client-only>
                  <p>
                    Breadcrumb has three sorting options When used exclusively
                    in nav tags, add left-aligned, centered classes, add right
                    classes and right-aligned options.
                  </p>
                </client-only>

                <h4 class="mt-5 mb-5">centered</h4>
                <nav
                  class="breadcrumb centered inset-neomo"
                  aria-label="breadcrumbs"
                >
                  <ul>
                    <li>
                      <a href="#">
                        <div class="icon-circle icon-sm">
                          <i class="fas fa-home fa-sm"></i>
                        </div>
                        <span>Neomo</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div class="icon-circle icon-sm">
                          <i class="fas fa-file-alt fa-sm"></i>
                        </div>
                        <span>Documentation</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div class="icon-circle icon-sm">
                          <i class="fas fa-database fa-sm"></i>
                        </div>
                        <span>Components</span>
                      </a>
                    </li>
                    <li class="is-active">
                      <a href="#" aria-current="page">
                        <div class="icon-circle icon-sm">
                          <i class="fas fa-bread-slice fa-sm"></i>
                        </div>
                        <span>Breadcrumb</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <div class="mt-2">
                  <nuxt-content :document="basic" />
                </div>

                <h4 class="mt-5 mb-5">right</h4>
                <nav
                  class="breadcrumb right inset-neomo"
                  aria-label="breadcrumbs"
                >
                  <ul>
                    <li>
                      <a href="#">
                        <div class="icon-circle icon-sm">
                          <i class="fas fa-home fa-sm"></i>
                        </div>
                        <span>Neomo</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div class="icon-circle icon-sm">
                          <i class="fas fa-file-alt fa-sm"></i>
                        </div>
                        <span>Documentation</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div class="icon-circle icon-sm">
                          <i class="fas fa-database fa-sm"></i>
                        </div>
                        <span>Components</span>
                      </a>
                    </li>
                    <li class="is-active">
                      <a href="#" aria-current="page">
                        <div class="icon-circle icon-sm">
                          <i class="fas fa-bread-slice fa-sm"></i>
                        </div>
                        <span>Breadcrumb</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </li>

            <li id="content-3" class="tab-content--list">
              <div class="tab-content--title">Separator</div>
              <div class="tab-content--text">
                <client-only>
                  <p>
                    You can select one of three options: the page separator icon
                    in the breadcrumb. By default, it's a slash-shaped
                    separator, and each time you add a direction class and arrow
                    class, it's a differential. It changes to that shape.
                  </p>
                </client-only>

                <h4 class="mt-5 mb-5">direction</h4>
                <nav
                  class="breadcrumb centered direction inset-neomo"
                  aria-label="breadcrumbs"
                >
                  <ul>
                    <li>
                      <a href="#">
                        <div class="icon-circle icon-sm">
                          <i class="fas fa-home fa-sm"></i>
                        </div>
                        <span>Neomo</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div class="icon-circle icon-sm">
                          <i class="fas fa-file-alt fa-sm"></i>
                        </div>
                        <span>Documentation</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div class="icon-circle icon-sm">
                          <i class="fas fa-database fa-sm"></i>
                        </div>
                        <span>Components</span>
                      </a>
                    </li>
                    <li class="is-active">
                      <a href="#" aria-current="page">
                        <div class="icon-circle icon-sm">
                          <i class="fas fa-bread-slice fa-sm"></i>
                        </div>
                        <span>Breadcrumb</span>
                      </a>
                    </li>
                  </ul>
                </nav>

                <h4 class="mt-5 mb-5">arrow</h4>
                <nav
                  class="breadcrumb centered arrow inset-neomo"
                  aria-label="breadcrumbs"
                >
                  <ul>
                    <li>
                      <a href="#">
                        <div class="icon-circle icon-sm">
                          <i class="fas fa-home fa-sm"></i>
                        </div>
                        <span>Neomo</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div class="icon-circle icon-sm">
                          <i class="fas fa-file-alt fa-sm"></i>
                        </div>
                        <span>Documentation</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div class="icon-circle icon-sm">
                          <i class="fas fa-database fa-sm"></i>
                        </div>
                        <span>Components</span>
                      </a>
                    </li>
                    <li class="is-active">
                      <a href="#" aria-current="page">
                        <div class="icon-circle icon-sm">
                          <i class="fas fa-bread-slice fa-sm"></i>
                        </div>
                        <span>Breadcrumb</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <ul class="tab-list" style="float: right">
        <li><a id="tab-1" href="#" class="current">Basic</a></li>
        <li><a id="tab-2" href="#">Justify</a></li>
        <li style="margin-right: 0"><a id="tab-3" href="#">Separator</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const basic = await $content(
      params.slug || "components/breadcrumb/basic"
    ).fetch();
    const justifyCentered = await $content(
      params.slug || "breadcrumb/justify-centered"
    ).fetch();

    return {
      basic,
      justifyCentered,
    };
  },
};
</script>
