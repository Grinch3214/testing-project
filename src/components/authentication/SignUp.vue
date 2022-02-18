<template>
  <v-row align="center" justify="center" class="login-in">
    <v-col cols="12" md="8">
      <v-card>
        <v-toolbar color="blue accent-2" elevation="3">
          <v-toolbar-title>Sign Up</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-0">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="text-center"
          >

          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="Name"
                  name="name"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="surname"
                  :counter="10"
                  :rules="surnameRules"
                  label="Surname"
                  name="surname"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  name="email"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="phone"
                  :rules="phoneRules"
                  counter
                  label="Phone"
                  name="phone"
                  type="number"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="computedDateFormatted"
                      label="Birthday date"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :rules="[v => !!v || 'Date is required']"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="birthday"
                    :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="save"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  v-model="select"
                  :items="gender"
                  :rules="[v => !!v || 'Gender is required']"
                  label="Gender"
                  required
                ></v-select>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="login"
                  :counter="15"
                  :rules="loginRules"
                  label="Login"
                  name="login"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show ? 'text' : 'password'"
                  name="password"
                  label="Password"
                  hint="At least 8 characters"
                  counter
                  @click:append="show = !show"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>

          <v-alert
            color="red"
            icon="mdi-account"
            type="warning"
            dense
            class="my-4 mx-auto"
            max-width="300"
            v-if="currentUser"
          >User with this login exists</v-alert>

            <v-btn :disabled="!valid" color="blue accent-2" @click="onSubmit">
              Sign Up
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: "SignUp",
  data: () => ({
    valid: true,
    show: false,
    currentUser: null,

    birthday: null,
    menu: false,

    select: null,
      gender: [
        'Male',
        'Female',
      ],

    password: "",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },

    phone: '',
    phoneRules: [
      (v) => !!v || "Phone is required",
      (v) => (v && v.length > 8) || "Phone must be more 8 characters",
    ],

    surname: "",
    surnameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],

    email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],

    login: "",
    loginRules: [
      (v) => !!v || "Login is required",
      (v) => (v && v.length <= 15) || "Login must be less than 15 characters",
    ],
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.birthday);
    },
    ...mapState(['users']),
  },

  methods: {
    ...mapActions( ['getUsers'] ),
    save (birthday) {
        this.$refs.menu.save(birthday)
    },
    formatDate(birthday) {
      if (!birthday) return null;

      const [year, month, day] = birthday.split("-");
      return `${day}/${month}/${year}`;
    },
    async onSubmit() {
      try {
        if (this.$refs.form.validate()) {

          for(let i = 0; i < this.users.length; i++) {
            if (this.login === this.users[i].login) {
              this.currentUser = this.users[i].login
              break
            }
          }

          if (this.currentUser) {
            this.login = ''
            setTimeout(() => this.currentUser = null, 2000)
          } else {
            await(await fetch ('http://localhost:3000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
              body: JSON.stringify({
                login: this.login,
                password: this.password,
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                birthday: this.birthday,
                select: this.select,
              }),
            })).json()
            this.$router.push('/login')
          }
        }
      } catch(e) {
        console.warn('Error', e)
      }
    },
  },
  created() {
    this.getUsers()
  },
};
</script>

<style lang="scss">
.login-in {
  .v-toolbar__content {
    justify-content: center;
    color: #fff;
  }
  .v-btn__content {
    color: #fff;
  }
}
</style>