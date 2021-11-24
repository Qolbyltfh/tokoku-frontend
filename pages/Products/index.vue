<template>
  <div>
    <Filters />
    <Content />
  </div>
</template>

<script>
import Filters from "~/components/Filters";
import Content from "~/components/Content";

export default {
  layout: "master",
  components: {
    Filters,
    Content,
  },
  computed: {
    getProducts() {
      console.log('aaa',this.$store.getters["product/getProducts"]);
      return this.$store.getters["product/getProducts"];
    }
  },
  async mounted() {
    await this.$store.dispatch("product/actionGetProducts");
  },
};
</script>