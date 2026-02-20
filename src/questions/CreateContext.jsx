import { createContext, useState } from "react";

export const themeContext = createContext();
export const userContext = createContext();

export default function UserContext({ children }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    role: {admin: "admin", student: "student"}
  });
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <userContext.Provider value={{ userData, setUserData,  submittedData, setSubmittedData}}>
      {children}
    </userContext.Provider>
  );
}
