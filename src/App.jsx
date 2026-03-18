import Cart from "./component/Cart";
import UseEffect from "./questions/UseEffect";
import UseEffect2 from "./questions/UseEffect2";
import UseState from "./questions/UseState";
import UseState2 from "./questions/UseState2";
import UserContext, { themeContext } from "./questions/CreateContext";
import UseContext from "./questions/UseContext";
import { useState } from "react";
import UseContext2 from "./questions/UseContext2";
import { userContext } from "./questions/CreateContext";
import UseRef from "./questions/UseRef";
import UseRef2 from "./questions/UseRef2";
import UseReducer from "./questions/UseReducer";
import UseReducer2 from "./questions/UseReducer2";
import UseReducer3 from "./questions/UseReducer3";

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <>
      <div
        className={`${theme ? "bg-gray-100" : "bg-gray-900"} min-h-screen transition-colors duration-500`}
      >
        {/* <UseState/> */}
        {/* <UseState2 /> */}
        {/* <Cart/> */}
        {/* <UseEffect/> */}
        {/* <UseEffect2/> */}

        {/* <themeContext.Provider value={{ theme, setTheme }}>
        <UseContext />
      </themeContext.Provider> */}

        {/* <UserContext>
        <UseContext2 />
      </UserContext> */}

        {/* <UseRef/> */}
        {/* <UseRef2 /> */}

        {/* <UseReducer /> */}
        {/* <Task/> */}
        {/* <UseReducer2 /> */}
        <UseReducer3 />
      </div>
    </>
  );
}

export default App;
