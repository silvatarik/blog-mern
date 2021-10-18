import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { auth, Providers } from '../config/firabase';

export const startGoogleLogin = () => {
    signInWithPopup(auth, Providers.google).then(({ user }) => {});
};
