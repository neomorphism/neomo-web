<template>
  <div>
    <h1>Card</h1>
    <client-only>
      <p class="bottom-border">
        Using example code, you can quickly and easily create a table with a
        NEOMO design.
      </p>
    </client-only>

    <div class="tab">
      <ul class="tab-content outset-neomo">
        <!-- Content-1 Start -->
        <li id="content-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Basic</h2></div>

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
            <table class="table outset-neomo">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Male</th>
                  <th>Female</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Soccor</td>
                  <td>23</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Swimming</td>
                  <td>12</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>English</td>
                  <td>22</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Math</td>
                  <td>28</td>
                  <td>27</td>
                </tr>
              </tbody>
            </table>
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
            <table class="table inset-neomo">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Male</th>
                  <th>Female</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Soccor</td>
                  <td>23</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Swimming</td>
                  <td>12</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>English</td>
                  <td>22</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Math</td>
                  <td>28</td>
                  <td>27</td>
                </tr>
              </tbody>
            </table>
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
      params.slug || "content/table/basic-outset"
    ).fetch();
    const basicInset = await $content(
      params.slug || "content/table/basic-inset"
    ).fetch();

    return {
      basicOutset,
      basicInset,
    };
  },
};
</script>
