<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <img src="../../assets/img/pencil.png" width="80" />
                    <h1 class="h4 text-gray-900 mb-4 mt-2">{{$t('login')}}</h1>
                  </div>
                  <form class="user" @submit.prevent="login">
                    <!-- Email -->
                    <div class="form-group">
                      <input
                        v-model="form.email"
                        type="email"
                        class="form-control form-control-user"
                        aria-describedby="emailHelp"
                        :placeholder="$t('email')"
                        name="email"
                      />
                    </div>
                    <!-- Password -->
                    <div class="form-group">
                      <input
                        v-model="form.password"
                        type="password"
                        class="form-control form-control-user"
                        :placeholder=" $t('password') "
                        name="password"
                      />
                    </div>
                    <!-- Remember Me -->
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <checkbox v-model="remember" name="remember">{{ $t('remember_me') }}</checkbox>
                      </div>
                    </div>
                    <!-- Submit Button -->
                    <v-button
                      :loading="form.busy"
                      class="btn btn-primary btn-user btn-block"
                    >{{ $t('login') }}</v-button>
                  </form>
                  <hr />

                  <div class="text-center">
                    <router-link
                      :to="{ name: 'register' }"
                      class="small ml-auto my-auto"
                    >{{ $t('register') }}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "free",

  middleware: "guest",

  metaInfo() {
    return { title: this.$t("login") };
  },

  data: () => ({
    form: {
      email: "",
      password: ""
    },
    remember: false
  }),

  methods: {
    async login() {
      // Submit the form.
      const { data } = await this.form.post("/api/login");
      // Save the token.
      this.$store.dispatch("auth/saveToken", {
        token: data.token,
        remember: this.remember
      });
      console.log(data.token, this.remember);

      // Fetch the user.
      await this.$store.dispatch("auth/fetchUser");

      // Redirect home.
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style>
body {
  background-color: #076b91;
}
</style>