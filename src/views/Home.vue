<template>
  <div class="home">
    <!-- Page Preloder -->
    <div id="preloder" v-if="loader">
      <div class="loader"></div>
    </div>
    <!-- Page Preloder -->
    <appHeader />

    <section class="ftco-section">
      <div class="container">
        <div class="row">
          <div class="col-md-4 ftco-animate">
            <div class="media d-block text-center block-6 services">
              <div class="icon d-flex mb-3">
                <span class="flaticon-facial-treatment"></span>
              </div>
              <div class="media-body">
                <h3 class="heading">Skin &amp; Beauty Care Products</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 ftco-animate">
            <div class="media d-block text-center block-6 services">
              <div class="icon d-flex mb-3">
                <span class="flaticon-cosmetics"></span>
              </div>
              <div class="media-body">
                <h3 class="heading">Health Products</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 ftco-animate">
            <div class="media d-block text-center block-6 services">
              <div class="icon d-flex mb-3">
                <span class="flaticon-curl"></span>
              </div>
              <div class="media-body">
                <h3 class="heading">Machines</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="ftco-section ftco-discount img"
      style="background-image: url(images/bg_2.jpg)"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-md-5 discount ftco-animate">
            <h3>Save up to 25% Off</h3>
            <h2 class="mb-4">Discount</h2>
            <p class="mb-4">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </p>
            <p>
              <a href="#" class="btn btn-white btn-outline-white px-4 py-3"
                >Order Now</a
              >
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <h2 class="mb-4">Our Products</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 ftco-animate">
            <a href="#" class="work-entry">
              <img src="images/work-1.jpg" class="img-fluid" alt="" />
              <div class="info d-flex align-items-center">
                <div>
                  <div
                    class="
                      icon
                      mb-4
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                  >
                    <span class="icon-search"></span>
                  </div>
                  <h3>Beauty Products</h3>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-4 ftco-animate">
            <a href="#" class="work-entry">
              <img
                src="images/work-2.jpg"
                class="img-fluid"
                alt="Colorlib Template"
              />
              <div class="info d-flex align-items-center">
                <div>
                  <div
                    class="
                      icon
                      mb-4
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                  >
                    <span class="icon-search"></span>
                  </div>
                  <h3>Health Products</h3>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-4 ftco-animate">
            <a href="#" class="work-entry">
              <img src="images/work-3.jpg" class="img-fluid" alt="" />
              <div class="info d-flex align-items-center">
                <div>
                  <div
                    class="
                      icon
                      mb-4
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                  >
                    <span class="icon-search"></span>
                  </div>
                  <h3>Machines</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-partner bg-light">
      <div class="container">
        <div class="row partner justify-content-center">
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-3 ftco-animate text-center mb-3 mb-md-0">
                <a href="#" class="partner-entry">
                  <img
                    src="https://www.atomy.com:449/us/Resource/Home/Common/img/inc/logo.png"
                    class="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div class="col-md-3 ftco-animate text-center mb-3 mb-md-0">
                <a href="#" class="partner-entry">
                  <img
                    src="https://www.enagic.com/images/logo.svg"
                    class="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div class="col-md-3 ftco-animate text-center mb-3 mb-md-0">
                <a href="#" class="partner-entry">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5d4c5ef5eaa8c8000125cd9f/1611172535419-W5FVLEMFO1V7LJHUOPP8/781c7382-4c4e-4632-9f62-1850eddbe56f.jpg?format=1500w"
                    class="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div class="col-md-3 ftco-animate text-center mb-3 mb-md-0">
                <a href="#" class="partner-entry">
                  <img
                    src="https://www.enagic.com/images/logo.svg"
                    class="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- {{ products }} -->
    <appFooter />
  </div>
</template>

<script>
import appHeader from "@/components/appHeader.vue";
import appFooter from "@/components/appFooter.vue";

export default {
  title: "Direshop Beauty And Health Shop",
  name: "Home",
  components: {
    appHeader,
    appFooter,
  },
  data() {
    return {
      loader: true,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },

  mounted() {
    this.$store.dispatch("getProducts");
  },

  created() {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
    const favicon = document.getElementById("favicon");
    favicon.href = "https://www.direshop777.com/img/logo2.763dd539.png";
  },
};
</script>

<style scoped>
/* Preloder */

#preloder {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999999;
  background: rgba(255, 255, 255, 0.165);
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
</style>
