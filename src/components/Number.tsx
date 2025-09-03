import React, { createContext, useContext } from 'react'
const NumberCtx = createContext(0);
const NumCtx = createContext(0);

const Number = () => {
  return (
    <>

    <NumberCtx.Provider value={42}>
        <NumCtx.Provider value={600}>
        <Display />
        </NumCtx.Provider>
    </NumberCtx.Provider>
    </>
  )
}

export const Display = () => {
    const number = useContext(NumberCtx);
    const num = useContext(NumCtx);
    return <p>Number: {number}, num: {num}</p>
}


export default Number