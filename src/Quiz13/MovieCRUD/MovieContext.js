import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [DataMovie, setDataMovie] = useState({
    lists: null,
    selectedId: 0,
    statusForm: "create"
  })

  return (
    <MovieContext.Provider value = {[DataMovie, setDataMovie]}>
      {props.children}
    </MovieContext.Provider>
  );
}
