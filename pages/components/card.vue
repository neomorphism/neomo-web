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
