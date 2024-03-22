<template>
  <div style="width: 100%; height: 100%; background-color: #FDFFAB;">
    <v-card class="login">
      <center>
        <h1>Login</h1>
      </center>
      <v-text-field label="E-mail" class="vtf"></v-text-field>
      <v-text-field label="Password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword" class="vtf">
      </v-text-field>
      <p style="padding: 15px">New user? <router-link to="registration">Create an account!</router-link></p>
      <center>
        <v-btn style="margin-bottom: 15px; background-color: #294B29; color: white;">Login</v-btn>
      </center>
    </v-card>
  </div>
</template>

<script>

export default ({
  name: 'HomeView',
  data(){
    return{
      email: '',
      password: '',
      showPassword: false
    }
  }
});
</script>

<style>
  body{
    background-color: aqua;
  }
  .login{
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 30px;
  }

  .vtf{
    padding: 15px;
  }
</style>