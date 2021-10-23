<template>
  <div>
    <!-- Page Preloder -->
    <div id="preloder" v-if="loader">
      <div class="loader"></div>
    </div>
    <!-- Page Preloder -->

    <!-- Header -->
    <enagicHeader />
    <!-- Header -->

    <section class="container my-5">
      <div class="text-center enagic__hero__text">
        <h1>Realizing</h1>
        <h1 class="enagic__hero__text--text-blue">True Health</h1>
        <h2>Around the Globe</h2>
      </div>

      <div class="row my-5">
        <div class="col-md-6">
          <h5>Inclusive trademark of Kangen Water® Enagic USA</h5>

          <p>
            For over four decades, Japan-based Enagic International has been the
            leading manufacturer of alkaline ionizers and water filtration
            machines in the world.
          </p>

          <p>
            Our passion is to transform the tap water in your home into pure
            healthy electrolyzed-reduced and hydrogen-rich drinking water.
          </p>
        </div>
        <div class="col-md-6">
          <p>
            The Enagic Corporation direct sales system empowers hard-working and
            passionate independent distributors around the world.
          </p>

          <p>
            They fall in love with our products, and they spread the word about
            the positive changes Kangen Water® has brought into their lives and
            finances.
          </p>
        </div>
      </div>
    </section>
    <section
      class="ftco-section ftco-discount img"
      style="
        background-image: url(https://motionarray.imgix.net/preview-799806-s3LXvmjaq7-high_0011.jpg?w=660&q=60&fit=max&auto=format);
        background-blend-mode: overlay;
        background-color: rgba(0, 0, 0, 0.467);
      "
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row justify-content-start">
          <div class="col-md-5 discount ftco-animate">
            <h2 class="mb-4">Change your water, change your life.</h2>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row my-5">
          <div class="col-md-6">
            <h4 class="text-center mt-5 mb-3 history__header">History</h4>
            <p>
              In 1974 in Okinawa, Japan, Sony’s trading operation, the precursor
              of Enagic, began operations. Ever since, Enagic commitment to high
              quality products, innovation and True Health philosophy has made
              it the leader of water ionizer generating systems, now distributed
              globally.
            </p>

            <p>
              New offices continue to open worldwide as the company expands and
              reaches more and more people providing healthy, alkaline water and
              a way to improve their finances as well.
            </p>

            <p>
              <a href="">Learn About Enagic's Corporate History</a>
            </p>
          </div>
          <div class="col-md-6">
            <h4 class="text-center mt-5 mb-3 locations__header">Locations</h4>
            <p>
              Enagic continues to grow and expand its operations. Just in the
              past three years there have been new offices established in India,
              Russia and Brazil. Plans are underway to develop new Enagic®
              centers in about 20 other countries in the next few years. With
              presence in 40 locations around 23 countries and growing, you can
              be sure to get all the support you need from this global, well
              established company.
            </p>

            <p>
              <a href=""> Find our Global Office Locations & Sales Areas </a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="water__product__section">
        <div class="row mx-0">
          <div class="col-md-6">
            <h1 class="water__product">Innovative</h1>
            <h1 class="water__product">Water</h1>
            <h1 class="water__product">Technology</h1>

            <p class="my-5">
              Since 1974, Enagic has been a pioneer and innovator in alkaline
              water ionization technologies. By integrating scientific research
              with superior Japanese craftsmanship Enagic's Kangen Water®
              systems enhance nature's most vital life source, water, around the
              world.
            </p>

            <div class="d-flex" style="gap: 2rem">
              <button class="btn btn__learn--more">Learn More</button>
              <button class="btn btn__visit--store">Visit Our Store</button>
            </div>
          </div>
          <div class="col-md-6 text-center my-5 my-md-0">
            <img
              src="https://www.enagic.com/images/img-01.png"
              alt=""
              style="width: 100%"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="certifications">
        <div class="text-center">
          <h1 class="text-uppercase mt-5 mb-3 certifications__header">
            Certifications
          </h1>

          <p>
            Enagic International is certified to ISO 9001, ISO 14001, and ISO
            13485 for quality control and environmental management, to the Water
            Quality Association Gold Seal for product certification, and a
            member in good standing of the prestigious Direct Selling
            Association.
          </p>
        </div>

        <div class="d-lg-flex text-center my-5">
          <a href="">
            <img src="https://www.enagic.com/images/certif-img-01.png" alt=""
          /></a>
          <a href="">
            <img src="https://www.enagic.com/images/certif-img-02.png" alt="" />
          </a>
          <a href=""
            ><img src="https://www.enagic.com/images/certif-img-03.png" alt=""
          /></a>
          <a href=""
            ><img src="https://www.enagic.com/images/certif-img-04.png" alt=""
          /></a>
          <a href=""
            ><img src="https://www.enagic.com/images/certif-img-05.png" alt=""
          /></a>
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
import enagicHeader from "./EnagicHeader.vue";
export default {
  title: "Enagic Home - Realizing True Health Around The Globe.",
  components: {
    appFooter,
    enagicHeader,
  },
  data() {
    return {
      loader: true,
    };
  },

  methods: {},
  created() {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
    const favicon = document.getElementById("favicon");
    favicon.href = "https://www.enagic.com/images/logo.svg";
  },
};
</script>

<style scoped>
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
  background-color: #004da1;
  width: 150px;
  height: 40px;
  color: #fff;
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
  background: #301974f7;
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
</style>