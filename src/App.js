import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContainer from "./container/AuthContainer/AuthContainer";
import Dashboard from "./container/DashboardContainer/Dashboard";
import DetailPageContainer from "./container/DetailPageContainer/DetaiiPageContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  if (
    !loggedIn &&
    !localStorage.getItem("email") &&
    !localStorage.getItem("password")
  ) {
    return (
      <>
        <AuthContainer setLoggedIn={setLoggedIn} />
      </>
    );
  }

  return (
    <>  
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard  />
          </Route>
          <Route path="/:id/details">
            <DetailPageContainer/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
