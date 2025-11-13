// /library/firebase-admin.js

import * as admin from "firebase-admin";

if (!admin.apps.length) {
  const creds = JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS_JSON || "{}");

  admin.initializeApp({
    credential: admin.credential.cert(creds),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

export { admin };
