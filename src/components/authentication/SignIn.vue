<template>
  <v-row align="center" justify="center" class="login-in">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-toolbar color="blue accent-2" elevation="3">
          <v-toolbar-title>Sign In</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="text-center"
          >
            <v-text-field
              v-model="login"
              prepend-icon="mdi-account"
              :counter="15"
              :rules="loginRules"
              label="Login"
              name="login"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              prepend-icon="mdi-lock"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              name="password"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show = !show"
            ></v-text-field>

            <v-btn :disabled="!valid" color="blue accent-2" @click="onSubmit">
              Sign In
            </v-btn>
          </v-form>
        </v-card-text>
        <v-card-actions class="ml-6 mr-6 justify-center">
          <p>
            No account? <router-link to="/register">Register now</router-link>
          </p>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SignIn",
  data: () => ({
    valid: true,
    show: false,

    password: "",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },

    login: "",
    loginRules: [
      (v) => !!v || "Login is required",
      (v) => (v && v.length <= 15) || "Login must be less than 10 characters",
    ],
  }),

  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          login: this.login,
          password: this.password,
        };
        console.log(user);
      }
    },
  },
};
</script>

<style lang="scss">
.login-in {
  height: 100%;
  .v-toolbar__content {
    justify-content: center;
    color: #fff;
  }
  .v-btn__content {
    color: #fff;
  }
}
</style>