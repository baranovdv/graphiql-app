import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  onIdTokenChanged,
  Unsubscribe,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const firebaseConfig = {
  apiKey: 'AIzaSyBU1PjkGdYLjUPzXg1NPIu-G_op6BMP7Sc',
  authDomain: 'graphiql-app-694ce.firebaseapp.com',
  projectId: 'graphiql-app-694ce',
  storageBucket: 'graphiql-app-694ce.appspot.com',
  messagingSenderId: '593191810927',
  appId: '1:593191810927:web:756528c798735a40581a9a',
  measurementId: 'G-E716FSJHQJ',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const { user } = res;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    if (err instanceof Error) toast.error(err.message, { theme: 'light' });
  }
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    if (err instanceof Error) toast.info(err.message);
  }
};

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = res;
    updateProfile(user, { displayName: name });
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    if (err instanceof Error) toast.info(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

const useTokenExpire = (): void => {
  const TokenTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const navigate = useNavigate();
  useEffect((): Unsubscribe => {
    const unsubscribe = onIdTokenChanged(
      auth,
      async (firebaseUser): Promise<void> => {
        if (!firebaseUser) return;

        const { expirationTime } = await firebaseUser.getIdTokenResult();
        const logoutDuration = new Date(expirationTime).getTime() - Date.now();

        const timer = setTimeout(() => {
          logout();
          navigate('/');
        }, logoutDuration);

        TokenTimerRef.current = timer;
      }
    );
    return () => {
      clearTimeout(TokenTimerRef.current);
      unsubscribe();
    };
  }, [navigate]);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
  useTokenExpire,
};
