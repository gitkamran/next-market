"use client"

import { AppContext } from "../appContext/AppContext"
import { useState } from "react";

const ContextProvider = ({ children }) => {
  const [cartNumber, setCartNumber] = useState(0)
  const [countNumber, setCountNumber] = useState(0)

  return (
    <AppContext.Provider value={{
      cartNumber,
      setCartNumber,
      countNumber,
      setCountNumber
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider;