import React, { createContext, useContext } from 'react'

const MsgContext = createContext('');
export const String = () => {
  return (
    <MsgContext.Provider value='Hello student'>
        <Child />
    </MsgContext.Provider>
  )
}

export const Child = () => {
    const message = useContext(MsgContext);
    return <h1>{message}</h1>;
}