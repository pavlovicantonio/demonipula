<template>
  <v-app>
    <v-main>
      <center>
      <div class="container">
        <img :src="require('./assets/dp1.png')" alt="">
      </div>
      </center>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style>
.container{
  width: 100%;
  height: 85px;
  background-color: #294B29;
}
</style>