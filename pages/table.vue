<template>
  <div style="width: 870px; margin: auto">
    <h1 style="padding-top: 30px; padding-bottom: 20px">#Table</h1>
    <client-only>
      <p>You can easily create a table by looking at the following examples.</p>
    </client-only>

    <h2 class="content-margin">Example</h2>
    <client-only> <p>＃Table inset</p></client-only>
    <div class="tab">
      <ul class="tab-list">
        <li class="current" data-tab="tab1" onclick="TabToggle()">
          <a href="#">Tab1</a>
        </li>
        <li data-tab="tab2" onclick="TabToggle()"><a href="#">Tab2</a></li>
        <li data-tab="tab3" onclick="TabToggle()"><a href="#">Tab3</a></li>
        <li data-tab="tab4" onclick="TabToggle()"><a href="#">Tab4</a></li>
      </ul>

      <div id="tab1" class="tab-content current">
        <div class="tab-content--title">Tab1</div>
        <client-only
          ><p class="tab-content--text">wirte your text1</p></client-only
        >
      </div>

      <div id="tab2" class="tab-content">
        <div class="tab-content--title">Tab2</div>
        <client-only
          ><p class="tab-content--text">wirte your text2</p></client-only
        >
      </div>

      <div id="tab3" class="tab-content">
        <div class="tab-content--title">Tab3</div>
        <client-only
          ><p class="tab-content--text">wirte your text3</p></client-only
        >
      </div>

      <div id="tab4" class="tab-content">
        <div class="tab-content--title">Tab4</div>
        <client-only
          ><p class="tab-content--text">wirte your text4</p></client-only
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 3rem;
  font-weight: 100;
}
p {
  line-height: 1.3;
  margin-top: 10px;
  margin-bottom: 10px;
}

.content-margin {
  margin-top: 50px;
  margin-bottom: 20px;
}
</style>
