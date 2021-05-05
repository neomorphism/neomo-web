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

    <div class="card outset-neomo">
      <!-- Header start -->
      <div class="card-header--title">Basic</div>
      <div class="card-header--text">
        <client-only>
          <p style="margin-bottom: 80px">
            [The delete function works as follows through the javascript
            function]<br />
            By default, toast is used in conjunction with the show class, and if
            the accompanying show class disappears, it will be used in the case
            of disappearing.<br />
            The opacity:0 property makes it invisible
          </p>
        </client-only>
      </div>
      <!-- Header end -->

      <!-- Content Start -->
      <div class="card-content">
        <!-- Outset start -->
        <h4 class="mt-5 mb-5">Outset</h4>
        <div class="toast show outset-neomo">
          <div class="toast-header">
            <span class=""></span>
            <strong class="mr-auto ml-2">Neumorphism</strong>
            <small class="mr-2 ml-auto">11 mins ago</small>
            <button type="button" onclick="toast_button(this);">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="toast-body">Hello, world! This is a toast message.</div>
        </div>
        <div class="mt-2">
          <nuxt-content :document="basicOutset" />
        </div>
        <!-- Outset end -->

        <!-- Inset start -->
        <h4 class="mt-5 mb-5">Inset</h4>
        <div class="toast show inset-neomo">
          <div class="toast-header">
            <span class=""></span>
            <strong class="mr-auto ml-2">Neumorphism</strong>
            <small class="mr-2 ml-auto">11 mins ago</small>
            <button type="button" onclick="toast_button(this);">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="toast-body">Hello, world! This is a toast message.</div>
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
      params.slug || "components/toast/basic-Outset"
    ).fetch();
    const basicInset = await $content(
      params.slug || "components/toast/basic-Inset"
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
