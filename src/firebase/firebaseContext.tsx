import { createContext, ReactNode } from "react";
import { app } from "./firebase";
import { FirebaseApp } from "firebase/app";

export const FirebaseContext = createContext<FirebaseApp | null>(null);

interface Props {
  children: ReactNode;
}

export const FirebaseProvider: React.FC<Props> = ({ children }) => {
  return (
    <FirebaseContext.Provider value={app}>
      {children}
    </FirebaseContext.Provider>
  );
};
