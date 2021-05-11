<template>
  <div class="neomo">
    <h1>Modifiers syntax</h1>
    <client-only>
      <p class="bottom-border">
        Most NEOMO elements have
        <strong class="text-strong">alternative</strong> styles. To apply them,
        you only need to append one of the
        <strong class="text-strong">modifier classes</strong>.<br />
        They start with <strong>outset-</strong> or <strong>inset-</strong>.
      </p></client-only
    >

    <div class="tab">
      <div class="columns">
        <div class="column size-12">
          <ul class="tab-content outset-neomo">
            <li id="content-1" class="tab-content--list">
              <div class="tab-content--title"><h2>Default</h2></div>
              <div class="tab-content--text">
                <!-- default button -->
                <div class="columns">
                  <div class="column size-4 font-size-5">
                    Let's start with a simple
                    <strong class="text-strong">button</strong> :
                  </div>
                  <div class="column size-2 pl-2">
                    <button class="button normal ouset-neomo">button</button>
                  </div>
                  <div class="column size-6">
                    <nuxt-content :document="ModifiersDefault" />
                  </div>
                </div>
              </div>
            </li>
            <li id="content-2" class="tab-content--list">
              <div class="tab-content--title"><h2>Outset</h2></div>
              <div class="tab-content--text">
                <!-- outset button -->
                <div class="columns">
                  <div class="column size-4 font-size-5">
                    You can <strong class="text-strong">add</strong> the
                    <strong>outset-color</strong> CSS class :
                  </div>
                  <div class="column size-2 pl-2">
                    <button class="button normal outset-neomo">button</button>
                  </div>
                  <div class="column size-6">
                    <nuxt-content :document="ModifiersOutset" />
                  </div>
                </div>
              </div>
            </li>
            <li id="content-3" class="tab-content--list">
              <div class="tab-content--title"><h2>Inset</h2></div>
              <div class="tab-content--text">
                <!-- inset button -->
                <div class="columns">
                  <div class="column size-4 font-size-5">
                    You can <strong class="text-strong">add</strong> the
                    <strong>inset-color</strong> CSS class :
                  </div>
                  <div class="column size-2 pl-2">
                    <button class="button normal inset-neomo">button</button>
                  </div>
                  <div class="column size-6">
                    <nuxt-content :document="ModifiersInset" />
                  </div>
                </div>
              </div>
            </li>
            <li id="content-4" class="tab-content--list">
              <div class="tab-content--title"><h2>Inset</h2></div>
              <div class="tab-content--text">
                <!-- color button -->
                <!-- color button -->
                <div class="columns">
                  <div class="column size-4">
                    <div class="font-size-5">
                      You can <strong class="text-strong">add</strong> the
                      <strong>color</strong> CSS class :
                    </div>
                    <ul class="exam-list">
                      <li class="info">info</li>
                      <li class="success">success</li>
                      <li class="danger">danger</li>
                      <li class="warning">warning</li>
                    </ul>
                  </div>
                  <div class="column size-2 pl-2">
                    <div>
                      <button class="button outset-neomo normal info">
                        button
                      </button>
                    </div>
                    <div class="mt-3">
                      <button class="button outset-neomo normal success">
                        button
                      </button>
                    </div>
                    <div class="mt-3">
                      <button class="button outset-neomo normal danger">
                        button
                      </button>
                    </div>
                    <div class="mt-3">
                      <button class="button outset-neomo normal warning">
                        button
                      </button>
                    </div>
                  </div>
                  <div class="column size-6">
                    <nuxt-content :document="ModifiersColor" />
                  </div>
                </div>
              </div>
            </li>
            <li id="content-5" class="tab-content--list">
              <div class="tab-content--title"><h2>Color</h2></div>
              <div class="tab-content--text">
                <div class="columns">
                  <client-only>
                    <p class="mt-10 mb-10 size-12">
                      You can use
                      <strong class="text-strong">shadow colors</strong> based
                      on the
                      <strong class="text-strong">three representative</strong>
                      colors provided by NEOMO.
                    </p></client-only
                  >
                </div>
                <div class="columns">
                  <div class="column size-2 exam-shawdow--text">
                    Default Color
                  </div>
                  <div class="column size-3">
                    <div class="exam-shadow default">
                      <button class="button normal exam-shawdow--button">
                        button
                      </button>
                    </div>
                  </div>
                  <div class="column size-1"></div>
                  <div class="column size-6">
                    <nuxt-content :document="ModifiersShadowDefault" />
                  </div>
                </div>

                <div class="columns">
                  <div class="column size-2 exam-shawdow--text">
                    Neomo Color
                  </div>
                  <div class="column size-3">
                    <div class="exam-shadow neomo">
                      <button
                        class="button normal outset-neomo exam-shawdow--button"
                      >
                        button
                      </button>
                    </div>
                  </div>
                  <div class="column size-1"></div>
                  <div class="column size-6">
                    <nuxt-content :document="ModifiersShadowNeomo" />
                  </div>
                </div>

                <div class="columns">
                  <div class="column size-2 exam-shawdow--text">Gray Color</div>
                  <div class="column size-3">
                    <div class="exam-shadow gray">
                      <button
                        class="button normal outset-gray exam-shawdow--button"
                      >
                        button
                      </button>
                    </div>
                  </div>
                  <div class="column size-1"></div>
                  <div class="column size-6">
                    <nuxt-content :document="ModifiersShadowGray" />
                  </div>
                </div>

                <div class="columns">
                  <div class="column size-2 exam-shawdow--text">Dark Color</div>
                  <div class="column size-3">
                    <div class="exam-shadow dark">
                      <button
                        class="button normal outset-dark exam-shawdow--button"
                      >
                        button
                      </button>
                    </div>
                  </div>
                  <div class="column size-1"></div>
                  <div class="column size-6">
                    <nuxt-content :document="ModifiersShadowDark" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul class="tab-list tab-right">
            <li><a id="tab-1" class="current">Default</a></li>
            <li><a id="tab-2">Outset</a></li>
            <li><a id="tab-3">Inset</a></li>
            <li><a id="tab-4">Color</a></li>
            <li><a id="tab-5">Shadow</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const ModifiersDefault = await $content(
      params.slug || "/modifiers/modifiers-default"
    ).fetch();
    const ModifiersOutset = await $content(
      params.slug || "/modifiers/modifiers-outset"
    ).fetch();
    const ModifiersInset = await $content(
      params.slug || "/modifiers/modifiers-inset"
    ).fetch();
    const ModifiersColor = await $content(
      params.slug || "/modifiers/modifiers-color"
    ).fetch();
    const ModifiersShadowDefault = await $content(
      params.slug || "/modifiers/modifiers-shadow--default"
    ).fetch();
    const ModifiersShadowNeomo = await $content(
      params.slug || "/modifiers/modifiers-shadow--neomo"
    ).fetch();
    const ModifiersShadowDark = await $content(
      params.slug || "/modifiers/modifiers-shadow--dark"
    ).fetch();
    const ModifiersShadowGray = await $content(
      params.slug || "/modifiers/modifiers-shadow--gray"
    ).fetch();

    return {
      ModifiersDefault,
      ModifiersOutset,
      ModifiersInset,
      ModifiersColor,
      ModifiersShadowDefault,
      ModifiersShadowNeomo,
      ModifiersShadowDark,
      ModifiersShadowGray,
    };
  },
};
</script>

<style scope>
.exam-list {
  padding-left: 20px;
}
.exam-list li {
  margin-top: 10px;
}
.exam-shadow {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
}
.default {
  background: white !important;
}

.exam-shawdow--button {
  vertical-align: center;
}
.exam-shawdow--text {
  color: rgb(95, 95, 95);
  font-weight: bold;
}
strong {
  background-color: #cfccccf1;
  padding: 2px 5px 2px 5px;
}
code {
  margin: 0 !important;
}
.copy-btn {
  display: none;
}
</style>
