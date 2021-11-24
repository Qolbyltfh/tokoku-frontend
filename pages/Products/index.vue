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
    Content
  }
};
</script>