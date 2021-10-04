import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Header from "./Components/Header";
import ScrollToTop from "./Components/ScrollToTop";
import PasswordGeneration from "./Components/PasswordGeneration"
import Profile from './Components/Profile'
import './App.css'
import Lab3 from "./Pages/Lab3";
import Lab2Container from "./Pages/Lab2";
import DocsContainer from "./Components/Docs";
import Lab4Container from "./Pages/Lab4";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Route path="/slug1" component={PasswordGeneration}/>
      <Route path="/slug2" component={Lab2Container}/>
      <Route path="/slug3/" component={Lab3}/>
      <Route path="/slug4/" component={Lab4Container}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/docs" component={DocsContainer}/>
      <Redirect path="" to="/slug1"/>
    </BrowserRouter>
  );
}

export default App;
