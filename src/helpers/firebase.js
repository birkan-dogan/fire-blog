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
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import {
  toastSuccessNotify,
  toastErrorNotify,
  toastWarnNotify,
} from "../helpers/toastNotify";

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
    toastSuccessNotify("Registered Successfully");
  } catch (error) {
    // console.log(error);
    toastErrorNotify(error.message);
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
    toastErrorNotify(error.message);
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
  toastSuccessNotify("Log out ");
};

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // console.log(result);
      navigate("/");
      toastSuccessNotify("Registered Successfully");
    })
    .catch((error) => {
      // console.log(error);
      toastErrorNotify(error.message);
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
      currentUser: blog.currentUser,
      like: false,
      likeNumber: 0,
    });
    navigate("/");
    toastSuccessNotify("New Blog is created");
  } catch (error) {
    // console.log(error);
    toastErrorNotify(error.message);
  }
};

// read process

export const FetchData = (setCurrentBlog, setIsLoading) => {
  const db = getDatabase(app);
  const contentRef = ref(db, "blog/");
  try {
    onValue(contentRef, (snapshot) => {
      const data = snapshot.val();
      const blogArray = [];
      for (let id in data) {
        blogArray.push({ id, ...data[id] }); // it is pushing data into blogArray
      }
      setCurrentBlog(blogArray);
      setIsLoading(false);
    });
  } catch (error) {
    console.log(error);
  }
};

// delete process
export const DeleteBlog = (id, navigate) => {
  try {
    const db = getDatabase(app);
    const contentRef = ref(db, "blog/");
    remove(ref(db, "blog/" + id));
    navigate("/");
    toastSuccessNotify("Blog is deleted");
  } catch (error) {
    toastWarnNotify(error.message);
  }
};

// update process

export const updateBlog = (blog) => {
  try {
    const db = getDatabase(app);
    const updates = {};
    updates["blog/" + blog.id] = blog;
    return update(ref(db), updates);
  } catch (error) {
    toastErrorNotify(error.message);
  }
};
