import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, User } from "firebase/auth";
const provider = new GoogleAuthProvider();

const auth = getAuth();

const login = async (): Promise<User | null> => {
  // Promise way to write a code
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential?.accessToken ?? "";
  //       // The signed-in user info.
  //       const user = result.user;
  //       console.log("🚀 ~ .then ~ user:", user);
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       // ...
  //     });

  try {
    // Async way to write a code
    const result = await signInWithPopup(auth, provider);
    if (result) {
      const user = result.user;
      console.log("🚀 ~ login ~ user:", user)
      return user;
    }
    return null;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    throw error;
  }
};

const logout = async () => {
  await signOut(auth);
};

export { login, logout };
