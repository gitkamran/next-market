"use client"

import { AppContext } from "../appContext/AppContext"
import { useEffect, useState } from "react";

const ContextProvider = ({ children }) => {
  const [cartNumber, setCartNumber] = useState(0)
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      setIsLogin(true)
    }
  }, [isLogin])

  return (
    <AppContext.Provider value={{
      cartNumber,
      setCartNumber,
      isLogin,
      setIsLogin
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider;