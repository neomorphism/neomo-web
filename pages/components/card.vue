<template>
  <div>
    <h1>Card</h1>
    <client-only>
      <p class="bottom-border">
        The card is the most basic container. It is used to display images,
        writings, etc. within a paragraph in general situations. For example, a
        single card can display a profile of a person or display details about a
        product.
      </p>
    </client-only>

    <div class="tab">
      <ul class="tab-content outset-neomo">
        <!-- Content-1 Start -->
        <li id="content-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Basic</h2></div>
          <div class="tab-content--text">
            <client-only>
              <p>
                The card also has a card-header, card-content, card-footer as a
                child class, and can distinguish regions.<br />
                You can also highlight the title area with the card-header-title
                option.<br />
                It can be adjusted to include images flexibly within the card
                size.
              </p>
            </client-only>
          </div>

          <!-- Content-1 Outset start -->
          <div class="tab-content--text"><h3>Outset</h3></div>
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
              <nuxt-content :document="basicOutset" />
            </div>
            <div class="column size-11 text-center ml-10 card-margin">
              <div class="card outset-neomo">
                <div class="card-image">
                  <img
                    src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Placeholder image"
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
                    I'm actually a musician, but photography is just too fun. It
                    brings me joy, inspiration and peace. Happy to support the
                    community here with my work! ✨
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
          <!-- Content-1 Outset end -->

          <!-- Content-1 Inset start -->
          <div class="tab-content--text"><h3>Inset</h3></div>
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
              <nuxt-content :document="basicInset" />
            </div>
            <div class="column size-11 text-center ml-10 card-margin">
              <div class="card inset-neomo">
                <div class="card-image">
                  <img
                    src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Placeholder image"
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
                    I'm actually a musician, but photography is just too fun. It
                    brings me joy, inspiration and peace. Happy to support the
                    community here with my work! ✨
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
          <!-- Content-1 Inset end -->
        </li>
        <!-- Content-1 end -->
      </ul>

      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a id="tab-1" class="current content-tab--only">Basic</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const basicOutset = await $content(
      params.slug || "components/card/basic-outset"
    ).fetch();
    const basicInset = await $content(
      params.slug || "components/card/basic-inset"
    ).fetch();

    return {
      basicOutset,
      basicInset,
    };
  },
};
</script>

<style scoped>
.img-profile {
  border-radius: 50%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.1);
  vertical-align: text-bottom;
}

.card-footer {
  border: none;
}
</style>
