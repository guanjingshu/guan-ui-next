import Vue from "vue";
import App from "./App.vue";
// 本地引入
// import "../components/css/demo.scss";
// import "../components/css/card.scss";
// import DemoTe from "../components/lib/demo/index";
// import Card from "../components/lib/card/index";
// Vue.use(DemoTe);
// Vue.use(Card);

// npm包全局引入
import "guan-ui-next/dist/css/index.css";
import GUI from "guan-ui-next";
Vue.use(GUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
