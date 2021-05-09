<template>
  <div>
    <h1>Columns</h1>
    <client-only>
      <p class="bottom-border">
        Columns make it simple to utilize row and column grids. Columns class
        represents one row column class represents one column. <br />
        Used in the form of multiple columns being included as child classes in
        a single column.
      </p>
    </client-only>

    <div class="tab">
      <ul class="tab-content outset-neomo">
        <!-- Content-1 Start -->
        <li id="content-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Basic</h2></div>

          <!-- Content-1 Basic start -->
          <div class="tab-content--text">
            If you do not specify a size, the interior elements automatically
            divide the width.
          </div>
          <div>
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  class="button outset-neomo button-exam"
                  onclick="ContentToggle()"
                >
                  <i class="fas fa-code collapse"></i>
                </button>

                <div class="mt-2 expanded">
                  <nuxt-content :document="basic" />
                </div>
              </div>

              <div class="columns text-center">
                <div class="column box">
                  <p>First</p>
                </div>
                <div class="column box">
                  <p>Second</p>
                </div>
                <div class="column box">
                  <p>Third</p>
                </div>
                <div class="column box">
                  <p>Fourth</p>
                </div>
              </div>
            </div>
            <!-- Content-1 Basic end -->
          </div>
          <!-- Content-1 end -->
        </li>

        <li id="content-2" class="tab-content--list">
          <div class="tab-content--title"><h2>Size</h2></div>

          <!-- Content-2 Size start -->
          <div class="tab-content--text">
            <p>Users can divide up to 12 columns of space for one row.</p>
            Options for assigning sizes for each column are size-1, size-2, ...
            Used with size-12.
          </div>
          <div>
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  class="button outset-neomo button-exam"
                  onclick="ContentToggle()"
                >
                  <i class="fas fa-code collapse"></i>
                </button>

                <div class="mt-2 expanded">
                  <nuxt-content :document="size" />
                </div>
              </div>
              <div class="layout">
                <div class="columns text-center">
                  <div class="column size-1 box">
                    <p>size1</p>
                  </div>
                  <div class="column size-2 box">
                    <p>size2</p>
                  </div>
                  <div class="column size-3 box">
                    <p>size3</p>
                  </div>
                  <div class="column size-4 box">
                    <p>size4</p>
                  </div>
                </div>

                <div class="columns text-center">
                  <div class="column size-5 box">
                    <p>size5</p>
                  </div>
                  <div class="column size-6 box">
                    <p>size6</p>
                  </div>
                </div>

                <div class="columns text-center">
                  <div class="column size-7 box">
                    <p>size7</p>
                  </div>
                </div>

                <div class="columns text-center">
                  <div class="column size-8 box">
                    <p>size8</p>
                  </div>
                </div>

                <div class="columns text-center">
                  <div class="column size-9 box">
                    <p>size9</p>
                  </div>
                </div>

                <div class="columns text-center">
                  <div class="column size-10 box">
                    <p>size10</p>
                  </div>
                </div>

                <div class="columns text-center">
                  <div class="column size-11 box">
                    <p>size11</p>
                  </div>
                </div>

                <div class="columns text-center">
                  <div class="column size-12 box">
                    <p>size12</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Content-2 Size end -->
          </div>
          <!-- Content-2 end -->
        </li>

        <li id="content-3" class="tab-content--list">
          <div class="tab-content--title"><h2>Order</h2></div>

          <!-- Content-3 order start -->
          <div class="tab-content--text">
            <p>
              Users can specify order options based on the left side of the
              display order for each column, regardless of the order in which
              the code is written.
            </p>
            Order options are used as order-1, order-2, ...order-12.
          </div>
          <div>
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  class="button outset-neomo button-exam"
                  onclick="ContentToggle()"
                >
                  <i class="fas fa-code collapse"></i>
                </button>

                <div class="mt-2 expanded">
                  <nuxt-content :document="order" />
                </div>
              </div>

              <div class="columns text-center">
                <div class="column size-1 order-12 box">
                  <p>ord12</p>
                </div>
                <div class="column size-1 order-11 box">
                  <p>ord11</p>
                </div>
                <div class="column size-1 order-10 box">
                  <p>ord10</p>
                </div>
                <div class="column size-1 order-9 box">
                  <p>ord9</p>
                </div>
                <div class="column size-1 order-8 box">
                  <p>ord8</p>
                </div>
                <div class="column size-1 order-7 box">
                  <p>ord7</p>
                </div>
                <div class="column size-1 order-1 box">
                  <p>ord1</p>
                </div>
                <div class="column size-1 order-2 box">
                  <p>ord2</p>
                </div>
                <div class="column size-1 order-3 box">
                  <p>ord3</p>
                </div>
                <div class="column size-1 order-4 box">
                  <p>ord4</p>
                </div>
                <div class="column size-1 order-5 box">
                  <p>ord5</p>
                </div>
                <div class="column size-1 order-6 box">
                  <p>ord6</p>
                </div>
              </div>
            </div>
            <!-- Content-3 order end -->
          </div>
        </li>
        <!-- Content-3 end -->

        <!-- Content-4 Size start -->
        <li id="content-4" class="tab-content--list">
          <div class="tab-content--title"><h2>Interval</h2></div>

          <div class="tab-content--text">
            You can use interval-1, interval-2, interval-3 classes to adjust the
            spacing of elements in each column of columns.
          </div>
          <div>
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  class="button outset-neomo button-exam"
                  onclick="ContentToggle()"
                >
                  <i class="fas fa-code collapse"></i>
                </button>

                <div class="mt-2 expanded">
                  <nuxt-content :document="interval" />
                </div>
              </div>

              <div class="columns text-center interval-1">
                <div class="column size-4 box2">
                  <div class="outset-neomo p-1 m-1">interval1</div>
                </div>
                <div class="column size-4 box2">
                  <div class="outset-neomo p-1 m-1">interval1</div>
                </div>
                <div class="column size-4 box2">
                  <div class="outset-neomo p-1 m-1">interval1</div>
                </div>
              </div>

              <div class="columns text-center interval-2">
                <div class="column size-4 box2">
                  <div class="outset-neomo p-1 m-1">interval2</div>
                </div>
                <div class="column size-4 box2">
                  <div class="outset-neomo p-1 m-1">interval2</div>
                </div>
                <div class="column size-4 box2">
                  <div class="outset-neomo p-1 m-1">interval2</div>
                </div>
              </div>

              <div class="columns text-center interval-3">
                <div class="column size-4 box2">
                  <div class="outset-neomo p-1 m-1">interval3</div>
                </div>
                <div class="column size-4 box2">
                  <div class="outset-neomo p-1 m-1">interval3</div>
                </div>
                <div class="column size-4 box2">
                  <div class="outset-neomo p-1 m-1">interval3</div>
                </div>
              </div>
            </div>
            <!-- Content-4 Size end -->
          </div>
          <!-- Content-4 end -->
        </li>

        <!-- Content-5 Size start -->
        <li id="content-5" class="tab-content--list">
          <div class="tab-content--title"><h2>Justify</h2></div>

          <div class="tab-content--text">
            The just-left, just-center, and just-right options allow you to
            adjust the left/right alignment in one row.
          </div>
          <div>
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  class="button outset-neomo button-exam"
                  onclick="ContentToggle()"
                >
                  <i class="fas fa-code collapse"></i>
                </button>

                <div class="mt-2 expanded">
                  <nuxt-content :document="justify" />
                </div>
              </div>

              <div class="layout text-center">
                <div class="columns just-left">
                  <div class="column size-3 box">
                    <p>Left1</p>
                  </div>
                  <div class="column size-3 box">
                    <p>Left2</p>
                  </div>
                  <div class="column size-3 box">
                    <p>Left3</p>
                  </div>
                </div>

                <div class="columns just-center">
                  <div class="column size-3 box">
                    <p>Center1</p>
                  </div>
                  <div class="column size-3 box">
                    <p>Center2</p>
                  </div>
                  <div class="column size-3 box">
                    <p>Center3</p>
                  </div>
                </div>

                <div class="columns just-right">
                  <div class="column size-3 box">
                    <p>Right1</p>
                  </div>
                  <div class="column size-3 box">
                    <p>Right2</p>
                  </div>
                  <div class="column size-3 box">
                    <p>Right3</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Content-5 Size end -->
          </div>
        </li>
        <!-- Content-5 end -->

        <!-- Content-6 Size start -->
        <li id="content-6" class="tab-content--list">
          <div class="tab-content--title"><h2>Alignment</h2></div>

          <div class="tab-content--text">
            Use the align-top, align-mid, and align-bottom options to adjust the
            top/middle/bottom alignment in one row.
          </div>
          <div>
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  class="button outset-neomo button-exam"
                  onclick="ContentToggle()"
                >
                  <i class="fas fa-code collapse"></i>
                </button>

                <div class="mt-2 expanded">
                  <nuxt-content :document="alignment" />
                </div>
              </div>

              <div class="layout text-center">
                <div
                  class="columns align-top"
                  style="border: gray 1px solid; min-height: 10rem"
                >
                  <div class="column size-4 box">
                    <p>Top1</p>
                  </div>
                  <div class="column size-4 box">
                    <p>Top2</p>
                  </div>
                  <div class="column size-4 box">
                    <p>Top3</p>
                  </div>
                </div>

                <div
                  class="columns align-mid"
                  style="border: gray 1px solid; min-height: 10rem"
                >
                  <div class="column size-4 box">
                    <p>Mid1</p>
                  </div>
                  <div class="column size-4 box">
                    <p>Mid2</p>
                  </div>
                  <div class="column size-4 box">
                    <p>Mid3</p>
                  </div>
                </div>

                <div
                  class="columns align-bottom"
                  style="border: gray 1px solid; min-height: 10rem"
                >
                  <div class="column size-4 box">
                    <p>Bottom1</p>
                  </div>
                  <div class="column size-4 box">
                    <p>Bottom2</p>
                  </div>
                  <div class="column size-4 box">
                    <p>Bottom3</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Content-6 Size end -->
          </div>
        </li>
        <!-- Content-6 end -->

        <!-- content-7 Size start -->
        <li id="content-7" class="tab-content--list">
          <div class="tab-content--title"><h2>Responsive</h2></div>

          <div class="tab-content--text">
            <p>
              By default, all rows appear reactive around 992 based on the width
              of the window.
            </p>
            The static option allows the user to disable this responsiveness.
          </div>
          <div>
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  class="button outset-neomo button-exam"
                  onclick="ContentToggle()"
                >
                  <i class="fas fa-code collapse"></i>
                </button>

                <div class="mt-2 expanded">
                  <nuxt-content :document="responsive" />
                </div>
              </div>

              <div class="columns text-center">
                <div class="column size-4">
                  <p class="outset-neomo m-1 p-2">responsive</p>
                </div>
                <div class="column size-4">
                  <p class="outset-neomo m-1 p-2">responsive</p>
                </div>
                <div class="column size-4">
                  <p class="outset-neomo m-1 p-2">responsive</p>
                </div>
              </div>

              <div class="columns text-center static">
                <div class="column size-4 order-12">
                  <p class="outset-neomo m-1 p-2">non responsive</p>
                </div>
                <div class="column size-4 order-11">
                  <p class="outset-neomo m-1 p-2">non responsive</p>
                </div>
                <div class="column size-4 order-10">
                  <p class="outset-neomo m-1 p-2">non responsive</p>
                </div>
              </div>
            </div>
            <!-- content-7 Size end -->
          </div>
        </li>
        <!-- content-7 end -->
      </ul>

      <!-- Tab List start -->
      <ul class="tab-list tab-right">
        <li><a id="tab-1" class="current">Basic</a></li>
        <li><a id="tab-2">Size</a></li>
        <li><a id="tab-3">Order</a></li>
        <li><a id="tab-4">Interval</a></li>
        <li><a id="tab-5">Justify</a></li>
        <li><a id="tab-6">Alignment</a></li>
        <li><a id="tab-7">Responsive</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const basic = await $content(params.slug || "layout/columns/basic").fetch();
    const size = await $content(params.slug || "layout/columns/size").fetch();
    const order = await $content(params.slug || "layout/columns/order").fetch();
    const interval = await $content(
      params.slug || "layout/columns/interval"
    ).fetch();
    const justify = await $content(
      params.slug || "layout/columns/justify"
    ).fetch();
    const alignment = await $content(
      params.slug || "layout/columns/alignment"
    ).fetch();
    const responsive = await $content(
      params.slug || "layout/columns/responsive"
    ).fetch();

    return {
      basic,
      size,
      order,
      interval,
      justify,
      alignment,
      responsive,
    };
  },
};
</script>

<style scoped>
.layout {
  background: rgba(225, 234, 255, 0.897);
}
.box {
  background: rgba(198, 215, 255, 0.897);
  border: thin solid rgb(190, 190, 190);
}
.box2 {
  border: thin solid rgb(190, 190, 190);
}
</style>
