import React, { useState } from "react";
import { IProduct } from "../../types/global";

export const Context = React.createContext<any>(null);

export const ContextGlobal = ({ children }: any) => {
  const [orderForm, setOrderForm] = useState<IProduct | undefined>("");

  return (
    <Context.Provider value={{ orderForm, setOrderForm }}>
      {children}
    </Context.Provider>
  );
};
