<template>
  <div>
    <div class="d-md-flex half">
      <div class="bg" style="background-image: url('images/bg_1.jpg')"></div>
      <div class="contents">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-12">
              <div class="form-block mx-auto">
                <div class="text-center mb-5">
                  <h3 class="text-uppercase">
                    Login to <strong>Direshop</strong>
                  </h3>
                </div>
                <form action="#" method="post" @submit.prevent="login()">
                  <div class="form-group first">
                    <label for="username">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="your-email@gmail.com"
                      id="username"
                      v-model="credentials.email"
                    />
                  </div>
                  <div class="form-group last mb-3">
                    <label for="password">Password</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Password"
                      id="password"
                      v-model="credentials.password"
                    />
                  </div>

                  <div class="d-sm-flex mb-5 align-items-center">
                    <label class="control control--checkbox mb-3 mb-sm-0"
                      ><span class="caption">Remember me</span>
                      <input type="checkbox" checked="checked" />
                      <div class="control__indicator"></div>
                    </label>
                    <span class="ml-auto"
                      ><a href="#" class="forgot-pass">Forgot Password</a></span
                    >
                  </div>

                  <input
                    type="submit"
                    value="Log In"
                    class="btn btn-block py-2 btn-primary"
                  />

                  <span class="text-center my-3 d-block">or</span>

                  <div class="">
                    <a href="#" class="btn btn-block py-2 btn-facebook mb-3">
                      <span class="icon-facebook mr-3"></span> Login with
                      facebook
                    </a>
                    <a href="#" class="btn btn-block py-2 btn-google"
                      ><span class="icon-google mr-3"></span> Login with
                      Google</a
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/helpers/api";
export default {
  title: "Login - Direshop Beauty & Health Shop",
  data() {
    return {
      credentials: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async login() {
      try {
        const response = await api.login(this.credentials);
        console.log(response);
      } catch (error) {
        console.log(error.response);
        alert(error.response);
      }
    },
  },
};
</script>

<style scoped>
.half,
.half .container > .row {
  height: 100vh;
  min-height: 700px;
}

.half .contents {
  background: #f6f7fc;
}

.half .bg {
  width: 55%;
}
@media (max-width: 767.98px) {
  .half .bg {
    width: 100%;
    height: 200px;
  }
  .form-block {
    background: transparent !important;
  }
}

.half .contents {
  width: 75%;
}
@media (max-width: 767.98px) {
  .half .contents {
    width: 100%;
  }
}

.half .contents .form-control,
.half .bg .form-control {
  border: none;
  border-radius: 4px;
  height: 54px;
  background: #efefef !important;
}
.half .contents .form-control:active,
.half .contents .form-control:focus,
.half .bg .form-control:active,
.half .bg .form-control:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.half .bg {
  background-size: cover;
  background-position: center;
}

.half a {
  color: #888;
  text-decoration: underline;
}

.half .btn {
  padding-left: 30px;
  padding-right: 30px;
  border-radius: none !important;
}

.half .forgot-pass {
  position: relative;
  top: 2px;
  font-size: 14px;
}

.form-block {
  background: #fff;
  padding: 40px;
  max-width: 500px;
  -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.2);
}
@media (max-width: 767.98px) {
  .form-block {
    padding: 25px;
  }
}

.control {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 14px;
}
.control .caption {
  position: relative;
  top: 0.2rem;
  color: #888;
}

.control input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.control__indicator {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background: #e6e6e6;
  border-radius: 4px;
}

.control--radio .control__indicator {
  /* border-radius: 50%; */
}

.control:hover input ~ .control__indicator,
.control input:focus ~ .control__indicator {
  background: #ccc;
}

.control input:checked ~ .control__indicator {
  background: #fb771a;
}

.control:hover input:not([disabled]):checked ~ .control__indicator,
.control input:checked:focus ~ .control__indicator {
  background: #fb8633;
}

.control input:disabled ~ .control__indicator {
  background: #e6e6e6;
  opacity: 0.9;
  pointer-events: none;
}

.control__indicator:after {
  font-family: "icomoon";
  content: "\e5ca";
  position: absolute;
  display: none;
  font-size: 16px;
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}

.control input:checked ~ .control__indicator:after {
  display: block;
  color: #fff;
}

.control--checkbox .control__indicator:after {
  top: 50%;
  left: 50%;
  margin-top: -1px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.control--checkbox input:disabled ~ .control__indicator:after {
  border-color: #7b7b7b;
}

.control--checkbox input:disabled:checked ~ .control__indicator {
  background-color: #7e0cf5;
  opacity: 0.2;
}

.btn {
  text-decoration: none !important;
  border-radius: none !important;
}
.btn.btn-facebook {
  display: block;
  background: #3b5998;
  color: #fff;
}
.btn.btn-google {
  background: #ea4335;
  color: #fff;
}
</style>