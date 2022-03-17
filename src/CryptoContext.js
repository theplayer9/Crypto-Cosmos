import React, { createContext, useContext, useState } from "react";

const Crypto = createContext();  //here we have created the object(Crypto) of the createContext

const CryptoContext = ({ children }) => {
    const [currency,setCurrency] = useState("INR")
    const [symbol, setSymbol] = useState("₹")


    useState(()=>{
        if (currency==="INR") setSymbol("₹")
        if (currency==="INR") setSymbol('$')
    },[currency])



  return <Crypto.Provider value={{currency,symbol,setCurrency}}>{children}</Crypto.Provider>;
};

export default CryptoContext;

//here we have created a CryptoState, for the current value of the context. we will import this state in the header 
export const CryptoState= ()=>{
    return useContext(Crypto)
    //useContext accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.

}
