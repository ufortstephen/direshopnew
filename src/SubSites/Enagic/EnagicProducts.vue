<template>
  <div>
    <enagicHeader />
    <h2 class="text-center my-5">ENAGIC PRODUCTS</h2>

    <section>
      <div class="container">
        <div class="machine__products my-4">
          <h2>MACHINES</h2>
        </div>

        <div v-for="(product, index) in products" :key="index">
          <div class="row margin__">
            <div class="col-md-6">
              <img :src="product.product_name_image" alt="" />
              <h4 class="my-3">{{ product.product_name }}</h4>
              <p>{{ product.product_detail }}</p>
              <p>{{ product.desc }}</p>
              <button class="my-3 btn view__btn">View in store</button>
            </div>
            <div class="col-md-4 offset-md-2">
              <h5>{{ product.product_name }}</h5>
              <img :src="product.product_image" alt="" />
            </div>
          </div>
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
    <!-- {{ products }} -->
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
      products: allProducts,
    };
  },
};
</script>

<style scoped>
.margin__ {
  margin: 5rem 0;
}
.view__btn {
  border-radius: 0px;
  background-color: #004ea1de;
  width: 150px;
  height: 40px;
  color: #fff;
}
</style>