import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { app } from './firebase';

const db = getFirestore(app);

async function createUserDocument(user) {
  try {
    const userRef = doc(db, "user-profiles", user.uid); //"users" is the collection name
    await setDoc(userRef, {
      username: user.username || "", //  Handle cases where displayName might be null
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      cellphone: user.cellphone,
      password: user.password
      // Add other user data here
    });
    console.log("User document created successfully!");
  } catch (error) {
    console.error("Error creating user document:", error);
  }
}

// Example usage after successful signup:
/*
auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    createUserDocument(user); // Create Firestore document
  })
  .catch((error) => {
    console.error("Signup error:", error);
  });
*/


