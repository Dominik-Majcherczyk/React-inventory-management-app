import React from "react";
import Signup from "./Auth/Signup";
import Dashboard from "./Views/Dashboard";
import Login from "./Auth/Login";
import ForgotPassword from "./Auth/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./Views/UpdateProfile";
import Storage from "./Views/Storage/Storage";
import AdminPanel from "./Views/AdminPanel";
import NavbarMenu from "./Navbar";
import SingleItem from "./Views/Storage/SingleItem";
import { Container } from "react-bootstrap";
import AddItem from "./Views/Storage/AddItem";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function App() {
  const { currentUser } = useAuth();
  return (
    <>
      <Router>
        {currentUser ? <NavbarMenu /> : null}
        <Container>
          <Switch>
            <PrivateRoute exact path="/" component={Storage} />
            <PrivateRoute exact path="/storage" component={Storage} />

            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="w-100" style={{ maxWidth: "60%" }}>
                <PrivateRoute path="/add-item" component={AddItem} />
                <PrivateRoute path="/admin-panel" component={AdminPanel} />
                <PrivateRoute
                  path="/storage/:collectionId/:itemId"
                  component={SingleItem}
                />
                <PrivateRoute
                  path="/update-profile"
                  component={UpdateProfile}
                />

                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </div>
            </div>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
