import React from "react";
import Signup from "./Auth/Signup";
import Dashboard from "./Views/Dashboard";
import Login from "./Auth/Login";
import ForgotPassword from "./Auth/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./Views/UpdateProfile";
import Storage from "./Views/Storage/Storage";
import AdminPanel from "./Views/AdminPanel";
import Navbar from "./Navbar";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function App() {
  const { currentUser } = useAuth();
  return (
    <>
      <Router>
        <Container>{currentUser ? <Navbar /> : null}</Container>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/admin-panel" component={AdminPanel} />
            <PrivateRoute path="/storage" component={Storage} />
            <div className="w-100" style={{ maxWidth: "60%" }}>
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </div>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
