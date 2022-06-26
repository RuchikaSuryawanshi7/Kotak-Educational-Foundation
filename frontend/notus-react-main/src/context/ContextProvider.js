import React, { createContext, useContext, useState,useReducer,useEffect } from 'react';
import AuthReducer from "./AuthReducer";


const StateContext = createContext();

const initialState = {
  userProfile: false,
  user:JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
  },[state.user])


  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
  

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{activeMenu, screenSize, setScreenSize, handleClick,isClicked, initialState, setIsClicked, setActiveMenu,
      user: state.user,
      isFetching: state.isFetching,
      error: state.error,
      dispatch,}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
