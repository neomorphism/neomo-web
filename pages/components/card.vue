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
                class="button outset-neomo button-exam"
                onclick="ContentToggle()"
              >
                <i class="fas fa-code collapse"></i>
              </button>
            </div>

            <div class="mt-2 expanded">
              <nuxt-content :document="basicOutset" />
            </div>
            <div>
              <div class="card outset-neomo">
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
                    <div>
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </div>
                    <div>
                      <p>WOJCIECH SZCZĘSNY</p>
                      <p>@SZCZĘSNY</p>
                    </div>
                  </div>

                  <div>
                    Bles also makes him one of the game’s great personalities.
                    <a>@seasons</a>.
                    <a href="#">#css</a>
                    <a href="#">#responsive</a>
                    <br />
                    <time datetime="1990-4-18">saw him cons, 2017/18</time>
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
            <div class="card inset-neomo">
              <header class="card-header">
                <p class="card-header-title">Component</p>
              </header>
              <div class="card-image">
                <img
                  src="data:image/png;base64,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"
                  alt="Placeholder image"
                />
              </div>
              <div class="card-content">
                <div>
                  <div>
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </div>
                  <div>
                    <p>WOJCIECH SZCZĘSNY</p>
                    <p>@SZCZĘSNY</p>
                  </div>
                </div>

                <div>
                  Bles also makes him one of the game’s great personalities.
                  <a>@seasons</a>.
                  <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  <time datetime="1990-4-18">saw him cons, 2017/18</time>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Save</a>
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>
          <!-- Content-1 Inset end -->
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
