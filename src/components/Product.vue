<template>
  <div class="product-container">
    <div>
      <h2>REPLACE WIPER BLADES</h2>
      <label class="product-description">
        Front wiper blades are supplied as a "pair" unless otherwise requested,
        rear wiper blades are a "single" unit. (Fitting just the individual
        drivers or passenger wiper blade is not recommended)
      </label>
    </div>
    <div v-for="product in allProducts" :key="product.title">
      <ProductCard :product="product" @onAddQty="handleAddQty"></ProductCard>
    </div>
    <div>
      <button class="btn-checkout" @click="onCheckout">CHECKOUT</button>
    </div>
  </div>
</template>

<script>
const PRODUCTS = [
  { title: "FRONT WIPER BLADES (PAIR)", amount: 20.0, qty: 0 },
  { title: "REAR WIPER BLADES (PAIR)", amount: 30.0, qty: 0 },
  { title: "HEADLIGHT WIPER BLADE", amount: 10.0, qty: 0 },
];
import ProductCard from "./ProductCard";

export default {
  name: "Product",
  components: {
    ProductCard,
  },
  data() {
    return {
      allProducts: PRODUCTS,
    };
  },
  methods: {
    onCheckout() {
      const totalProducts = this.allProducts.map((product) => ({
        title: product.title,
        amount: product.amount * product.qty,
        qty: product.qty,
      }));
      this.$router.push({
        name: "summary",
        params: { products: totalProducts },
      });
    },
    handleAddQty(productQty, productName) {
      switch (productName) {
        case PRODUCTS[0].title:
          this.allProducts[0].qty = productQty;
          break;
        case PRODUCTS[1].title:
          this.allProducts[1].qty = productQty;
          break;
        case PRODUCTS[2].title:
          this.allProducts[2].qty = productQty;
          break;
        default:
          this.allProducts = PRODUCTS;
      }
      this.$emit(
        "onAddMoreQty",
        this.allProducts.map((product) => product.qty)
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-container {
  margin: 25px;
}
.product-description {
  color: #808080;
}
.btn-checkout {
  margin-top: 15px;
  padding: 10px 0;
  background: #228b22;
  color: #fff;
  font-weight: 700;
  border-radius: 8px;
  width: 100%;
}
</style>
