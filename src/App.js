import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Product from "./Pages/Product";
import Homepage from "./Pages/Homepage";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./Auth";
import "./Style.css";

const DefaultLayout = ({ children, ...rest }) => {
  return (
    <div className="page page-dashboard">
      <Header />

      <div className="main">{children}</div>

      <Footer />
    </div>
  );
};

const DefaultLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <div className="DefaultLayout">
          <DefaultLayout>
            <Component {...matchProps} />
          </DefaultLayout>
        </div>
      )}
    />
  );
};

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <DefaultLayoutRoute exact path="/" component={Homepage} />
            <DefaultLayoutRoute exact path="/product" component={Product} />
            <DefaultLayoutRoute exact path="/cart" component={Cart} />
            <DefaultLayoutRoute exact path="/login" component={LoginPage} />
            <DefaultLayoutRoute exact path="/signup" component={SignUpPage} />
            <PrivateRoute exact path="/checkout" component={Checkout} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
