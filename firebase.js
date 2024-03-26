import { createApp } from 'vue';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDV4GBTkLa_FcXA8lNzgV0gEHDeiqV3T7s",
    authDomain: "demonipula-f53d9.firebaseapp.com",
    projectId: "demonipula-f53d9",
    storageBucket: "demonipula-f53d9.appspot.com",
    messagingSenderId: "583907453471",
    appId: "1:583907453471:web:afe4be6c1dca0a745b832a",
    measurementId: "G-3FC5KX1D57"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const app = createApp({});
app.config.globalProperties.$firebase = firebase;
app.config.globalProperties.$db = db;
app.config.globalProperties.$auth = auth;

app.mount('#app');

export default app;
