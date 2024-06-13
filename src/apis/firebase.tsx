import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "take-home-wts-template.firebaseapp.com",
  projectId: "take-home-wts-template",
  storageBucket: "take-home-wts-template.appspot.com",
  messagingSenderId: "377204863220",
  appId: "1:377204863220:web:f2775f68b182107f616ea1",
  measurementId: "G-1ZGK3R9BRP",
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const messageRef = collection(db, "messages");

export const editMessage = async (messageId: string, message: any) => {
  // Update the message with the new message
  await setDoc(doc(messageRef, "message1001"), {
    id: "message1001",
    components: [
      {
        type: "header",
        parameters: [
          {
            type: "image",
            image: {
              link: "https://URL",
            },
          },
        ],
      },
      {
        type: "BODY",
        text: "Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise.",
        example: {
          body_text: [["the end of April", "25OFF", "25%"]],
        },
      },
      {
        type: "FOOTER",
        text: "Use the buttons below to manage your marketing subscriptions",
      },
      {
        type: "BUTTONS",
        buttons: [
          {
            type: "QUICK_REPLY",
            text: "Unsubcribe from Promos",
          },
          {
            type: "QUICK_REPLY",
            text: "Unsubscribe from All",
          },
        ],
      },
    ],
  });
};

// // Get a list of cities from your database
// export async function getCities(db: any) {
//   const citiesCol = collection(db, "cities");
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }

// curl 'https://graph.facebook.com/v20.0/564750795574598' \
// -H 'Content-Type: application/json' \
// -H 'Authorization: Bearer EAAJB...' \
// -d '
// {
//   "components": [
//     {
//       "type": "HEADER",
//       "format": "TEXT",
//       "text": "Our {{1}} is on!",
//       "example": {
//         "header_text": [
//           "Spring Sale"
//         ]
//       }
//     },
//     {
//       "type": "BODY",
//       "text": "Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise.",
//       "example": {
//         "body_text": [
//           [
//             "the end of April",
//             "25OFF",
//             "25%"
//           ]
//         ]
//       }
//     },
//     {
//       "type": "FOOTER",
//       "text": "Use the buttons below to manage your marketing subscriptions"
//     },
//     {
//       "type": "BUTTONS",
//       "buttons": [
//         {
//           "type": "QUICK_REPLY",
//           "text": "Unsubcribe from Promos"
//         },
//         {
//           "type": "QUICK_REPLY",
//           "text": "Unsubscribe from All"
//         }
//       ]
//     }
//   ]
// }'
