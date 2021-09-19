import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Header from "./Components/Header";
import ScrollToTop from "./Components/ScrollToTop";
import PasswordGeneration from "./Components/PasswordGeneration"
import Login from './Components/Login'
import Registration from './Components/Registration'
import ResetPassword from './Components/ResetPassword'
import Profile from './Components/Profile'
import './App.css'
import Lab3 from "./Pages/Lab3";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Route path="/slug1" component={PasswordGeneration}/>
      <Route path="/slug2/login" component={Login}/>
      <Route path="/slug2/registration" component={Registration}/>
      <Route path="/slug2/reset-password" component={ResetPassword}/>
      <Route path="/slug3/" component={Lab3}/>
      <Route path="/profile" component={Profile}/>
      <Redirect path="" to="/slug1"/>
    </BrowserRouter>
  );
}

export default App;
