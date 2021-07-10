import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase/firebaseConfig'

const UserContext = React.createContext()

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const value = {
    user,
    setUser,
    errorMessage,
    setErrorMessage
  }
  
  useEffect(() => {
    let clearErrorMessage;
    
    if (errorMessage) {
      clearErrorMessage = 
        setTimeout(function() {
          setErrorMessage(null)
        }, 4000);
      
      return () => clearTimeout(clearErrorMessage)
    }
  }, [errorMessage])
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) return setUser(authUser)

      return setUser(null)
    })

    return () => unsubscribe()
  }, [setUser])
  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  return useContext(UserContext)
}
