<template>
  <div>
    <h1>Tab</h1>
    <client-only>
      <p class="bottom-border"></p>
    </client-only>

    <div class="tab1">
      <ul class="tab-content outset-neomo">
        <li id="content1-1" class="tab-content--list">
          <div class="tab-content--title"><h2>Basic</h2></div>

          <div class="tab-content--text"><h3>Outset</h3></div>
          <!-- Content-1 Start -->
          <div>
            <!-- Content-1 Outset start -->
            <div class="card inset-neomo code-exam">
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  class="button outset-neomo button-exam"
                  onclick="ContentToggle()"
                >
                  <i class="fas fa-code collapse"></i>
                </button>

                <div class="mt-2 expanded">
                  <nuxt-content :document="basicOutset" />
                </div>
              </div>

              <div class="tab">
                <ul class="tab-list">
                  <li><a id="tab-1" class="current">tab1</a></li>
                  <li><a id="tab-2">tab2</a></li>
                  <li><a id="tab-3">tab3</a></li>
                </ul>
                <div>
                  <ul class="tab-content outset-neomo">
                    <li id="content-1" class="tab-content--list">
                      <div class="tab-content--title">title1</div>
                      <div class="tab-content--text">
                        You can insert any type of content with this tab class.
                      </div>
                    </li>
                    <li id="content-2" class="tab-content--list">
                      <div class="tab-content--title">title2</div>
                      <div class="tab-content--text">
                        You can insert any type of content with this tab class.
                      </div>
                    </li>
                    <li id="content-3" class="tab-content--list">
                      <div class="tab-content--title">title3</div>
                      <div class="tab-content--text">
                        You can insert any type of content with this tab class.
                      </div>
                    </li>
                  </ul>
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

                <div class="mt-2 expanded">
                  <nuxt-content :document="basicInset" />
                </div>
              </div>

              <div class="tab">
                <ul class="tab-list">
                  <li><a id="tab-4" class="current">tab4</a></li>
                  <li><a id="tab-5">tab5</a></li>
                  <li><a id="tab-6">tab6</a></li>
                </ul>
                <ul class="tab-content inset-neomo">
                  <li id="content-4" class="tab-content--list">
                    <div class="tab-content--title">title4</div>
                    <div class="tab-content--text">
                      You can insert any type of content with this tab class.
                    </div>
                  </li>
                  <li id="content-5" class="tab-content--list">
                    <div class="tab-content--title">title5</div>
                    <div class="tab-content--text">
                      You can insert any type of content with this tab class.
                    </div>
                  </li>
                  <li id="content-6" class="tab-content--list">
                    <div class="tab-content--title">title6</div>
                    <div class="tab-content--text">
                      You can insert any type of content with this tab class.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Content-1 Inset end -->
        </li>
        <!-- Content-1 end -->

        <li id="content1-2" class="tab-content--list">
          <div class="tab-content--title"><h2>Vertical</h2></div>

          <div class="tab-content--text"><h3>Vertical</h3></div>
          <!-- Content-2 Start -->
          <div>
            <!-- Content-2 Vertical start -->
            <div
              class="card inset-neomo code-exam"
              style="padding-bottom: 0 !important"
            >
              <div class="mt-2 mb-3" style="display: flow-root">
                <button
                  class="button outset-neomo button-exam"
                  onclick="ContentToggle()"
                >
                  <i class="fas fa-code collapse"></i>
                </button>

                <div class="mt-2 expanded">
                  <nuxt-content :document="vertical" />
                </div>
              </div>

              <div class="tab vertical">
                <div class="columns">
                  <div class="column size-4">
                    <ul class="tab-list">
                      <li><a id="tab-7" class="current">tab7</a></li>
                      <li><a id="tab-8">tab8</a></li>
                      <li><a id="tab-9">tab9</a></li>
                    </ul>
                  </div>
                  <div class="column size-8">
                    <ul class="tab-content inset-neomo">
                      <li id="content-7" class="tab-content--list">
                        <div class="tab-content--title">title7</div>
                        <div class="tab-content--text">
                          You can insert any type of content with this tab
                          class.
                        </div>
                      </li>
                      <li id="content-8" class="tab-content--list">
                        <div class="tab-content--title">title8</div>
                        <div class="tab-content--text">
                          You can insert any type of content with this tab
                          class.
                        </div>
                      </li>
                      <li id="content-9" class="tab-content--list">
                        <div class="tab-content--title">title9</div>
                        <div class="tab-content--text">
                          You can insert any type of content with this tab
                          class.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Content-2 Vertical end -->
        </li>
      </ul>

      <!-- Tab List start -->
      <ul class="tab-list1 tab-right">
        <li><a id="tab-1" class="current1">Basic</a></li>
        <li><a id="tab-2">Vertical</a></li>
      </ul>
      <!-- Tab List end -->
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  async asyncData({ $content, params }) {
    const basicOutset = await $content(
      params.slug || "components/tab/basic-outset"
    ).fetch();
    const basicInset = await $content(
      params.slug || "components/tab/basic-inset"
    ).fetch();
    const vertical = await $content(
      params.slug || "components/tab/vertical"
    ).fetch();

    return {
      basicOutset,
      basicInset,
      vertical,
    };
  },
  mounted() {
    var tab1 = document.getElementsByClassName("tab1");
    var list_t = [];

    for (var i = 0; i < tab1.length; i++) {
      list_t[i] = tab1[i]
        .getElementsByClassName("tab-list1")[0]
        .getElementsByTagName("a");

      var tab_index = tab1[i]
        .getElementsByClassName("current1")[0]
        .id.split("-")[1];
      var tab_content = tab1[i].querySelector("#content1-" + tab_index);

      tab_content.style.display = "block";
    }

    for (var i = 0; i < list_t.length; i++) {
      for (var j = 0; j < list_t[i].length; j++) {
        list_t[i][j].onclick = function () {
          var tab1 = this.closest(".tab1");
          var list_t = this.closest(".tab-list1").getElementsByTagName("a");
          var tab_index;
          var tab_content;

          for (var k = 0; k < list_t.length; k++) {
            tab_index = list_t[k].id.split("-")[1];
            tab_content = tab1.querySelector("#content1-" + tab_index);
            tab_content.style.display = "none";
            list_t[k].classList.remove("current1");
          }

          this.classList.add("current1");
          tab_index = this.id.split("-")[1];
          tab_content = tab1.querySelector("#content1-" + tab_index);
          tab_content.style.display = "block";
        };
      }
    }
  },
};
</script>

