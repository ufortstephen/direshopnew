<template>
  <div>
    <!-- Page Preloder -->
    <div id="preloder" v-if="loader">
      <div class="loader"></div>
    </div>
    <!-- Page Preloder -->

    <!-- Header -->
    <benefitsHeader />
    <!-- Header -->

    <div class="p-2 bg__blue" @click="applicationPage()">
      <a href="javascript:void(0)" class="text-white"
        ><marquee behavior="" direction="ltr"
          >JOIN ATOMY AND ORDER FOR PRODUCTS HERE.
          <span class="ml-5 text-white">CLICK HERE</span></marquee
        ></a
      >
    </div>

    <div class="w-100">
      <img src="@/assets/home6.png" alt="" class="w-100" />
    </div>
    <div class="container">
      <div class="row my-5">
        <div class="col-md-6">
          <h5>
            ATOMY Products are approved by FDA & Health Canada, and lab results
            shown to be effective.
          </h5>
        </div>
        <div class="col-md-6">
          <h5>
            ATOMY Products are hypoallergenic because they are all Natural and
            Chemical FREE.
          </h5>
        </div>
      </div>
    </div>

    <section class="bg__muted my-5">
      <div class="container my-5">
        <div class="product">
          <div v-for="item in products" :key="item.id">
            <img :src="item.product_name_image" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section
      class="ftco-section ftco-discount img"
      style="
        background-image: url(https://atomybenefits.com/wp-content/uploads/2020/05/products_img02.jpg);
      "
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row justify-content-start">
          <div class="col-md-5 discount ftco-animate bg-dak p-3">
            <h2 class="mb-0 text__blue mb-0">ATOMY SKINCARE SYSTEM</h2>
            <h2 class="mb-4 text__blue">THE FAME</h2>

            <button class="bg__blue btn__learn--more">See Products</button>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="bg__blue p-3 py-5 my-3">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div
                class="d-md-flex justify-content-between text-white text-center"
                style="gap: 2rem"
              >
                <i
                  class="fa fa-shopping-bag fa-5x mb-3 mb-lg-0"
                  aria-hidden="true"
                ></i>
                <div>
                  <h6>AUTHENTIC PRODUCTS</h6>
                  <p>Atomy sells 100% authentic products to their customers.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div
                class="d-md-flex justify-content-between text-white text-center"
                style="gap: 2rem"
              >
                <i
                  class="fa fa-shopping-bag fa-5x mb-3 mb-lg-0"
                  aria-hidden="true"
                ></i>
                <div>
                  <h6>24/7 SUPPORT</h6>
                  <p>
                    Atomy provides customer support to help you in every point.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div
                class="d-md-flex justify-content-between text-white text-center"
                style="gap: 2rem"
              >
                <i
                  class="fa fa-shopping-bag fa-5x mb-3 mb-lg-0"
                  aria-hidden="true"
                ></i>
                <div>
                  <h6>AUTHENTIC PRODUCTS</h6>
                  <p>Atomy sells 100% authentic products to their customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <appFooter />
    <!-- Footer -->
  </div>
</template>

<script>
import appFooter from "@/components/appFooter";
import benefitsHeader from "./BenefitsHeader.vue";
import benefitProducts from "./Products";
export default {
  title: "Atomic Benefits - Realizing True Health Around The Globe.",
  components: {
    appFooter,
    benefitsHeader,
  },
  data() {
    return {
      loader: true,
      products: benefitProducts,
    };
  },

  methods: {
    applicationPage() {
      this.$router.push("/benefits/application");
    },
  },
  created() {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
    const favicon = document.getElementById("favicon");
    favicon.href =
      "https://atomybenefits.com/wp-content/uploads/2020/06/atomy-benefits-logo.png";
  },
};
</script>

<style scoped>
.bg__blue {
  background-color: #0286e7;
}
.text__blue {
  color: #0286e7;
}
.enagic__hero__text > * {
  margin: 2rem;
  font-size: 4em;
  text-transform: uppercase;
}
.enagic__hero__text--text-blue {
  color: #301974;
  font-weight: bold;
}
.certifications {
  margin: 8rem 0;
}
.certifications__header {
  font-size: 3em;
  color: #301974;
}
.locations__header,
.history__header {
  font-size: 2em;
  color: #301974;
  text-transform: uppercase;
}
a {
  color: #301974;
}
.water__product__section {
  background-color: #301974;
  padding: 4rem 0;
}
.water__product__section p {
  color: #fff;
}
.water__product {
  color: #fff;
  font-size: 5em;
  text-transform: uppercase;
  line-height: 3.9rem;
}

.btn__learn--more {
  border-radius: 0px;
  background-color: #0286e7;
  width: 150px;
  height: 40px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
}
.btn__visit--store {
  border-radius: 0px;
  background-color: #67b622;
  width: 150px;
  height: 40px;
  color: #fff;
}
/* Preloder */

#preloder {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999999;
  background-color: #fff;
}

.loader {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -13px;
  margin-left: -13px;
  border-radius: 60px;
  animation: loader 0.8s linear infinite;
  -webkit-animation: loader 0.8s linear infinite;
}

@keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    border: 4px solid #f44336;
    border-left-color: transparent;
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    border: 4px solid #673ab7;
    border-left-color: transparent;
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    border: 4px solid #f44336;
    border-left-color: transparent;
  }
}

@-webkit-keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    border: 4px solid #f44336;
    border-left-color: transparent;
  }
  50% {
    -webkit-transform: rotate(180deg);
    border: 4px solid #673ab7;
    border-left-color: transparent;
  }
  100% {
    -webkit-transform: rotate(360deg);
    border: 4px solid #f44336;
    border-left-color: transparent;
  }
}
.product {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
img {
  width: 100%;
}
.bg__muted {
  background-color: #ecf2e3 !important;
  padding: 1rem 0;
}
.product > div {
  position: relative;
  cursor: pointer;
  background-color: #ecf2e3 !important;
  padding: 2rem;
}
.product > div:hover > img {
  position: relative;
  cursor: pointer;
  background-color: #ecf2e33d !important;
  padding: 2rem;
  transform: scale(1.2);
}
.product > div:hover::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-blend-mode: overlay;
  background-color: #c5c5c577 !important;
}

@media (max-width: 768px) {
  .enagic__hero__text > * {
    margin: 1rem;
    font-size: 2em;
    text-transform: uppercase;
  }

  .certifications__header,
  .water__product {
    font-size: 2em;
  }
}

@media (max-width: 768px) {
  h5 {
    font-size: 14px;
  }
}
</style>