import {createContext, useContext, useEffect, useState} from "react";
import {auth, db} from '../firebase'
import {setDoc, doc, getDoc} from 'firebase/firestore'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'

const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const [user, setUser] = useState({})

    function signUp(email, password){
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email), {
            favourites: []
        })
    }

    function logOut(){
        return signOut(auth)
    }
    function signIn(email, password){
        return signInWithEmailAndPassword(auth,  email, password)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unSubscribe()
        }
    })

    return (
        <AuthContext.Provider value={{signUp, signIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}