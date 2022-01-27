import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage  from "./Pages/LoginPage/LoginPage"
import MainPage from "./Pages/Main/MainPage" 

function App() {
  const [user, setUser] = useState({
    user: "",
    token: "",
    loggedIn: false,
  });

  const logout = () => {
    setUser({
      ...user,
      user: "",
      token: "",
      loggedIn: false,
    });
    window.open(
      process.env.LOGOUT_URL || "http://localhost:3000/",
      "_self"
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="*">
          {user.loggedIn ? <MainPage logout={logout}/> : <LoginPage setUser={setUser}/>}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
