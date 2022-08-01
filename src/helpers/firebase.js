import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseUrl,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service. We will use this auth in our methods
const auth = getAuth(app);

// creating new user in firebase, and then we will call this function in Register page.
export const createUser = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

// reading exist users in firebase-auth, and then we will call this function in Login page

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

// to control user login or logout

export const userObserver = (setCurrentUser) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};

export const logOut = () => {
  signOut(auth);
};

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // console.log(result);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

// crud operations for creating, reading, updating and deleting a blog content

// create process

export const AddBlog = (blog, navigate) => {
  const db = getDatabase(app);
  const contentRef = ref(db, "blog/");
  const newContentRef = push(contentRef);
  try {
    set(newContentRef, {
      title: blog.title,
      imageUrl: blog.imageUrl,
      content: blog.content,
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

// read process

export const useFetch = () => {
  const [isloading, setIsLoading] = useState();
  const [blogList, setBlogList] = useState();
  useEffect(() => {
    const db = getDatabase(app);
    const contentRef = ref(db, "blog/");
    onValue(contentRef, (snapshot) => {
      const data = snapshot.val();
      const blogArray = [];
      for (let id in data) {
        blogArray.push({ id, ...data[id] }); // it is pushing data into blogArray
      }
      setBlogList(blogArray);
      setIsLoading(false);
    });
  }, []);
  return { isloading, blogList };
};
