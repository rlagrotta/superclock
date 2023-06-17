import styles from "./page.module.css";
import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from "./firebase";
import {useAuthState} from "react-firebase-hooks/"
import {useEffect} from "react"

export default function Home() {
  const googleAuth = new GoogleAuthProvider();

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuth);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login with Next.js Google Auth</h1>
      <button onClick={login}>Login</button>
    </div>
  );
}