import { initializeApp, cert, getApps, getApp, Credential } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { credential } from "firebase-admin";

const apps = getApps();
const firebaseServer =
    apps.length === 0
        ? initializeApp({
            credential: credential.cert({
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                privateKey: process.env.PRIVATE_KEY,
                clientEmail: process.env.CLIENT_EMAIL
            }),
        })
        : getApp();

const firestore = getFirestore(firebaseServer)

export { firestore };