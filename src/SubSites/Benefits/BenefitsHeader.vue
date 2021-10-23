<template>
  <div>
    <!-- <hero /> -->
    <nav
      class="
        navbar navbar-expand-lg navbar-dark
        ftco_navbar
        bg-dark
        ftco-navbar-light
        py-3
      "
      id="ftco-navbar"
    >
      <div class="container">
        <img src="@/assets/benefitslogo.png" alt="" style="width: 10%" />

        <button
          class="navbar-toggler border-none"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="oi oi-menu"></span>
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                @click="gotoHomePage()"
                >Hemohim</a
              >
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link">Health</a>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link">Beauty</a>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link">Personal</a>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link">Food</a>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link">More</a>
            </li>

            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                @click="goToContactPage"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- END nav -->
  </div>
</template>

<script>
// import hero from "./appHero";
export default {
  components: {
    // hero,
  },
  data() {
    return {};
  },

  methods: {
    gotoHomePage() {
      this.$router.push("/benefits");
    },
    goToContactPage() {
      this.$router.push("/contact");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    goToEnagicPage() {
      this.$router.push("/enagic");
    },
  },
};
</script>

<style scoped>
button:focus {
  outline: none;
  border: none;
}
/* .ftco-navbar-light {
  background: #fff !important;
  z-index: 3;
  -webkit-box-shadow: 0 0 2px 0 rgb(0 0 0 / 7%);
  box-shadow: 0 0 2px 0 rgb(0 0 0 / 7%);
} */
.ftco-navbar-light .navbar-nav > .nav-item > .nav-link:hover {
  color: #0286e7 !important;
}
</style>