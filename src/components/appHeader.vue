<template>
  <div>
    <hero />
    <nav
      class="
        navbar navbar-expand-lg navbar-dark
        ftco_navbar
        bg-dark
        ftco-navbar-light
      "
      id="ftco-navbar"
    >
      <div class="container">
        <img src="@/assets/logo2.png" alt="" style="width: 10%" />
        <span class="navbar-brand">Direshop </span>

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
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link">Atomy</a>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link">Enagic</a>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link">Quiari</a>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link">Rainbow rxs</a>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link">Mixed</a>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link" @click="goToLogin()"
                >Login</a
              >
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
import hero from "./appHero";
export default {
  components: {
    hero,
  },
  data() {
    return {};
  },

  methods: {
    gotoHomePage() {
      this.$router.push("/");
    },
    goToContactPage() {
      this.$router.push("/contact");
    },
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
button:focus {
  outline: none;
  border: none;
}
</style>