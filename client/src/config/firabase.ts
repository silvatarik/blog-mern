import firebase from 'firebase/app';
import { GoogleAuthProvider,getAuth } from 'firebase/auth';
import 'firebase/firestore';
import config from '../config/config';

const Firebase = firebase.initializeApp(config.firebase);

export const Providers = {
    google: new GoogleAuthProvider()
};

export const auth = getAuth();
export default Firebase;