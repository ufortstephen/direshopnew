<template>
  <div>
    <enagicHeader />

    <section>
      <div class="container">
        <div class="machine__products mt-4">
          <h4>MACHINES</h4>
        </div>

        <div v-for="(product, index) in products" :key="index">
          <div class="row margin__ shadow p-3">
            <div class="col-md-6">
              <h4 class="my-1">{{ product.name }}</h4>
              <p>{{ product.slug }}</p>
              <p>{{ product.description }}</p>
              <div class="d-flex justify-content-between">
                <img :src="product.photo_1" alt="" style="width: 100px" />
                <img :src="product.photo_1" alt="" style="width: 100px" />
                <img :src="product.photo_1" alt="" style="width: 100px" />
              </div>
            </div>
            <div class="col-md-4 offset-md-2">
              <img :src="product.photo_main" alt="" style="width: 300px" />
            </div>
            <div class="col-md-12 my-3 text-center">
              <!-- <button class="my-3 btn view__btn">View in store</button> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- {{ products }} -->
    <enagicFooter />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import enagicHeader from "./EnagicHeader.vue";
import enagicFooter from "@/components/appFooter";

export default {
  title: "Enagic Products - Realizing True Health Around The Globe.",
  components: {
    enagicHeader,
    enagicFooter,
  },
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products.slice(2, 3);
    },
  },

  mounted() {
    this.$store.dispatch("getProducts");
  },

  methods: {},
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