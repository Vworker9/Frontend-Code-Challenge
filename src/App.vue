<template>
  <div id="app">
    <div class="qty-tag" v-if="totalQty > 0">
      <label class="qty-number">{{ totalQty }}</label>
    </div>

    <div class="header-container">
      <i class="fas fa-align-left icon-left"></i>
      <div class="header-text">
        <label>LOGO</label>
      </div>
      <i class="fas fa-cart-plus icon-right"></i>
    </div>
    <div>
      <router-view @onAddMoreQty="handleAddMoreQty" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      totalQty: 0,
    };
  },
  methods: {
    handleAddMoreQty(allQty) {
      this.totalQty = allQty.reduce((total, qty) => total + qty, 0);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
}
.qty-tag {
  position: relative;
}
.qty-number {
  position: absolute;
  right: 36px;
  background: #228b22;
  padding: 0 5px;
  border-radius: 12px;
  font-size: 12px;
  top: 4px;
  color: #fff;
  font-weight: 700;
}
.header-container {
  margin: 25px;
  display: flex;
  justify-content: space-between;
}

.icon-left {
}

.icon-right {
}

.header-text {
  font-weight: bold;
  text-align: center;
}
</style>
