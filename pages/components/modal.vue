<template>
  <div>
    <h1>Modal</h1>
    <client-only>
      <p class="bottom-border">
        By using modal, you can overlay the top layer inside the same window.
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
                You can overlay the modal window by clicking the modal button.
              </p>
            </client-only>

            <!-- Content-1 Basic start -->
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
                <nuxt-content :document="basic" />
              </div>
              <button class="modal-button outset-neomo">MODAL Button</button>
              <div class="modal">
                <div class="modal-content--md outset-neomo">
                  <span class="modal-close">&times;</span>
                  <p>
                    You can insert any type of content with this modal class.
                  </p>
                </div>
              </div>
            </div>
            <!-- Content-1 Outset end -->
          </div>
        </li>
        <!-- Content-1 end -->

        <!-- Content2 start -->
        <li id="content-2" class="tab-content--list">
          <div class="tab-content--title">Size</div>
          <div class="tab-content--text">
            <client-only>
              <p style="margin-bottom: 80px">
                Because modal can contain anything you want,You can design by
                using card class.<br />
                Also, you can choose the size of the modal content using sm, md,
                and lg.
              </p>
            </client-only>

            <!-- Content-2 Small start -->
            <div class="tab-content--text"><h3>Small</h3></div>
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
                <nuxt-content :document="sizeSmall" />
              </div>
              <button class="modal-button outset-neomo">
                Small Card MODAL
              </button>
              <div class="modal">
                <div class="modal-content--sm outset-neomo">
                  <span class="modal-close">&times;</span>
                  <header class="card-header">
                    <p class="card-header-title">Component</p>
                  </header>
                  <div class="card-image">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Placeholder image"
                    />
                  </div>
                  <div class="card-content">
                    <div>
                      <div class="media-left">
                        <img
                          src="https://bulma.io/images/placeholders/96x96.png"
                          alt="Placeholder image"
                        />
                      </div>
                      <div>
                        <p>John Smith</p>
                        <p>@johnsmith</p>
                      </div>
                    </div>

                    <div class="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                      <a href="#">#css</a>
                      <a href="#">#responsive</a>
                      <br />
                      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">Save</a>
                    <a href="#" class="card-footer-item">Edit</a>
                    <a href="#" class="card-footer-item">Delete</a>
                  </footer>
                </div>
              </div>
            </div>
            <!-- Content2 Card end -->

            <!-- Content-2 Middle start -->
            <div class="tab-content--text"><h3>Middle</h3></div>
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
                <nuxt-content :document="sizeMiddle" />
              </div>
              <button class="modal-button outset-neomo">
                Middle Card MODAL
              </button>
              <div class="modal">
                <div class="modal-content--md outset-neomo">
                  <span class="modal-close">&times;</span>
                  <header class="card-header">
                    <p class="card-header-title">Component</p>
                  </header>
                  <div class="card-image">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Placeholder image"
                    />
                  </div>
                  <div class="card-content">
                    <div>
                      <div class="media-left">
                        <img
                          src="https://bulma.io/images/placeholders/96x96.png"
                          alt="Placeholder image"
                        />
                      </div>
                      <div>
                        <p>John Smith</p>
                        <p>@johnsmith</p>
                      </div>
                    </div>

                    <div class="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                      <a href="#">#css</a>
                      <a href="#">#responsive</a>
                      <br />
                      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">Save</a>
                    <a href="#" class="card-footer-item">Edit</a>
                    <a href="#" class="card-footer-item">Delete</a>
                  </footer>
                </div>
              </div>
            </div>
            <!-- Content2 Middle end -->
          </div>
        </li>
        <!-- Content-2 end -->
      </ul>

      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a class="current" id="tab-1">Basic</a></li>
        <li><a id="tab-2">Size</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const basic = await $content(
      params.slug || "components/modal/basic"
    ).fetch();
    const sizeSmall = await $content(
      params.slug || "components/modal/size-small"
    ).fetch();
    const sizeMiddle = await $content(
      params.slug || "components/modal/size-middle"
    ).fetch();

    return {
      basic,
      sizeSmall,
      sizeMiddle,
    };
  },
};
</script>
