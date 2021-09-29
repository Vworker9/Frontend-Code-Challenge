<template>
  <div>
    <div class="separator"></div>
    <div class="summary-container">
      <div class="back" @click="$router.go(-1)">
        <i class="fas fa-arrow-left back-arrow"></i>
        <label class="back-label">BACK</label>
      </div>
      <h3>SUMMARY</h3>
      <div
        class="summary-details"
        v-for="product in getProduct"
        :key="product.title"
      >
        <label class="summary-label">
          {{ product.qty }}x {{ product.title }}
        </label>
        <label class="summary-amount"> £{{ product.amount }} </label>
      </div>

      <div class="summary-footer">
        <div class="separator"></div>
        <div class="summary-details">
          <label class="total-lable">
            TOTAL AMOUNT
          </label>
          <label class="total-amount"> £{{ getTotal }} </label>
        </div>
        <button class="btn-pay">PAY NOW</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summary",
  props: ["products"],
  computed: {
    getProduct() {
      return this.products;
    },
    getTotal() {
      console.log(this.products);
      return this.products?.reduce(
        (total, product) => total + product.amount,
        0
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.summary-container {
  margin: 25px;
}

.separator {
  border-top: 1px solid #e4e5e8;
}

.back {
  color: #c4c4c4;
  font-size: 12px;
}
.back-label {
  font-weight: 700;
}
.back-arrow {
  margin-right: 8px;
}
.summary-details {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}
.summary-label {
  font-size: 13px;
  color: #484848;
  font-weight: 700;
}
.summary-amount {
  color: #4169e1;
  font-size: 13px;
  font-weight: 700;
}
.summary-footer {
  position: fixed;
  bottom: 25px;
  left: 25px;
  right: 25px;
}
.total-lable {
  font-size: 14px;
  color: #484848;
  font-weight: 700;
}
.total-amount {
  color: #4169e1;
  font-size: 14px;
  font-weight: 700;
}
.btn-pay {
  margin-top: 15px;
  padding: 10px 0;
  background: #228b22;
  color: #fff;
  font-weight: 700;
  border-radius: 8px;
  width: 100%;
}
</style>
