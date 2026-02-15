import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase.js";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext=createContext(null)

const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,async(currentuser)=>{
            if(currentuser){
              const userRef=doc(db,"users",currentuser.uid)
              const fetchedUser=await getDoc(userRef)
              setUser({...fetchedUser.data(),id:fetchedUser.id})
            }else{
              setUser(null)
            }
        });
        return unsubscribe
    },[])
 
    
return <AuthContext.Provider value={{user}}>
    {children}
</AuthContext.Provider>
}

export default AuthProvider