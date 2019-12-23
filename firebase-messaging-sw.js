importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js');

var config = {
  apiKey: "AIzaSyCwin0aInuEYBvx_LMeCGGJ67xsCm42p18",
  authDomain: "fir-99341.firebaseapp.com",
  databaseURL: "https://fir-99341.firebaseio.com",
  storageBucket: "fir-99341.appspot.com",
  messagingSenderId: "672839583901",
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  const title = 'Hello';
  const options = {
    body: payload.data.status
  };
return self.registration.showNotification(title,options)
})

