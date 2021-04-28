<template>
  <div>
    <nav class="right-bar">
      <div class="card outset-neomo">
        <h4 class="contents">Contents</h4>
        <ul>
          <li v-for="item in message" :key="item.id">
            <a :href="`#${item.id}`">{{ item.innerText }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      message: [],
    };
  },
  mounted() {
    this.message = document.querySelectorAll("h2");
  },
};
</script>

<style>
.right-bar {
  width: 22vw;
  position: fixed;
  z-index: 1;
  right: 0;
  overflow-x: hidden;
  padding: 20px 8vw 20px 20px;
}
.right-bar .contents {
  color: #4d4d4d;
  font-size: 25px;
  text-align: left;
  margin: 20px 0px 20px 20px;
}
.right-bar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.right-bar li a {
  display: block;
  color: #818181;
  padding: 8px 20px 8px 20px;
  text-align: left;
  text-decoration: none;
}
.right-bar li a:hover {
  color: rgb(48, 84, 241);
  border: none;
  box-shadow: inset -3px -3px 7px #ffffffe5,
    inset 3px 3px 5px rgba(88, 100, 121, 0.288) !important;
  border-radius: 10px;
}
.card {
  padding: 10px;
}
h4 {
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
