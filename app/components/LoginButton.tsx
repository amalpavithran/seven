'use client'
import GreenButton from "@/public/components/GreenButton";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User } from "firebase/auth";
import { auth, db } from "@/lib/firebase/client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { UserDoc } from "@/lib/types";

export default function LoginButton() {
  const router = useRouter();

  async function handleNewUser(user: User) {
    const firestoreUser = await getDoc(doc(db, "users", user.uid));
    console.log(firestoreUser)
    if (!firestoreUser.exists()) {
      const userDoc:UserDoc = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      } 
      setDoc(doc(db, "users", user.uid), userDoc);
    }
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
        if (user) {
          handleNewUser(user)
          router.replace('/home');
        }
    })
  }, [router]);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then((result) => {
      const user = result.user.getIdToken
    })
  }
  return <GreenButton text="Login using SSO" onClick={login} />
}