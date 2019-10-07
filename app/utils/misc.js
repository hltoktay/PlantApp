import { AsyncStorage } from "react-native";

export const FIREBASE_URL = `https://plantapp-ba72f.firebaseio.com`;
export const API_KEY = `AIzaSyBwMVVXmp3hm74ckqkQxl5E5IhhGQSnYrg`;
export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`;

export const getTokens = cb => {
  AsyncStorage.multiGet([
    "@PlantApp@token",
    "@PlantApp@refreshToken",
    "@PlantApp@expireToken",
    "@PlantApp@uid"
  ]).then(value => {
    cb(value);
  });
};

export const setTokens = (values, cb) => {
  const dateNow = new Date();
  const expiration = dateNow.getTime() + 3600 * 1000;

  AsyncStorage.multiSet([
    ["@PlantApp@token", values.token],
    ["@PlantApp@refreshToken", values.refToken],
    ["@PlantApp@expireToken", expiration.toString()],
    ["@PlantApp@uid", values.uid]
  ]).then(response => {
    cb();
  });
};

// var firebaseConfig = {
//     apiKey: "AIzaSyBwMVVXmp3hm74ckqkQxl5E5IhhGQSnYrg",
//     authDomain: "plantapp-ba72f.firebaseapp.com",
//     databaseURL: "https://plantapp-ba72f.firebaseio.com",
//     projectId: "plantapp-ba72f",
//     storageBucket: "",
//     messagingSenderId: "532896721850",
//     appId: "1:532896721850:web:7aad244891b40ba8bdcb83",
//     measurementId: "G-7X551PMCZ1"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
