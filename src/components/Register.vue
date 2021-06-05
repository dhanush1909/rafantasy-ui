<template>
  <div class="login-main">
    <v-form class="main" v-model="valid">
      <v-row>
        <v-col><span class="title">Register and Start Playin'</span></v-col>
        <v-col cols="12">
          <v-col cols="6">
            <v-text-field
              v-model="firstName"
              :rules="firstNameRules"
              label="First Name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="lastName"
              label="Last Name"
              :rules="lastNameRules"
              required
            ></v-text-field>
          </v-col>
        </v-col>
        <v-col cols="12">
          <v-text-field
            type="date"
            v-model="dateOfBirth"
            label="Date of Birth"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-col cols="6">
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              type="password"
              label="Password"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              type="password"
              v-model="confirmPassword"
              :rules="[password === confirmPassword || 'Password must match']"
              label="Confirm Password"
              required
            ></v-text-field>
          </v-col>
        </v-col>
        <v-col class="sign-in-button">
          <div><v-btn class="orange">Register</v-btn></div>
          <div><span>Forgot Password?</span></div>
          <div style="cursor: pointer" @click="$emit('toggleLogin')">
            <span>Existing user? Login here</span>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Register",
  data() {
    return {
      firstName: "",
      firstNameRules: [(v) => !!v || "First Name is required"],
      lastName: "",
      lastNameRules: [(v) => !!v || "Last Name is required"],
      username: "", // todo: is Email enough or username would be a good addition?
      dateOfBirth: moment(new Date()).format("yyyy-MM-DD"),
      password: "",
      confirmPassword: "",
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [(v) => !!v || "Password is required"], // TODO: Moves common rules to utils file
    };
  },
};
</script>

<style scoped lang="scss">
.login-main {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .col {
    padding-bottom: 0px;
  }
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
