<template>
  <div class="product-card">
    <div class="card-header">
      <label class="product-title">
        {{ getTitle }}
      </label>
      <label class="product-amount"> £{{ convertToFloat }} </label>
    </div>
    <label class="product-description"
      >Wiper blades (pair) for the windshield</label
    >
    <div class="card-footer">
      <div class="quantity-button">
        <div class="qty qty-minus" @click="qty > 0 ? qty-- : 0">
          <i class="fas fa-minus"></i>
        </div>
        <label class="qty qty-label">{{ qty }}</label>
        <div class="qty qty-plus" @click="qty++">
          <i class="fas fa-plus"></i>
        </div>
      </div>
      <button class="btn-add" @click="addProducts(product.title)">ADD</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],

  data() {
    return {
      qty: this.product.qty,
    };
  },
  computed: {
    getTitle() {
      return this.product.title;
    },
    convertToFloat() {
      return `${this.product.amount}`;
    },
  },
  methods: {
    addProducts(productName) {
      this.$emit("onAddQty", this.qty, productName);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-card {
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-top: 10px;
  padding: 25px;
}
.product-title {
  font-weight: 700;
  width: 50%;
}
.product-description {
  color: #808080;
  font-size: 14px;
}
.product-amount {
  color: #4169e1;
  font-weight: 900;
}
.card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.card-footer {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}

.quantity-button {
  display: flex;
}

.qty {
  padding: 7px 12px;
  font-size: 14px;
  color: #808080;
}

.qty-minus {
  border: 1px solid #d3d3d3;
  border-radius: 8px 0 0 8px;
  background: #F8F8F8;
}
.qty-label {
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  font-weight: 600;
}
.qty-plus {
  color: #228b22;
  background: #edf5e7;
  border: 1px solid #228b22;
  border-radius: 0 8px 8px 0;
}
.btn-add {
  background: #228b22;
  color: #fff;
  font-weight: 700;
  border-radius: 8px;
  padding: 5px 20px 5px 20px;
}
</style>
