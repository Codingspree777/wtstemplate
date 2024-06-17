import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
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

interface Message {
  header?: string;
  body: string;
  footer?: string;
  buttons?: Array<{ id: number; name: string; text: string }>;
}

interface MessageData {
  components: Array<{
    type: string;
    sub_type?: string;
    index?: string;
    parameters: Array<{
      type: string;
      text?: string;
      image?: {
        link: string;
      };
      payload?: string;
    }>;
  }>;
}

export const editMessage = async (message: Message) => {
  // Update the message with the new message
  let payload: MessageData;
  payload = {
    components: [
      {
        type: "BODY",
        parameters: [
          {
            type: "text",
            text: message.body,
          },
        ],
      },
    ],
  };

  if (message.header) {
    payload.components.push({
      type: "header",
      parameters: [
        {
          type: "image",
          image: {
            link: message.header,
          },
        },
      ],
    });
  }

  if (message.footer) {
    payload.components.push({
      type: "FOOTER",
      parameters: [
        {
          type: "text",
          text: message.footer,
        },
      ],
    });
  }

  if (message?.buttons?.length ?? 0 > 0) {
    message?.buttons?.forEach((button) => {
      if (button.text !== "") {
        payload.components.push({
          type: "button",
          sub_type: "quick_reply",
          index: button.id.toString(),
          parameters: [
            {
              type: "payload",
              payload: button.text,
            },
          ],
        });
      }
    });
  }

  const docRef = await addDoc(collection(db, "messages"), payload);
  console.log("Document written with ID: ", docRef.id);
};
