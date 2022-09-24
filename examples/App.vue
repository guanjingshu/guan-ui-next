<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <DemoTe />
    <g-card imgSrc="1.jpg" summary="test" />
    <g-card imgSrc="2.jpg" summary="test">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </g-card>
    <g-card imgSrc="3.jpg" :width="370" :imgHeight="90">
      测试概要为插槽的情况
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级1111</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </g-card>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}
</style>