<style scoped>
.tab1 ul.tab-list1 {
  list-style: none;
  margin: 10px 0 30px 0;
  padding: 0;
}
.tab1 ul.tab-list1 li {
  float: left;
  margin: 10px 30px 0 0;
}

.tab1 ul.tab-right li {
  float: left;
  margin: 10px 0 0 30px;
}

.tab1 ul.tab-list1 li a {
  text-align: center;
  display: block;
  text-decoration: none;
  cursor: pointer;
  padding: 15px 20px 15px 20px;
  color: black;
  overflow: hidden;
  border: none;
  border-radius: 10px;
  box-shadow: 3px 3px 7px #ababab, -3px -3px 7px #ffffff;
}
.tab1 ul.tab-list1 li a:hover {
  box-shadow: inset 3px 3px 5px #b8b9be, inset -3px -3px 5px #fff;
}
.tab1 ul.tab-list1 li a.current1 {
  box-shadow: inset 3px 3px 5px #b8b9be, inset -3px -3px 5px #fff;
}
.tab1 ul.tab-list1:after {
  content: "";
  display: block;
  clear: both;
}
.tab1 ul.tab-content {
  border: none;
  border-radius: 10px;
  box-shadow: 3px 3px 7px #ababab, -3px -3px 7px #ffffff;
  padding: 0 20px 0 20px;
}
.tab1 ul.tab-content li.tab-content--list {
  display: none;
  min-height: 200px;
  overflow: hidden;
  padding: 24px;
}
.tab-content--title {
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
}
.tab-content--text {
  font-size: 15px;
  padding: 15px;
}
.vertical ul.tab-list1 li {
  margin: 0;
  width: 100%;
}
.vertical ul.tab-list1 li a {
  margin: 0 30px 20px 0;
}

.tab-right {
  float: right;
}
</style>
