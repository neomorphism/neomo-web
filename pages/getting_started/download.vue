<template>
  <div>
    <h1>Download</h1>
    <client-only>
      <p class="bottom-border">
        NEOMO can import compiled CSS and JavaScript, source code via
        <strong class="text-strong">download</strong>, provide
        <strong class="text-strong">cdn</strong>, and include it as a package
        manager such as <strong class="text-strong">npm, yarn</strong>.
      </p>
    </client-only>

    <h2>Download CSS and JS</h2>
    <client-only>
      <p>
        Download to use NEOMO's <strong class="text-strong">CSS</strong> and
        <strong class="text-strong">JS</strong>.
      </p></client-only
    >
    <ul>
      <li><strong class="text-strong">CSS</strong></li>
      <li><strong class="text-strong">JS</strong></li>
    </ul>
    <button class="button normal outset-neomo">
      <strong class="text-strong">Download</strong>
    </button>

    <h2>CDN</h2>
    <client-only>
      <p></p>
    </client-only>

    <h2>NPM / YARN Package</h2>
    <client-only>
      <p>
        <nuxt-content :document="doc" />
      </p>
    </client-only>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(params.slug || "download/package").fetch();

    return {
      doc,
    };
  },
};
</script>

<style>
.button {
  margin-top: 20px;
}
</style>
