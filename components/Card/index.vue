<template>
    <div class="card" @click="onClick">
      <img src="~/assets/img/albina_pink_heels_0007_layer_1.jpg" alt="Denim Jeans" style="width: 100%" />
      <!-- <h1>{{ CardName }}</h1> -->
      <h1>Albina Heels Pink</h1>
      <!-- <p class="price">{{ CardPrice }}</p> -->
      <p class="price">Rp.179.000</p>
      <p><button>Add to Cart</button></p>
    </div>
</template>

<style lang="scss">
@import "./style.scss";
</style>

<script>
export default {
  props: {
    type: {
      type: String,
    },
    CardName: {
      type: String,
    },
    CardPrice: {
      type: String,
    }
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

