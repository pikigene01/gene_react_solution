import React, {createContext,useState} from 'react'

const AppContext = createContext();

export default function AppProvider({children}) {

    const values = {};
  return (
   <AppContext.Provider value={values}>
        {children}
   </AppContext.Provider>
  )
}
