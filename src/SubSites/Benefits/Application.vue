<template>
  <div>
    <benefitsHeader />
    <section class="bg__muted">
      <div class="container">
        <form action="" class="bg-white p-3 border-rounded">
          <h2>Quick Application</h2>
          <p class="text-italic">
            Once the form is submitted, Login ID and Password along with Full
            Instructions, will be sent to your registered email, so you can
            purchase directly from Atomy’s site.
          </p>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="">First Name*</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Last Name*</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label for="">Mobile*</label>
                <input
                  type="tel"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="">Date of Birth*</label>
                <input
                  type="date"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="gender">Gender*</label>
                <div class="d-flex" style="gap: 3rem">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="gender"
                        id="gender"
                        value="male"
                      />
                      Male
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="gender"
                        id="gender"
                        value="female"
                      />
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Address Line 1*</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Address Line 2*</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="">City*</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Province*</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="">ZIP / Postal Code*</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Country*</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for=""
                  >Only last 3 digits of your SIN/SSN #* <br />Required by Atomy
                  for verification of your account</label
                >
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for=""
                  >Email* <br />
                  &nbsp;</label
                >
                <input
                  type="email"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for=""
                  >How did you hear about us? If was by a friend, type your
                  Friend’s Name*</label
                >
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
            </div>
          </div>

          <div class="btn btn-success w-100 py-3">Submit</div>

          <h6 class="my-3">
            Having trouble in filling or submitting the form,
            <span
              class="font-italic"
              style="text-decoration: underline"
              @click="changeRoute('contact')"
              >Contact Us</span
            >.
          </h6>
        </form>
      </div>
    </section>
    <appFooter />
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
    return {};
  },

  methods: {
    changeRoute(name) {
      this.$router.push(`/${name}`);
    },
  },
  created() {
    const favicon = document.getElementById("favicon");
    favicon.href =
      "https://atomybenefits.com/wp-content/uploads/2020/06/atomy-benefits-logo.png";
  },
};
</script>

<style>
/* @import "../../assets/css/owl.carousel.min.css"; */
/* @import "../../assets/css/owl.theme.default.min.css";
@import "../../assets/css/magnific-popup.css";
@import "../../assets/css/aos.css";
@import "../../assets/css/ionicons.min.css";
@import "../../assets/css/bootstrap-datepicker.css";
@import "../../assets/css/jquery.timepicker.css"; */
@import "../../assets/css/flaticon.css";
@import "../../assets/css/style.css";
.bg__muted {
  background-color: #ecf2e3 !important;
  padding: 2rem 0;
}
label {
  color: #000 !important;
}
</style>