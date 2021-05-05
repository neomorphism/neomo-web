<template>
  <div>
    <h1>#Table</h1>
    <client-only>
      <p>You can easily create a table by looking at the following examples.</p>
    </client-only>

    <div id="Alt" class="alert">
      <span
        ><strong>Well done!</strong> You successfully read this important alert
        message.</span
      >
      <button class="alt-close">X</button>
    </div>

    <h2>Example</h2>
    <client-only> <p>＃Table</p></client-only>
    <div class="card">
      <div class="tab">
        <ul class="tab-list">
          <li class="current" data-tab="tab1" onclick="TabToggle()">
            <a href="#">default</a>
          </li>
          <li data-tab="tab2" onclick="TabToggle()"><a href="#">inset</a></li>
        </ul>

        <div id="tab1" class="tab-content current">
          <div class="tab-content--title">
            <body class="neomo p-10">
              <div class="container">
                <table class="table mt-10">
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
            </body>
            code
          </div>
          <client-only
            ><p class="tab-content--text"><nuxt-content :document="doc" /></p
          ></client-only>
        </div>

        <div id="tab2" class="tab-content">
          <body class="neomo p-10">
            <div class="container">
              <table class="table inset-neomo mt-10">
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
          </body>
          <div class="tab-content--title">table-inset</div>
          <client-only
            ><p class="tab-content--text">write your text2</p></client-only
          >
        </div>
      </div>

      <div class="tab">
        <ul class="tab-list">
          <li><a id="tab-1" href="#" class="current">default</a></li>
          <li><a id="tab-2" href="#">inset</a></li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="tab">
        <ul class="tab-list">
          <li><a id="tab-1" href="#" class="current">tab1</a></li>
          <li><a id="tab-2" href="#">tab2</a></li>
          <li><a id="tab-3" href="#">tab3</a></li>
        </ul>
        <div class="columns">
          <div class="column size-8">
            <ul class="tab-content outset-neomo">
              <li id="content-1">
                <div class="tab-content--title">title1</div>
                <div class="tab-content--text">
                  You can insert any type of content with this tab class.
                </div>
              </li>
              <li id="content-2">
                <div class="tab-content--title">title2</div>
                <div class="tab-content--text">
                  You can insert any type of content with this tab class.
                </div>
              </li>
              <li id="content-3">
                <div class="tab-content--title">title3</div>
                <div class="tab-content--text">
                  You can insert any type of content with this tab class.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(params.slug || "table/table").fetch();

    return {
      doc,
    };
  },
  data() {
    return {
      components: {},
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 3rem;
  font-weight: 100;
  padding-top: 30px;
  padding-bottom: 20px;
}
p {
  line-height: 1.3;
  margin-top: 10px;
  margin-bottom: 10px;
}

h2 {
  margin-top: 50px;
  margin-bottom: 20px;
}

.tab-list {
  position: absolute;
  right: 0;
}
</style>
