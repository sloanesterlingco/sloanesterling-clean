import * as admin from "firebase-admin";

let firebaseApp;

if (!admin.apps.length) {
  const creds = JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS_JSON || "{}");

  firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(creds),
  });
} else {
  firebaseApp = admin.app();
}

export { admin, firebaseApp };
