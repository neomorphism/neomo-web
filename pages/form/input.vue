<template>
  <div>
    <h1>Input</h1>
    <client-only>
      <p class="bottom-border">
        The Neomo input CSS class make use of input tag of HTML. It will help
        you to apply neumorphism to your input forms.
      </p>
    </client-only>

    <div class="tab">
      <ul class="tab-content outset-neomo">
        <!-- Content-1 start -->
        <li id="content-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Shape</h2></div>
          <div class="tab-content--text">
            <client-only>
              <p>
                Neomo provides two different shapes which are square input form
                and rounded input form.
              </p>
            </client-only>

            <!-- Content-1 Square start -->
            <div class="tab-content--text"><h3>Square</h3></div>
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
                <nuxt-content :document="shapeSquare" />
              </div>
              <div style="text-align: center">
                <input
                  class="input square outset-neomo"
                  type="text"
                  placeholder="Square Input"
                />
              </div>
            </div>
            <!-- Content-1 Square end -->

            <!-- Content-1 Rounded start -->
            <div class="tab-content--text"><h3>Rounded</h3></div>
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
                <nuxt-content :document="shapeRounded" />
              </div>
              <div style="text-align: center">
                <input
                  class="input rounded outset-neomo"
                  type="text"
                  placeholder="Rounded Input"
                />
              </div>
            </div>
            <!-- Content-1 Rounded end -->
          </div>
        </li>
        <!-- Content-1 end -->

        <!-- Content2 start -->
        <li id="content-2" class="tab-content--list">
          <div class="tab-content--title">Color</div>
          <div class="tab-content--text">
            <client-only>
              <p>
                Input forms have four different colors based on the theme colors
                of Neomo. You are highly recommended set your background color
                as the same one of the input forms.
              </p>
            </client-only>

            <!-- Content-2 Color start -->
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
                <nuxt-content :document="color" />
              </div>
              <div style="text-align: center">
                <div class="container" style="background-color: white">
                  <input
                    class="input square"
                    type="text"
                    placeholder="Square Input"
                  />
                </div>
                <div class="container neomo">
                  <input
                    class="input square outset-neomo"
                    type="text"
                    placeholder="Square Input"
                  />
                </div>
                <div class="container gray">
                  <input
                    class="input square outset-gray"
                    type="text"
                    placeholder="Square Input"
                  />
                </div>
                <div class="container dark">
                  <input
                    class="input square outset-dark"
                    type="text"
                    placeholder="Square Input"
                  />
                </div>
              </div>
            </div>
            <!-- Content2 Color end -->
          </div>
        </li>
        <!-- Content-2 end -->

        <!-- Content-3 start -->
        <li id="content-3" class="tab-content--list">
          <div class="tab-content--title">Disabled</div>
          <div class="tab-content--text">
            <client-only>
              <p>
                If you need to make your input form not clickable, you can use a
                disabled input form.
              </p>
            </client-only>

            <!-- Content-3 Disabled start -->
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
                <nuxt-content :document="disabled" />
              </div>
              <div style="text-align: center">
                <input
                  class="input inset-neomo"
                  type="text"
                  disabled
                  placeholder="Disabled"
                />
              </div>
            </div>
            <!-- Content-3 Disabled end -->
          </div>
        </li>
        <!-- Content-3 end -->

        <!-- Content-4 start -->
        <li id="content-4" class="tab-content--list">
          <div class="tab-content--title"><h2>Group</h2></div>
          <div class="tab-content--text">
            <client-only>
              <p>
                When you use “left-icon” or “right-icon”, the icon part is not
                separated from the whole input forms. If you want to split it,
                you can use “input-group”. <br />
                There are also four different colors: default, neomo, gray,
                dark. You are highly recommended set your background color of
                the wrapper as the same one of the input forms.
              </p>
            </client-only>

            <!-- Content-4 Left start -->
            <div class="tab-content--text"><h3>Left</h3></div>
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
                <nuxt-content :document="groupLeft" />
              </div>
              <div class="input-group outset-neomo" style="margin: 0 auto">
                <span class="input-group-left text-center">@</span>
                <input
                  type="text"
                  class="input-group-right outset-neomo"
                  placeholder="Username"
                />
              </div>
            </div>
            <!-- Content-4 Left end -->

            <!-- Content-4 Right start -->
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
                <nuxt-content :document="groupRight" />
              </div>
              <div class="input-group outset-neomo" style="margin: 0 auto">
                <input
                  type="text"
                  class="input-group-left outset-neomo"
                  placeholder="Username"
                />
                <span class="input-group-right text-center">@</span>
              </div>
            </div>
            <!-- Content-4 Right end -->
          </div>
        </li>
        <!-- Content-4 end -->
      </ul>

      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a id="tab-1" class="current">Basic</a></li>
        <li><a id="tab-2">Color</a></li>
        <li><a id="tab-3">Disabled</a></li>
        <li style="margin-right: 0"><a id="tab-4">Group</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const shapeSquare = await $content(
      params.slug || "form/input/shape-square"
    ).fetch();
    const shapeRounded = await $content(
      params.slug || "form/input/shape-rounded"
    ).fetch();
    const color = await $content(params.slug || "form/input/color").fetch();
    const disabled = await $content(
      params.slug || "form/input/disabled"
    ).fetch();
    const groupLeft = await $content(
      params.slug || "form/input/group-left"
    ).fetch();
    const groupRight = await $content(
      params.slug || "form/input/group-right"
    ).fetch();

    return {
      shapeSquare,
      shapeRounded,
      color,
      disabled,
      groupLeft,
      groupRight,
    };
  },
};
</script>
