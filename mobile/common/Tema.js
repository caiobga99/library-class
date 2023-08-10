import { createContext, useState } from "react";

export const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [tema, setTema] = useState("white");
  const [corLetra, setCorLetra] = useState("black");
  return (
    <TemaContext.Provider value={{ tema, setTema, corLetra, setCorLetra }}>
      {children}
    </TemaContext.Provider>
  );
}
