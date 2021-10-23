<template>
  <div>
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
        <img
          src="https://www.enagic.com/images/logo.svg"
          alt=""
          style="width: 3%"
        />
        <span class="navbar-brand ml-0 ml-md-3">Enagic </span>

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
              <a href="https://www.atomy.kr" class="nav-link">Water</a>
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                @click="gotoHomePage()"
                >Direshop</a
              >
            </li>
            <li class="nav-item">
              <a
                href="javascript:void(0)"
                class="nav-link"
                @click="goToProductsPage()"
                >Products</a
              >
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link">Shop</a>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link">Contact</a>
            </li>
            <li class="nav-item">
              <a href="javascript:void(0)" class="nav-link" @click="goToLogin()"
                >Ews Login</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
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
    goToEnagicPage() {
      this.$router.push("/enagic");
    },
    goToProductsPage() {
      this.$router.push("/products");
    },
  },
};
</script>

<style scoped>
.ftco-navbar-light {
  background: #2f1974 !important;
  color: rgba(0, 0, 0, 0.467);
}
.ftco-navbar-light .navbar-brand,
.ftco-navbar-light .navbar-nav > .nav-item > .nav-link {
  color: #fff !important;
}

.ftco-navbar-light .navbar-nav > .nav-item > .nav-link:hover {
  color: rgba(255, 255, 255, 0.755) !important;
}
button:focus {
  outline: none;
  border: none;
}
</style>