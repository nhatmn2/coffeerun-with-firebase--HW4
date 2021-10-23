(function (window) {
    'use strict';
    var App = window.App || {};
    
    window.FirebaseConfig = {
        apiKey: "AIzaSyCoSXlDfcSAHxYFvyffQrTszmfUcLoS620",
        authDomain: "coffeerun-ae230.firebaseapp.com",
        projectId: "coffeerun-ae230",
        storageBucket: "coffeerun-ae230.appspot.com",
        messagingSenderId: "952526292547",
        appId: "1:952526292547:web:8f41846cb0eb93b550f6f6",
        measurementId: "G-16RTZ89ETS"
    };
    
    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig)
    window.App = App;

})(window);