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

            <v-alert
            color="red"
            icon="mdi-account"
            type="warning"
            dense
            class="my-4 mx-auto"
            max-width="300"
            v-if="errorMsg"
            v-html="errorMsg"
          ></v-alert>

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
import { mapActions, mapState } from 'vuex'

export default {
  name: "SignIn",
  data: () => ({
    valid: true,
    show: false,
    errorMsg: '',

    currentUser: null,
    currentPassword: null,

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
    ...mapActions( ['getUsers'] ),
    async onSubmit() {
      try {
        if (this.$refs.form.validate()) {

          for(let i = 0; i < this.users.length; i++) {
            if (this.login === this.users[i].login) {
              this.currentUser = this.users[i].login
              if (this.password === this.users[i].password) {
                this.currentPassword = this.users[i].password
                break
              }
            }
          }

          if(!this.currentUser) {
            this.errorMsg = 'Not existing login'
            this.currentUser = null
          } else if (!this.currentPassword) {
            this.errorMsg = 'Wrong password. Try again!'
            this.currentPassword = null
          } else {
            this.errorMsg = ''
            localStorage.setItem('login', this.login)
            console.log('OK')
            this.$router.push('/')
          }

        }
      } catch (e) {
        console.warn('Error', e)
      }
    },
  },
  computed: {
    ...mapState(['users']),
  },
  created() {
    this.getUsers()
  }
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