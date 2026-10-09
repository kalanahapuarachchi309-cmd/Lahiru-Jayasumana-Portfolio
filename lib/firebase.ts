// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBioL1nQQHDre6xt4PVXPaR5BvdsDlXvO4",
  authDomain: "rumex-490507.firebaseapp.com",
  projectId: "rumex-490507",
  storageBucket: "rumex-490507.firebasestorage.app",
  messagingSenderId: "100286273006",
  appId: "1:100286273006:web:5ca157b4fba9876f38eaff",
  measurementId: "G-0VH0M7BZZZ",
};

// Initialize Firebase (safely singleton)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Analytics safely on client side
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
