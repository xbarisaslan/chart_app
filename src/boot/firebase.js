// src/boot/firebase.js
import { boot } from "quasar/wrappers";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9daGbLMgb_P6WUS-BtvHBWaouLM8IJQw",
  authDomain: "chart-app-43e6c.firebaseapp.com",
  projectId: "chart-app-43e6c",
  storageBucket: "chart-app-43e6c.appspot.com",
  messagingSenderId: "497795295251",
  appId: "1:497795295251:web:18aaff1d46e2e38279b7e6",
  measurementId: "G-VW98G63HR9",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export default boot(({ app }) => {
  app.config.globalProperties.$firebase = { app, analytics, db, auth };
});

export { app, analytics, db, auth };
