import { Dispatch, SetStateAction } from 'react';
import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  MessagePayload,
  getMessaging,
  getToken,
  onMessage,
} from 'firebase/messaging';

import { FIREBASE_VAPID_KEY } from '~/utils';
import { firebaseConfig } from './config';

export const firebaseApp = getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

const messaging = getMessaging(firebaseApp);

const fetchToken = async (
  setTokenFound: Dispatch<SetStateAction<boolean>>,
): Promise<void> => {
  try {
    const token = await getToken(messaging, {
      vapidKey: FIREBASE_VAPID_KEY,
    }); // get this here: Firebase / Project Settings / Cloud Messaging / Web Push Certificates
    if (token) {
      console.log('current token for client: ', token);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log(
        'No registration token available. Request permission to generate one.',
      );
      setTokenFound(false);
      // shows on the UI that permission is required
    }
  } catch (error) {
    console.error('An error occurred while retrieving token. ', error);
    // catch error while creating client token
  }
};

const onMessageListener = (): Promise<MessagePayload> =>
  new Promise<MessagePayload>((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

export const MessagingService = {
  fetchToken,
  onMessageListener,
};
