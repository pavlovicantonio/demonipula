<template>
    <div style="width: 100%; height: 100%; background-color: #FDFFAB;">

        <div style="width: 80%; height: 100%; background-color: white; margin-left: auto; margin-right: auto; position: relative; top: 40px;">
            <center>
                <div style="width: 80%; background-color: #FDFFAB; position: relative; top: 30px; border: 2px solid black;">
                    <div>
                        <h3>T-shirt Istrijani</h3>
                        <img :src="require('../assets/shirt01.jpg')" alt="" width="150">
                        <br>
                        <v-btn style="margin: 15px;">Get</v-btn>
                    </div>
                </div>
                <br>
                <div style="width: 80%; background-color: #FDFFAB; position: relative; top: 30px; border: 2px solid black;">
                    <div>
                        <h3>T-shirt Ultras Istra</h3>
                        <img :src="require('../assets/shirt2.jpg')" alt="" width="150">
                        <br>
                        <v-btn style="margin: 15px;">Get</v-btn>
                    </div>
                </div>
                <br>
                <div style="width: 80%; background-color: #FDFFAB; position: relative; top: 30px; border: 2px solid black;">
                    <div>
                        <h3>Long sleeve shirt Forza Istra</h3>
                        <img :src="require('../assets/lsshirt1.jpg')" alt="" width="150">
                        <br>
                        <v-btn style="margin: 15px;">Get</v-btn>
                    </div>
                </div>
                <br>
                <div style="width: 80%; background-color: #FDFFAB; position: relative; top: 30px; border: 2px solid black;">
                    <div>
                        <h3>Long sleeve shirt Demoni Pula</h3>
                        <img :src="require('../assets/lsshirt2.jpg')" alt="" width="150">
                        <br>
                        <v-btn style="margin: 15px;">Get</v-btn>
                    </div>
                </div>
            </center>
        </div>

    <v-bottom-navigation v-model="value" color="primary" active>
        <v-btn class="btn" width="40" style="background-color: greenyellow;"><router-link to="shirts"><v-icon>mdi-tshirt-crew</v-icon>Shirts</router-link></v-btn>
        <v-btn class="btn" width="40"><router-link to="scarves"><img :src="require('../assets/scarf.png')">Scarves</router-link></v-btn>
        <v-btn class="btn" width="40"><img :src="require('../assets/more.png')"><span>Other</span></v-btn>
        <v-btn class="btn" width="40"><v-icon>mdi-account</v-icon><span>Profile</span></v-btn>
    </v-bottom-navigation>

    </div>
</template>

<script>

</script>

<style>
</style>