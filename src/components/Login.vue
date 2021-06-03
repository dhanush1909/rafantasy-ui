<template>
  <div class="login-main">
    <v-form class="main" v-model="valid">
      <v-row>
        <v-col><span class="title">Sign In</span></v-col>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            type="password"
            label="Password"
            required
          ></v-text-field>
        </v-col>
        <v-col class="sign-in-button">
          <div><v-btn class="orange">Sign In</v-btn></div>
          <div><span>Forgot Password?</span></div>
          <div><span>New here? Sign Up</span></div>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [(v) => !!v || "Password is required"], // TODO: Moves common rules to utils file
    };
  },
};
</script>

<style lang="scss">
// $input-slot-margin-bottom: none; //TODO: figure out a way to overwrite vuetify sass variables

.login-main {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .v-form {
    width: 50%;
    min-width: 250px;
    max-width: 450px;

    .col {
      display: flex;
      justify-content: center;

      .title {
        font-size: 24px;
        color: #ffffff;
      }

      &.sign-in-button {
        flex-direction: column;
        align-items: center;
        & > div {
          flex: 1;
        }

        span {
          color: #ffffff;
          font-size: 12px;
        }
      }
    }

    .v-input {
      .v-label {
        padding-left: 10px;
        font-size: 0.8rem;
      }

      .v-label--active {
        top: 0;
        color: white;
      }

      .v-messages {
        color: red;
      }
    }

    .v-input__control > .v-input__slot:before,
    .v-input__control > .v-input__slot:after {
      border: none;
      border-style: none;
    }

    .v-text-field input {
      border: none;
      background-color: white;
      border-radius: 10px;
      height: 40px;
      padding: 0 10px;
    }

    .v-text-field input[type="text"] {
      font-size: 14px;
    }
  }
}
</style>
