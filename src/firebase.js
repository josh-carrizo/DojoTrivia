import firebase from 'firebase/app';
// referencing configuration values from .env.development
import 'firebase/firestore';  //Para agregar almacen nube
var firebaseConfig = {
    VUE_APP_APIKEY: "AIzaSyCg40m3-NSQML-6YvOZhcXS6LZ2pfSZTt8",
    apiKey: "AIzaSyCg40m3-NSQML-6YvOZhcXS6LZ2pfSZTt8",
    VUE_APP_AUTHDOMAIN: "josh-carrizo-vue.firebaseapp.com",
    VUE_APP_DATABASEURL: "https://josh-carrizo-vue.firebaseio.com",
    VUE_APP_PROJECTID: "josh-carrizo-vue",
    projectId: "josh-carrizo-vue",
    VUE_APP_STORAGEBUCKET: "josh-carrizo-vue.appspot.com",
    VUE_APP_MESSAGINGSENDERID: "734250210148",
    VUE_APP_APPID: "1:734250210148:web:ae80a0ac66415bcb3ea071"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
