import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyATcCKmga-osBXUdK_Q_S8QT9JXxhLvrV0',
  authDomain: 'audio-firebase-b0a3b.firebaseapp.com',
  projectId: 'audio-firebase-b0a3b',
  storageBucket: 'audio-firebase-b0a3b.appspot.com',
  messagingSenderId: '121058961151',
  appId: '1:121058961151:web:08e3c0a567768ec67aceca',
  measurementId: 'G-JJ3QM5V8F0',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export interface IAudioInfo {
  audioId: number;
  image: string;
  title: string;
}

export interface IAudio {
  title: string;
  description: string;
  artwork: string;
  url: string;
  id: number;
  duration: number;
}

export interface IAudioBook {
  audioId: number;
  audio: string;
}
