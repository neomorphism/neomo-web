<template>
  <div>
    <h1>Toast</h1>
    <client-only>
      <p class="bottom-border">
        Toast is useful for displaying simple notifications.<br />
        Basically, it has the form of push notifications in the mobile
        environment.<br />
        The child classes toast-header and toast-body allow you to distinguish
        titles from content regions. It also has the effect of disappearing
        toast messages through the delete button.
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
                [The delete function works as follows through the javascript
                function]<br />
                By default, toast is used in conjunction with the show class,
                and if the accompanying show class disappears, it will be used
                in the case of disappearing.<br />
                The opacity:0 property makes it invisible
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
              <div class="toast show outset-neomo" style="margin: 0 auto">
                <div class="toast-header">
                  <span class=""></span>
                  <strong class="mr-auto ml-2">Neumorphism</strong>
                  <small class="mr-2 ml-auto">11 mins ago</small>
                  <button type="button" onclick="toast_button(this);">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="toast-body">
                  Hello, world! This is a toast message.
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
              <div class="toast show inset-neomo" style="margin: 0 auto">
                <div class="toast-header">
                  <span class=""></span>
                  <strong class="mr-auto ml-2">Neumorphism</strong>
                  <small class="mr-2 ml-auto">11 mins ago</small>
                  <button type="button" onclick="toast_button(this);">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="toast-body">
                  Hello, world! This is a toast message.
                </div>
              </div>
            </div>
            <!-- Content-1 Inset end -->
          </div>
        </li>
        <!-- Content-1 end -->
      </ul>

      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a id="tab-1" class="current">Basic</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const basicOutset = await $content(
      params.slug || "components/toast/basic-outset"
    ).fetch();
    const basicInset = await $content(
      params.slug || "components/toast/basic-inset"
    ).fetch();

    return {
      basicOutset,
      basicInset,
    };
  },
};
</script>
