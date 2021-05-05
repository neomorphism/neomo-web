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

    <div class="card outset-neomo">
      <!-- Header start -->
      <div class="card-header--title">Basic</div>
      <div class="card-header--text">
        <client-only>
          <p style="margin-bottom: 80px">
            The card also has a card-header, card-content, card-footer as a
            child class, and can distinguish regions.<br />
            You can also highlight the title area with the card-header-title
            option.<br />
            It can be adjusted to include images flexibly within the card size.
          </p>
        </client-only>
      </div>
      <!-- Header end -->

      <!-- Content Start -->
      <div class="card-content">
        <!-- Outset start -->
        <h4 class="mt-5 mb-5">Outset</h4>
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
        <div class="mt-2">
          <nuxt-content :document="basicOutset" />
        </div>
        <!-- Outset end -->

        <!-- Inset start -->
        <h4 class="mt-5 mb-5">Inset</h4>
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
        <div class="mt-2">
          <nuxt-content :document="basicInset" />
        </div>
        <!-- Inset end -->
      </div>
      <!-- Content end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const basicOutset = await $content(
      params.slug || "components/card/basic-Outset"
    ).fetch();
    const basicInset = await $content(
      params.slug || "components/card/basic-Inset"
    ).fetch();

    return {
      basicOutset,
      basicInset,
    };
  },
};
</script>

<style scoped>
.card {
  padding: 24px 24px 24px 64px;
}
.card-header--text {
  height: 10vw;
}
.card-header--title {
  display: block;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
}
.card-header--text {
  font-size: 15px;
  padding: 15px;
}
</style>
