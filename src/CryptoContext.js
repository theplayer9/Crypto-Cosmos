import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();  //here we have created the object(Crypto) of the createContext

const CryptoContext = ({children}) => {
    const [currency,setCurrency] = useState("INR")
    const [symbol, setSymbol] = useState("₹")


    useEffect(()=>{
        if (currency==="INR") setSymbol("₹")
        if (currency==="USD") setSymbol('$')
    },[currency])



  return <Crypto.Provider value={{currency,symbol,setCurrency}}>{children}</Crypto.Provider>;
  //provider helps to pass the value down to the component tree.
};

export default CryptoContext;

//here we have created a CryptoState, for the current value of the context. we will import this state in the header 
export const CryptoState= ()=>{
    return useContext(Crypto)
    //useContext accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.

}







 //In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.