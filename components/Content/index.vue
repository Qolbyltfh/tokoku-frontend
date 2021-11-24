<template>
  <article>
    <div class="grid-container">
      <!-- <div v-for="product in getProducts" v-bind:key="product.id" :CardName="product.name" :CardPrice="price">
        <Card />
      </div> -->
      <div v-for="product in 9" v-bind:key="product.id">
        <Card />
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import "./style.scss";
</style>

<script>
import Card from "./../Card";

export default {
  components: {
    Card,
  },
  computed: {
    getProducts() {
      return this.$store.getters["product/getProducts"];
    },
  },
  mounted() {
    this.$store.dispatch("product/actionGetProducts");
  },
};
</script>
