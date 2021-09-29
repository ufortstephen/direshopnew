<template>
  <div>
    <enagicHeader />
    <h2 class="text-center my-5">ENAGIC PRODUCTS</h2>

    <section>
      <div class="container">
        <div class="machine__products">
          <h2>MACHINES</h2>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="tumeric__products">
          <h2>UKON TUMERIC</h2>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="technology">
          <h2>TECHNOLOGY</h2>
        </div>
      </div>
    </section>
    <!-- {{ userData }} -->
    <enagicFooter />
  </div>
</template>

<script>
import enagicHeader from "./EnagicHeader.vue";
import enagicFooter from "@/components/appFooter";
import allProducts from "./Products";
export default {
  title: "Enagic Products - Realizing True Health Around The Globe.",
  components: {
    enagicHeader,
    enagicFooter,
  },
  data() {
    return {
      userData: allProducts,
    };
  },
};
</script>

<style>
</style>