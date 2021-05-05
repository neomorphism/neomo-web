<template>
  <div>
    <h1>Progressbar</h1>
    <client-only>
      <p class="bottom-border">
        Progressbar is used to indicate the progress of a particular task.
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
                Progress can be set in percent through the width class.<br />
                You can also distinguish between the same progress bar with
                color options such as success, info, dancer, dark, gray, etc.
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
            <span>success</span>
            <div class="progress outset-neomo">
              <div class="progress-bar success width-3"></div>
            </div>
            <span>info</span>
            <div class="progress outset-neomo">
              <div class="progress-bar info width-4"></div>
            </div>
            <span>danger</span>
            <div class="progress outset-neomo">
              <div class="progress-bar danger width-5"></div>
            </div>
            <span>dark</span>
            <div class="progress outset-neomo">
              <div class="progress-bar dark width-6"></div>
            </div>
            <span>gray</span>
            <div class="progress outset-neomo">
              <div class="progress-bar gray width-7"></div>
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
              <nuxt-content :document="basicOutset" />
            </div>
            <span>success</span>
            <div class="progress inset-neomo">
              <div class="progress-bar success width-3"></div>
            </div>
            <span>info</span>
            <div class="progress inset-neomo">
              <div class="progress-bar info width-4"></div>
            </div>
            <span>danger</span>
            <div class="progress inset-neomo">
              <div class="progress-bar danger width-5"></div>
            </div>
            <span>dark</span>
            <div class="progress inset-neomo">
              <div class="progress-bar dark width-6"></div>
            </div>
            <span>gray</span>
            <div class="progress inset-neomo">
              <div class="progress-bar gray width-7"></div>
            </div>
          </div>
          <!-- Content-1 Inset end -->
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
      params.slug || "components/progressbar/basic-outset"
    ).fetch();
    const basicInset = await $content(
      params.slug || "components/progressbar/basic-inset"
    ).fetch();

    return {
      basicOutset,
      basicInset,
    };
  },
};
</script>
