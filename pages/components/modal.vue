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
              <p>
                You can overlay the modal window by clicking the modal button.
              </p>
            </client-only>

            <!-- Content-1 Basic start -->
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  data-collapse-id="collapse1"
                  class="button outset-neomo button-exam collapse"
                  aria-label="code button"
                >
                  <i class="fas fa-code"></i>
                </button>
              </div>

              <div data-collapse-id="collapse1" class="mt-2 expanded">
                <nuxt-content :document="basic" />
              </div>
              <button data-modal-id="modal1" class="modal-button outset-neomo">
                MODAL Button
              </button>
              <div data-modal-id="modal1" class="modal">
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
              <p>
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
                  data-collapse-id="collapse2"
                  class="button outset-neomo button-exam collapse"
                  aria-label="code button"
                >
                  <i class="fas fa-code"></i>
                </button>
              </div>

              <div data-collapse-id="collapse2" class="mt-2 expanded">
                <nuxt-content :document="sizeSmall" />
              </div>
              <button data-modal-id="modal2" class="modal-button outset-neomo">
                Small Card MODAL
              </button>
              <div data-modal-id="modal2" class="modal">
                <div class="modal-content--sm outset-neomo">
                  <span class="modal-close">&times;</span>
                  <header class="card-header">
                    <p class="card-header-title">Modal Card</p>
                  </header>
                  <div
                    class="column size-10 text-center ml-10"
                    style="margin: 0 auto"
                  >
                    <div class="card-image">
                      <img
                        src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="Placeholder image"
                        style="border-radius: 0"
                      />
                    </div>
                    <div class="card-content">
                      <p class="font-size-4 profile-link text-left m-0">
                        <img
                          class="img-profile p-0"
                          src="https://images.unsplash.com/profile-1609856653329-a9e174ff28b6image?auto=format&amp;fit=crop&amp;w=32&amp;h=32&amp;q=60&amp;crop=faces&amp;bg=fff"
                          width="32"
                          height="32"
                          role="presentation"
                          alt="Go to Julian Steenbergen's profile"
                        />

                        Julian Steenbergen
                      </p>
                      <p class="text-left">
                        I'm actually a musician, but photography is just too
                        fun. It brings me joy, inspiration and peace. Happy to
                        support the community here with my work! ✨
                      </p>
                      <p class="text-left">
                        <i class="fas fa-calendar-week"></i>
                        Published on May 9, 2021
                      </p>
                      <p class="text-left">
                        <i class="fas fa-shield-alt"></i>
                        Free to use under the Unsplash License
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Content2 Card end -->

            <!-- Content-2 Middle start -->
            <div class="tab-content--text"><h3>Middle</h3></div>
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  data-collapse-id="collapse3"
                  class="button outset-neomo button-exam collapse"
                  aria-label="code button"
                >
                  <i class="fas fa-code"></i>
                </button>
              </div>

              <div data-collapse-id="collapse3" class="mt-2 expanded">
                <nuxt-content :document="sizeMiddle" />
              </div>
              <button data-modal-id="modal3" class="modal-button outset-neomo">
                Middle Card MODAL
              </button>
              <div data-modal-id="modal3" class="modal">
                <div class="modal-content--md outset-neomo">
                  <span class="modal-close">&times;</span>
                  <header class="card-header">
                    <p class="card-header-title">Modal Card</p>
                  </header>
                  <div
                    class="column size-10 text-center ml-10"
                    style="margin: 0 auto"
                  >
                    <div class="card-image">
                      <img
                        src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
                        alt="Placeholder image"
                        style="border-radius: 0"
                      />
                    </div>
                    <div class="card-content">
                      <p class="font-size-4 profile-link text-left m-0">
                        <img
                          class="img-profile p-0"
                          src="https://images.unsplash.com/profile-1609856653329-a9e174ff28b6image?auto=format&amp;fit=crop&amp;w=32&amp;h=32&amp;q=60&amp;crop=faces&amp;bg=fff"
                          width="32"
                          height="32"
                          role="presentation"
                          alt="Go to Julian Steenbergen's profile"
                        />

                        Julian Steenbergen
                      </p>
                      <p class="text-left">
                        I'm actually a musician, but photography is just too
                        fun. It brings me joy, inspiration and peace. Happy to
                        support the community here with my work! ✨
                      </p>
                      <p class="text-left">
                        <i class="fas fa-calendar-week"></i>
                        Published on May 9, 2021
                      </p>
                      <p class="text-left">
                        <i class="fas fa-shield-alt"></i>
                        Free to use under the Unsplash License
                      </p>
                    </div>
                  </div>
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
        <li><a id="tab-1" class="current">Basic</a></li>
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
