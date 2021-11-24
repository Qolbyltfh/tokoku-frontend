<template>
  <div>
    <Navigation />
    <section>
      <nuxt />
    </section>
    <Footer />
  </div>
</template>

<script>
import Navigation from "~/components/Navbar";
import Footer from "~/components/Footer";

export default {
  components: {
    Navigation,
    Footer
  },
};
</script>   