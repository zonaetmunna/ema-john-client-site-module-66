import initializeAuthentication from "../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();



const useFirebase = () => {
     const [user, setUser] = useState({})

     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();
     // Google sign in
     const signInUsingGoogle = () => {
          return signInWithPopup(auth, googleProvider);

     }
     // sign out
     const logOut = () => {
          signOut(auth)
               .then(() => {
                    setUser({})
               })

     }

     // observae state
     useEffect(() => {
          onAuthStateChanged(auth, (user) => {
               if (user) {
                    setUser(user)
               }

          })
     }, [])

     // return all valur 
     return {
          user,
          signInUsingGoogle,
          logOut
     }

}

export default useFirebase;


