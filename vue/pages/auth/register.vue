<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <img src="../../assets/img/pencil.png" width="80" />
                <h1 class="h4 text-gray-900 mb-4">{{$t('register')}}</h1>
              </div>
              <div
                v-if="mustVerifyEmail"
                class="alert alert-success"
                role="alert"
              >{{ $t('verify_email_address') }}</div>
              <form
                v-else
                class="user"
                @submit.prevent="register"
                @keydown="form.onKeydown($event)"
              >
                <!-- Name -->
                <div class="form-group">
                  <input
                    v-model="form.name"
                    type="text"
                    name="name"
                    class="form-control form-control-user"
                    :placeholder="$t('name')"
                  />
                </div>
                <!-- Email -->
                <div class="form-group">
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-control form-control-user"
                    name="email"
                    :placeholder="$t('email')"
                  />
                </div>
                <!-- Password -->
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      v-model="form.password"
                      type="password"
                      class="form-control form-control-user"
                      name="password"
                      :placeholder="$t('password')"
                    />
                  </div>

                  <!-- Password Confirmation -->
                  <div class="col-sm-6">
                    <input
                      v-model="form.password_confirmation"
                      type="password"
                      class="form-control form-control-user"
                      :placeholder="$t('confirm_password')"
                      name="password_confirmation"
                    />
                  </div>
                </div>
                <!-- Submit Button -->
                <v-button
                  :loading="form.busy"
                  class="btn btn-primary btn-user btn-block"
                >{{ $t('register') }}</v-button>
                <hr />
              </form>
              <div class="text-center">
                <router-link :to="{ name: 'login' }" class="small ml-auto my-auto">{{ $t('login') }}</router-link>
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
    return { title: this.$t("register") };
  },

  data: () => ({
    form: {
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    },
    mustVerifyEmail: false
  }),

  methods: {
    async register() {
      // Register the user.
      const { data } = await this.form.post("/api/register");

      // Must verify email fist.
      if (data.status) {
        this.mustVerifyEmail = true;
      } else {
        // Log in the user.
        const {
          data: { token }
        } = await this.form.post("/api/login");

        // Save the token.
        this.$store.dispatch("auth/saveToken", { token });

        // Update the user.
        await this.$store.dispatch("auth/updateUser", { user: data });

        // Redirect home.
        this.$router.push({ name: "home" });
      }
    }
  }
};
</script>
<style >
body {
  background-color: #076b91;
}
</style>